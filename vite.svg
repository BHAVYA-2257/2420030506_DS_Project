import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Shield, Cpu } from 'lucide-react';
import SportsGallery from './components/SportsGallery';
import PerformanceAnalysis from './components/PerformanceAnalysis';
import './App.css';

// 10 Sports Dynamic Metrics Database
const SPORT_METRICS_DATABASE = {
  Football: {
    overallScore: 94,
    recoveryScore: 88,
    fitnessLevel: 'Excellent',
    readinessStatus: 'Ready for full load',
    metrics: [
      { title: 'Performance Score', value: '94.2%', trend: '+1.4%', trendType: 'up' },
      { title: 'Speed', value: '34.2 km/h', trend: '+0.8', trendType: 'up' },
      { title: 'Acceleration', value: '6.4 m/s²', trend: 'Steady', trendType: 'neutral' },
      { title: 'Endurance', value: '92 / 100', trend: '+2.0', trendType: 'up' },
      { title: 'Strength', value: '84 / 100', trend: '+1.5', trendType: 'up' },
      { title: 'Agility', value: '88 / 100', trend: '+3.1', trendType: 'up' },
      { title: 'Power', value: '380 W', trend: '+12.4%', trendType: 'up' },
      { title: 'Accuracy', value: '91.8%', trend: '+2.8%', trendType: 'up' },
      { title: 'Reaction Time', value: '140 ms', trend: '-8ms', trendType: 'up' },
      { title: 'Recovery Score', value: '88%', trend: 'Optimal', trendType: 'up' },
      { title: 'Injury Risk', value: '12%', trend: '-0.15 Risk', trendType: 'up' },
      { title: 'Training Load', value: '650 score', trend: 'Optimal', trendType: 'neutral' },
      { title: 'Calories Burned', value: '840 kcal', trend: 'Session', trendType: 'neutral' },
      { title: 'Distance Covered', value: '10.8 km', trend: '+0.5', trendType: 'up' },
      { title: 'Sprint Count', value: '28', trend: '+4', trendType: 'up' },
      { title: 'Active Time', value: '84 mins', trend: 'Session', trendType: 'neutral' }
    ],
    matchStats: [
      { label: 'Expected Goals (xG)', value: '2.42' },
      { label: 'Pass Accuracy', value: '88.5%' },
      { label: 'Successful Tackles', value: '14' }
    ]
  },
  Cricket: {
    overallScore: 86,
    recoveryScore: 82,
    fitnessLevel: 'Optimal',
    readinessStatus: 'Ready for full load',
    metrics: [
      { title: 'Performance Score', value: '86.5%', trend: '+0.5%', trendType: 'up' },
      { title: 'Speed', value: '138.4 km/h', trend: '+1.2', trendType: 'up' },
      { title: 'Acceleration', value: '4.8 m/s²', trend: 'Steady', trendType: 'neutral' },
      { title: 'Endurance', value: '80 / 100', trend: '+1.0', trendType: 'up' },
      { title: 'Strength', value: '82 / 100', trend: '+0.5', trendType: 'up' },
      { title: 'Agility', value: '78 / 100', trend: '+1.2', trendType: 'up' },
      { title: 'Power', value: '420 W', trend: 'Steady', trendType: 'neutral' },
      { title: 'Accuracy', value: '84.6%', trend: '+2.4%', trendType: 'up' },
      { title: 'Reaction Time', value: '180 ms', trend: '-5ms', trendType: 'up' },
      { title: 'Recovery Score', value: '82%', trend: 'Optimal', trendType: 'up' },
      { title: 'Injury Risk', value: '24%', trend: 'Moderate', trendType: 'neutral' },
      { title: 'Training Load', value: '580 score', trend: 'Optimal', trendType: 'neutral' },
      { title: 'Calories Burned', value: '620 kcal', trend: 'Session', trendType: 'neutral' },
      { title: 'Distance Covered', value: '5.2 km', trend: '+0.2', trendType: 'up' },
      { title: 'Sprint Count', value: '14', trend: 'Steady', trendType: 'neutral' },
      { title: 'Active Time', value: '180 mins', trend: 'Session', trendType: 'neutral' }
    ],
    matchStats: [
      { label: 'Bowling Release Speed', value: '138 kph' },
      { label: 'Crease Alignment', value: 'Optimal' },
      { label: 'Line & Length Accuracy', value: '82%' }
    ]
  },
  Basketball: {
    overallScore: 92,
    recoveryScore: 85,
    fitnessLevel: 'Peak',
    readinessStatus: 'Ready for full load',
    metrics: [
      { title: 'Performance Score', value: '91.8%', trend: '+2.8%', trendType: 'up' },
      { title: 'Speed', value: '28.4 km/h', trend: '+0.5', trendType: 'up' },
      { title: 'Acceleration', value: '7.8 m/s²', trend: '+0.4', trendType: 'up' },
      { title: 'Endurance', value: '85 / 100', trend: '+1.5', trendType: 'up' },
      { title: 'Strength', value: '88 / 100', trend: 'Steady', trendType: 'neutral' },
      { title: 'Agility', value: '94 / 100', trend: '+2.5', trendType: 'up' },
      { title: 'Power', value: '520 W', trend: '+4.2% Peak', trendType: 'up' },
      { title: 'Accuracy', value: '88.2%', trend: '+3.1%', trendType: 'up' },
      { title: 'Reaction Time', value: '120 ms', trend: '-12ms', trendType: 'up' },
      { title: 'Recovery Score', value: '85%', trend: 'Optimal', trendType: 'up' },
      { title: 'Injury Risk', value: '18%', trend: 'Low', trendType: 'up' },
      { title: 'Training Load', value: '710 score', trend: 'Optimal', trendType: 'neutral' },
      { title: 'Calories Burned', value: '980 kcal', trend: 'Session', trendType: 'neutral' },
      { title: 'Distance Covered', value: '4.8 km', trend: '+0.3', trendType: 'up' },
      { title: 'Sprint Count', value: '38', trend: '+6', trendType: 'up' },
      { title: 'Active Time', value: '48 mins', trend: 'Session', trendType: 'neutral' }
    ],
    matchStats: [
      { label: 'Vertical Jump Max', value: '92 cm' },
      { label: 'Shot Release speed', value: '0.18s' },
      { label: 'Shot Accuracy', value: '54.2%' }
    ]
  },
  Athletics: {
    overallScore: 88,
    recoveryScore: 92,
    fitnessLevel: 'Optimal',
    readinessStatus: 'Ready for full load',
    metrics: [
      { title: 'Performance Score', value: '88.5%', trend: '+3.1%', trendType: 'up' },
      { title: 'Speed', value: '36.8 km/h', trend: '+1.5', trendType: 'up' },
      { title: 'Acceleration', value: '8.4 m/s²', trend: '+0.8', trendType: 'up' },
      { title: 'Endurance', value: '94 / 100', trend: '+4.2%', trendType: 'up' },
      { title: 'Strength', value: '80 / 100', trend: 'Steady', trendType: 'neutral' },
      { title: 'Agility', value: '74 / 100', trend: 'Steady', trendType: 'neutral' },
      { title: 'Power', value: '340 W', trend: '+12.4%', trendType: 'up' },
      { title: 'Accuracy', value: '96.2%', trend: '+2.8%', trendType: 'up' },
      { title: 'Reaction Time', value: '180 ms', trend: '-5ms', trendType: 'up' },
      { title: 'Recovery Score', value: '92%', trend: 'Optimal', trendType: 'up' },
      { title: 'Injury Risk', value: '14%', trend: '-0.15 Risk', trendType: 'up' },
      { title: 'Training Load', value: '480 score', trend: 'Optimal', trendType: 'neutral' },
      { title: 'Calories Burned', value: '720 kcal', trend: 'Session', trendType: 'neutral' },
      { title: 'Distance Covered', value: '8.4 km', trend: '+0.8', trendType: 'up' },
      { title: 'Sprint Count', value: '18', trend: 'Steady', trendType: 'neutral' },
      { title: 'Active Time', value: '32 mins', trend: 'Session', trendType: 'neutral' }
    ],
    matchStats: [
      { label: 'Stride Cadence', value: '180 SPM' },
      { label: 'Ground Contact Time', value: '190 ms' },
      { label: 'Step Frequency', value: '3.0 Hz' }
    ]
  },
  Swimming: {
    overallScore: 85,
    recoveryScore: 90,
    fitnessLevel: 'Optimal',
    readinessStatus: 'Ready for full load',
    metrics: [
      { title: 'Performance Score', value: '85.0%', trend: '+0.8%', trendType: 'up' },
      { title: 'Speed', value: '8.2 km/h', trend: '+0.2', trendType: 'up' },
      { title: 'Acceleration', value: '3.4 m/s²', trend: 'Steady', trendType: 'neutral' },
      { title: 'Endurance', value: '90 / 100', trend: '+1.5', trendType: 'up' },
      { title: 'Strength', value: '82 / 100', trend: 'Steady', trendType: 'neutral' },
      { title: 'Agility', value: '68 / 100', trend: 'Steady', trendType: 'neutral' },
      { title: 'Power', value: '290 W', trend: '+5.4%', trendType: 'up' },
      { title: 'Accuracy', value: '90.2%', trend: '+1.8%', trendType: 'up' },
      { title: 'Reaction Time', value: '185 ms', trend: '-2ms', trendType: 'up' },
      { title: 'Recovery Score', value: '90%', trend: 'Optimal', trendType: 'up' },
      { title: 'Injury Risk', value: '10%', trend: 'Low', trendType: 'up' },
      { title: 'Training Load', value: '420 score', trend: 'Optimal', trendType: 'neutral' },
      { title: 'Calories Burned', value: '680 kcal', trend: 'Session', trendType: 'neutral' },
      { title: 'Distance Covered', value: '2.5 km', trend: '+0.1', trendType: 'up' },
      { title: 'Sprint Count', value: '10', trend: 'Steady', trendType: 'neutral' },
      { title: 'Active Time', value: '45 mins', trend: 'Session', trendType: 'neutral' }
    ],
    matchStats: [
      { label: 'Stroke Extension', value: '1.1m' },
      { label: 'Body Axis Angle', value: '4.2°' },
      { label: 'Turnover rate', value: '54 / min' }
    ]
  },
  Boxing: {
    overallScore: 89,
    recoveryScore: 82,
    fitnessLevel: 'Optimal',
    readinessStatus: 'Ready for full load',
    metrics: [
      { title: 'Performance Score', value: '89.4%', trend: '+3.1%', trendType: 'up' },
      { title: 'Speed', value: '32.6 km/h', trend: '+1.5', trendType: 'up' },
      { title: 'Acceleration', value: '8.2 m/s²', trend: '+0.8', trendType: 'up' },
      { title: 'Endurance', value: '82 / 100', trend: '+2.8%', trendType: 'up' },
      { title: 'Strength', value: '90 / 100', trend: 'Steady', trendType: 'neutral' },
      { title: 'Agility', value: '86 / 100', trend: 'Steady', trendType: 'neutral' },
      { title: 'Power', value: '340 J', trend: '+12.4%', trendType: 'up' },
      { title: 'Accuracy', value: '85.2%', trend: '+2.8%', trendType: 'up' },
      { title: 'Reaction Time', value: '120 ms', trend: '-5ms', trendType: 'up' },
      { title: 'Recovery Score', value: '82%', trend: 'Optimal', trendType: 'up' },
      { title: 'Injury Risk', value: '28%', trend: '+0.1 Risk', trendType: 'down' },
      { title: 'Training Load', value: '620 score', trend: 'Optimal', trendType: 'neutral' },
      { title: 'Calories Burned', value: '580 kcal', trend: 'Session', trendType: 'neutral' },
      { title: 'Distance Covered', value: '3.6 km', trend: '+0.2', trendType: 'up' },
      { title: 'Sprint Count', value: '22', trend: 'Steady', trendType: 'neutral' },
      { title: 'Active Time', value: '36 mins', trend: 'Session', trendType: 'neutral' }
    ],
    matchStats: [
      { label: 'Kinetic Punch Impact', value: '340 Joules' },
      { label: 'Wrist Bend Deviation', value: '12.5°' },
      { label: 'Hand Speed Peak', value: '8.2 m/s' }
    ]
  },
  Kabaddi: {
    overallScore: 88,
    recoveryScore: 84,
    fitnessLevel: 'Optimal',
    readinessStatus: 'Ready for full load',
    metrics: [
      { title: 'Performance Score', value: '88.2%', trend: '+0.5%', trendType: 'up' },
      { title: 'Speed', value: '28.2 km/h', trend: '+0.3', trendType: 'up' },
      { title: 'Acceleration', value: '5.2 m/s²', trend: 'Steady', trendType: 'neutral' },
      { title: 'Endurance', value: '84 / 100', trend: '+1.2', trendType: 'up' },
      { title: 'Strength', value: '88 / 100', trend: 'Steady', trendType: 'neutral' },
      { title: 'Agility', value: '92 / 100', trend: '+2.5', trendType: 'up' },
      { title: 'Power', value: '450 W', trend: 'Steady', trendType: 'neutral' },
      { title: 'Accuracy', value: '82.6%', trend: '+2.4%', trendType: 'up' },
      { title: 'Reaction Time', value: '120 ms', trend: '-8ms', trendType: 'up' },
      { title: 'Recovery Score', value: '84%', trend: 'Optimal', trendType: 'up' },
      { title: 'Injury Risk', value: '26%', trend: 'Moderate', trendType: 'neutral' },
      { title: 'Training Load', value: '680 score', trend: 'Optimal', trendType: 'neutral' },
      { title: 'Calories Burned', value: '780 kcal', trend: 'Session', trendType: 'neutral' },
      { title: 'Distance Covered', value: '4.2 km', trend: '+0.2', trendType: 'up' },
      { title: 'Sprint Count', value: '26', trend: 'Steady', trendType: 'neutral' },
      { title: 'Active Time', value: '42 mins', trend: 'Session', trendType: 'neutral' }
    ],
    matchStats: [
      { label: 'Lunging Acceleration', value: '5.2 m/s²' },
      { label: 'Reaction Delay', value: '0.12s' },
      { label: 'Raid Biometrics', value: 'Optimal' }
    ]
  },
  Badminton: {
    overallScore: 84,
    recoveryScore: 94,
    fitnessLevel: 'Peak',
    readinessStatus: 'Ready for full load',
    metrics: [
      { title: 'Performance Score', value: '84.2%', trend: '+1.4%', trendType: 'up' },
      { title: 'Speed', value: '32.0 km/h', trend: '+0.8', trendType: 'up' },
      { title: 'Acceleration', value: '6.4 m/s²', trend: 'Steady', trendType: 'neutral' },
      { title: 'Endurance', value: '94 / 100', trend: '+2.0', trendType: 'up' },
      { title: 'Strength', value: '80 / 100', trend: '+1.5', trendType: 'up' },
      { title: 'Agility', value: '96 / 100', trend: '+3.1', trendType: 'up' },
      { title: 'Power', value: '320 W', trend: '+12.4%', trendType: 'up' },
      { title: 'Accuracy', value: '94.2%', trend: '+2.8%', trendType: 'up' },
      { title: 'Reaction Time', value: '130 ms', trend: '-8ms', trendType: 'up' },
      { title: 'Recovery Score', value: '94%', trend: 'Optimal', trendType: 'up' },
      { title: 'Injury Risk', value: '12%', trend: '-0.15 Risk', trendType: 'up' },
      { title: 'Training Load', value: '650 score', trend: 'Optimal', trendType: 'neutral' },
      { title: 'Calories Burned', value: '840 kcal', trend: 'Session', trendType: 'neutral' },
      { title: 'Distance Covered', value: '3.6 km', trend: '+0.5', trendType: 'up' },
      { title: 'Sprint Count', value: '28', trend: '+4', trendType: 'up' },
      { title: 'Active Time', value: '36 mins', trend: 'Session', trendType: 'neutral' }
    ],
    matchStats: [
      { label: 'Smash Speed Peak', value: '320 kph' },
      { label: 'Lunge Stability', value: '94%' },
      { label: 'Footwork Delay', value: '0.14s' }
    ]
  },
  TableTennis: {
    overallScore: 84,
    recoveryScore: 90,
    fitnessLevel: 'Optimal',
    readinessStatus: 'Ready for full load',
    metrics: [
      { title: 'Performance Score', value: '84.0%', trend: '+0.8%', trendType: 'up' },
      { title: 'Speed', value: '8.4 km/h', trend: '+0.2', trendType: 'up' },
      { title: 'Acceleration', value: '3.6 m/s²', trend: 'Steady', trendType: 'neutral' },
      { title: 'Endurance', value: '90 / 100', trend: '+1.5', trendType: 'up' },
      { title: 'Strength', value: '80 / 100', trend: 'Steady', trendType: 'neutral' },
      { title: 'Agility', value: '92 / 100', trend: 'Steady', trendType: 'neutral' },
      { title: 'Power', value: '240 W', trend: '+5.4%', trendType: 'up' },
      { title: 'Accuracy', value: '84.0%', trend: '+1.8%', trendType: 'up' },
      { title: 'Reaction Time', value: '185 ms', trend: '-2ms', trendType: 'up' },
      { title: 'Recovery Score', value: '90%', trend: 'Optimal', trendType: 'up' },
      { title: 'Injury Risk', value: '10%', trend: 'Low', trendType: 'up' },
      { title: 'Training Load', value: '420 score', trend: 'Optimal', trendType: 'neutral' },
      { title: 'Calories Burned', value: '680 kcal', trend: 'Session', trendType: 'neutral' },
      { title: 'Distance Covered', value: '2.5 km', trend: '+0.1', trendType: 'up' },
      { title: 'Sprint Count', value: '10', trend: 'Steady', trendType: 'neutral' },
      { title: 'Active Time', value: '45 mins', trend: 'Session', trendType: 'neutral' }
    ],
    matchStats: [
      { label: 'Ball Spin Rotation', value: '8400 RPM' },
      { label: 'Body Center Stance', value: '4.5 cm' },
      { label: 'Paddle reaction delay', value: '0.11s' }
    ]
  },
  Volleyball: {
    overallScore: 88,
    recoveryScore: 88,
    fitnessLevel: 'Optimal',
    readinessStatus: 'Ready for full load',
    metrics: [
      { title: 'Performance Score', value: '88.0%', trend: '+3.1%', trendType: 'up' },
      { title: 'Speed', value: '32.0 km/h', trend: '+1.5', trendType: 'up' },
      { title: 'Acceleration', value: '6.4 m/s²', trend: '+0.8', trendType: 'up' },
      { title: 'Endurance', value: '88 / 100', trend: '+2.8%', trendType: 'up' },
      { title: 'Strength', value: '80 / 100', trend: 'Steady', trendType: 'neutral' },
      { title: 'Agility', value: '90 / 100', trend: 'Steady', trendType: 'neutral' },
      { title: 'Power', value: '320 W', trend: '+12.4%', trendType: 'up' },
      { title: 'Accuracy', value: '88.0%', trend: '+2.8%', trendType: 'up' },
      { title: 'Reaction Time', value: '140 ms', trend: '-5ms', trendType: 'up' },
      { title: 'Recovery Score', value: '88%', trend: 'Optimal', trendType: 'up' },
      { title: 'Injury Risk', value: '12%', trend: '-0.15 Risk', trendType: 'up' },
      { title: 'Training Load', value: '650 score', trend: 'Optimal', trendType: 'neutral' },
      { title: 'Calories Burned', value: '840 kcal', trend: 'Session', trendType: 'neutral' },
      { title: 'Distance Covered', value: '3.6 km', trend: '+0.5', trendType: 'up' },
      { title: 'Sprint Count', value: '28', trend: '+4', trendType: 'up' },
      { title: 'Active Time', value: '36 mins', trend: 'Session', trendType: 'neutral' }
    ],
    matchStats: [
      { label: 'Spike Vertical Reach', value: '3.42m' },
      { label: 'Torso Angle alignment', value: '14°' },
      { label: 'Spike Power output', value: '320 W' }
    ]
  }
};

