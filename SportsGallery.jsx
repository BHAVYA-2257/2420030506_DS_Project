import React from 'react';
import { motion } from 'framer-motion';
import { Apple, Flame, Droplet, Sparkles } from 'lucide-react';

const NutritionSection = ({ nutrition }) => {
  if (!nutrition) return null;

  return (
    <div className="glass-panel" style={{ marginTop: '32px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Apple size={20} color="var(--victory-blue)" />
          <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)', color: '#FFFFFF' }}>
            AI Personalized Sports Nutrition Plan
          </h3>
        </div>

        {/* Energy Badges */}
        <div style={{ display: 'flex', gap: '12px' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 12px',
            borderRadius: '20px',
            background: 'rgba(255, 109, 0, 0.08)',
            color: 'var(--energy-orange)',
            fontSize: '0.8rem',
            fontWeight: '700'
          }}>
            <Flame size={12} /> {nutrition.calories} Target
          </span>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 12px',
            borderRadius: '20px',
            background: 'rgba(0, 184, 212, 0.08)',
            color: 'var(--electric-cyan)',
            fontSize: '0.8rem',
            fontWeight: '700'
          }}>
            <Droplet size={12} /> {nutrition.hydration}
          </span>
        </div>
      </div>

      <div style={{ marginBottom: '20px', fontSize: '0.9rem' }}>
        <span style={{ fontWeight: '700', color: '#E2E8F0' }}>Nutrient Emphasis: </span>
        <span style={{ color: 'var(--victory-blue)', fontWeight: '700' }}>{nutrition.demand}</span>
      </div>

      {/* Meals Grid */}
      <div className="nutrition-grid">
        {nutrition.meals.map((meal, idx) => {
          let badgeBg = 'rgba(21, 101, 192, 0.08)';
          let badgeColor = 'var(--victory-blue)';
          if (meal.type.toLowerCase().includes('recovery')) {
            badgeBg = 'rgba(0, 200, 83, 0.08)';
            badgeColor = 'var(--performance-green)';
          }
          if (meal.type.toLowerCase().includes('workout')) {
            badgeBg = 'rgba(255, 109, 0, 0.08)';
            badgeColor = 'var(--energy-orange)';
          }

          return (
            <motion.div
              key={idx}
              className="meal-card-premium"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08, duration: 0.4 }}
            >
              <div className="meal-macro-row">
                <span className="meal-macro-badge" style={{ backgroundColor: badgeBg, color: badgeColor }}>
                  {meal.type}
                </span>
              </div>
              <h4 className="meal-title">{meal.title}</h4>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.4' }}>
                {meal.items}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* Macronutrient Split Slider */}
      <div className="glass-panel" style={{ marginTop: '24px', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', gap: '20px', padding: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Sparkles size={16} color="var(--championship-gold)" />
          <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#FFFFFF' }}>Model Macro Split:</span>
        </div>
        <div style={{ display: 'flex', gap: '24px', fontSize: '0.9rem', fontWeight: '600' }}>
          <div>🍞 Carbs: <span style={{ color: 'var(--victory-blue)', fontWeight: '800' }}>{nutrition.split.carbs}</span></div>
          <div>🥩 Protein: <span style={{ color: 'var(--performance-green)', fontWeight: '800' }}>{nutrition.split.protein}</span></div>
          <div>🥑 Fats: <span style={{ color: 'var(--energy-orange)', fontWeight: '800' }}>{nutrition.split.fats}</span></div>
        </div>
      </div>
    </div>
  );
};

export default NutritionSection;
