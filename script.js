/* ============================================
   RUBIK 3D • PREMIUM STYLESHEET
   ============================================ */

:root {
  /* Colors */
  --bg: #080B12;
  --bg-2: #0d1220;
  --bg-3: #111827;
  --panel: rgba(255,255,255,0.04);
  --panel-strong: rgba(255,255,255,0.07);
  --border: rgba(255,255,255,0.08);
  --border-strong: rgba(255,255,255,0.14);
  --text: #E8ECF5;
  --text-dim: #9AA3B8;
  --text-mute: #6B7388;
  --accent: #3D7BFF;
  --accent-glow: rgba(61,123,255,0.45);
  --success: #35C96F;
  --danger: #FF5B5B;
  --warning: #FFD93D;

  /* Rubik Stickers */
  --stk-white:  #F5F5F5;
  --stk-yellow: #FFD93D;
  --stk-red:    #FF4D4D;
  --stk-orange: #FF8A3D;
  --stk-blue:   #3D7BFF;
  --stk-green:  #35C96F;
  --stk-core:   #0a0a0a;

  /* Dimensions */
  --header-h: 64px;
  --sidebar-w: 220px;
  --right-w: 320px;
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 18px;

  /* Easings */
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);

  /* Fonts */
  --font-ui: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, monospace;
}

/* LIGHT THEME */
[data-theme="light"] {
  --bg: #F5F7FB;
  --bg-2: #ECEEF4;
  --bg-3: #E4E7EF;
  --panel: rgba(255,255,255,0.6);
  --panel-strong: rgba(255,255,255,0.85);
  --border: rgba(15,23,42,0.08);
  --border-strong: rgba(15,23,42,0.15);
  --text: #0f172a;
  --text-dim: #475569;
  --text-mute: #94a3b8;
  --stk-core: #1a1a1a;
}

/* ============================================
   RESET & BASE
   ============================================ */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html, body { height: 100%; overflow: hidden; }
body {
  font-family: var(--font-ui);
  background: var(--bg);
  color: var(--text);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: fixed;
  inset: 0;
  overscroll-behavior: none;
  user-select: none;
  -webkit-user-select: none;
}
body::before {
  content: "";
  position: fixed;
  inset: 0;
  background:
    radial-gradient(1200px 800px at 15% 10%, rgba(61,123,255,0.12), transparent 60%),
    radial-gradient(1000px 700px at 85% 90%, rgba(255,77,77,0.08), transparent 60%),
    radial-gradient(900px 600px at 50% 50%, rgba(53,201,111,0.05), transparent 60%);
  pointer-events: none;
  z-index: 0;
}
[data-theme="light"] body::before {
  background:
    radial-gradient(1000px 700px at 15% 10%, rgba(61,123,255,0.18), transparent 60%),
    radial-gradient(1000px 700px at 85% 90%, rgba(255,138,61,0.12), transparent 60%);
}
button { font-family: inherit; cursor: pointer; border: none; background: none; color: inherit; }
input, select, textarea { font-family: inherit; }

.hidden { display: none !important; }
.mt-2 { margin-top: 16px; }
.text-muted { color: var(--text-mute); font-size: 13px; }

/* ============================================
   LOADING SCREEN
   ============================================ */
.loading-screen {
  position: fixed; inset: 0; z-index: 1000;
  background: var(--bg);
  display: flex; align-items: center; justify-content: center;
  transition: opacity 0.6s var(--ease), visibility 0.6s;
}
.loading-screen.fade-out { opacity: 0; visibility: hidden; }
.loader-content { text-align: center; }
.loader-cube {
  width: 80px; height: 80px; margin: 0 auto 24px;
  position: relative;
  transform-style: preserve-3d;
  animation: cubeSpin 3s infinite linear;
}
.loader-face {
  position: absolute; inset: 0;
  border: 2px solid var(--border-strong);
  background: var(--panel);
  backdrop-filter: blur(10px);
}
.loader-face.front  { transform: translateZ(40px); border-color: var(--stk-red); }
.loader-face.back   { transform: rotateY(180deg) translateZ(40px); border-color: var(--stk-orange); }
.loader-face.right  { transform: rotateY(90deg) translateZ(40px); border-color: var(--stk-blue); }
.loader-face.left   { transform: rotateY(-90deg) translateZ(40px); border-color: var(--stk-green); }
.loader-face.top    { transform: rotateX(90deg) translateZ(40px); border-color: var(--stk-yellow); }
.loader-face.bottom { transform: rotateX(-90deg) translateZ(40px); border-color: var(--stk-white); }

