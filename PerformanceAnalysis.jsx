import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Zap, Cpu, Sparkles } from 'lucide-react';

const SKELETON_POSES = {
  Football: {
    joints: [
      { id: 'head', cx: '55%', cy: '16%', color: 'var(--victory-blue)' },
      { id: 'neck', cx: '54%', cy: '24%', color: 'var(--victory-blue)' },
      { id: 'shoulderR', cx: '48%', cy: '28%', color: 'var(--victory-blue)' },
      { id: 'shoulderL', cx: '60%', cy: '26%', color: 'var(--victory-blue)' },
      { id: 'elbowR', cx: '42%', cy: '36%', color: 'var(--victory-blue)' },
      { id: 'wristR', cx: '40%', cy: '44%', color: 'var(--victory-blue)' },
      { id: 'hipR', cx: '46%', cy: '50%', color: 'var(--victory-blue)' },
      { id: 'hipL', cx: '58%', cy: '48%', color: 'var(--victory-blue)' },
      { id: 'kneeR', cx: '38%', cy: '64%', color: 'var(--athletic-red)', warning: true }, // Alert
      { id: 'ankleR', cx: '36%', cy: '80%', color: 'var(--victory-blue)' },
      { id: 'kneeL', cx: '65%', cy: '68%', color: 'var(--performance-green)' },
      { id: 'ankleL', cx: '70%', cy: '86%', color: 'var(--victory-blue)' }
    ],
    lines: [
      { from: 'head', to: 'neck' },
      { from: 'neck', to: 'shoulderR' },
      { from: 'neck', to: 'shoulderL' },
      { from: 'shoulderR', to: 'elbowR' },
      { from: 'elbowR', to: 'wristR' },
      { from: 'shoulderR', to: 'hipR' },
      { from: 'shoulderL', to: 'hipL' },
      { from: 'hipR', to: 'hipL' },
      { from: 'hipR', to: 'kneeR' },
      { from: 'kneeR', to: 'ankleR' },
      { from: 'hipL', to: 'kneeL' },
      { from: 'kneeL', to: 'ankleL' }
    ],
    diagnostics: [
      { id: 'd1', cx: '25%', cy: '60%', label: 'Knee Flexion: 145°', desc: 'Slight hyperextension load detected.', alert: true },
      { id: 'd2', cx: '72%', cy: '58%', label: 'Launch Torque: 380 Nm', desc: 'Optimal lateral drive.', alert: false }
    ]
  },
  Cricket: {
    joints: [
      { id: 'head', cx: '50%', cy: '12%', color: 'var(--victory-blue)' },
      { id: 'neck', cx: '50%', cy: '20%', color: 'var(--victory-blue)' },
      { id: 'shoulderR', cx: '42%', cy: '22%', color: 'var(--victory-blue)' },
      { id: 'shoulderL', cx: '58%', cy: '22%', color: 'var(--victory-blue)' },
      { id: 'elbowR', cx: '34%', cy: '15%', color: 'var(--victory-blue)' },
      { id: 'wristR', cx: '30%', cy: '8%', color: 'var(--performance-green)' },
      { id: 'hipR', cx: '44%', cy: '48%', color: 'var(--victory-blue)' },
      { id: 'hipL', cx: '54%', cy: '48%', color: 'var(--victory-blue)' },
      { id: 'kneeR', cx: '40%', cy: '68%', color: 'var(--victory-blue)' },
      { id: 'ankleR', cx: '38%', cy: '88%', color: 'var(--victory-blue)' },
      { id: 'kneeL', cx: '58%', cy: '66%', color: 'var(--victory-blue)' },
      { id: 'ankleL', cx: '60%', cy: '84%', color: 'var(--victory-blue)' }
    ],
    lines: [
      { from: 'head', to: 'neck' },
      { from: 'neck', to: 'shoulderR' },
      { from: 'neck', to: 'shoulderL' },
      { from: 'shoulderR', to: 'elbowR' },
      { from: 'elbowR', to: 'wristR' },
      { from: 'shoulderR', to: 'hipR' },
      { from: 'shoulderL', to: 'hipL' },
      { from: 'hipR', to: 'kneeR' },
      { from: 'kneeR', to: 'ankleR' },
      { from: 'hipL', to: 'kneeL' },
      { from: 'kneeL', to: 'ankleL' }
    ],
    diagnostics: [
      { id: 'd1', cx: '18%', cy: '8%', label: 'Release Angle: 22.4°', desc: 'Perfect vertical alignment.', alert: false },
      { id: 'd2', cx: '70%', cy: '62%', label: 'Landing Force: 4.8 kN', desc: 'High load on left knee.', alert: true }
    ]
  },
  Basketball: {
    joints: [
      { id: 'head', cx: '48%', cy: '14%', color: 'var(--victory-blue)' },
      { id: 'neck', cx: '48%', cy: '22%', color: 'var(--victory-blue)' },
      { id: 'shoulderR', cx: '40%', cy: '24%', color: 'var(--victory-blue)' },
      { id: 'shoulderL', cx: '56%', cy: '24%', color: 'var(--victory-blue)' },
      { id: 'elbowR', cx: '32%', cy: '36%', color: 'var(--victory-blue)' },
      { id: 'wristR', cx: '28%', cy: '48%', color: 'var(--victory-blue)' },
      { id: 'hipR', cx: '42%', cy: '50%', color: 'var(--victory-blue)' },
      { id: 'hipL', cx: '52%', cy: '50%', color: 'var(--victory-blue)' },
      { id: 'kneeR', cx: '35%', cy: '68%', color: 'var(--athletic-red)', warning: true },
      { id: 'ankleR', cx: '32%', cy: '86%', color: 'var(--victory-blue)' },
      { id: 'kneeL', cx: '58%', cy: '68%', color: 'var(--performance-green)' },
      { id: 'ankleL', cx: '62%', cy: '86%', color: 'var(--victory-blue)' }
    ],
    lines: [
      { from: 'head', to: 'neck' },
      { from: 'neck', to: 'shoulderR' },
      { from: 'neck', to: 'shoulderL' },
      { from: 'shoulderR', to: 'elbowR' },
      { from: 'elbowR', to: 'wristR' },
      { from: 'shoulderR', to: 'hipR' },
      { from: 'shoulderL', to: 'hipL' },
      { from: 'hipR', to: 'kneeR' },
      { from: 'kneeR', to: 'ankleR' },
      { from: 'hipL', to: 'kneeL' },
      { from: 'kneeL', to: 'ankleL' }
    ],
    diagnostics: [
      { id: 'd1', cx: '12%', cy: '68%', label: 'Knee Flexion: 122°', desc: 'Patellar tendon load high.', alert: true },
      { id: 'd2', cx: '70%', cy: '40%', label: 'Vertical Leap: 92 cm', desc: 'Exceptional vertical lift.', alert: false }
    ]
  },
  Athletics: {
    joints: [
      { id: 'head', cx: '50%', cy: '16%', color: 'var(--victory-blue)' },
      { id: 'neck', cx: '49%', cy: '24%', color: 'var(--victory-blue)' },
      { id: 'shoulderR', cx: '42%', cy: '26%', color: 'var(--victory-blue)' },
      { id: 'shoulderL', cx: '56%', cy: '26%', color: 'var(--victory-blue)' },
      { id: 'elbowR', cx: '36%', cy: '36%', color: 'var(--victory-blue)' },
      { id: 'wristR', cx: '32%', cy: '46%', color: 'var(--victory-blue)' },
      { id: 'hipR', cx: '44%', cy: '50%', color: 'var(--victory-blue)' },
      { id: 'hipL', cx: '54%', cy: '49%', color: 'var(--victory-blue)' },
      { id: 'kneeR', cx: '30%', cy: '64%', color: 'var(--performance-green)' },
      { id: 'ankleR', cx: '24%', cy: '78%', color: 'var(--victory-blue)' },
      { id: 'kneeL', cx: '64%', cy: '66%', color: 'var(--victory-blue)' },
      { id: 'ankleL', cx: '72%', cy: '82%', color: 'var(--victory-blue)' }
    ],
    lines: [
      { from: 'head', to: 'neck' },
      { from: 'neck', to: 'shoulderR' },
      { from: 'neck', to: 'shoulderL' },
      { from: 'shoulderR', to: 'elbowR' },
      { from: 'elbowR', to: 'wristR' },
      { from: 'shoulderR', to: 'hipR' },
      { from: 'shoulderL', to: 'hipL' },
      { from: 'hipR', to: 'kneeR' },
      { from: 'kneeR', to: 'ankleR' },
      { from: 'hipL', to: 'kneeL' },
      { from: 'kneeL', to: 'ankleL' }
    ],
    diagnostics: [
      { id: 'd1', cx: '10%', cy: '60%', label: 'Stride Freq: 180 spm', desc: 'Optimal cadence range.', alert: false },
      { id: 'd2', cx: '74%', cy: '58%', label: 'Ankle Contact: 22°', desc: 'Over-pronation risk on landing.', alert: true }
    ]
  },
  Swimming: {
    joints: [
      { id: 'head', cx: '45%', cy: '45%', color: 'var(--victory-blue)' },
      { id: 'neck', cx: '48%', cy: '46%', color: 'var(--victory-blue)' },
      { id: 'shoulderR', cx: '50%', cy: '40%', color: 'var(--victory-blue)' },
      { id: 'shoulderL', cx: '50%', cy: '52%', color: 'var(--victory-blue)' },
      { id: 'elbowR', cx: '58%', cy: '34%', color: 'var(--victory-blue)' },
      { id: 'wristR', cx: '66%', cy: '28%', color: 'var(--performance-green)' },
      { id: 'hipR', cx: '64%', cy: '44%', color: 'var(--victory-blue)' },
      { id: 'hipL', cx: '64%', cy: '48%', color: 'var(--victory-blue)' },
      { id: 'kneeR', cx: '76%', cy: '42%', color: 'var(--victory-blue)' },
      { id: 'ankleR', cx: '88%', cy: '40%', color: 'var(--victory-blue)' }
    ],
    lines: [
      { from: 'head', to: 'neck' },
      { from: 'neck', to: 'shoulderR' },
      { from: 'neck', to: 'shoulderL' },
      { from: 'shoulderR', to: 'elbowR' },
      { from: 'elbowR', to: 'wristR' },
      { from: 'shoulderR', to: 'hipR' },
      { from: 'hipR', to: 'kneeR' },
      { from: 'kneeR', to: 'ankleR' }
    ],
    diagnostics: [
      { id: 'd1', cx: '15%', cy: '25%', label: 'Stroke Extension: 1.1m', desc: 'Excellent reach phase.', alert: false },
      { id: 'd2', cx: '72%', cy: '15%', label: 'Body Tilt: 4.2°', desc: 'Slight drag on lower body.', alert: true }
    ]
  },
  Boxing: {
    joints: [
      { id: 'head', cx: '50%', cy: '18%', color: 'var(--victory-blue)' },
      { id: 'neck', cx: '48%', cy: '25%', color: 'var(--victory-blue)' },
      { id: 'shoulderR', cx: '40%', cy: '28%', color: 'var(--victory-blue)' },
      { id: 'shoulderL', cx: '55%', cy: '26%', color: 'var(--victory-blue)' },
      { id: 'elbowR', cx: '35%', cy: '36%', color: 'var(--victory-blue)' },
      { id: 'wristR', cx: '32%', cy: '46%', color: 'var(--victory-blue)' },
      { id: 'elbowL', cx: '65%', cy: '24%', color: 'var(--victory-blue)' },
      { id: 'wristL', cx: '76%', cy: '20%', color: 'var(--athletic-red)', warning: true }, // Alert
      { id: 'hipR', cx: '44%', cy: '50%', color: 'var(--victory-blue)' },
      { id: 'hipL', cx: '52%', cy: '48%', color: 'var(--victory-blue)' },
      { id: 'kneeR', cx: '38%', cy: '68%', color: 'var(--victory-blue)' },
      { id: 'ankleR', cx: '36%', cy: '84%', color: 'var(--victory-blue)' }
    ],
    lines: [
      { from: 'head', to: 'neck' },
      { from: 'neck', to: 'shoulderR' },
      { from: 'neck', to: 'shoulderL' },
      { from: 'shoulderR', to: 'elbowR' },
      { from: 'elbowR', to: 'wristR' },
      { from: 'shoulderL', to: 'elbowL' },
      { from: 'elbowL', to: 'wristL' },
      { from: 'shoulderR', to: 'hipR' },
      { from: 'shoulderL', to: 'hipL' },
      { from: 'hipR', to: 'kneeR' },
      { from: 'kneeR', to: 'ankleR' }
    ],
    diagnostics: [
      { id: 'd1', cx: '80%', cy: '12%', label: 'Wrist Bend: 12.5°', desc: 'Lock wrist to prevent injury.', alert: true },
      { id: 'd2', cx: '15%', cy: '60%', label: 'Power: 340 J', desc: 'Lead hook energy output.', alert: false }
    ]
  },
  Kabaddi: {
    joints: [
      { id: 'head', cx: '42%', cy: '28%', color: 'var(--victory-blue)' },
      { id: 'neck', cx: '44%', cy: '36%', color: 'var(--victory-blue)' },
      { id: 'shoulderR', cx: '38%', cy: '38%', color: 'var(--victory-blue)' },
      { id: 'shoulderL', cx: '50%', cy: '38%', color: 'var(--victory-blue)' },
      { id: 'elbowR', cx: '32%', cy: '48%', color: 'var(--victory-blue)' },
      { id: 'wristR', cx: '28%', cy: '58%', color: 'var(--victory-blue)' },
      { id: 'hipR', cx: '48%', cy: '55%', color: 'var(--victory-blue)' },
      { id: 'hipL', cx: '56%', cy: '54%', color: 'var(--victory-blue)' },
      { id: 'kneeR', cx: '45%', cy: '72%', color: 'var(--performance-green)' },
      { id: 'ankleR', cx: '42%', cy: '88%', color: 'var(--victory-blue)' },
      { id: 'kneeL', cx: '68%', cy: '68%', color: 'var(--athletic-red)', warning: true },
      { id: 'ankleL', cx: '78%', cy: '84%', color: 'var(--victory-blue)' }
    ],
    lines: [
      { from: 'head', to: 'neck' },
      { from: 'neck', to: 'shoulderR' },
      { from: 'neck', to: 'shoulderL' },
      { from: 'shoulderR', to: 'elbowR' },
      { from: 'elbowR', to: 'wristR' },
      { from: 'shoulderR', to: 'hipR' },
      { from: 'shoulderL', to: 'hipL' },
      { from: 'hipR', to: 'kneeR' },
      { from: 'kneeR', to: 'ankleR' },
      { from: 'hipL', to: 'kneeL' },
      { from: 'kneeL', to: 'ankleL' }
    ],
    diagnostics: [
      { id: 'd1', cx: '80%', cy: '58%', label: 'Lunge Extension', desc: 'Over-extending knee joint.', alert: true },
      { id: 'd2', cx: '12%', cy: '45%', label: 'Reaction: 0.12s', desc: 'Quick pivot speed.', alert: false }
    ]
  },
  Badminton: {
    joints: [
      { id: 'head', cx: '48%', cy: '16%', color: 'var(--victory-blue)' },
      { id: 'neck', cx: '48%', cy: '24%', color: 'var(--victory-blue)' },
      { id: 'shoulderR', cx: '40%', cy: '26%', color: 'var(--victory-blue)' },
      { id: 'shoulderL', cx: '56%', cy: '26%', color: 'var(--victory-blue)' },
      { id: 'elbowR', cx: '30%', cy: '18%', color: 'var(--victory-blue)' },
      { id: 'wristR', cx: '24%', cy: '10%', color: 'var(--performance-green)' },
      { id: 'hipR', cx: '43%', cy: '52%', color: 'var(--victory-blue)' },
      { id: 'hipL', cx: '53%', cy: '52%', color: 'var(--victory-blue)' },
      { id: 'kneeR', cx: '38%', cy: '70%', color: 'var(--victory-blue)' },
      { id: 'ankleR', cx: '36%', cy: '88%', color: 'var(--victory-blue)' }
    ],
    lines: [
      { from: 'head', to: 'neck' },
      { from: 'neck', to: 'shoulderR' },
      { from: 'neck', to: 'shoulderL' },
      { from: 'shoulderR', to: 'elbowR' },
      { from: 'elbowR', to: 'wristR' },
      { from: 'shoulderR', to: 'hipR' },
      { from: 'shoulderL', to: 'hipL' },
      { from: 'hipR', to: 'kneeR' },
      { from: 'kneeR', to: 'ankleR' }
    ],
    diagnostics: [
      { id: 'd1', cx: '12%', cy: '15%', label: 'Smash Speed: 320 kph', desc: 'Exceptional swing velocity.', alert: false },
      { id: 'd2', cx: '70%', cy: '68%', label: 'Lunge Stability: 94%', desc: 'Excellent balance score.', alert: false }
    ]
  },
  TableTennis: {
    joints: [
      { id: 'head', cx: '50%', cy: '22%', color: 'var(--victory-blue)' },
      { id: 'neck', cx: '49%', cy: '30%', color: 'var(--victory-blue)' },
      { id: 'shoulderR', cx: '42%', cy: '32%', color: 'var(--victory-blue)' },
      { id: 'shoulderL', cx: '56%', cy: '32%', color: 'var(--victory-blue)' },
      { id: 'elbowR', cx: '34%', cy: '40%', color: 'var(--victory-blue)' },
      { id: 'wristR', cx: '30%', cy: '48%', color: 'var(--performance-green)' },
      { id: 'hipR', cx: '45%', cy: '56%', color: 'var(--victory-blue)' },
      { id: 'hipL', cx: '53%', cy: '56%', color: 'var(--victory-blue)' },
      { id: 'kneeR', cx: '40%', cy: '72%', color: 'var(--victory-blue)' },
      { id: 'ankleR', cx: '38%', cy: '88%', color: 'var(--victory-blue)' }
    ],
    lines: [
      { from: 'head', to: 'neck' },
      { from: 'neck', to: 'shoulderR' },
      { from: 'neck', to: 'shoulderL' },
      { from: 'shoulderR', to: 'elbowR' },
      { from: 'elbowR', to: 'wristR' },
      { from: 'shoulderR', to: 'hipR' },
      { from: 'shoulderL', to: 'hipL' },
      { from: 'hipR', to: 'kneeR' },
      { from: 'kneeR', to: 'ankleR' }
    ],
    diagnostics: [
      { id: 'd1', cx: '15%', cy: '45%', label: 'Ball Spin: 8400 rpm', desc: 'Top spin curve matches target.', alert: false },
      { id: 'd2', cx: '70%', cy: '70%', label: 'Body Center: 4.5 cm', desc: 'Optimal low stance.', alert: false }
    ]
  },
  Volleyball: {
    joints: [
      { id: 'head', cx: '52%', cy: '12%', color: 'var(--victory-blue)' },
      { id: 'neck', cx: '52%', cy: '20%', color: 'var(--victory-blue)' },
      { id: 'shoulderR', cx: '44%', cy: '22%', color: 'var(--victory-blue)' },
      { id: 'shoulderL', cx: '60%', cy: '22%', color: 'var(--victory-blue)' },
      { id: 'elbowR', cx: '36%', cy: '14%', color: 'var(--victory-blue)' },
      { id: 'wristR', cx: '32%', cy: '6%', color: 'var(--performance-green)' },
      { id: 'hipR', cx: '46%', cy: '48%', color: 'var(--victory-blue)' },
      { id: 'hipL', cx: '56%', cy: '48%', color: 'var(--victory-blue)' },
      { id: 'kneeR', cx: '42%', cy: '68%', color: 'var(--victory-blue)' },
      { id: 'ankleR', cx: '40%', cy: '88%', color: 'var(--victory-blue)' }
    ],
    lines: [
      { from: 'head', to: 'neck' },
      { from: 'neck', to: 'shoulderR' },
      { from: 'neck', to: 'shoulderL' },
      { from: 'shoulderR', to: 'elbowR' },
      { from: 'elbowR', to: 'wristR' },
      { from: 'shoulderR', to: 'hipR' },
      { from: 'shoulderL', to: 'hipL' },
      { from: 'hipR', to: 'kneeR' },
      { from: 'kneeR', to: 'ankleR' }
    ],
    diagnostics: [
      { id: 'd1', cx: '12%', cy: '10%', label: 'Spike Reach: 3.42m', desc: 'Maximum extension reach.', alert: false },
      { id: 'd2', cx: '70%', cy: '66%', label: 'Torso Angle: 14°', desc: 'Excellent hip extension.', alert: false }
    ]
  }
};

