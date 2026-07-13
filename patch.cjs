const fs = require('fs');

const tsxCode = fs.readFileSync('src/App.tsx', 'utf8');
const tsxStart = tsxCode.indexOf('        <div className="hero-illustration">');
const tsxEnd = tsxCode.indexOf('      </main>', tsxStart);

if (tsxStart > -1 && tsxEnd > -1) {
  const newTsx = `        <div className="hero-illustration">
          <div className="floating-scene">
            <div className="iso-wrapper">
              
              {/* Center Phone */}
              <div className="iso-phone float-main">
                <div className="iso-phone-screen center-screen">
                  <div className="center-header">
                    <div className="ch-left"></div>
                    <div className="ch-right"></div>
                  </div>
                  <div className="center-balance">
                    <div className="cb-number">96,258.96</div>
                    <div className="cb-label">
                      <div className="cb-line"></div>
                      <div className="cb-line short"></div>
                    </div>
                  </div>
                  
                  <div className="center-list">
                    {[1, 2, 3, 4].map(i => (
                      <div className="c-list-item" key={i}>
                        <div className="c-li-icon"></div>
                        <div className="c-li-lines">
                          <div className="c-line"></div>
                          <div className="c-line short"></div>
                        </div>
                        <div className="c-li-toggle"></div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="center-buttons">
                    <div className="c-btn"></div>
                    <div className="c-btn"></div>
                  </div>
                  
                  <div className="center-nav">
                    <div className="c-nav-icon active"></div>
                    <div className="c-nav-icon"></div>
                    <div className="c-nav-icon"></div>
                  </div>
                </div>
              </div>

              {/* Top Left Phone */}
              <div className="iso-phone-small card-tl float-slow">
                <div className="iso-phone-screen glass-screen">
                  <div className="tl-header">
                    <div className="tl-title-line"></div>
                    <div className="tl-title-line short"></div>
                  </div>
                  <div className="tl-grid">
                    {[...Array(12)].map((_, i) => (
                      <div className="tl-icon" key={i}>
                        <div className="tl-icon-inner"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Top Right Phone */}
              <div className="iso-phone-small card-tr float-med">
                <div className="iso-phone-screen glass-screen">
                  <div className="tr-header">
                    <div className="tr-logo"></div>
                    <div className="tr-title-line"></div>
                  </div>
                  <div className="tr-network">
                    <svg viewBox="0 0 100 60" width="100%" height="60px">
                      <path d="M10,40 L30,20 L50,50 L70,30 L90,40 M30,20 L70,30 M50,50 L90,40" stroke="#8b5cf6" strokeWidth="1.5" fill="none" opacity="0.6"/>
                      <circle cx="10" cy="40" r="3" fill="#6366f1"/>
                      <circle cx="30" cy="20" r="3" fill="#6366f1"/>
                      <circle cx="50" cy="50" r="3" fill="#6366f1"/>
                      <circle cx="70" cy="30" r="3" fill="#6366f1"/>
                      <circle cx="90" cy="40" r="3" fill="#6366f1"/>
                    </svg>
                  </div>
                  <div className="tr-content-row">
                    <div className="tr-lines">
                      <div className="tr-line"></div>
                      <div className="tr-line"></div>
                      <div className="tr-line"></div>
                    </div>
                    <div className="tr-bar-chart">
                      {[40, 70, 50, 90, 60, 80].map((h, i) => (
                        <div className="tr-bar" style={{height: \`\${h}%\`}} key={i}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Left Phone */}
              <div className="iso-phone-small card-bl float-fast">
                <div className="iso-phone-screen glass-screen">
                  <div className="bl-header">
                    <div className="bl-title"></div>
                  </div>
                  <div className="bl-area-chart">
                    <svg viewBox="0 0 100 50" preserveAspectRatio="none">
                      <path d="M0,50 L0,20 C20,40 40,0 60,30 C80,10 100,20 100,50 Z" fill="url(#bl-grad)" opacity="0.9"/>
                      <defs>
                        <linearGradient id="bl-grad" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#8b5cf6"/>
                          <stop offset="100%" stopColor="rgba(139, 92, 246, 0.1)"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div className="bl-list">
                    <div className="bl-line long"></div>
                    <div className="bl-line med"></div>
                  </div>
                  <div className="bl-stair-chart">
                    {[20, 40, 60, 80].map((h, i) => (
                      <div className="bl-stair" style={{height: \`\${h}%\`}} key={i}>
                        <div className="bl-stair-cap"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Right Phone */}
              <div className="iso-phone-small card-br float-med">
                <div className="iso-phone-screen glass-screen">
                  <div className="br-header">
                    <div className="br-title"></div>
                    <div className="br-action"></div>
                  </div>
                  <div className="br-list">
                    {[1, 2, 3, 4].map(i => (
                      <div className="br-list-item" key={i}>
                        <div className="br-avatar"></div>
                        <div className="br-lines">
                          <div className="br-line"></div>
                          <div className="br-line short"></div>
                        </div>
                        <div className="br-value"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Far Bottom Right Mini Phone */}
              <div className="iso-phone-mini card-fbr float-slow">
                <div className="iso-phone-screen glass-screen">
                  <div className="fbr-header">
                    <div className="fbr-icon"></div>
                    <div className="fbr-icon"></div>
                  </div>
                  <div className="fbr-lines">
                    <div className="fbr-line"></div>
                    <div className="fbr-line short"></div>
                    <div className="fbr-line"></div>
                  </div>
                </div>
              </div>

              {/* Floating Coins/Tokens */}
              <div className="iso-coins coins-1 float-fast">
                <div className="iso-coin blue-glow"><div className="iso-coin-inner"></div></div>
                <div className="iso-coin purple-glow small c-offset-1"><div className="iso-coin-inner"></div></div>
                <div className="iso-coin blue-glow small c-offset-2"><div className="iso-coin-inner"></div></div>
              </div>

              <div className="iso-coins coins-2 float-slow">
                <div className="iso-coin purple-glow"><div className="iso-coin-inner"></div></div>
                <div className="iso-coin blue-glow small c-offset-1"><div className="iso-coin-inner"></div></div>
              </div>

              <div className="iso-coins coins-3 float-med">
                <div className="iso-coin blue-glow"><div className="iso-coin-inner"></div></div>
              </div>

            </div>
          </div>
        </div>
`;
  const resultTsx = tsxCode.substring(0, tsxStart) + newTsx + tsxCode.substring(tsxEnd);
  fs.writeFileSync('src/App.tsx', resultTsx);
} else {
  console.log('Could not find Tsx boundaries');
}