@keyframes cubeSpin {
  0%   { transform: rotateX(0deg) rotateY(0deg); }
  100% { transform: rotateX(360deg) rotateY(360deg); }
}

.loader-title {
  font-size: 36px; font-weight: 700; letter-spacing: 6px;
  background: linear-gradient(135deg, var(--text), var(--text-dim));
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 4px;
}
.loader-subtitle {
  font-size: 11px; letter-spacing: 4px; color: var(--text-mute); margin-bottom: 24px;
}
.loader-bar {
  width: 200px; height: 3px; background: var(--panel);
  border-radius: 3px; overflow: hidden; margin: 0 auto;
}
.loader-bar-fill {
  height: 100%; width: 0%;
  background: linear-gradient(90deg, var(--accent), #7C4DFF);
  transition: width 0.4s var(--ease);
}
.loader-status {
  font-size: 11px; color: var(--text-mute); margin-top: 12px; letter-spacing: 1px;
}

/* ============================================
   START SCREEN
   ============================================ */
.start-screen {
  position: fixed; inset: 0; z-index: 900;
  display: flex; align-items: center; justify-content: center;
  transition: opacity 0.6s var(--ease), visibility 0.6s;
}
.start-screen.fade-out { opacity: 0; visibility: hidden; }
.start-backdrop {
  position: absolute; inset: 0;
  background:
    radial-gradient(800px 600px at 20% 30%, rgba(61,123,255,0.2), transparent 60%),
    radial-gradient(700px 500px at 80% 70%, rgba(255,77,77,0.15), transparent 60%);
  animation: bgFloat 20s infinite ease-in-out;
}
@keyframes bgFloat {
  0%, 100% { transform: translate(0,0); }
  50% { transform: translate(-20px,20px); }
}
.start-content { position: relative; z-index: 1; text-align: center; padding: 24px; max-width: 420px; width: 100%; }
.start-logo { margin-bottom: 40px; animation: fadeUp 0.8s var(--ease) both; }
.start-logo-mark {
  width: 64px; height: 64px; margin: 0 auto 20px;
  background: linear-gradient(135deg, var(--accent), #7C4DFF);
  border-radius: 16px;
  position: relative;
  box-shadow: 0 10px 40px var(--accent-glow);
  animation: markFloat 3s infinite var(--ease);
}
.start-logo-mark::after {
  content: ""; position: absolute; inset: 6px;
  border: 2px solid rgba(255,255,255,0.3);
  border-radius: 10px;
}
@keyframes markFloat {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-8px) rotate(8deg); }
}
.start-logo h1 {
  font-size: 56px; font-weight: 700; letter-spacing: 10px;
  background: linear-gradient(135deg, #fff, var(--text-dim));
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 4px;
}
[data-theme="light"] .start-logo h1 {
  background: linear-gradient(135deg, #0f172a, var(--text-dim));
  -webkit-background-clip: text; background-clip: text;
}
.start-logo p {
  font-size: 12px; letter-spacing: 6px; color: var(--text-mute);
}
.start-buttons {
  display: flex; flex-direction: column; gap: 12px;
  animation: fadeUp 0.8s 0.1s var(--ease) both;
}
.start-version {
  margin-top: 32px; font-size: 11px; color: var(--text-mute); letter-spacing: 2px;
  animation: fadeUp 0.8s 0.2s var(--ease) both;
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ============================================
   APP SHELL
   ============================================ */
.app {
  position: fixed; inset: 0;
  display: grid;
  grid-template-rows: var(--header-h) 1fr;
  z-index: 1;
}

/* HEADER */
.header {
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 20px;
  background: var(--panel);
  backdrop-filter: blur(20px) saturate(150%);
  -webkit-backdrop-filter: blur(20px) saturate(150%);
  border-bottom: 1px solid var(--border);
  z-index: 20;
  position: relative;
}
.header-left, .header-right { display: flex; align-items: center; gap: 8px; min-width: 160px; }
.header-right { justify-content: flex-end; }
.brand { display: flex; align-items: center; gap: 12px; }
.brand-mark {
  width: 36px; height: 36px;
  background: linear-gradient(135deg, var(--accent), #7C4DFF);
  border-radius: 10px;
  position: relative;
  box-shadow: 0 4px 20px var(--accent-glow);
}
.brand-mark::after {
  content: ""; position: absolute; inset: 5px;
  border: 1.5px solid rgba(255,255,255,0.3); border-radius: 6px;
}
.brand-title { font-size: 18px; font-weight: 700; letter-spacing: 3px; line-height: 1; }
.brand-subtitle { font-size: 9px; letter-spacing: 2px; color: var(--text-mute); margin-top: 2px; }

.mode-chip {
  padding: 6px 14px; font-size: 10px; font-weight: 600; letter-spacing: 2px;
  background: var(--panel-strong); border: 1px solid var(--border-strong);
  border-radius: 999px; color: var(--text);
}

.icon-btn {
  width: 40px; height: 40px;
  display: flex; align-items: center; justify-content: center;
  border-radius: 10px;
  background: transparent;
  border: 1px solid transparent;
  color: var(--text-dim);
  transition: all 0.2s var(--ease);
}
.icon-btn svg { width: 18px; height: 18px; }
.icon-btn:hover {
  background: var(--panel-strong); color: var(--text); border-color: var(--border);
  transform: translateY(-1px);
}
.icon-btn:active { transform: translateY(0) scale(0.96); }

/* MAIN LAYOUT */
.main {
  display: grid;
  grid-template-columns: var(--sidebar-w) 1fr var(--right-w);
  height: calc(100vh - var(--header-h));
  overflow: hidden;
  position: relative;
}

/* SIDEBAR */
.sidebar {
  background: var(--panel);
  backdrop-filter: blur(20px);
  border-right: 1px solid var(--border);
  display: flex; flex-direction: column;
  padding: 20px 12px;
  gap: 8px;
  overflow-y: auto;
}
.sidebar-nav { display: flex; flex-direction: column; gap: 4px; }
.nav-item {
  display: flex; align-items: center; gap: 12px;
  padding: 10px 14px;
  border-radius: var(--radius-md);
  color: var(--text-dim);
  font-size: 13px; font-weight: 500;
  transition: all 0.2s var(--ease);
  text-align: left; width: 100%;
  border: 1px solid transparent;
}
.nav-item svg { width: 18px; height: 18px; flex-shrink: 0; }
.nav-item:hover { color: var(--text); background: var(--panel); }
.nav-item.active {
  background: var(--panel-strong);
  color: var(--text);
  border-color: var(--border-strong);
  box-shadow: inset 0 0 0 1px var(--border-strong);
}
.nav-item.active::before {
  content: "";
  position: absolute; left: 0; top: 50%;
  transform: translateY(-50%);
  width: 3px; height: 20px;
  background: var(--accent);
  border-radius: 3px;
}
.sidebar-footer {
  margin-top: auto;
  padding-top: 16px;
  border-top: 1px solid var(--border);
  display: grid; grid-template-columns: 1fr 1fr; gap: 8px;
}
.sidebar-stat {
  background: var(--panel); padding: 12px;
  border-radius: var(--radius-md);
  border: 1px solid var(--border);
}
.sidebar-stat-label {
  font-size: 9px; letter-spacing: 2px; color: var(--text-mute); margin-bottom: 4px;
}
.sidebar-stat-value {
  font-family: var(--font-mono); font-size: 16px; font-weight: 600; color: var(--text);
}

/* GAME AREA */
.game-area {
  display: grid;
  grid-template-rows: auto 1fr auto auto;
  padding: 16px;
  gap: 16px;
  overflow: hidden;
  position: relative;
}

/* TIMER */
.timer-panel {
  display: flex; flex-direction: column; align-items: center; gap: 8px;
  padding: 16px;
  background: var(--panel);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  position: relative;
}
.timer-panel::before {
  content: "";
  position: absolute; inset: 0;
  background: radial-gradient(circle at 50% 0%, var(--accent-glow), transparent 70%);
  opacity: 0.15;
  pointer-events: none;
  border-radius: inherit;
}
.timer-display {
  font-family: var(--font-mono);
  font-size: clamp(36px, 6vw, 56px);
  font-weight: 600; letter-spacing: 2px;
  color: var(--text);
  position: relative;
  z-index: 1;
  transition: color 0.2s;
}
.timer-display.running { color: var(--success); }
.timer-display.paused { color: var(--warning); animation: pulse 1.2s infinite; }
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}
.timer-meta {
  display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;
  position: relative; z-index: 1;
}
.meta-chip {
  font-family: var(--font-mono); font-size: 10px;
  padding: 4px 10px;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 999px;
  color: var(--text-dim);
  letter-spacing: 1px;
}

/* CANVAS */
.canvas-wrap {
  position: relative;
  width: 100%;
  border-radius: var(--radius-lg);
  overflow: hidden;
  background: linear-gradient(135deg, var(--bg-2), var(--bg-3));
  border: 1px solid var(--border);
  touch-action: none;
  min-height: 300px;
}
#gameCanvas {
  display: block; width: 100%; height: 100%;
}
.canvas-overlay {
  position: absolute; inset: 0;
  pointer-events: none;
  padding: 16px;
}
.canvas-overlay > * { pointer-events: auto; }
.hint {
  position: absolute; top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  display: flex; align-items: center; gap: 10px;
  padding: 10px 18px;
  background: var(--panel-strong);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-strong);
  border-radius: 999px;
  font-size: 13px; color: var(--text-dim);
  animation: hintFloat 3s infinite ease-in-out;
  transition: opacity 0.3s var(--ease);
}
.hint svg { width: 16px; height: 16px; color: var(--accent); }
.hint.hidden { opacity: 0; visibility: hidden; }
@keyframes hintFloat {
  0%, 100% { transform: translate(-50%, -50%); }
  50% { transform: translate(-50%, -55%); }
}
.reset-view-btn {
  position: absolute; bottom: 16px; right: 16px;
  width: 40px; height: 40px;
  display: flex; align-items: center; justify-content: center;
  background: var(--panel-strong);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-strong);
  border-radius: 10px;
  color: var(--text-dim);
  transition: all 0.2s var(--ease);
}
.reset-view-btn:hover { color: var(--text); background: var(--panel); transform: translateY(-2px); }
.reset-view-btn svg { width: 16px; height: 16px; }

