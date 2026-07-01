import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Trophy, Zap, Flame, Shield, Play, Dumbbell, Bike } from 'lucide-react';

const SPORTS_GALLERY_DATA = [
  {
    id: 'Football',
    name: 'Football',
    tagline: 'Precision tactical pathways & high-velocity ball aerodynamics.',
    image: '/assets/Ultra-realistic,_commercial_sports_photography,_premium_202606301802.jpeg',
    score: 94,
    color: '#2E7D32',
    gradient: 'linear-gradient(135deg, #2E7D32 0%, #66BB6A 100%)',
    icon: <Trophy size={20} color="#FFFFFF" />
  },
  {
    id: 'Cricket',
    name: 'Cricket',
    tagline: 'Biomechanical arm release trajectories & bat speed vectors.',
    image: '/assets/Ultra-realistic,_commercial_sports_photography,_premium_202606301805.jpeg',
    score: 86,
    color: '#1565C0',
    gradient: 'linear-gradient(135deg, #1565C0 0%, #42A5F5 100%)',
    icon: <Zap size={20} color="#FFFFFF" />
  },
  {
    id: 'Basketball',
    name: 'Basketball',
    tagline: 'Vertical jump takeoff mechanics & optimal launch trajectories.',
    image: '/assets/Professional_basketball_player_performing_a_202606301821.jpeg',
    score: 92,
    color: '#EF6C00',
    gradient: 'linear-gradient(135deg, #EF6C00 0%, #FFA000 100%)',
    icon: <Flame size={20} color="#FFFFFF" />
  },
  {
    id: 'Tennis',
    name: 'Tennis',
    tagline: 'Precision baseline swing releases & high-velocity serve power.',
    image: '/assets/tennis.png',
    score: 87,
    color: '#9C27B0',
    gradient: 'linear-gradient(135deg, #9C27B0 0%, #E040FB 100%)',
    icon: <Zap size={20} color="#FFFFFF" />
  },
  {
    id: 'Badminton',
    name: 'Badminton',
    tagline: 'Smash velocity curves & footwork reaction times.',
    image: '/assets/BADMINTON.png',
    score: 84,
    color: '#00ACC1',
    gradient: 'linear-gradient(135deg, #00ACC1 0%, #26C6DA 100%)',
    icon: <Zap size={20} color="#FFFFFF" />
  },
  {
    id: 'Volleyball',
    name: 'Volleyball',
    tagline: 'Spike impact power vectors & block extension reaches.',
    image: '/assets/VOLLEYBALL.png',
    score: 88,
    color: '#0288D1',
    gradient: 'linear-gradient(135deg, #0288D1 0%, #4FC3F7 100%)',
    icon: <Trophy size={20} color="#FFFFFF" />
  },
  {
    id: 'Swimming',
    name: 'Swimming',
    tagline: 'Fluid dynamics, stroke efficiencies & turnover ratios.',
    image: '/assets/SWIMMING.png',
    score: 85,
    color: '#0277BD',
    gradient: 'linear-gradient(135deg, #0277BD 0%, #26C6DA 100%)',
    icon: <Sparkles size={20} color="#FFFFFF" />
  },
  {
    id: 'Running',
    name: 'Running',
    tagline: 'High-speed stride frequencies & ground contact telemetry.',
    image: '/assets/Professional_long-distance_runner_sprinting_through_202606301901.jpeg',
    score: 88,
    color: '#D32F2F',
    gradient: 'linear-gradient(135deg, #D32F2F 0%, #F57C00 100%)',
    icon: <Zap size={20} color="#FFFFFF" />
  },
  {
    id: 'Cycling',
    name: 'Cycling',
    tagline: 'Pedaling power transfers, cadence rhythms & speed tracks.',
    image: '/assets/cycling.png',
    score: 89,
    color: '#00C853',
    gradient: 'linear-gradient(135deg, #00C853 0%, #B9F6CA 100%)',
    icon: <Bike size={20} color="#FFFFFF" />
  },
  {
    id: 'Boxing',
    name: 'Boxing',
    tagline: 'Kinetic strike force, reaction latency & joint alignments.',
    image: '/assets/Professional_boxer_throwing_a_powerful_202606301839.jpeg',
    score: 89,
    color: '#C62828',
    gradient: 'linear-gradient(135deg, #C62828 0%, #FFC107 100%)',
    icon: <Shield size={20} color="#FFFFFF" />
  },
  {
    id: 'Kabaddi',
    name: 'Kabaddi',
    tagline: 'Explosive lunge accelerations & balance axis metrics.',
    image: '/assets/Professional_kabaddi_player_lunging_forward_202606301841.jpeg',
    score: 88,
    color: '#F4511E',
    gradient: 'linear-gradient(135deg, #F4511E 0%, #D32F2F 100%)',
    icon: <Flame size={20} color="#FFFFFF" />
  },
  {
    id: 'Table Tennis',
    name: 'Table Tennis',
    tagline: 'Ball spin velocity estimation & wrist rotation angles.',
    image: '/assets/Professional_table_tennis_player_executing_202606301849.jpeg',
    score: 84,
    color: '#C2185B',
    gradient: 'linear-gradient(135deg, #C2185B 0%, #E53935 100%)',
    icon: <Sparkles size={20} color="#FFFFFF" />
  },
  {
    id: 'Hockey',
    name: 'Hockey',
    tagline: 'Passing accuracies, shot telemetry & ball control handles.',
    image: '/assets/hockey.png',
    score: 86,
    color: '#E65100',
    gradient: 'linear-gradient(135deg, #E65100 0%, #FFB74D 100%)',
    icon: <Trophy size={20} color="#FFFFFF" />
  },
  {
    id: 'Gym',
    name: 'Gym',
    tagline: 'Mechanical muscle force outputs & active metabolic burn.',
    image: '/assets/gym.png',
    score: 91,
    color: '#37474F',
    gradient: 'linear-gradient(135deg, #37474F 0%, #90A4AE 100%)',
    icon: <Dumbbell size={20} color="#FFFFFF" />
  }
];