const cssCode = fs.readFileSync('src/App.css', 'utf8');
const cssStart = cssCode.indexOf('/* Floating CSS Scene (Real 3D Isometric) */');
const cssEnd = cssCode.indexOf('@media (max-width: 1024px) {', cssStart);

if (cssStart > -1 && cssEnd > -1) {
  const newCss = `/* Floating CSS Scene (Real 3D Isometric) */
.hero-illustration {
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  perspective: 2000px;
}

.floating-scene {
  width: 600px;
  height: 600px;
  position: relative;
  margin-right: -4rem;
}

.iso-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  transform: rotateX(60deg) rotateZ(-45deg);
  transform-style: preserve-3d;
}

/* Global Ground Shadow */
.iso-wrapper::after {
  content: '';
  position: absolute;
  top: 50%; left: 50%;
  width: 700px; height: 900px;
  transform: translate(-50%, -50%) translateZ(-50px);
  background: radial-gradient(ellipse at center, rgba(139, 92, 246, 0.2) 0%, rgba(99, 102, 241, 0.08) 40%, rgba(255,255,255,0) 70%);
  filter: blur(50px);
  z-index: -10;
  pointer-events: none;
}

/* Animations */
@keyframes floatMain {
  0%, 100% { transform: translateZ(40px); }
  50% { transform: translateZ(60px); }
}
@keyframes floatSlow {
  0%, 100% { transform: translateZ(20px); }
  50% { transform: translateZ(35px); }
}
@keyframes floatMed {
  0%, 100% { transform: translateZ(30px); }
  50% { transform: translateZ(45px); }
}
@keyframes floatFast {
  0%, 100% { transform: translateZ(50px); }
  50% { transform: translateZ(70px); }
}

.float-main { animation: floatMain 6s ease-in-out infinite; }
.float-slow { animation: floatSlow 8s ease-in-out infinite alternate; }
.float-med { animation: floatMed 7s ease-in-out infinite; }
.float-fast { animation: floatFast 5s ease-in-out infinite alternate; }

/* Main Phone */
.iso-phone {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 280px;
  height: 560px;
  margin-top: -280px;
  margin-left: -140px;
  background: #ffffff;
  border-radius: 40px;
  padding: 10px;
  box-shadow: 
    -10px 10px 20px rgba(139, 92, 246, 0.1),
    inset -2px -2px 10px rgba(0,0,0,0.05);
  transform-style: preserve-3d;
}

.iso-phone::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  border-radius: inherit;
  background: #e6e9fc;
  transform: translateZ(-20px);
  box-shadow: 
    -30px 30px 60px rgba(139, 92, 246, 0.35),
    -15px 15px 30px rgba(99, 102, 241, 0.25);
  z-index: -1;
}

/* Small Phones */
.iso-phone-small {
  position: absolute;
  background: #ffffff;
  border-radius: 24px;
  padding: 8px;
  box-shadow: 
    -5px 5px 15px rgba(139, 92, 246, 0.1),
    inset -1px -1px 5px rgba(0,0,0,0.05);
  transform-style: preserve-3d;
}

.iso-phone-small::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  border-radius: inherit;
  background: #e6e9fc;
  transform: translateZ(-12px);
  box-shadow: 
    -20px 20px 40px rgba(139, 92, 246, 0.25),
    -10px 10px 20px rgba(99, 102, 241, 0.15);
  z-index: -1;
}

/* Mini Phone */
.iso-phone-mini {
  position: absolute;
  background: #ffffff;
  border-radius: 16px;
  padding: 6px;
  box-shadow: -3px 3px 10px rgba(139, 92, 246, 0.1);
  transform-style: preserve-3d;
}

.iso-phone-mini::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  border-radius: inherit;
  background: #e6e9fc;
  transform: translateZ(-8px);
  box-shadow: -10px 10px 20px rgba(139, 92, 246, 0.2);
  z-index: -1;
}

/* Screen Styles */
.iso-phone-screen {
  width: 100%;
  height: 100%;
  border-radius: 30px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
}

.iso-phone-small .iso-phone-screen { border-radius: 16px; }
.iso-phone-mini .iso-phone-screen { border-radius: 10px; }

.center-screen {
  background: linear-gradient(135deg, #00f2fe 0%, #4facfe 30%, #a958fb 100%);
  padding: 24px 20px;
  color: white;
}

.glass-screen {
  background: linear-gradient(135deg, rgba(255,255,255,0.95), rgba(245,243,255,0.9));
  padding: 15px;
}

/* Phone Placements */
.card-tl { top: -10%; left: -5%; width: 180px; height: 260px; }
.card-tr { top: -5%; right: -25%; width: 220px; height: 320px; }
.card-bl { bottom: 5%; left: -15%; width: 200px; height: 280px; }
.card-br { bottom: 10%; right: -20%; width: 190px; height: 290px; }
.card-fbr { bottom: -15%; right: -5%; width: 140px; height: 180px; }

/* Center UI Details */
.center-header { display: flex; justify-content: space-between; margin-bottom: 25px; }
.ch-left { width: 30px; height: 10px; background: rgba(255,255,255,0.4); border-radius: 5px; }
.ch-right { width: 24px; height: 24px; background: rgba(255,255,255,0.4); border-radius: 50%; }

.center-balance { margin-bottom: 30px; text-align: center; }
.cb-number { font-size: 2.2rem; font-weight: 800; letter-spacing: 1px; margin-bottom: 8px; text-shadow: 0 2px 10px rgba(0,0,0,0.1); }
.cb-label { display: flex; flex-direction: column; align-items: center; gap: 4px; }
.cb-line { height: 6px; width: 60%; background: rgba(255,255,255,0.5); border-radius: 3px; }
.cb-line.short { width: 40%; }

.center-list { display: flex; flex-direction: column; gap: 12px; margin-bottom: auto; }
.c-list-item { background: rgba(255,255,255,0.15); backdrop-filter: blur(8px); border-radius: 12px; padding: 12px; display: flex; align-items: center; gap: 12px; }
.c-li-icon { width: 30px; height: 30px; border-radius: 50%; background: rgba(255,255,255,0.2); }
.c-li-lines { flex: 1; display: flex; flex-direction: column; gap: 5px; }
.c-line { height: 6px; background: rgba(255,255,255,0.7); border-radius: 3px; width: 80%; }
.c-line.short { width: 50%; background: rgba(255,255,255,0.4); }
.c-li-toggle { width: 24px; height: 14px; background: rgba(255,255,255,0.3); border-radius: 7px; position: relative; }
.c-li-toggle::after { content: ''; position: absolute; right: 2px; top: 2px; width: 10px; height: 10px; background: white; border-radius: 50%; }

.center-buttons { display: flex; gap: 12px; margin-top: 20px; margin-bottom: 15px; }
.c-btn { flex: 1; height: 45px; background: rgba(255,255,255,0.9); border-radius: 12px; }

.center-nav { display: flex; justify-content: space-around; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.2); }
.c-nav-icon { width: 20px; height: 20px; background: rgba(255,255,255,0.4); border-radius: 4px; }
.c-nav-icon.active { background: white; }

/* Top Left UI Details */
.tl-header { margin-bottom: 20px; display: flex; flex-direction: column; gap: 6px; }
.tl-title-line { height: 8px; background: #c4b5fd; border-radius: 4px; width: 70%; }
.tl-title-line.short { width: 40%; background: #e2e8f0; }
.tl-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.tl-icon { background: #f1f5f9; border-radius: 12px; aspect-ratio: 1; display: flex; align-items: center; justify-content: center; }
.tl-icon-inner { width: 50%; height: 50%; border-radius: 50%; background: linear-gradient(135deg, #8b5cf6, #c084fc); }

/* Top Right UI Details */
.tr-header { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; }
.tr-logo { width: 40px; height: 20px; background: #8b5cf6; border-radius: 10px; }
.tr-title-line { height: 6px; background: #e2e8f0; border-radius: 3px; flex: 1; }
.tr-network { height: 80px; margin-bottom: 20px; background: #f8fafc; border-radius: 8px; padding: 10px; }
.tr-content-row { display: flex; gap: 15px; align-items: flex-end; }
.tr-lines { flex: 1; display: flex; flex-direction: column; gap: 8px; }
.tr-line { height: 6px; background: #e2e8f0; border-radius: 3px; width: 100%; }
.tr-bar-chart { display: flex; align-items: flex-end; gap: 6px; height: 60px; width: 50%; }
.tr-bar { flex: 1; background: linear-gradient(to top, #8b5cf6, #c084fc); border-radius: 3px 3px 0 0; }

/* Bottom Left UI Details */
.bl-header { margin-bottom: 15px; }
.bl-title { height: 8px; width: 50%; background: #c4b5fd; border-radius: 4px; }
.bl-area-chart { height: 100px; margin-bottom: 15px; border-radius: 8px; overflow: hidden; background: #f8fafc; }
.bl-area-chart svg { width: 100%; height: 100%; }
.bl-list { margin-bottom: 15px; display: flex; flex-direction: column; gap: 6px; }
.bl-line { height: 6px; background: #e2e8f0; border-radius: 3px; }
.bl-line.long { width: 80%; }
.bl-line.med { width: 50%; }
.bl-stair-chart { display: flex; align-items: flex-end; gap: 8px; height: 60px; }
.bl-stair { flex: 1; background: #e0e7ff; border-radius: 4px 4px 0 0; position: relative; }
.bl-stair-cap { position: absolute; top: 0; left: 0; width: 100%; height: 6px; background: #8b5cf6; border-radius: 4px 4px 0 0; }

/* Bottom Right UI Details */
.br-header { display: flex; justify-content: space-between; margin-bottom: 20px; }
.br-title { height: 8px; width: 40%; background: #c4b5fd; border-radius: 4px; }
.br-action { width: 20px; height: 20px; border-radius: 50%; background: #e2e8f0; }
.br-list { display: flex; flex-direction: column; gap: 15px; }
.br-list-item { display: flex; align-items: center; gap: 10px; }
.br-avatar { width: 32px; height: 32px; border-radius: 50%; background: linear-gradient(135deg, #8b5cf6, #3b82f6); }
.br-lines { flex: 1; display: flex; flex-direction: column; gap: 5px; }
.br-line { height: 5px; background: #e2e8f0; border-radius: 2.5px; width: 90%; }
.br-line.short { width: 50%; }
.br-value { width: 24px; height: 12px; background: #c4b5fd; border-radius: 6px; }

/* Far Bottom Right Mini Phone */
.fbr-header { display: flex; justify-content: space-between; margin-bottom: 15px; }
.fbr-icon { width: 16px; height: 16px; border-radius: 50%; background: #e2e8f0; }
.fbr-lines { display: flex; flex-direction: column; gap: 8px; }
.fbr-line { height: 4px; background: #e2e8f0; border-radius: 2px; width: 80%; }
.fbr-line.short { width: 50%; background: #c4b5fd; }

/* Floating Coins */
.iso-coins {
  position: absolute;
  transform-style: preserve-3d;
}
.coins-1 { top: 10%; left: 25%; }
.coins-2 { bottom: 20%; left: -25%; }
.coins-3 { top: 40%; right: -30%; }

.iso-coin {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transform: translateZ(30px);
  display: flex;
  align-items: center;
  justify-content: center;
  transform-style: preserve-3d;
}

.iso-coin::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  border-radius: inherit;
  transform: translateZ(-4px);
  z-index: -1;
}

.iso-coin.small { width: 25px; height: 25px; }
.iso-coin.small::before { transform: translateZ(-2px); }

.c-offset-1 { top: 40px; left: -30px; }
.c-offset-2 { top: -20px; left: 50px; }

.blue-glow { 
  background: #3b82f6; 
  box-shadow: 0 0 15px rgba(59, 130, 246, 0.6), inset 0 0 10px rgba(255,255,255,0.5); 
}
.blue-glow::before { background: #1d4ed8; }
.blue-glow .iso-coin-inner { background: rgba(255,255,255,0.8); width: 40%; height: 40%; border-radius: 50%; }

.purple-glow { 
  background: #a855f7; 
  box-shadow: 0 0 15px rgba(168, 85, 247, 0.6), inset 0 0 10px rgba(255,255,255,0.5); 
}
.purple-glow::before { background: #7e22ce; }
.purple-glow .iso-coin-inner { background: rgba(255,255,255,0.8); width: 50%; height: 50%; clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); }
`;
  const resultCss = cssCode.substring(0, cssStart) + newCss + "\n" + cssCode.substring(cssEnd);
  fs.writeFileSync('src/App.css', resultCss);
} else {
  console.log('Could not find Css boundaries');
}

console.log("Done");