/* SCRAMBLE PANEL */
.scramble-panel {
  display: flex; flex-direction: column; gap: 10px;
  padding: 16px 20px;
  background: var(--panel);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  align-items: center;
}
.scramble-label {
  font-size: 10px; font-weight: 600; letter-spacing: 3px; color: var(--text-mute);
}
.scramble-text {
  font-family: var(--font-mono); font-size: clamp(14px, 2vw, 18px);
  color: var(--text);
  font-weight: 500;
  letter-spacing: 2px;
  text-align: center;
  min-height: 24px;
  padding: 4px 12px;
}
.scramble-text .mv { color: var(--accent); }
.scramble-actions {
  display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;
}

/* CONTROLS */
.controls-panel {
  display: flex; flex-direction: column; align-items: center; gap: 6px;
  padding: 16px;
  background: var(--panel);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
}
.controls-row {
  display: flex; gap: 6px; justify-content: center;
}
.ctrl-btn {
  min-width: 64px; height: 56px;
  padding: 8px 12px;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  background: var(--panel-strong);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-md);
  color: var(--text);
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 1px;
  transition: all 0.15s var(--ease);
  position: relative;
  overflow: hidden;
}
.ctrl-btn small {
  font-size: 9px; font-weight: 500; color: var(--text-mute); margin-top: 2px;
  letter-spacing: 2px;
}
.ctrl-btn:hover {
  transform: translateY(-2px);
  background: var(--panel);
  border-color: var(--accent);
  box-shadow: 0 6px 20px var(--accent-glow);
}
.ctrl-btn:active { transform: translateY(0) scale(0.95); }
.ctrl-btn.alt {
  background: var(--panel);
  border-color: var(--border);
  font-size: 14px;
  min-width: 54px; height: 44px;
}
.ctrl-btn::after {
  content: "";
  position: absolute;
  width: 100px; height: 100px;
  background: radial-gradient(circle, rgba(255,255,255,0.4), transparent 70%);
  left: 50%; top: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.4s;
  pointer-events: none;
}
.ctrl-btn:active::after {
  transform: translate(-50%, -50%) scale(1);
  transition: transform 0s;
}

