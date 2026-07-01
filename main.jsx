import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Sparkles, Brain, ShieldAlert } from 'lucide-react';
import AICoachChat from './AICoachChat';

const PREDICTIONS_DATA = [
  {
    id: 1,
    title: 'Injury Probability',
    value: '12%',
    desc: 'Mild risk detected in left hamstring due to slight asymmetric loading.',
    confidence: '94% Confidence',
    fillColor: 'var(--performance-green)',
    width: '12%'
  },
  {
    id: 2,
    title: 'Match Readiness Score',
    value: '88%',
    desc: 'Excellent sleep quality and VO2 recovery state indicated this morning.',
    confidence: '96% Confidence',
    fillColor: 'var(--victory-blue)',
    width: '88%'
  },
  {
    id: 3,
    title: 'Fatigue Prediction Index',
    value: '28%',
    desc: 'Lactic load has completely cleared. Recovery metrics are optimal.',
    confidence: '88% Confidence',
    fillColor: 'var(--electric-cyan)',
    width: '28%'
  },
  {
    id: 4,
    title: 'Biomechanical Peak Interval',
    value: '12 Days',
    desc: 'Model predicts peak conditioning will align with the upcoming championships.',
    confidence: '75% Confidence',
    fillColor: 'var(--championship-gold)',
    width: '75%'
  }
];

const PredictionsPanel = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      
      <div className="coach-grid">
        
        {/* Left Side: Predictions */}
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Brain size={20} color="var(--victory-blue)" />
            <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)' }}>
              Predictive AI Diagnostics & Risk Mapping
            </h3>
          </div>

          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
            Biomechanical and heart rate variability (HRV) telemetry are modeled through a predictive LSTM network to anticipate muscle wear and peak performance dates.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {PREDICTIONS_DATA.map((pred) => (
              <div key={pred.id} className="prediction-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-heading)' }}>{pred.title}</h4>
                  <span style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>{pred.value}</span>
                </div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-body)', margin: '4px 0 8px' }}>{pred.desc}</p>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '4px' }}>
                  <span>AI Modeling confidence</span>
                  <span style={{ fontWeight: '600' }}>{pred.confidence}</span>
                </div>
                <div className="prediction-prob-bar">
                  <div 
                    className="prediction-prob-fill"
                    style={{ 
                      width: pred.width, 
                      backgroundColor: pred.fillColor 
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Interactive AI Coach Chat */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="glass-panel" style={{ background: 'var(--victory-blue)', color: '#FFFFFF', border: 'none' }}>
            <h4 style={{ fontSize: '1.1rem', color: '#FFFFFF', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={16} color="var(--championship-gold)" /> Daily AI Prescription
            </h4>
            <p style={{ fontSize: '0.85rem', opacity: 0.9, lineHeight: '1.5' }}>
              "Your hamstring load is slightly asymmetrical. I recommend focusing on dynamic range exercises rather than sprints. Limit Zone 5 efforts to under 5 minutes."
            </p>
          </div>
          
          <AICoachChat />
        </div>

      </div>

    </div>
  );
};

export default PredictionsPanel;
