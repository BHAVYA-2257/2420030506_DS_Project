import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, Zap, ShieldAlert, Flame, Footprints, Target, Clock, TrendingUp, Award, Gauge
} from 'lucide-react';
import PerformanceRing from './PerformanceRing';

const getIcon = (title) => {
  switch (title.toLowerCase()) {
    case 'speed': return <Zap size={18} />;
    case 'acceleration': return <Gauge size={18} />;
    case 'endurance': return <Activity size={18} />;
    case 'strength': return <Award size={18} />;
    case 'agility': return <TrendingUp size={18} />;
    case 'power': return <Zap size={18} />;
    case 'accuracy': return <Target size={18} />;
    case 'reaction time': return <Clock size={18} />;
    case 'injury risk': return <ShieldAlert size={18} />;
    case 'calories burned': return <Flame size={18} />;
    case 'distance covered': return <Footprints size={18} />;
    default: return <Activity size={18} />;
  }
};

const DashboardOverview = ({ selectedSport, sportData }) => {
  const { metrics, overallScore, recoveryScore, fitnessLevel, readinessStatus } = sportData;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      
      {/* Top Banner Row */}
      <div className="grid-2" style={{ gap: '24px' }}>
        
        {/* Overall Score Rings Card */}
        <div className="glass-panel" style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Performance Analytics</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
              Real-time telemetry evaluation for {selectedSport}.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div style={{ fontSize: '0.85rem' }}>
                <span style={{ fontWeight: '700', color: 'var(--text-heading)' }}>Readiness:</span> {readinessStatus}
              </div>
              <div style={{ fontSize: '0.85rem' }}>
                <span style={{ fontWeight: '700', color: 'var(--text-heading)' }}>Fitness Level:</span> {fitnessLevel}
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '28px' }}>
            <PerformanceRing percentage={overallScore} size={110} color="var(--victory-blue)" title="Overall Rating" subtitle="Rank 1" />
            <PerformanceRing percentage={recoveryScore} size={110} color="var(--performance-green)" title="Recovery Index" subtitle="Optimal" />
          </div>
        </div>

        {/* AI Insight Box */}
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
            <span style={{
              display: 'inline-block',
              padding: '4px 10px',
              borderRadius: '20px',
              background: 'rgba(21, 101, 192, 0.08)',
              color: 'var(--victory-blue)',
              fontSize: '0.75rem',
              fontWeight: '700',
              textTransform: 'uppercase'
            }}>
              AI Performance Report
            </span>
          </div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '8px', letterSpacing: '-0.3px' }}>
            "Readiness is optimal for high-intensity loads."
          </h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem' }}>
            <li>💪 <span style={{ fontWeight: '700' }}>Strength:</span> Peak force vectors improved by 12% over 2 weeks.</li>
            <li>⏱️ <span style={{ fontWeight: '700' }}>Reaction:</span> 8% faster reaction delay than the current team average.</li>
            <li>📈 <span style={{ fontWeight: '700' }}>Trend:</span> Load accumulation is steady, showing low fatigue risk.</li>
          </ul>
        </div>
      </div>

      {/* Main 16-Metrics Grid */}
      <div>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '16px', fontFamily: 'var(--font-heading)' }}>
          Biometric & Session Telemetry Summary
        </h3>
        
        <div className="overview-grid">
          {metrics.map((m, idx) => {
            const isAlert = m.title.toLowerCase() === 'injury risk' && parseFloat(m.value) > 20;
            const isGold = m.title.toLowerCase().includes('score') || m.title.toLowerCase().includes('rating');
            
            let accentColor = 'var(--victory-blue)';
            if (m.trendType === 'up') accentColor = 'var(--performance-green)';
            if (m.trendType === 'down') accentColor = 'var(--athletic-red)';
            if (isAlert) accentColor = 'var(--athletic-red)';

            return (
              <motion.div
                key={m.title}
                className="metric-card"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.03, duration: 0.4 }}
              >
                <div className="metric-header">
                  <div 
                    className="metric-icon-box" 
                    style={{ 
                      backgroundColor: `${accentColor}12`, 
                      color: accentColor 
                    }}
                  >
                    {getIcon(m.title)}
                  </div>
                  <span className={`metric-trend ${
                    m.trendType === 'up' ? 'trend-up' : m.trendType === 'down' ? 'trend-down' : 'trend-neutral'
                  }`}>
                    {m.trend}
                  </span>
                </div>
                <div className="metric-value">{m.value}</div>
                <div className="metric-title">{m.title}</div>
              </motion.div>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default DashboardOverview;