/* RIGHT PANEL */
.right-panel {
  background: var(--panel);
  backdrop-filter: blur(20px);
  border-left: 1px solid var(--border);
  padding: 16px;
  overflow-y: auto;
  overflow-x: hidden;
}
.panel {
  animation: fadeUp 0.3s var(--ease);
}
.panel-header {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 14px;
  gap: 8px;
}
.panel-header h2 {
  font-size: 13px; font-weight: 600; letter-spacing: 2px;
  color: var(--text); text-transform: uppercase;
}
.panel-actions { display: flex; gap: 6px; }
.panel-actions .btn { font-size: 11px; padding: 6px 10px; }
.panel-actions .btn svg { width: 12px; height: 12px; }

/* MOVES LIST */
.moves-list {
  display: flex; flex-direction: column; gap: 6px;
  max-height: 50vh;
  overflow-y: auto;
  padding-right: 4px;
}
.moves-list::-webkit-scrollbar { width: 6px; }
.moves-list::-webkit-scrollbar-thumb { background: var(--border-strong); border-radius: 3px; }
.move-item {
  display: flex; align-items: center; gap: 10px;
  padding: 8px 12px;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  font-family: var(--font-mono);
  font-size: 13px;
  animation: slideIn 0.25s var(--ease);
}
.move-item .idx {
  font-size: 10px; color: var(--text-mute); min-width: 24px;
}
.move-item .name {
  font-weight: 600; color: var(--text); letter-spacing: 1px;
}
@keyframes slideIn {
  from { opacity: 0; transform: translateX(20px); }
  to { opacity: 1; transform: translateX(0); }
}