const SportsGallery = ({ onSelectSport }) => {
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--x', `${x}px`);
    e.currentTarget.style.setProperty('--y', `${y}px`);
  };

  return (
    <div className="gallery-container">
      {/* Header */}
      <div className="gallery-header">
        <motion.div 
          className="section-badge"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          AthleteX AI Sports Hub
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Select Your <span className="text-gradient tg-victory">Performance Arena</span>
        </motion.h1>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Explore cinematic high-fidelity sports models powered by real-time computer vision telemetry.
        </motion.p>
      </div>

      {/* Grid of cinematic cards */}
      <div className="gallery-grid">
        {SPORTS_GALLERY_DATA.map((sport, idx) => (
          <motion.div
            key={sport.id}
            className="sport-card-cinematic"
            style={{ '--card-theme-gradient': sport.gradient }}
            onMouseMove={handleMouseMove}
            onClick={() => onSelectSport(sport.id)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: idx * 0.05, duration: 0.6, type: 'spring' }}
          >
            {/* Interactive lighting glow layer */}
            <div className="mouse-glow-layer"></div>

            {/* Floating particles flow */}
            <div className="card-particles">
              {[...Array(5)].map((_, pIdx) => (
                <span
                  key={pIdx}
                  className="card-particle"
                  style={{
                    width: `${Math.random() * 6 + 2}px`,
                    height: `${Math.random() * 6 + 2}px`,
                    left: `${Math.random() * 80 + 10}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${Math.random() * 4 + 4}s`
                  }}
                />
              ))}
            </div>

            {/* Cinematic Image wrapper */}
            <div className="sport-card-image-wrapper">
              <img src={sport.image} alt={sport.name} className="sport-card-image-raw" />
              
              {/* Soft Glass details overlay */}
              <div className="sport-card-glass-overlay">
                <div className="sport-card-icon-box" style={{ background: `${sport.color}25`, borderColor: `${sport.color}40` }}>
                  {sport.icon}
                </div>
                <h2 className="sport-card-title-text">{sport.name}</h2>
                <p className="sport-card-tagline">{sport.tagline}</p>
                
                <div className="sport-card-badge-row">
                  <span className="sport-card-score-badge">
                    <Sparkles size={12} color="var(--championship-gold)" /> Rating: {sport.score}%
                  </span>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FFFFFF'
                  }}>
                    <Play size={12} style={{ marginLeft: '2px' }} fill="#FFFFFF" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SportsGallery;
