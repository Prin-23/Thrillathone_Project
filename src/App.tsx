import { useState, useEffect, useRef } from 'react'
import './App.css'
import logoUrl from './assets/logo.png'
import handshakeIcon from './assets/handshake.png'
import targetIcon from './assets/target.png'
import s1Icon from './assets/s1.png'
import s2Icon from './assets/s2.png'
import s3Icon from './assets/s3.png'
import s4Icon from './assets/s4.png'
import s5Icon from './assets/s5.png'
import { FaWhatsapp, FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6'
import PrivacyPolicy from './PrivacyPolicy';

function App() {
  const initialHash = window.location.hash ? window.location.hash.substring(1) : 'home';
  const validNavs = ['home', 'about', 'services', 'cuboid', 'features', 'contact', 'policy'];
  const initialNav = validNavs.includes(initialHash) ? initialHash : 'home';
  
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeNav, setActiveNav] = useState<string>(initialNav);
  const [activeSlide, setActiveSlide] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isMobileProductsDropdownOpen, setIsMobileProductsDropdownOpen] = useState<boolean>(false);
  const isScrollingToRef = useRef<boolean>(false);

  const handleNavClick = (navTarget: string) => {
    setActiveNav(navTarget);
    window.history.replaceState(null, '', `#${navTarget}`);
    
    if (navTarget === 'policy') {
      window.scrollTo(0, 0);
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
        setIsMobileProductsDropdownOpen(false);
      }
      return;
    }

    isScrollingToRef.current = true;
    // Allow smooth scroll to finish before IntersectionObserver takes over again
    setTimeout(() => {
      isScrollingToRef.current = false;
    }, 1000);

    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
      setIsMobileProductsDropdownOpen(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isScrollingToRef.current) {
          const navTarget = entry.target.getAttribute('data-nav');
          const slideId = entry.target.id;
          if (navTarget) {
            setActiveNav(navTarget);
          }
          const hashTarget = slideId || navTarget;
          if (hashTarget) {
            window.history.replaceState(null, '', `#${hashTarget}`);
          }
          const slideTarget = entry.target.getAttribute('data-slide');
          setActiveSlide(slideTarget || '');
        }
      });
    }, {
      threshold: 0.5
    });

    const slides = document.querySelectorAll('.snap-slide');
    slides.forEach(slide => observer.observe(slide));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      // Only close if scrolled more than 15px to avoid tiny accidental scrolls
      if (Math.abs(window.scrollY - lastScrollY) > 15) {
        setIsMobileMenuOpen(false);
      }
    };

    // Only attach listener when menu is open to optimize performance
    if (isMobileMenuOpen) {
      // Add a small delay so the opening click doesn't accidentally trigger it
      const timer = setTimeout(() => {
        lastScrollY = window.scrollY;
        window.addEventListener('scroll', handleScroll, { passive: true });
      }, 150);

      return () => {
        clearTimeout(timer);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [isMobileMenuOpen]);

  const faqs = [
    {
      question: "How is Thillathon different from a typical software agency?",
      answer: "We act as your startup technology partner — strategy, product, engineering, integrations, AI, and launch all under one roof, with revenue as the goal, not deliverables.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>
      )
    },
    {
      question: "How quickly can I launch my product?",
      answer: "Most MVPs go live in 4-8 weeks. We follow a focused roadmap so you start selling early, then iterate based on real user feedback.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
      )
    },
    {
      question: "What if I don't have a complete idea yet?",
      answer: "Perfect time to talk to us. Our discovery sprint turns a rough idea into a validated product, tech, and launch blueprint.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 3.82-13.3c3.48-3.48 8.68-3.48 8.68-3.48s0 5.2-3.48 8.68A22 22 0 0 1 12 15z" /><path d="M9 18h2.09a2.2 2.2 0 0 0 2.12-1.63L14.5 12" /><path d="M2.5 14H6" /><path d="M10 2.5V6" /></svg>
      )
    },
    {
      question: "Can you guarantee product-market fit?",
      answer: "No agency can guarantee PMF, but we use rapid prototyping and real market validation loops to significantly increase your chances of finding traction early.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
      )
    },
    {
      question: "How do you price your services?",
      answer: "We offer flexible pricing options: fixed-bid for clearly scoped MVPs, or monthly retainer models for ongoing product development and scaling.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
      )
    },
    {
      question: "How long does it typically take to launch an MVP?",
      answer: "Depending on complexity, most of our startup MVPs are designed, engineered, and launched within 8 to 12 weeks.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
      )
    },
    {
      question: "Do you offer post-launch support and scaling?",
      answer: "Yes — we stay on as your long-term technology partner: feature releases, performance, infra, analytics, and growth experiments.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
      )
    }
  ];

  return (
    <div className="app-container">
      <div className="bg-glow"></div>

      <header className="header-container">
        <nav className="nav-bar">
          <div className="logo-container">
            <img src={logoUrl} alt="Thrillathon Logo" className="navbar-logo-img" />
          </div>

          <button className="mobile-menu-btn" aria-label="Toggle menu" onClick={() => { setIsMobileMenuOpen(!isMobileMenuOpen); setIsMobileProductsDropdownOpen(false); }}>
            {isMobileMenuOpen ? (
              <svg viewBox="0 0 24 24" width="28" height="28" stroke="#333" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="28" height="28" stroke="#333" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>

          <div className={`nav-links ${isMobileMenuOpen ? 'nav-links-open' : ''}`}>
            <a href="#home" onClick={() => handleNavClick('home')} className={`nav-link ${activeNav === 'home' ? 'active' : ''}`}>Home</a>
            <a href="#about" onClick={() => handleNavClick('about')} className={`nav-link ${activeNav === 'about' ? 'active' : ''}`}>About</a>
            <a href="#services" onClick={() => handleNavClick('services')} className={`nav-link ${activeNav === 'services' ? 'active' : ''}`}>Services</a>
            
            <div className={`nav-products-wrapper ${activeNav === 'cuboid' ? 'active' : ''}`}>
              <div className="nav-cuboid-container" onClick={() => handleNavClick('cuboid')}>
                <div className={`nav-slider ${activeSlide === '7' ? 'paused-whooppe' : activeSlide === '8' ? 'paused-harika' : activeSlide === '9' ? 'paused-products' : ''}`}>
                  <a href="#products" className="nav-slide-item nav-slide-item-1" style={{ textDecoration: 'none' }}>
                    OUR PRODUCTS
                  </a>
                  <a href="#whooppe" className="nav-slide-item nav-slide-item-2" style={{ textDecoration: 'none' }}>
                    WHOOPPE
                  </a>
                  <a href="#harika" className="nav-slide-item nav-slide-item-3" style={{ textDecoration: 'none' }}>
                    HARIKA AI
                  </a>
                </div>
              </div>
              <button 
                className="nav-mobile-dropdown-btn" 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileProductsDropdownOpen(!isMobileProductsDropdownOpen);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: isMobileProductsDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}><path d="m6 9 6 6 6-6"/></svg>
              </button>
              <div className={`nav-products-dropdown ${isMobileProductsDropdownOpen ? 'mobile-open' : ''}`}>
                <a href="#harika" onClick={(e) => { e.stopPropagation(); handleNavClick('cuboid'); setIsMobileProductsDropdownOpen(false); }} className="dropdown-item harika-text">HARIKA AI</a>
                <a href="#whooppe" onClick={(e) => { e.stopPropagation(); handleNavClick('cuboid'); setIsMobileProductsDropdownOpen(false); }} className="dropdown-item whooppe-text">WHOOPPE</a>
              </div>
            </div>
            <a href="#features" onClick={() => handleNavClick('features')} className={`nav-link ${activeNav === 'features' ? 'active' : ''}`}>Features</a>
            <a href="#contact" onClick={() => handleNavClick('contact')} className={`nav-link ${activeNav === 'contact' ? 'active' : ''}`}>Contact US</a>
            <a href="#policy" onClick={(e) => { e.preventDefault(); handleNavClick('policy'); }} className={`nav-link ${activeNav === 'policy' ? 'active' : ''}`}>Privacy Policy</a>
          </div>
        </nav>
      </header>

      <div style={{ display: activeNav === 'policy' ? 'none' : 'block' }}>
        <main id="home" className="hero-section snap-slide" data-nav="home">
        <div className="hero-content">
          <h1 className="hero-title">
            Build Your <span className="gradient-text-pink">Startup.</span><br />
            We Build <span className="gradient-text-blue">Everything.</span>
          </h1>

          <p className="hero-subtitle">
            From Idea Validation to Market Launch — We Build Complete Startup Ecosystems That Help Founders Start Selling From Day One.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary">
              Start Your Project &rarr;
            </button>
            <button className="btn btn-secondary">
              Contact us
            </button>
          </div>
        </div>

        <div className="hero-illustration">
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
                      <path d="M10,40 L30,20 L50,50 L70,30 L90,40 M30,20 L70,30 M50,50 L90,40" stroke="#8b5cf6" strokeWidth="1.5" fill="none" opacity="0.6" />
                      <circle cx="10" cy="40" r="3" fill="#6366f1" />
                      <circle cx="30" cy="20" r="3" fill="#6366f1" />
                      <circle cx="50" cy="50" r="3" fill="#6366f1" />
                      <circle cx="70" cy="30" r="3" fill="#6366f1" />
                      <circle cx="90" cy="40" r="3" fill="#6366f1" />
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
                        <div className="tr-bar" style={{ height: `${h}%` }} key={i}></div>
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
                      <path d="M0,50 L0,20 C20,40 40,0 60,30 C80,10 100,20 100,50 Z" fill="url(#bl-grad)" opacity="0.9" />
                      <defs>
                        <linearGradient id="bl-grad" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#8b5cf6" />
                          <stop offset="100%" stopColor="rgba(139, 92, 246, 0.1)" />
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
                      <div className="bl-stair" style={{ height: `${h}%` }} key={i}>
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
      </main>

      {/* Features Section */}
      <section id="about" className="features-section snap-slide snap-slide-flex" data-nav="about">
        <div className="features-header">
          <div className="kicker-container">
            <h3 className="features-kicker">WHY THRILLATHON</h3>
          </div>
          <h2 className="features-title">
            Built For <span className="gradient-text-alt">Modern Founders</span>
          </h2>
          <p className="features-description">
            End-to-end systems and workflows crafted to help ambitious founders launch faster, scale smarter, and grow stronger.
          </p>
        </div>

        <div className="features-body">
          <div className="features-column left-col">
            <div className="feature-item">
              <div className="feature-icon purple">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
              </div>
              <div className="feature-content">
                <h3>Faster Time To Market</h3>
                <p>Launch and iterate quickly with proven frameworks and reusable components.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="6" height="6" rx="1"></rect><rect x="15" y="3" width="6" height="6" rx="1"></rect><rect x="9" y="15" width="6" height="6" rx="1"></rect><path d="M6 9v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9"></path><path d="M12 13v2"></path></svg>
              </div>
              <div className="feature-content">
                <h3>End-To-End Execution</h3>
                <p>Strategy, design, build, and support — we handle the entire execution loop.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon red">
                <img src={targetIcon} alt="Target" width={24} height={24} />
              </div>
              <div className="feature-content">
                <h3>Revenue-Focused Approach</h3>
                <p>Every decision is backed by data, user behavior, and revenue impact to maximize results.</p>
              </div>
            </div>
          </div>

          <div className="features-center">
            <div className="circle-graphic">
              <div className="ring-outer spin-slow"></div>
              <div className="ring-middle spin-medium-reverse"></div>
              <div className="ring-inner spin-fast"></div>

              <div className="circle-logo">
                <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 22 30 L 82 30 L 76 42 L 16 42 Z" fill="url(#t-gradient)" />
                  <path d="M 48 42 L 66 42 L 46 80 L 28 80 Z" fill="url(#t-gradient)" />
                  <path d="M 38 52 L 43 52 L 29 76 L 24 76 Z" fill="url(#t-gradient)" />
                  <path d="M 28 66 L 33 66 L 23 80 L 18 80 Z" fill="url(#t-gradient)" />
                  <defs>
                    <linearGradient id="t-gradient" x1="16" y1="30" x2="82" y2="80" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#6366f1" />
                      <stop offset="1" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="orbit-container spin-slow">
                <div className="orbit-icon orbit-rocket counter-spin-slow">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
                </div>
                <div className="orbit-icon orbit-handshake counter-spin-slow">
                  <img src={handshakeIcon} alt="Handshake" width={26} height={26} />
                </div>
              </div>

              <div className="orbit-container spin-medium-reverse">
                <div className="orbit-icon orbit-diagram counter-spin-medium-reverse">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="6" height="6" rx="1"></rect><rect x="15" y="3" width="6" height="6" rx="1"></rect><rect x="9" y="15" width="6" height="6" rx="1"></rect><path d="M6 9v2a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9"></path><path d="M12 13v2"></path></svg>
                </div>
                <div className="orbit-icon orbit-layers counter-spin-medium-reverse">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 12 12 17 22 12"></polyline><polyline points="2 17 12 22 22 17"></polyline></svg>
                </div>
              </div>

              <div className="orbit-container spin-fast">
                <div className="orbit-icon orbit-chip counter-spin-fast">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
                </div>
                <div className="orbit-icon orbit-target counter-spin-fast">
                  <img src={targetIcon} alt="Target" width={26} height={26} />
                </div>
              </div>
            </div>

            <div className="center-text">
              <h4>Your Vision.<br />Our Execution.</h4>
              <p>Let's build what's next. Together.</p>
            </div>
          </div>

          <div className="features-column right-col">
            <div className="feature-item">
              <div className="feature-icon green">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>
              </div>
              <div className="feature-content">
                <h3>Future-Ready Technology</h3>
                <p>Modern, scalable tech stack that evolves with your idea, not against it.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon blue">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 12 12 17 22 12"></polyline><polyline points="2 17 12 22 22 17"></polyline></svg>
              </div>
              <div className="feature-content">
                <h3>Scalable Architecture</h3>
                <p>Built to go from MVP to millions of users without needing a complete rebuild.</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon purple">
                <img src={handshakeIcon} alt="Handshake" width={24} height={24} />
              </div>
              <div className="feature-content">
                <h3>Long-Term Partnership</h3>
                <p>We grow with you, beyond launch, as your trusted technology partner for the long run.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section snap-slide snap-slide-flex" data-nav="services">
        <div className="services-header">
          <h2 className="services-title">Everything Needed<br />To Launch A Startup</h2>
          <p className="services-subtitle">
            We handle the technology, integrations, and execution so you can<br />
            focus on growth and customers.
          </p>
        </div>

        <div className="services-grid">
          {/* Card 1 */}
          <div className="service-card">
            <div className="service-illustration">
              <div className="service-badge">
                <img src={s1Icon} alt="Icon" width={26} height={26} style={{ objectFit: 'contain' }} />
              </div>
              <img src="/service-1.png?v=3" alt="App Development" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '1rem' }} />
            </div>
            <div className="service-content">
              <h3>Android App Development</h3>
              <p>Modern mobile applications designed for growth, performance, and great UX.</p>
            </div>
            <div className="service-footer">
              e.g. A bookings app shipped in 6 weeks with payments + analytics.
            </div>
          </div>

          {/* Card 2 */}
          <div className="service-card">
            <div className="service-illustration">
              <div className="service-badge">
                <img src={s2Icon} alt="Icon" width={26} height={26} style={{ objectFit: 'contain' }} />
              </div>
              <img src="/service-2.png?v=3" alt="Product Development" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '1rem' }} />
            </div>
            <div className="service-content">
              <h3>Product Development</h3>
              <p>Build MVPs and scalable products faster, without losing engineering quality.</p>
            </div>
            <div className="service-footer">
              e.g. SaaS MVP from Figma to App Store in under 45 days.
            </div>
          </div>

          {/* Card 3 */}
          <div className="service-card">
            <div className="service-illustration">
              <div className="service-badge">
                <img src={s3Icon} alt="Icon" width={26} height={26} style={{ objectFit: 'contain' }} />
              </div>
              <img src="/service-3.png?v=3" alt="Startup Consultancy" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '1rem' }} />
            </div>
            <div className="service-content">
              <h3>Startup Consultancy</h3>
              <p>Strategy, planning, and execution support tailored for early-stage founders.</p>
            </div>
            <div className="service-footer">
              e.g. Pricing, GTM, and product roadmap for a hospitality startup.
            </div>
          </div>

          {/* Card 4 */}
          <div className="service-card">
            <div className="service-illustration">
              <div className="service-badge">
                <img src={s4Icon} alt="Icon" width={26} height={26} style={{ objectFit: 'contain' }} />
              </div>
              <img src="/service-4.png?v=3" alt="Business Integrations" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '1rem' }} />
            </div>
            <div className="service-content">
              <h3>Business Integrations</h3>
              <p>Payments, CRM, analytics, notifications, and APIs — wired end-to-end.</p>
            </div>
            <div className="service-footer">
              e.g. Razorpay + HubSpot + WhatsApp wired into one workflow.
            </div>
          </div>

          {/* Card 5 */}
          <div className="service-card">
            <div className="service-illustration">
              <div className="service-badge">
                <img className="ai-and-automation" src={s5Icon} alt="Icon" width={52} height={52} style={{ position: 'absolute', top: '80%', left: '36%', transform: 'translate(-50%, -50%)', objectFit: 'contain' }} />
              </div>
              <img src="/service-5.png?v=3" alt="AI & Automation" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '1rem' }} />
            </div>
            <div className="service-content">
              <h3>AI & Automation</h3>
              <p>Reduce manual work and increase efficiency with AI-powered workflows.</p>
            </div>
            <div className="service-footer">
              e.g. AI agent handling 80% of guest queries automatically.
            </div>
          </div>

          {/* Card 6 */}
          <div className="service-card">
            <div className="service-illustration">
              <div className="service-badge">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
              </div>
              <img src="/service-6.png?v=3" alt="Cloud Infrastructure" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '1rem' }} />
            </div>
            <div className="service-content">
              <h3>Cloud Infrastructure</h3>
              <p>Secure, scalable, and reliable technology foundations from day one.</p>
            </div>
            <div className="service-footer">
              e.g. Auto-scaling backend handling 50k concurrent users.
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries-section snap-slide snap-slide-flex" data-nav="services">
        <div className="ind-header">
          <h4 className="ind-kicker">INDUSTRIES</h4>
          <h2 className="ind-title">
            Built For Where <span className="gradient-text-alt">You're Going</span>
          </h2>
          <p className="ind-subtitle">
            We've shipped products across categories — each with its own playbook for speed, scale, and revenue.
          </p>
        </div>

        <div className="ind-grid">
          {/* Card 1 */}
          <div className="ind-card">
            <div className="ind-image-container">
              {/* Using a placeholder for the uploaded image. Please place your image in the public folder and update the src */}
              <img src="/retail-icon.png?v=3" alt="Retail & D2C" className="ind-image" onError={(e) => { e.currentTarget.style.display = 'none'; if (e.currentTarget.nextElementSibling) { (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex'; } }} />
              <div className="ind-fallback" style={{ display: 'none' }}>🛍️📦</div>
            </div>
            <div className="ind-content">
              <h3>Retail & D2C</h3>
              <p className="ind-desc">Storefronts, loyalty, payments, inventory.</p>
              <ul className="ind-list">
                <li><span className="ind-icon bg-purple-50"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg></span> Unified Commerce</li>
                <li><span className="ind-icon bg-purple-50"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg></span> Customer Retention</li>
                <li><span className="ind-icon bg-purple-50"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg></span> Analytics & Insights</li>
              </ul>
            </div>
          </div>

          {/* Card 2 */}
          <div className="ind-card">
            <div className="ind-image-container">
              <img src="/edtech-icon.png?v=3" alt="EdTech" className="ind-image" onError={(e) => { e.currentTarget.style.display = 'none'; if (e.currentTarget.nextElementSibling) { (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex'; } }} />
              <div className="ind-fallback" style={{ display: 'none' }}>🎓📚</div>
            </div>
            <div className="ind-content">
              <h3>EdTech</h3>
              <p className="ind-desc">Learning apps with content, payments, progress.</p>
              <ul className="ind-list">
                <li><span className="ind-icon bg-blue-50"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg></span> Live Classes</li>
                <li><span className="ind-icon bg-blue-50"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg></span> Assessments</li>
                <li><span className="ind-icon bg-blue-50"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg></span> Progress Tracking</li>
              </ul>
            </div>
          </div>

          {/* Card 3 */}
          <div className="ind-card">
            <div className="ind-image-container">
              <img src="/healthcare-icon.png?v=3" alt="Healthcare" className="ind-image" onError={(e) => { e.currentTarget.style.display = 'none'; if (e.currentTarget.nextElementSibling) { (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex'; } }} />
              <div className="ind-fallback" style={{ display: 'none' }}>🏥🛡️</div>
            </div>
            <div className="ind-content">
              <h3>Healthcare</h3>
              <p className="ind-desc">Booking, records, compliant data flows.</p>
              <ul className="ind-list">
                <li><span className="ind-icon bg-blue-50"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg></span> Appointment Booking</li>
                <li><span className="ind-icon bg-blue-50"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg></span> Patient Management</li>
                <li><span className="ind-icon bg-blue-50"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></span> Secure & Compliant</li>
              </ul>
            </div>
          </div>

          {/* Card 4 */}
          <div className="ind-card">
            <div className="ind-image-container">
              <img src="/b2b-icon.png?v=3" alt="B2B SaaS" className="ind-image" onError={(e) => { e.currentTarget.style.display = 'none'; if (e.currentTarget.nextElementSibling) { (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex'; } }} />
              <div className="ind-fallback" style={{ display: 'none' }}>🏢📊</div>
            </div>
            <div className="ind-content">
              <h3>B2B SaaS</h3>
              <p className="ind-desc">Dashboards, multi-tenant auth, billing.</p>
              <ul className="ind-list">
                <li><span className="ind-icon bg-blue-50"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 17 22 12"></polyline></svg></span> Multi-tenant Architecture</li>
                <li><span className="ind-icon bg-blue-50"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg></span> Billing & Subscriptions</li>
                <li><span className="ind-icon bg-blue-50"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg></span> Analytics Dashboard</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="ecosystem-section snap-slide snap-slide-flex" data-nav="services">
        <div className="ecosystem-header">
          <h4 className="ecosystem-kicker">Startup Ecosystem</h4>
          <h2 className="ecosystem-title">
            One <span className="gradient-text-alt">Partner.</span> Complete <span className="gradient-text-alt">Ecosystem.</span>
          </h2>
          <p className="ecosystem-subtitle">
            We build complete startup ecosystems—not just apps—so founders can focus on growth, customers, and sales.
          </p>
        </div>

        <div className="ecosystem-graphic">
          <div className="eco-orbit-container">
            {/* Central Brain */}
            <div className="eco-center-brain">
              <img src="/brain.png?v=3" alt="Ecosystem Brain" style={{ width: '250px', height: 'auto', display: 'block' }} />
            </div>

            {/* Orbits & Nodes */}
            <div className="eco-ring ring-tilt-1">
              <div className="eco-node orbit-node-1" style={{ animationDelay: '0s' }}>
                <div className="eco-node-content un-tilt-1">
                  <div className="eco-node-circle">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                  </div>
                  <span className="eco-node-label">Mobile + Web</span>
                </div>
              </div>

              <div className="eco-node orbit-node-1" style={{ animationDelay: '-20s' }}>
                <div className="eco-node-content un-tilt-1">
                  <div className="eco-node-circle">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                  </div>
                  <span className="eco-node-label">Analytics</span>
                </div>
              </div>
            </div>

            <div className="eco-ring ring-tilt-2">
              <div className="eco-node orbit-node-2" style={{ animationDelay: '-5s' }}>
                <div className="eco-node-content un-tilt-2">
                  <div className="eco-node-circle">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>
                  </div>
                  <span className="eco-node-label">Payments</span>
                </div>
              </div>

              <div className="eco-node orbit-node-2" style={{ animationDelay: '-25s' }}>
                <div className="eco-node-content un-tilt-2">
                  <div className="eco-node-circle">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="16" y1="16" x2="16.01" y2="16"></line></svg>
                  </div>
                  <span className="eco-node-label">AI Agents</span>
                </div>
              </div>
            </div>

            <div className="eco-ring ring-tilt-3">
              <div className="eco-node orbit-node-3" style={{ animationDelay: '-10s' }}>
                <div className="eco-node-content un-tilt-3">
                  <div className="eco-node-circle">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                  </div>
                  <span className="eco-node-label">CRM + Comms</span>
                </div>
              </div>

              <div className="eco-node orbit-node-3" style={{ animationDelay: '-30s' }}>
                <div className="eco-node-content un-tilt-3">
                  <div className="eco-node-circle">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
                  </div>
                  <span className="eco-node-label">Cloud Infra</span>
                </div>
              </div>
            </div>

            {/* Particles */}
            <div className="eco-particle p-1"></div>
            <div className="eco-particle p-2"></div>
            <div className="eco-particle p-3"></div>
            <div className="eco-particle p-4"></div>
            <div className="eco-particle p-5"></div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section snap-slide snap-slide-flex" data-nav="services">
        <div className="process-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}>

          {/* Top Flow Diagram */}
          <div className="process-flow-diagram">
            <div className="process-flow-step">
              <h3 className="process-flow-title">1. Idea</h3>
              <div className="process-flow-img-wrapper">
                <img src="/s6-idea.png" alt="Idea" className="process-flow-img" />
              </div>
            </div>
            <div className="process-flow-arrow">
              <svg className="process-arrow-svg" style={{ animationDelay: '0s' }} width="80" height="24" viewBox="0 0 80 24" fill="none" stroke="#a5b4fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M0 12h78" strokeDasharray="6 6" className="process-arrow-line" /><path d="M70 4l8 8-8 8" className="process-arrow-tip" /></svg>
            </div>
            <div className="process-flow-step">
              <h3 className="process-flow-title">2. Strategy</h3>
              <div className="process-flow-img-wrapper">
                <img src="/s6-target.png" alt="Strategy" className="process-flow-img" />
              </div>
            </div>
            <div className="process-flow-arrow">
              <svg className="process-arrow-svg" style={{ animationDelay: '1s' }} width="80" height="24" viewBox="0 0 80 24" fill="none" stroke="#a5b4fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M0 12h78" strokeDasharray="6 6" className="process-arrow-line" /><path d="M70 4l8 8-8 8" className="process-arrow-tip" /></svg>
            </div>
            <div className="process-flow-step">
              <h3 className="process-flow-title">3. Design</h3>
              <div className="process-flow-img-wrapper">
                <img src="/s6-design.png" alt="Design" className="process-flow-img" />
              </div>
            </div>
            <div className="process-flow-arrow">
              <svg className="process-arrow-svg" style={{ animationDelay: '2s' }} width="80" height="24" viewBox="0 0 80 24" fill="none" stroke="#a5b4fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M0 12h78" strokeDasharray="6 6" className="process-arrow-line" /><path d="M70 4l8 8-8 8" className="process-arrow-tip" /></svg>
            </div>
            <div className="process-flow-step">
              <h3 className="process-flow-title">4. Develop & integrate</h3>
              <div className="process-flow-img-wrapper">
                <img src="/s6-code.png" alt="Develop" className="process-flow-img" />
              </div>
            </div>
            <div className="process-flow-arrow">
              <svg className="process-arrow-svg" style={{ animationDelay: '3s' }} width="80" height="24" viewBox="0 0 80 24" fill="none" stroke="#a5b4fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M0 12h78" strokeDasharray="6 6" className="process-arrow-line" /><path d="M70 4l8 8-8 8" className="process-arrow-tip" /></svg>
            </div>
            <div className="process-flow-step">
              <h3 className="process-flow-title">5. Launch</h3>
              <div className="process-flow-img-wrapper">
                <img src="/s6-rocket.png" alt="Launch" className="process-flow-img" />
              </div>
            </div>
          </div>

          <div className="process-cards-row">
            {/* Card 1 */}
            <div className="process-bottom-card">
              <div className="process-card-icon-new">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </div>
              <div className="process-card-text">
                <div className="process-card-title">Market Research</div>
                <div className="process-card-desc">Identify the right problem worth solving.</div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="process-bottom-card">
              <div className="process-card-icon-new">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 3 3 21 21 21"></polyline><polyline points="3 17 9 11 13 15 21 7"></polyline></svg>
              </div>
              <div className="process-card-text">
                <div className="process-card-title">Business Strategy</div>
                <div className="process-card-desc">Analyze the market and craft a winning strategy.</div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="process-bottom-card">
              <div className="process-card-icon-new">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
              </div>
              <div className="process-card-text">
                <div className="process-card-title">Wireframing</div>
                <div className="process-card-desc">Design intuitive experiences users love.</div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="process-bottom-card">
              <div className="process-card-icon-new">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
              </div>
              <div className="process-card-text">
                <div className="process-card-title">Build & Integrate</div>
                <div className="process-card-desc">Build robust solutions and integrate seamlessly.</div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="process-bottom-card">
              <div className="process-card-icon-new">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </div>
              <div className="process-card-text">
                <div className="process-card-title">Go Live</div>
                <div className="process-card-desc">Launch with confidence and make an impact.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Products Section (Slide 7) */}
      <section id="whooppe" className="products-slide snap-slide snap-slide-flex" data-nav="cuboid" data-slide="7">
        <div className="products-container">
          <div className="products-content">
            <h4 className="products-kicker">Products</h4>
            <h2 className="products-title">WHOOPPE</h2>
            <h3 className="products-subtitle">AI-powered facial recognition ticketing.</h3>
            <p className="products-desc">
              Seamless, secure entry experiences for<br />
              modern events — no tickets, no queues.<br />
              Just your face.
            </p>

            <ul className="products-features">
              <li>
                <div className="feature-check">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <span>Real-time face match</span>
              </li>
              <li>
                <div className="feature-check">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <span>Live event analytics</span>
              </li>
              <li>
                <div className="feature-check">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                </div>
                <span>Skip the queue.</span>
              </li>
            </ul>
          </div>

          <div className="products-image-wrapper">
            <img src="/whooppe-mockup.png?v=3" alt="Whooppe App Mockup" className="whooppe-image" />
          </div>

          <button className="whooppe-learn-more-btn mobile-only-btn">Learn More About WHOOPPE</button>
        </div>
      </section>

      {/* Harika AI Section (Slide 8) */}
      <section id="harika" className="harika-slide snap-slide snap-slide-flex" data-nav="cuboid" data-slide="8">
        <div className="harika-container">

          <div className="harika-content">
            <h2 className="harika-title">
              Meet <span className="harika-gradient">HARIKA AI</span>
            </h2>
            <p className="harika-subtitle">
              A Hospitality Robot That<br />
              Remembers Your Customer
            </p>
            <div className="harika-actions desktop-only-flex">
              <button className="harika-btn btn-dark">Book Demo</button>
              <button className="harika-btn btn-outline">Learn More</button>
            </div>
          </div>

          <div className="harika-illustration">
            <div className="harika-speech-bubble desktop-only-bubble">
              <span className="bubble-text-1">"Great restaurants don't just serve food.</span>
              <span className="bubble-text-2">They remember people."</span>
            </div>

            <img src="/harika-robot.png?v=3" alt="Harika AI Robot" className="harika-robot-img" onError={(e) => { e.currentTarget.style.display = 'none'; }} />

            {/* Floating Cards */}
            <div className="harika-orbit-container harika-spin">
              <img src="/harika-face.png?v=3" className="harika-full-card harika-counter-spin hc-1" alt="Face Recognition" />
              <img src="/harika-food.png?v=3" className="harika-full-card harika-counter-spin hc-2" alt="Personalized Experience" />
              <img src="/harika-greet.png?v=3" className="harika-full-card harika-counter-spin hc-3" alt="Smart Greeting" />
              <img src="/harika-feedback.png?v=3" className="harika-full-card harika-counter-spin hc-4" alt="Feedback Memory" />
            </div>
          </div>

          <div className="harika-actions mobile-only-flex">
            <button className="harika-btn btn-gradient">Book Demo</button>
            <button className="harika-btn btn-outline-mobile">Learn More</button>
          </div>

          <div className="harika-speech-bubble-mobile mobile-only-flex">
            <span className="bubble-text-1">"Great restaurants don't just serve food.<br /></span>
            <span className="bubble-text-2">They remember people."</span>
          </div>

        </div>
      </section>



      {/* Slide 9: Remembered */}
      <section id="products" className="snap-slide snap-slide-flex slide9-section" data-nav="cuboid" data-slide="9">
        <div className="slide9-container">
          <div className="s9-header">
            <h2 className="s9-title">Every Customer Should Feel<br /><span className="s9-highlight">Remembered</span></h2>
            <div className="s9-divider">
              <div className="s9-dot"></div>
            </div>
          </div>

          <div className="s9-canvas">
            <svg className="s9-lines" viewBox="0 0 1200 550" preserveAspectRatio="xMidYMid meet">
              {/* Top Left Line */}
              <path d="M 330,20 Q 450,30 530,170" fill="none" stroke="#3b82f6" strokeWidth="2.5" />
              <circle cx="330" cy="20" r="6" fill="#3b82f6" />
              <circle cx="530" cy="170" r="6" fill="#3b82f6" />

              {/* Bottom Left Line */}
              <path d="M 320,280 Q 450,290 510,250" fill="none" stroke="#3b82f6" strokeWidth="2.5" />
              <circle cx="320" cy="280" r="6" fill="#3b82f6" />
              <circle cx="510" cy="250" r="6" fill="#3b82f6" />

              {/* Right Line */}
              <path d="M 870,160 Q 750,170 700,210" fill="none" stroke="#3b82f6" strokeWidth="2.5" />
              <circle cx="870" cy="160" r="6" fill="#3b82f6" />
              <circle cx="700" cy="210" r="6" fill="#3b82f6" />
            </svg>

            {/* Left Top Card */}
            <div className="s9-card s9-card-lt">
              <img src="/s9-face-uploaded.png?v=3" className="s9-feat-img" alt="Recognize Customers Icon" />
              <div className="s9-text">
                <h3>Recognize<br />Customers</h3>
                <p>Identify returning customers instantly through advanced vision systems, ensuring they feel valued from the moment they step in.</p>
              </div>
            </div>

            {/* Left Bottom Card */}
            <div className="s9-card s9-card-lb">
              <img src="/s9-brain-uploaded.png?v=3" className="s9-feat-img" alt="Remember Preferences Icon" />
              <div className="s9-text">
                <h3>Remember<br />Preferences</h3>
                <p>Use previous feedback and customer preferences to create tailored interactions and memorable dining experiences.</p>
              </div>
            </div>

            {/* Center Robot */}
            <div className="s9-center-robot">
              <div className="s9-center-glow"></div>
              <img src="/s9-robot-uploaded.png?v=3" alt="Robot Chef" className="s9-robot-img" />
            </div>

            {/* Right Card */}
            <div className="s9-card s9-card-rt">
              <img src="/s9-cloche-uploaded.png?v=3" className="s9-feat-img" alt="Personalized Dining Experience Icon" />
              <div className="s9-text">
                <h3>Personalized Dining<br />Experience</h3>
                <p>Deliver better interactions on every visit based on customer feedback and past experiences.</p>
              </div>
            </div>
          </div>

          <div className="s9-quote-pill">
            <span className="s9-quote-text">
              “Not Every Customer Returns. But Every Customer<br />
              Should Feel Remembered.”
            </span>
          </div>
        </div>
      </section>
      {/* Slide 10: Tech Stack */}
      <section id="features" className="snap-slide snap-slide-flex slide10-section" data-nav="features">
        <div className="slide10-container">
          <div className="s10-left">
            <h2 className="s10-title">
              Modern tools.<br />
              Production-grade<br />
              decisions<span className="s10-dot">.</span>
            </h2>
            <div className="s10-divider"></div>
            <p className="s10-desc">
              We use best-in-class tools and technologies so you get reliable systems, real-time insights, and smarter decisions at scale.
            </p>

            <div className="s10-features-box desktop-only-flex">
              <div className="s10-f-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                <span>Secure</span>
              </div>
              <div className="s10-f-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10"></path><path d="m12 12 4.1-4.1"></path><path d="M16 12a4 4 0 1 0-8 0"></path></svg>
                <span>Scalable</span>
              </div>
              <div className="s10-f-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                <span>Reliable</span>
              </div>
              <div className="s10-f-item">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                <span>Insightful</span>
              </div>
            </div>
          </div>

          <div className="s10-right">
            <div className="s10-network">
              <div className="s10-solar-system">
                <svg className="s10-svg-lines" viewBox="0 0 600 600">
                  <circle cx="300" cy="300" r="140" fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="6 6" />
                  <circle cx="300" cy="300" r="260" fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="6 6" />

                  <line x1="300" y1="300" x2="300" y2="40" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="6 6" />
                  <line x1="300" y1="300" x2="484" y2="116" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="6 6" />
                  <line x1="300" y1="300" x2="560" y2="300" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="6 6" />
                  <line x1="300" y1="300" x2="484" y2="484" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="6 6" />
                  <line x1="300" y1="300" x2="300" y2="560" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="6 6" />
                  <line x1="300" y1="300" x2="116" y2="484" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="6 6" />
                  <line x1="300" y1="300" x2="40" y2="300" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="6 6" />
                  <line x1="300" y1="300" x2="116" y2="116" stroke="#8b5cf6" strokeWidth="1.5" strokeDasharray="6 6" />
                </svg>

                <div className="s10-node center-node">
                  <div className="s10-node-icon">
                    <img src="/tech-rocket.png?v=3" alt="Your Startup" style={{ width: '30px', height: '30px', objectFit: 'contain' }} />
                  </div>
                  <span>Your Startup</span>
                </div>

                <div className="s10-node outer-node" style={{ top: '40px', left: '300px' }}>
                  <div className="s10-n-icon"><img src="/tech-openai.png?v=4" alt="OpenAI" style={{ width: '30px', height: '30px', objectFit: 'contain' }} /></div>
                  <span>OpenAI</span>
                </div>
                <div className="s10-node outer-node" style={{ top: '116px', left: '484px' }}>
                  <div className="s10-n-icon"><img src="/tech-react.png?v=4" alt="React" style={{ width: '30px', height: '30px', objectFit: 'contain' }} /></div>
                  <span>React</span>
                </div>
                <div className="s10-node outer-node" style={{ top: '300px', left: '560px' }}>
                  <div className="s10-n-icon"><img src="/tech-github.png?v=4" alt="GitHub" style={{ width: '75px', height: '30px', objectFit: 'contain' }} /></div>
                  <span>GitHub</span>
                </div>
                <div className="s10-node outer-node" style={{ top: '484px', left: '484px' }}>
                  <div className="s10-n-icon"><img src="/tech-tailwind.png?v=4" alt="Tailwind CSS" style={{ width: '30px', height: '30px', objectFit: 'contain' }} /></div>
                  <span>Tailwind CSS</span>
                </div>
                <div className="s10-node outer-node" style={{ top: '560px', left: '300px' }}>
                  <div className="s10-n-icon"><img src="/tech-notion.png?v=4" alt="Notion" style={{ width: '30px', height: '30px', objectFit: 'contain' }} /></div>
                  <span>Notion</span>
                </div>
                <div className="s10-node outer-node" style={{ top: '484px', left: '116px' }}>
                  <div className="s10-n-icon"><img src="/tech-nodejs2.png?v=5" alt="Node.js" style={{ width: '30px', height: '30px', objectFit: 'contain' }} /></div>

                  <span>Node.js</span>
                </div>
                <div className="s10-node outer-node" style={{ top: '300px', left: '40px' }}>
                  <div className="s10-n-icon"><img src="/tech-jira.png?v=5" alt="Jira" style={{ width: '30px', height: '30px', objectFit: 'contain' }} /></div>
                  <span>Jira</span>
                </div>
                <div className="s10-node outer-node" style={{ top: '116px', left: '116px' }}>
                  <div className="s10-n-icon"><img src="/tech-aws.png?v=5" alt="AWS" style={{ width: '30px', height: '30px', objectFit: 'contain' }} /></div>
                  <span>AWS</span>
                </div>

                <div className="s10-node inner-node" style={{ top: '116px', left: '376px' }}>
                  <div className="s10-n-icon"><img src="/tech-metabase.png?v=3" alt="Metabase" style={{ width: '75px', height: '30px', objectFit: 'contain' }} /></div>
                  <span>Metabase</span>
                </div>
                <div className="s10-node inner-node" style={{ top: '224px', left: '484px' }}>
                  <div className="s10-n-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg></div>
                  <span>Payments</span>
                </div>
                <div className="s10-node inner-node" style={{ top: '376px', left: '484px' }}>
                  <div className="s10-n-icon"><img src="/tech-slack.png?v=3" alt="Slack" style={{ width: '75px', height: '30px', objectFit: 'contain' }} /></div>
                  <span>Slack</span>
                </div>
                <div className="s10-node inner-node" style={{ top: '484px', left: '376px' }}>
                  <div className="s10-n-icon"><img src="/tech-figma.png?v=3" alt="Figma" style={{ width: '30px', height: '30px', objectFit: 'contain' }} /></div>
                  <span>Figma</span>
                </div>
                <div className="s10-node inner-node" style={{ top: '484px', left: '224px' }}>
                  <div className="s10-n-icon"><img src="/tech-docker.png?v=3" alt="Docker" style={{ width: '80px', height: '30px', objectFit: 'contain' }} /></div>
                  <span>Docker</span>
                </div>
                <div className="s10-node inner-node" style={{ top: '376px', left: '116px' }}>
                  <div className="s10-n-icon"><img src="/tech-postgresql.png?v=3" alt="PostgreSQL" style={{ width: '75px', height: '30px', objectFit: 'contain' }} /></div>
                  <span>PostgreSQL</span>
                </div>
                <div className="s10-node inner-node" style={{ top: '224px', left: '116px' }}>
                  <div className="s10-n-icon"><img src="/tech-mongodb.png?v=3" alt="MongoDB" style={{ width: '30px', height: '30px', objectFit: 'contain' }} /></div>
                  <span>MongoDB</span>
                </div>
              </div>
            </div>
          </div>

          <div className="s10-features-box mobile-only-flex">
            <div className="s10-f-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              <span>Secure</span>
            </div>
            <div className="s10-f-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10"></path><path d="m12 12 4.1-4.1"></path><path d="M16 12a4 4 0 1 0-8 0"></path></svg>
              <span>Scalable</span>
            </div>
            <div className="s10-f-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              <span>Reliable</span>
            </div>
            <div className="s10-f-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
              <span>Insightful</span>
            </div>
          </div>

        </div>
      </section>

      {/* --- SLIDE 11: PROCESS TIMELINE --- */}
      <section className="snap-slide snap-slide-flex slide11-section" data-nav="features">
        <div className="s11-header">
          <h3 className="s11-subtitle">Process</h3>
          <h2 className="s11-title">The Journey From</h2>
          <h2 className="s11-title-gradient">Vision to Victory</h2>
          <p className="s11-desc">
            A predictable path from idea to revenue — designed to remove the chaos of building a startup.
          </p>
        </div>

        <div className="s11-timeline">
          <svg className="s11-connecting-line" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path d="M -50 50 L 110 50 C 240 50, 240 10, 370 10 C 500 10, 500 50, 630 50 C 760 50, 760 10, 890 10 L 1050 10" fill="none" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="4 6" />
          </svg>

          <div className="s11-steps-container">
            <div className="s11-step">
              <div className="s11-number">01</div>
              <div className="s11-icon-box">
                <img src="/s11-icon-1.png?v=1" alt="Lightbulb" className="s11-icon-img s11-icon-1" />
              </div>
              <h4 className="s11-step-title">Share Your Idea</h4>
              <p className="s11-step-desc">Tell us about your vision in a free discovery call.</p>
            </div>

            <div className="s11-step s11-step-up">
              <div className="s11-number">02</div>
              <div className="s11-icon-box">
                <img src="/s11-icon-2.png?v=1" alt="Blueprint" className="s11-icon-img s11-icon-2" />
              </div>
              <h4 className="s11-step-title">Get A Startup Blueprint</h4>
              <p className="s11-step-desc">Receive a clear product tech, and launch roadmap.</p>
            </div>

            <div className="s11-step">
              <div className="s11-number">03</div>
              <div className="s11-icon-box">
                <img src="/s11-icon-3.png?v=1" alt="Code Monitor" className="s11-icon-img s11-icon-3" />
              </div>
              <h4 className="s11-step-title">Build The Product</h4>
              <p className="s11-step-desc">We design, develop, and integrate end-to-end.</p>
            </div>

            <div className="s11-step s11-step-up">
              <div className="s11-number">04</div>
              <div className="s11-icon-box">
                <img src="/s11-icon-4.png?v=1" alt="Rocket" className="s11-icon-img s11-icon-4" />
              </div>
              <h4 className="s11-step-title">Launch & Start Growing</h4>
              <p className="s11-step-desc">Go live with marketing, analytics, and support.</p>
            </div>
          </div>
        </div>

        {/* Placeholder for the wavy background grid */}
        <div className="s11-wavy-bg"></div>
      </section>

      {/* Slide 12: FAQs */}
      <section id="contact" className="s12-section snap-slide" data-nav="contact">
        <div className="s12-container">
          <div className="s12-left">
            <h5 className="s12-subtitle">FAQS</h5>
            <h2 className="s12-title">Questions<br />founders ask us.</h2>
            <p className="s12-desc">
              Still curious? Book a 30-minute call and we'll answer anything specific to your idea.
            </p>
            <div className="s12-image-wrapper">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Founders discussing" className="s12-image" />
            </div>
          </div>
          <div className="s12-right">
            <div className="s12-accordion">
              {faqs.map((faq, index) => {
                const isActive = activeFaq === index;
                return (
                  <div
                    key={index}
                    className={`s12-faq-item ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveFaq(isActive ? null : index)}
                  >
                    <div className="s12-faq-header">
                      <div className="s12-faq-icon">{faq.icon}</div>
                      <h4 className="s12-faq-question">{faq.question}</h4>
                      <div className="s12-faq-chevron">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                      </div>
                    </div>
                    {isActive && (
                      <div className="s12-faq-body">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      </div>

      {activeNav === 'policy' && <PrivacyPolicy />}

      {/* Main Footer */}
      <footer className="main-footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand">
              <img src={logoUrl} alt="Thrillathon Logo" className="footer-logo-img" />
              <p className="footer-description">
                Revolutionizing access control with cutting-edge<br />
                security and intelligent technologies.
              </p>
            </div>
          </div>
          
          <div className="footer-divider"></div>
          
          <div className="footer-bottom">
            <div className="footer-copyright">
              © 2026 Thrillathon Innovation Private Limited. All rights reserved.
            </div>
            <div className="footer-socials">
              <a href="#" aria-label="WhatsApp" className="social-icon whatsapp">
                <FaWhatsapp size={24} color="white" />
              </a>
              <a href="#" aria-label="Instagram" className="social-icon instagram">
                <FaInstagram size={24} color="white" />
              </a>
              <a href="#" aria-label="Facebook" className="social-icon facebook">
                <FaFacebookF size={22} color="white" />
              </a>
              <a href="#" aria-label="X" className="social-icon x-twitter">
                <FaXTwitter size={22} color="black" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App