/* STATS GRID */
.stats-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 10px;
  margin-bottom: 16px;
}
.stat-card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 14px;
  transition: all 0.2s var(--ease);
}
.stat-card:hover {
  border-color: var(--border-strong);
  transform: translateY(-2px);
}
.stat-label {
  font-size: 9px; font-weight: 600; letter-spacing: 2px; color: var(--text-mute); margin-bottom: 6px;
}
.stat-value {
  font-family: var(--font-mono);
  font-size: 20px; font-weight: 600; color: var(--text); letter-spacing: 1px;
}

.solves-list {
  display: flex; flex-direction: column; gap: 4px;
  max-height: 40vh;
  overflow-y: auto;
}
.solve-row {
  display: grid; grid-template-columns: 30px 1fr auto;
  gap: 10px;
  padding: 8px 10px;
  font-family: var(--font-mono);
  font-size: 12px;
  border-bottom: 1px solid var(--border);
  cursor: pointer;
  transition: background 0.2s;
}
.solve-row:hover { background: var(--panel); }
.solve-row .sn { color: var(--text-mute); }
.solve-row .st { color: var(--text); font-weight: 600; }
.solve-row .sm { color: var(--text-dim); font-size: 11px; }

/* EMPTY STATE */
.empty-state {
  text-align: center;
  padding: 30px 10px;
  color: var(--text-mute);
  font-size: 12px;
}
.empty-state svg {
  width: 32px; height: 32px; margin-bottom: 8px; opacity: 0.4;
}

