import React from 'react';
import { 
  LayoutDashboard, 
  Activity, 
  Map, 
  Users, 
  LineChart, 
  Bot, 
  Settings,
  HelpCircle,
  Eye
} from 'lucide-react';

const MENU_ITEMS = [
  { id: 'overview', name: 'Overview', icon: <LayoutDashboard size={20} /> },
  { id: 'biomechanics', name: 'Biomechanics & Pose', icon: <Eye size={20} /> },
  { id: 'heatmaps', name: 'Heatmaps & Play', icon: <Map size={20} /> },
  { id: 'comparison', name: 'Athlete Comparison', icon: <Users size={20} /> },
  { id: 'predictions', name: 'AI Diagnostics', icon: <LineChart size={20} /> },
  { id: 'coach', name: 'AI Coach Hub', icon: <Bot size={20} /> }
];

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="sidebar">
      {/* Brand logo */}
      <div className="sidebar-logo">
        <Activity size={26} color="#1565C0" />
        <span>AURA</span>TRACK
      </div>

      {/* Nav Menu */}
      <ul className="sidebar-nav">
        {MENU_ITEMS.map((item) => (
          <li 
            key={item.id} 
            className={`sidebar-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            {item.icon}
            <span>{item.name}</span>
          </li>
        ))}
      </ul>

      {/* Footer Info */}
      <div className="sidebar-footer">
        <div className="user-avatar">
          PK
        </div>
        <div>
          <h5 style={{ fontSize: '0.9rem', color: 'var(--text-heading)' }}>Pavan K.</h5>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Head Coach</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
