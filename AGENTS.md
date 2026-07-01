import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, TrendingUp, Calendar } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const TEAM_PROGRESS = [
  { week: 'Wk 1', avgScore: 78 },
  { week: 'Wk 2', avgScore: 80 },
  { week: 'Wk 3', avgScore: 82 },
  { week: 'Wk 4', avgScore: 85 },
];

const LEADERBOARD = [
  { rank: 1, name: 'Pavan K. (You)', score: 94.2, sport: 'Football', status: 'Peak' },
  { rank: 2, name: 'Marcus A.', score: 91.8, sport: 'Basketball', status: 'Optimal' },
  { rank: 3, name: 'Sarah L.', score: 88.5, sport: 'Athletics', status: 'Optimal' },
  { rank: 4, name: 'David R.', score: 86.4, sport: 'Cricket', status: 'Fatigued' },
  { rank: 5, name: 'Emily W.', score: 85.0, sport: 'Swimming', status: 'Recovery' }
];

const TeamDashboard = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      
      {/* Top Cards Row */}
      <div className="grid-3">
        <div className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(21, 101, 192, 0.1)', color: 'var(--victory-blue)', display: 'flex', alignItems: 'center', justify: 'center' }}>
            <Users size={20} />
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '600' }}>Active Roster</span>
            <h4 style={{ fontSize: '1.5rem', fontWeight: '800' }}>14 Athletes</h4>
          </div>
        </div>

        <div className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(0, 200, 83, 0.1)', color: 'var(--performance-green)', display: 'flex', alignItems: 'center', justify: 'center' }}>
            <Calendar size={20} />
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '600' }}>Attendance Rate</span>
            <h4 style={{ fontSize: '1.5rem', fontWeight: '800' }}>96.4%</h4>
          </div>
        </div>

        <div className="glass-panel" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(255, 109, 0, 0.1)', color: 'var(--energy-orange)', display: 'flex', alignItems: 'center', justify: 'center' }}>
            <TrendingUp size={20} />
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '600' }}>Weekly Peak</span>
            <h4 style={{ fontSize: '1.5rem', fontWeight: '800' }}>+4.2% Load</h4>
          </div>
        </div>
      </div>

      <div className="coach-grid">
        {/* Left Side: Leaderboard */}
        <div className="glass-panel">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            <Award size={20} color="var(--victory-blue)" />
            <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-heading)' }}>
              Team Performance Leaderboard
            </h3>
          </div>

          <div className="leaderboard-list">
            {LEADERBOARD.map((player) => (
              <motion.div
                key={player.rank}
                className="leaderboard-row"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: player.rank * 0.05 }}
              >
                <div className="leaderboard-info">
                  <span className="leaderboard-rank" style={{ color: player.rank === 1 ? 'var(--championship-gold)' : 'var(--text-body)' }}>
                    #{player.rank}
                  </span>
                  <div>
                    <span className="leaderboard-name">{player.name}</span>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {player.sport} • <span style={{ 
                        color: player.status === 'Peak' ? 'var(--championship-gold)' : player.status === 'Optimal' ? 'var(--performance-green)' : 'var(--athletic-red)',
                        fontWeight: '700'
                      }}>{player.status}</span>
                    </div>
                  </div>
                </div>
                <span className="leaderboard-score">{player.score}%</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Team Progress Line Chart */}
        <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h3 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-heading)' }}>
            Squad Average Conditioning Trend
          </h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Average weekly conditioning score across all active roster models.
          </p>

          <div style={{ width: '100%', height: 220 }}>
            <ResponsiveContainer>
              <LineChart data={TEAM_PROGRESS} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
                <XAxis dataKey="week" stroke="var(--text-muted)" fontSize={11} tickLine={false} />
                <YAxis domain={[70, 90]} stroke="var(--text-muted)" fontSize={11} tickLine={false} />
                <Tooltip contentStyle={{ background: '#FFFFFF', border: '1px solid #E2E8F0', borderRadius: '8px' }} />
                <Line type="monotone" dataKey="avgScore" stroke="var(--victory-blue)" strokeWidth={3} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="glass-panel" style={{ padding: '12px', background: 'var(--bg-secondary)', border: 'none', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            <strong>Coach Note:</strong> Squad fitness is pacing 3% ahead of the target model timeline. Recovery cycles are being adhered to. Keep training loads moderate.
          </div>
        </div>
      </div>

    </div>
  );
};

export default TeamDashboard;