/* SETTINGS */
.settings-list {
  display: flex; flex-direction: column; gap: 2px;
}
.setting-row {
  display: flex; align-items: center; justify-content: space-between;
  padding: 14px 0;
  border-bottom: 1px solid var(--border);
  gap: 12px;
}
.setting-row:last-child { border-bottom: none; }
.setting-info { flex: 1; min-width: 0; }
.setting-label { font-size: 13px; font-weight: 500; color: var(--text); }
.setting-desc { font-size: 11px; color: var(--text-mute); margin-top: 2px; }
.setting-select {
  background: var(--panel);
  color: var(--text);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 6px 10px;
  font-size: 12px;
  cursor: pointer;
  outline: none;
  transition: border-color 0.2s;
}
.setting-select:hover, .setting-select:focus { border-color: var(--accent); }

.toggle {
  position: relative;
  display: inline-block;
  width: 40px; height: 22px;
}
.toggle input { opacity: 0; width: 0; height: 0; }
.toggle-slider {
  position: absolute; inset: 0;
  background: var(--panel-strong);
  border: 1px solid var(--border-strong);
  border-radius: 22px;
  cursor: pointer;
  transition: all 0.2s var(--ease);
}
.toggle-slider::before {
  content: "";
  position: absolute;
  left: 2px; top: 2px;
  width: 16px; height: 16px;
  background: var(--text-dim);
  border-radius: 50%;
  transition: all 0.2s var(--ease-spring);
}
.toggle input:checked + .toggle-slider {
  background: var(--accent); border-color: var(--accent);
}
.toggle input:checked + .toggle-slider::before {
  transform: translateX(18px);
  background: #fff;
}

.danger-zone {
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid var(--border);
}

/* HELP */
.help-content {
  display: flex; flex-direction: column; gap: 10px;
}
.help-step {
  display: flex; gap: 12px; align-items: flex-start;
  padding: 10px 12px;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  font-size: 13px;
}
.help-num {
  flex-shrink: 0;
  width: 24px; height: 24px;
  background: var(--accent);
  color: #fff;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-weight: 700; font-size: 11px;
}
.keys-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 6px;
}
.key-item {
  font-size: 12px;
  color: var(--text-dim);
  padding: 6px 8px;
  border-radius: 6px;
  background: var(--panel);
  border: 1px solid var(--border);
  display: flex; align-items: center; gap: 8px;
}
.key-item kbd {
  font-family: var(--font-mono);
  background: var(--panel-strong);
  border: 1px solid var(--border-strong);
  border-radius: 4px;
  padding: 2px 6px;
  font-size: 10px;
  color: var(--text);
  min-width: 28px; text-align: center;
  letter-spacing: 0;
}