const LoginScreen = ({ onLogin }) => {
  const [athleteId, setAthleteId] = useState('ATHLETE-9421');
  const [token, setToken] = useState('ATHLETEX2026');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      onLogin();
    }, 1500);
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-grid-bg"></div>
      
      <motion.div 
        className="login-card-glass"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <div className="login-header-logo">
          <Cpu size={28} color="var(--victory-blue)" />
          <h2>AthleteX</h2>
        </div>
        
        <div style={{ textAlign: 'center', marginBottom: '8px' }}>
          <h3 style={{ color: '#FFFFFF', fontSize: '1.2rem', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>
            AI Performance Gateway
          </h3>
          <p style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: '0.8rem', marginTop: '4px' }}>
            Initialize encrypted biometric telemetry link
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="login-input-group">
            <label htmlFor="athlete-id">Athlete Profile ID</label>
            <input 
              type="text" 
              id="athlete-id"
              className="login-input-raw"
              value={athleteId}
              onChange={(e) => setAthleteId(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <div className="login-input-group">
            <label htmlFor="access-token">Platform Access Token</label>
            <input 
              type="text" 
              id="access-token"
              className="login-input-raw"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              disabled={isLoading}
            />
          </div>

          <button type="submit" className="login-submit-btn-premium" disabled={isLoading}>
            {isLoading ? (
              <>Connecting Telemetry Engine...</>
            ) : (
              <>
                <Shield size={16} /> Access Dashboard
              </>
            )}
            {isLoading && <div className="login-loading-bar-sweep"></div>}
          </button>
        </form>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.4)', marginTop: '4px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#00C853', display: 'inline-block', boxShadow: '0 0 8px #00C853' }}></span>
          Secure Connection Active (SSL 256-bit)
        </div>

        <div style={{ 
          padding: '12px', 
          background: 'rgba(21, 101, 192, 0.08)', 
          border: '1px solid rgba(21, 101, 192, 0.15)', 
          borderRadius: '8px', 
          fontSize: '0.75rem', 
          color: 'rgba(255, 255, 255, 0.7)', 
          textAlign: 'center', 
          fontFamily: 'var(--font-heading)',
          lineHeight: '1.4'
        }}>
          🔑 <span style={{ fontWeight: '700', color: '#FFFFFF' }}>Default Logins:</span> ID: <code style={{ color: 'var(--electric-cyan)', fontWeight: '700' }}>ATHLETE-9421</code> | Token: <code style={{ color: 'var(--electric-cyan)', fontWeight: '700' }}>ATHLETEX2026</code>
        </div>
      </motion.div>
    </div>
  );
};

function App() {
  const [view, setView] = useState('login'); // 'login', 'gallery', 'analysis'
  const [selectedSport, setSelectedSport] = useState('Football');

  const handleSelectSport = (sportId) => {
    setSelectedSport(sportId);
    setView('analysis');
  };

  const handleBackToGallery = () => {
    setView('gallery');
  };

  return (
    <div style={{ minHeight: '100vh', width: '100%', overflowX: 'hidden' }}>
      
      {/* Animated Navigation Transition */}
      <AnimatePresence mode="wait">
        {view === 'login' && (
          <motion.div
            key="login"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <LoginScreen onLogin={() => setView('gallery')} />
          </motion.div>
        )}

        {view === 'gallery' && (
          <motion.div
            key="gallery"
            className="gallery-page-wrapper"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <SportsGallery onSelectSport={handleSelectSport} />
          </motion.div>
        )}

        {view === 'analysis' && (
          <motion.div
            key="analysis"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <PerformanceAnalysis
              selectedSport={selectedSport}
              onBack={handleBackToGallery}
            />
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default App;
