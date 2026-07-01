import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts';
import { Users, Sliders, Sparkles } from 'lucide-react';

const ComparisonPanel = () => {
  const [athleteA, setAthleteA] = useState({
    name: 'Pavan K. (You)',
    speed: 88,
    strength: 78,
    accuracy: 92,
    agility: 85,
    power: 80,
    recovery: 78,
    stamina: 84,
    endurance: 82,
  });

  const [athleteB, setAthleteB] = useState({
    name: 'Marcus A. (Target)',
    speed: 85,
    strength: 86,
    accuracy: 80,
    agility: 88,
    power: 90,
    recovery: 82,
    stamina: 80,
    endurance: 85,
  });

  const chartData = [
    { subject: 'Speed', A: athleteA.speed, B: athleteB.speed, fullMark: 100 },
    { subject: 'Strength', A: athleteA.strength, B: athleteB.strength, fullMark: 100 },
    { subject: 'Accuracy', A: athleteA.accuracy, B: athleteB.accuracy, fullMark: 100 },
    { subject: 'Agility', A: athleteA.agility, B: athleteB.agility, fullMark: 100 },
    { subject: 'Power', A: athleteA.power, B: athleteB.power, fullMark: 100 },
    { subject: 'Recovery', A: athleteA.recovery, B: athleteB.recovery, fullMark: 100 },
    { subject: 'Stamina', A: athleteA.stamina, B: athleteB.stamina, fullMark: 100 },
    { subject: 'Endurance', A: athleteA.endurance, B: athleteB.endurance, fullMark: 100 },
  ];

  const handleSliderChange = (athlete, key, value) => {
    const val = parseInt(value);
    if (athlete === 'A') {
      setAthleteA(prev => ({ ...prev, [key]: val }));
    } else {
      setAthleteB(prev => ({ ...prev, [key]: val }));
    }
  };

  return (
    <div className="glass-panel">
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
        <Users size={18} color="var(--victory-blue)" />
        <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)' }}>
          Side-by-Side Athlete Comparison
        </h3>
      </div>

      <div className="comparison-grid">
        
        {/* Sliders Control Panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          {/* Athlete A Sliders */}
          <div className="comparison-card-detail">
            <h4 style={{ fontSize: '1rem', color: 'var(--victory-blue)', marginBottom: '12px', display: 'flex', justifyContent: 'space-between' }}>
              <span>{athleteA.name}</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Rating: 83</span>
            </h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {['speed', 'strength', 'accuracy', 'agility'].map((key) => (
                <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: '600' }}>
                    <span style={{ textTransform: 'capitalize' }}>{key}</span>
                    <span>{athleteA[key]}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="40" 
                    max="100" 
                    value={athleteA[key]} 
                    onChange={(e) => handleSliderChange('A', key, e.target.value)}
                    style={{ width: '100%', accentColor: 'var(--victory-blue)' }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Athlete B Sliders */}
          <div className="comparison-card-detail">
            <h4 style={{ fontSize: '1rem', color: 'var(--energy-orange)', marginBottom: '12px', display: 'flex', justifyContent: 'space-between' }}>
              <span>{athleteB.name}</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Rating: 84</span>
            </h4>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {['speed', 'strength', 'accuracy', 'agility'].map((key) => (
                <div key={key} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: '600' }}>
                    <span style={{ textTransform: 'capitalize' }}>{key}</span>
                    <span>{athleteB[key]}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="40" 
                    max="100" 
                    value={athleteB[key]} 
                    onChange={(e) => handleSliderChange('B', key, e.target.value)}
                    style={{ width: '100%', accentColor: 'var(--energy-orange)' }}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Radar Chart Panel */}
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', minHeight: '380px' }}>
          <h4 style={{ fontSize: '0.9rem', color: 'var(--text-heading)', textTransform: 'uppercase', marginBottom: '12px', letterSpacing: '0.5px' }}>
            Biomechanical Attributes Overlay
          </h4>
          
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                <PolarGrid stroke="#E2E8F0" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: 'var(--text-body)', fontSize: 11, fontWeight: '600' }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: 'var(--text-muted)', fontSize: 9 }} />
                <Radar name={athleteA.name} dataKey="A" stroke="var(--victory-blue)" fill="var(--victory-blue)" fillOpacity={0.2} />
                <Radar name={athleteB.name} dataKey="B" stroke="var(--energy-orange)" fill="var(--energy-orange)" fillOpacity={0.2} />
                <Legend iconSize={8} wrapperStyle={{ fontSize: '11px', fontFamily: 'var(--font-heading)' }} />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div style={{ marginTop: '16px', display: 'flex', gap: '6px', alignItems: 'center', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            <Sparkles size={14} color="var(--championship-gold)" /> Drag the sliders to simulate live training changes.
          </div>
        </div>

      </div>
    </div>
  );
};

export default ComparisonPanel;
