import React from 'react';
import { Map, Sparkles, Flame } from 'lucide-react';

const HEATMAP_SPOTS = {
  Football: [
    { top: '35%', left: '42%', size: '120px', color: 'rgba(255, 109, 0, 0.4)' },
    { top: '48%', left: '55%', size: '90px', color: 'rgba(255, 255, 0, 0.3)' },
    { top: '65%', left: '38%', size: '150px', color: 'rgba(0, 200, 83, 0.25)' }
  ],
  Cricket: [
    { top: '42%', left: '48%', size: '80px', color: 'rgba(255, 109, 0, 0.45)' },
    { top: '55%', left: '50%', size: '110px', color: 'rgba(255, 255, 0, 0.35)' }
  ],
  Basketball: [
    { top: '25%', left: '48%', size: '130px', color: 'rgba(255, 109, 0, 0.45)' },
    { top: '60%', left: '35%', size: '100px', color: 'rgba(255, 255, 0, 0.35)' }
  ],
  Athletics: [
    { top: '70%', left: '30%', size: '60px', color: 'rgba(255, 109, 0, 0.4)' },
    { top: '75%', left: '48%', size: '65px', color: 'rgba(255, 109, 0, 0.4)' },
    { top: '80%', left: '68%', size: '70px', color: 'rgba(0, 200, 83, 0.3)' }
  ],
  Swimming: [
    { top: '45%', left: '35%', size: '160px', color: 'rgba(0, 184, 212, 0.35)' },
    { top: '46%', left: '65%', size: '140px', color: 'rgba(0, 184, 212, 0.25)' }
  ],
  Boxing: [
    { top: '20%', left: '50%', size: '70px', color: 'rgba(229, 57, 53, 0.4)' },
    { top: '24%', left: '76%', size: '60px', color: 'rgba(229, 57, 53, 0.35)' }
  ],
  Kabaddi: [
    { top: '55%', left: '42%', size: '110px', color: 'rgba(255, 109, 0, 0.4)' },
    { top: '72%', left: '68%', size: '120px', color: 'rgba(255, 255, 0, 0.3)' }
  ],
  Badminton: [
    { top: '20%', left: '32%', size: '90px', color: 'rgba(0, 184, 212, 0.3)' },
    { top: '50%', left: '42%', size: '100px', color: 'rgba(255, 109, 0, 0.35)' }
  ],
  TableTennis: [
    { top: '42%', left: '36%', size: '70px', color: 'rgba(229, 57, 53, 0.4)' },
    { top: '48%', left: '48%', size: '80px', color: 'rgba(255, 109, 0, 0.35)' }
  ],
  Volleyball: [
    { top: '15%', left: '44%', size: '100px', color: 'rgba(0, 184, 212, 0.35)' },
    { top: '48%', left: '52%', size: '120px', color: 'rgba(255, 109, 0, 0.35)' }
  ]
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

const HeatmapPanel = ({ selectedSport, sportData }) => {
  const activeSpots = HEATMAP_SPOTS[selectedSport] ? HEATMAP_SPOTS[selectedSport] : HEATMAP_SPOTS.Football;
  const imageSrc = getSportImage(selectedSport);
  const { matchStats } = sportData;

  return (
    <div className="glass-panel">
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
        <Map size={18} color="var(--victory-blue)" />
        <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)' }}>
          Tactical Session Heatmaps & Match Analytics
        </h3>
      </div>

      <div className="bio-wrapper">
        
        {/* Heatmap Overlay Pane */}
        <div className="media-container" style={{ position: 'relative' }}>
          <img src={imageSrc} alt={`${selectedSport} tactical heatmap`} className="media-image" />
          
          <div className="heatmap-overlay">
            {activeSpots.map((spot, idx) => (
              <div
                key={idx}
                className="heatmap-point"
                style={{
                  top: spot.top,
                  left: spot.left,
                  width: spot.size,
                  height: spot.size,
                  background: `radial-gradient(circle, ${spot.color} 0%, rgba(0,0,0,0) 70%)`
                }}
              />
            ))}
          </div>

          <div className="skeleton-data-tag" style={{ top: '8%', left: '8%' }}>
            <span style={{ color: 'var(--energy-orange)' }}>ZONE MAP:</span> HIGH INTENSITY AREAS
          </div>
        </div>

        {/* Match Statistics Telemetry Pane */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="glass-panel" style={{ background: 'var(--bg-secondary)', border: 'none' }}>
            <h4 style={{ fontSize: '1rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Flame size={16} color="var(--energy-orange)" /> High-Intensity Sprint Zones
            </h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: '1.5' }}>
              Evaluation of touch zones and sprint path velocities. Dark red areas represent positions where the athlete accumulated peak lactic load.
            </p>
          </div>

          <div>
            <h5 style={{ fontSize: '0.85rem', color: 'var(--text-heading)', textTransform: 'uppercase', fontWeight: '700', marginBottom: '12px' }}>
              Session Match Stats
            </h5>
            
            <div className="match-stats-row">
              {matchStats.map((stat, idx) => (
                <div key={idx} className="match-stat-item">
                  <span className="match-stat-value">{stat.value}</span>
                  <span className="match-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <h5 style={{ fontSize: '0.85rem', color: 'var(--text-heading)', textTransform: 'uppercase', fontWeight: '700' }}>Tactical Insights</h5>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              The heat signature indicates {selectedSport === 'Football' ? 'excellent offensive wing positioning' : 'consistent center court placement'}. Maximize horizontal sprints to stretch the opponent's defensive lines.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeatmapPanel;
