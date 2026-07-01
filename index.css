import React from 'react';
import { motion } from 'framer-motion';

const PerformanceRing = ({ 
  percentage = 78, 
  size = 120, 
  strokeWidth = 10, 
  color = '#00C853', 
  trailColor = '#E2E8F0', 
  title = 'Recovery',
  subtitle = 'Optimal'
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'relative', width: size, height: size }}>
        <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke={trailColor}
            strokeWidth={strokeWidth}
          />
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            strokeLinecap="round"
          />
        </svg>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-heading)'
        }}>
          <span style={{ fontSize: `${size * 0.22}px`, fontWeight: '800', color: 'var(--text-heading)' }}>
            {percentage}%
          </span>
          {subtitle && (
            <span style={{ fontSize: `${size * 0.08}px`, fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '-2px' }}>
              {subtitle}
            </span>
          )}
        </div>
      </div>
      {title && (
        <span style={{ 
          marginTop: '12px', 
          fontSize: '0.85rem', 
          fontWeight: '700', 
          color: 'var(--text-heading)',
          fontFamily: 'var(--font-heading)',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          {title}
        </span>
      )}
    </div>
  );
};

export default PerformanceRing;