const getSportImage = (sport) => {
  switch (sport) {
    case 'Football': return '/assets/Ultra-realistic,_commercial_sports_photography,_premium_202606301802.jpeg';
    case 'Cricket': return '/assets/Ultra-realistic,_commercial_sports_photography,_premium_202606301805.jpeg';
    case 'Basketball': return '/assets/Professional_basketball_player_performing_a_202606301821.jpeg';
    case 'Athletics': return '/assets/Professional_long-distance_runner_sprinting_through_202606301901.jpeg';
    case 'Swimming': return '/assets/SWIMMING.png';
    case 'Boxing': return '/assets/Professional_boxer_throwing_a_powerful_202606301839.jpeg';
    case 'Kabaddi': return '/assets/Professional_kabaddi_player_lunging_forward_202606301841.jpeg';
    case 'Badminton': return '/assets/BADMINTON.png';
    case 'Table Tennis': return '/assets/Professional_table_tennis_player_executing_202606301849.jpeg';
    case 'Volleyball': return '/assets/VOLLEYBALL.png';
    default: return '/assets/A_diverse_group_of_elite_202606301909.jpeg';
  }
};

const BiomechanicsPanel = ({ selectedSport }) => {
  // Safe fallback if sport key not in pose library
  const activePoseKey = SKELETON_POSES[selectedSport] ? selectedSport : 'Football';
  const pose = SKELETON_POSES[activePoseKey];
  const imageSrc = getSportImage(selectedSport);

  return (
    <div className="glass-panel">
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
        <Cpu size={18} color="var(--victory-blue)" />
        <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)' }}>
          Real-time AI Biomechanics & Pose Estimation
        </h3>
      </div>
      
      <div className="bio-wrapper">
        {/* Media Container with Image and SVG Skeleton */}
        <div className="media-container">
          <img src={imageSrc} alt={`${selectedSport} action`} className="media-image" />
          
          <svg className="svg-skeleton-overlay">
            {/* Draw skeleton lines */}
            {pose.lines.map((line, idx) => {
              const fromNode = pose.joints.find(j => j.id === line.from);
              const toNode = pose.joints.find(j => j.id === line.to);
              if (!fromNode || !toNode) return null;
              
              const isWarningLine = fromNode.warning || toNode.warning;
              return (
                <line
                  key={idx}
                  x1={fromNode.cx}
                  y1={fromNode.cy}
                  x2={toNode.cx}
                  y2={toNode.cy}
                  stroke={isWarningLine ? 'var(--athletic-red)' : 'var(--electric-cyan)'}
                  strokeWidth="2.5"
                  strokeDasharray={isWarningLine ? '3' : '0'}
                />
              );
            })}

            {/* Draw joints circles */}
            {pose.joints.map((joint) => (
              <circle
                key={joint.id}
                cx={joint.cx}
                cy={joint.cy}
                r="6"
                fill="#FFFFFF"
                stroke={joint.color}
                strokeWidth="3.5"
                style={{ filter: `drop-shadow(0 0 6px ${joint.color})` }}
              />
            ))}
          </svg>

          {/* Holographic Diagnostic Tags Overlay */}
          {pose.diagnostics.map((diag) => (
            <div 
              key={diag.id} 
              className="diagnostic-tag"
              style={{ 
                top: diag.cy, 
                left: diag.cx,
                borderColor: diag.alert ? 'var(--athletic-red)' : 'rgba(255,255,255,0.15)'
              }}
            >
              <span style={{ 
                color: diag.alert ? 'var(--athletic-red)' : 'var(--electric-cyan)', 
                fontWeight: '800',
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                {diag.alert && <ShieldAlert size={12} />} {diag.label}
              </span>
              <span style={{ fontSize: '0.65rem', color: '#CBD5E1' }}>{diag.desc}</span>
            </div>
          ))}
        </div>

        {/* Sidebar Info Details */}
        <div className="bio-card-group">
          <div className="glass-panel" style={{ background: 'var(--bg-secondary)', border: 'none' }}>
            <h4 style={{ fontSize: '1rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Sparkles size={16} color="var(--championship-gold)" /> Skeletal Telemetry Feed
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: '1.5' }}>
              Our pose network tracks 17 core keypoints at 120 FPS. Biomechanical deviations are flagged immediately to prevent overuse strains.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div className="glass-panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '600' }}>Balance Symmetry</span>
              <span style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>94.2%</span>
              <span style={{ fontSize: '0.7rem', color: 'var(--performance-green)', fontWeight: '700' }}>Within Safe Range</span>
            </div>
            <div className="glass-panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '600' }}>Center of Gravity</span>
              <span style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-heading)', fontFamily: 'var(--font-heading)' }}>Optimal</span>
              <span style={{ fontSize: '0.7rem', color: 'var(--victory-blue)', fontWeight: '700' }}>Stable Core</span>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <h5 style={{ fontSize: '0.85rem', color: 'var(--text-heading)', textTransform: 'uppercase', fontWeight: '700' }}>Active Pose Warnings</h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
              {pose.diagnostics.some(d => d.alert) ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--athletic-red)', fontSize: '0.8rem', fontWeight: '600' }}>
                  <ShieldAlert size={16} /> Knee joint deviation exceeded thresholds (Moderate Strain Risk).
                </div>
              ) : (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--performance-green)', fontSize: '0.8rem', fontWeight: '600' }}>
                  ✓ All biomechanical vectors in green zone.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiomechanicsPanel;