/* BUTTONS */
.btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 8px;
  padding: 10px 16px;
  border-radius: var(--radius-md);
  font-size: 12px; font-weight: 600; letter-spacing: 1.5px;
  transition: all 0.2s var(--ease);
  cursor: pointer;
  border: 1px solid transparent;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  white-space: nowrap;
}
.btn svg { width: 14px; height: 14px; }
.btn:active { transform: scale(0.97); }
.btn-primary {
  background: linear-gradient(135deg, var(--accent), #5C8DFF);
  color: #fff;
  box-shadow: 0 4px 20px var(--accent-glow);
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px var(--accent-glow);
}
.btn-secondary {
  background: var(--panel-strong);
  color: var(--text);
  border-color: var(--border-strong);
}
.btn-secondary:hover {
  background: var(--panel);
  border-color: var(--accent);
}
.btn-ghost {
  background: transparent;
  color: var(--text-dim);
}
.btn-ghost:hover { color: var(--text); background: var(--panel); }
.btn-danger {
  background: rgba(255,91,91,0.1);
  color: var(--danger);
  border-color: rgba(255,91,91,0.3);
}
.btn-danger:hover {
  background: var(--danger);
  color: #fff;
  border-color: var(--danger);
}
.btn-lg { padding: 14px 24px; font-size: 13px; }
.btn-sm { padding: 6px 10px; font-size: 10px; }

/* MOBILE NAV */
.mobile-nav {
  display: none;
  position: fixed; bottom: 0; left: 0; right: 0;
  background: var(--panel);
  backdrop-filter: blur(20px);
  border-top: 1px solid var(--border);
  padding: 8px 16px calc(8px + env(safe-area-inset-bottom));
  z-index: 30;
  grid-template-columns: repeat(4, 1fr);
  gap: 4px;
}
.mobile-nav-item {
  display: flex; flex-direction: column; align-items: center; gap: 2px;
  padding: 8px 4px;
  border-radius: 8px;
  color: var(--text-mute);
  font-size: 9px; font-weight: 600; letter-spacing: 1px;
  transition: all 0.2s;
}
.mobile-nav-item svg { width: 20px; height: 20px; }
.mobile-nav-item.active { color: var(--accent); }

/* TOASTS */
.toast-container {
  position: fixed;
  top: calc(var(--header-h) + 16px);
  right: 16px;
  z-index: 500;
  display: flex; flex-direction: column; gap: 8px;
  pointer-events: none;
}
.toast {
  background: var(--panel-strong);
  backdrop-filter: blur(20px);
  border: 1px solid var(--border-strong);
  color: var(--text);
  padding: 12px 16px;
  border-radius: var(--radius-md);
  font-size: 13px;
  min-width: 240px;
  display: flex; align-items: center; gap: 10px;
  box-shadow: 0 8px 30px rgba(0,0,0,0.3);
  animation: toastIn 0.3s var(--ease-spring);
  pointer-events: auto;
}
.toast.out { animation: toastOut 0.3s var(--ease) forwards; }
.toast svg { width: 16px; height: 16px; flex-shrink: 0; }
.toast.success { border-color: var(--success); }
.toast.success svg { color: var(--success); }
.toast.info svg { color: var(--accent); }
@keyframes toastIn {
  from { opacity: 0; transform: translateX(40px); }
  to { opacity: 1; transform: translateX(0); }
}
@keyframes toastOut {
  to { opacity: 0; transform: translateX(40px); }
}

/* MODALS */
.modal-overlay {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.6);
  backdrop-filter: blur(10px);
  display: flex; align-items: center; justify-content: center;
  padding: 20px;
  z-index: 600;
  animation: fadeIn 0.2s var(--ease);
}
.modal-overlay.hidden { display: none; }
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.modal {
  background: var(--bg-2);
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-lg);
  padding: 32px;
  max-width: 440px; width: 100%;
  position: relative;
  overflow: hidden;
  animation: modalIn 0.3s var(--ease-spring);
  box-shadow: 0 30px 80px rgba(0,0,0,0.5);
}
.modal-sm { max-width: 360px; padding: 24px; }
@keyframes modalIn {
  from { opacity: 0; transform: scale(0.9) translateY(20px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
.modal-head { text-align: center; margin-bottom: 24px; position: relative; }
.modal h2 {
  font-size: 13px; letter-spacing: 4px; color: var(--text-dim); margin-bottom: 8px;
  text-transform: uppercase;
}
.trophy-icon {
  font-size: 48px; margin-bottom: 12px;
  display: inline-block;
  animation: trophyBounce 0.8s var(--ease-spring);
}
@keyframes trophyBounce {
  0% { transform: scale(0) rotate(-30deg); }
  60% { transform: scale(1.2) rotate(10deg); }
  100% { transform: scale(1) rotate(0deg); }
}
.big-time {
  font-family: var(--font-mono);
  font-size: 48px;
  font-weight: 700;
  letter-spacing: 3px;
  color: var(--text);
  margin: 8px 0;
}
.best-badge {
  display: inline-block;
  padding: 6px 14px;
  background: linear-gradient(135deg, #FFD93D, #FF8A3D);
  color: #0a0a0a;
  font-size: 10px; font-weight: 700; letter-spacing: 2px;
  border-radius: 999px;
  margin-top: 4px;
  animation: glow 2s infinite;
}
@keyframes glow {
  0%, 100% { box-shadow: 0 0 20px rgba(255,217,61,0.5); }
  50% { box-shadow: 0 0 30px rgba(255,217,61,0.9); }
}
.modal-stats {
  display: grid; grid-template-columns: 1fr 1fr; gap: 10px;
  margin-bottom: 24px;
}
.modal-stat {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 12px;
  text-align: center;
}
.ms-label {
  font-size: 9px; font-weight: 600; letter-spacing: 2px; color: var(--text-mute);
}
.ms-value {
  font-family: var(--font-mono); font-size: 20px; font-weight: 600; margin-top: 4px; color: var(--text);
}
.ms-scramble { font-size: 10px; line-height: 1.4; word-break: break-all; }
.modal-actions {
  display: flex; gap: 8px;
  flex-wrap: wrap;
}
.modal-actions .btn { flex: 1; min-width: 140px; }

#confirmTitle {
  font-size: 18px; letter-spacing: 1px; margin-bottom: 8px;
  text-transform: none; color: var(--text);
}
#confirmMessage {
  font-size: 13px; color: var(--text-dim); margin-bottom: 20px;
}

/* CONFETTI */
.confetti-container {
  position: absolute; inset: 0; pointer-events: none; overflow: hidden;
}
.confetti-piece {
  position: absolute;
  width: 8px; height: 14px;
  top: -20px;
  animation: confettiFall linear forwards;
}
@keyframes confettiFall {
  0% { transform: translateY(-20px) rotate(0deg); opacity: 1; }
  100% { transform: translateY(500px) rotate(720deg); opacity: 0; }
}

/* SCROLLBARS */
::-webkit-scrollbar { width: 8px; height: 8px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: var(--border-strong); }

/* ============================================
   RESPONSIVE
   ============================================ */
@media (max-width: 1024px) {
  .main {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
  }
  .sidebar { display: none; }
  .right-panel {
    position: fixed; bottom: 0; left: 0; right: 0;
    top: auto;
    height: 60vh;
    max-height: 500px;
    border-left: none;
    border-top: 1px solid var(--border);
    border-radius: var(--radius-lg) var(--radius-lg) 0 0;
    transform: translateY(calc(100% - 0px));
    transition: transform 0.3s var(--ease);
    z-index: 25;
    padding-bottom: calc(16px + env(safe-area-inset-bottom) + 60px);
  }
  .right-panel.open { transform: translateY(0); }
  .mobile-nav { display: grid; }
  .game-area { padding-bottom: calc(16px + 60px); }
  .timer-panel { padding: 12px; }
  .timer-display { font-size: 36px !important; }
  .controls-panel { padding: 12px; }
  .ctrl-btn { min-width: 52px; height: 48px; font-size: 15px; }
  .ctrl-btn small { display: none; }
  .ctrl-btn.alt { min-width: 44px; height: 38px; }
  .toast-container { top: 80px; right: 10px; left: 10px; }
  .toast { min-width: auto; }
}

@media (max-width: 640px) {
  .header { padding: 0 12px; }
  .brand-title { font-size: 15px; letter-spacing: 2px; }
  .brand-subtitle { font-size: 8px; }
  .mode-chip { font-size: 9px; padding: 4px 10px; }
  .header-left, .header-right { min-width: auto; }
  .icon-btn { width: 36px; height: 36px; }
  .game-area { padding: 10px; gap: 10px; padding-bottom: calc(10px + 60px); }
  .timer-panel { padding: 10px; }
  .timer-display { font-size: 28px !important; }
  .scramble-panel { padding: 10px 14px; }
  .scramble-text { font-size: 12px; letter-spacing: 1px; }
  .controls-panel { padding: 8px; }
  .controls-row { gap: 4px; }
  .ctrl-btn { min-width: 44px; height: 44px; font-size: 13px; }
  .ctrl-btn.alt { min-width: 38px; height: 36px; font-size: 12px; }
  .scramble-actions .btn { font-size: 10px; padding: 8px 12px; }
  .modal { padding: 24px 18px; }
  .big-time { font-size: 36px; }
  .start-logo h1 { font-size: 40px; letter-spacing: 6px; }
  .start-logo p { font-size: 10px; }
  .start-logo-mark { width: 52px; height: 52px; }
}

@media (max-width: 400px) {
  .timer-display { font-size: 24px !important; }
  .ctrl-btn { min-width: 40px; height: 42px; font-size: 12px; }
  .ctrl-btn.alt { min-width: 36px; height: 34px; }
}
