@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700;800;900&display=swap');

:root {
  /* Brand Accents */
  --victory-blue: #1565C0;
  --performance-green: #00C853;
  --energy-orange: #FF6D00;
  --championship-gold: #FFC107;
  --athletic-red: #E53935;
  --electric-cyan: #00B8D4;

  /* White & Neutral Palette */
  --bg-primary: #FFFFFF;
  --bg-secondary: #F8FAFC;
  --bg-section: #F1F5F9;
  --bg-card: #FFFFFF;
  --border-color: #E2E8F0;

  /* Text Colors */
  --text-heading: #0F172A;
  --text-body: #334155;
  --text-muted: #64748B;
  --text-disabled: #94A3B8;

  /* Sport-Specific Colors */
  --color-football: #10B981;
  --color-cricket: #2563EB;
  --color-basketball: #F97316;
  --color-volleyball: #0EA5E9;
  --color-swimming: #0284C7;
  --color-athletics: #DC2626;
  --color-badminton: #0D9488;
  --color-table-tennis: #E11D48;
  --color-cycling: #7C3AED;
  --color-gym: #475569;
  --color-boxing: #EF4444;
  --color-kabaddi: #EA580C;
  --color-tennis: #84CC16;

  /* Typography */
  --font-sans: 'Inter', sans-serif;
  --font-heading: 'Outfit', sans-serif;

  /* Premium Shadows & Radius */
  --radius-lg: 20px;
  --radius-md: 14px;
  --radius-sm: 8px;
  --shadow-sm: 0 2px 8px rgba(15, 23, 42, 0.04);
  --shadow-md: 0 8px 24px rgba(15, 23, 42, 0.05);
  --shadow-lg: 0 16px 40px rgba(15, 23, 42, 0.08);

  /* Transitions */
  --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --transition-spring: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.2);
}

/* Reset */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body, #root {
  height: 100%;
  background-color: var(--bg-secondary);
  color: var(--text-body);
  font-family: var(--font-sans);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  color: var(--text-heading);
  font-weight: 700;
}

a {
  text-decoration: none;
  color: inherit;
}

/* Custom Scrollbars */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}
::-webkit-scrollbar-track {
  background: var(--bg-secondary);
}
::-webkit-scrollbar-thumb {
  background: #CBD5E1;
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background: var(--text-muted);
}

/* Main Dashboard Structure */
.dashboard-wrapper {
  display: grid;
  grid-template-columns: 260px 1fr;
  min-height: 100vh;
  width: 100vw;
  background-color: var(--bg-secondary);
}

.dashboard-main-content {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
  padding: 24px 32px 40px;
}

@media (max-width: 1024px) {
  .dashboard-wrapper {
    grid-template-columns: 80px 1fr;
  }
}

@media (max-width: 768px) {
  .dashboard-wrapper {
    grid-template-columns: 1fr;
  }
  .dashboard-main-content {
    padding: 16px;
    height: auto;
    overflow-y: visible;
  }
}
