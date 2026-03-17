// ===============================
// WALKIE – GOD-TIER PREMIUM ARTIST SITE v3 (FIXED)
// Auckland 2026
// ===============================

const { useState, useEffect } = React;

const links = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/3HkQPPZVeuoEfuzcwJNX4M",
    svg: '<svg viewBox="0 0 512 123" xmlns="http://www.w3.org/2000/svg" fill="#1DB954"><path d="M.057 75.44c5.077-.36 9.78-2.46 13.54-6.18 3.76-3.72 6.04-8.5 6.4-13.82.36-5.32-1.3-10.56-4.7-14.7-3.4-4.14-8.07-6.7-13.14-7.06-5.07-.36-10.02 1.3-13.8 4.7-3.78 3.4-6.12 8.07-6.48 13.14-.36 5.07 1.3 10.02 4.7 13.8 3.4 3.78 8.07 6.12 13.14 6.48zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm94.3 368.9c-3.2 4.2-9.4 5.3-13.6 2.1-33.3-20.5-75.1-25.1-124.6-13.7-5.1 1.2-10.2-2-11.4-7.1-1.2-5.1 2-10.2 7.1-11.4 54.8-12.7 101.6-7.5 139.8 16.3 4.2 3.2 5.3 9.4 2.1 13.8zm25-57.7c-4 5.3-11.8 6.7-17.1 2.7-39.5-30.4-99.6-39.2-146.4-21.4-4.9 1.8-10.3-1-12.1-5.9-1.8-4.9 1-10.3 5.9-12.1 52.6-19.3 118.3-9.4 163.3 25.3 5.3 4 6.7 11.8 2.7 17.1zm.2-57.8c-47.3-28-125.5-30.5-170.9-16.9-5.7 1.7-11.8-1.6-13.5-7.3-1.7-5.7 1.6-11.8 7.3-13.5 51.6-15.3 136.3-12.3 189.5 19.7 5.3 3.2 7 10.4 3.8 15.7-3.2 5.3-10.4 7-15.7 3.8z"/></svg>',
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UCrKt3xZWrvMnxyPcjAY8iZw",
    svg: '<svg viewBox="0 0 2560 720" xmlns="http://www.w3.org/2000/svg"><defs><style>.a{fill:#f00;}</style></defs><path class="a" d="M2500 210c0-35-28-63-63-63H123c-35 0-63 28-63 63v300c0 35 28 63 63 63h2314c35 0 63-28 63-63z"/><path fill="#fff" d="M1050 450l300-150-300-150zM1050 450v-300l300 150z"/></svg>',
  },
  {
    name: "Apple Music",
    url: "https://music.apple.com/us/artist/walkie-music/1875428459",
    svg: '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" fill="#000"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm48 368h-96c-22 0-40-18-40-40v-96c0-22 18-40 40-40h96c22 0 40 18 40 40v96c0 22-18 40-40 40zM256 128c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128-57.3-128-128-128z"/></svg>',
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@walkiemusic",
    svg: '<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" fill="#000"><path d="M48 0C21.5 0 0 21.5 0 48s21.5 48 48 48 48-21.5 48-48S74.5 0 48 0zm20.7 72.3c-3.8 3.8-10.2 3.8-14 0l-6.7-6.7c-3.8-3.8-10.2-3.8-14 0l-6.7 6.7c-3.8 3.8-10.2 3.8-14 0-3.8-3.8-3.8-10.2 0-14l6.7-6.7c3.8-3.8 3.8-10.2 0-14l-6.7-6.7c-3.8-3.8-3.8-10.2 0-14 3.8-3.8 10.2-3.8 14 0l6.7 6.7c3.8 3.8 10.2 3.8 14 0l6.7-6.7c3.8-3.8 10.2-3.8 14 0 3.8 3.8 3.8 10.2 0 14l-6.7 6.7c-3.8 3.8-3.8 10.2 0 14l6.7 6.7c3.8 3.8 3.8 10.2 0 14z"/></svg>',
  },
];

const releases = [
  { title: "As Die Tyd Stilbly", desc: "Latest cinematic drop – out now everywhere.", color: "#1DB954" },
  { title: "No More Runnin", desc: "High-octane energy. Pure adrenaline.", color: "#FF0000" },
  { title: "Brothers Forever", desc: "Loyalty in every bar. Emotional heavyweight.", color: "#007AFF" },
];

// ────────────────────────────────────────────────
// HELPERS
// ────────────────────────────────────────────────

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= breakpoint);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [breakpoint]);

  return isMobile;
}

function injectGlobalCss(cssText) {
  const existing = document.getElementById("walkie-global-keyframes");
  if (existing) return;

  const styleTag = document.createElement("style");
  styleTag.id = "walkie-global-keyframes";
  styleTag.innerHTML = cssText;
  document.head.appendChild(styleTag);
}

// ────────────────────────────────────────────────
// COMPONENTS
// ────────────────────────────────────────────────

function MobileNavToggle({ isOpen, toggle }) {
  return (
    <button
      onClick={toggle}
      style={styles.mobileToggle}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      type="button"
    >
      {isOpen ? "✕" : "☰"}
    </button>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile(768);

  const linkBlockStyle = {
    ...styles.navLinks,
    ...(isMobile
      ? {
          ...styles.navLinksMobile,
          display: isOpen ? "flex" : "none",
        }
      : {
          display: "flex",
        }),
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>WALKIE</div>

      <div style={linkBlockStyle}>
        <a href="#home" style={styles.navLink} onClick={closeMenu}>Home</a>
        <a href="#music" style={styles.navLink} onClick={closeMenu}>Music</a>
        <a href="#platforms" style={styles.navLink} onClick={closeMenu}>Connect</a>
        <a href="#about" style={styles.navLink} onClick={closeMenu}>About</a>
      </div>

      {isMobile && <MobileNavToggle isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />}
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" style={styles.hero}>
      <div style={styles.heroGlow1} />
      <div style={styles.heroGlow2} />
      <div style={styles.heroGlow3} />

      <h1 style={styles.heroTitle}>WALKIE</h1>

      <p style={styles.heroSubtitle}>
        Raw streets. Real emotion. Sound engineered to move souls in Auckland nights.
      </p>

      <div style={styles.heroButtons}>
        <a href={links[0].url} target="_blank" rel="noopener noreferrer" style={styles.primaryBtn}>
          Stream Now – Spotify
        </a>
        <a href={links[1].url} target="_blank" rel="noopener noreferrer" style={styles.secondaryBtn}>
          Visuals on YouTube
        </a>
      </div>
    </section>
  );
}

function PlatformCard({ item }) {
  return (
    <a href={item.url} target="_blank" rel="noopener noreferrer" style={styles.platformCard}>
      <div style={styles.platformCardLeft}>
        <div style={styles.platformLogoWrap}>
          <div
            dangerouslySetInnerHTML={{ __html: item.svg }}
            style={styles.platformLogoInner}
          />
        </div>

        <div>
          <div style={styles.platformName}>{item.name}</div>
          <div style={styles.platformSub}>Stream • Follow • Connect</div>
        </div>
      </div>

      <span style={styles.arrow}>→</span>
    </a>
  );
}

function Platforms() {
  return (
    <section id="platforms" style={styles.section}>
      <h2 style={styles.sectionTitle}>Everywhere You Look</h2>

      <div style={styles.platformGrid}>
        {links.map((item) => (
          <PlatformCard key={item.name} item={item} />
        ))}
      </div>

      <div style={styles.spotifyEmbedWrap}>
        <iframe
          title="Spotify Artist Embed – WALKIE"
          src="https://open.spotify.com/embed/artist/3HkQPPZVeuoEfuzcwJNX4M?utm_source=generator&theme=0"
          width="100%"
          height="500"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          style={styles.spotifyEmbed}
        />
      </div>
    </section>
  );
}

function ReleaseCard({ release }) {
  return (
    <div style={{ ...styles.releaseCard, borderLeft: `6px solid ${release.color}` }}>
      <h3 style={{ ...styles.releaseTitle, color: release.color }}>{release.title}</h3>
      <p style={styles.releaseDesc}>{release.desc}</p>
      <a href={links[0].url} target="_blank" rel="noopener noreferrer" style={styles.listenBtn}>
        Play on Spotify
      </a>
    </div>
  );
}

function Releases() {
  return (
    <section id="music" style={styles.section}>
      <h2 style={styles.sectionTitle}>The Catalogue</h2>

      <div style={styles.releaseGrid}>
        {releases.map((r) => (
          <ReleaseCard key={r.title} release={r} />
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.sectionTitle}>Walkie DNA</h2>

      <p style={styles.aboutText}>
        Born in Auckland streets. Independent to the core. Every track is therapy, hustle,
        loyalty wrapped in cinematic beats and raw delivery.
        <br /><br />
        No trends. No shortcuts. Just music that lingers long after the drop.
        Walkie – real sound for real nights.
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
      © {new Date().getFullYear()} WALKIE • Auckland, NZ • Independent Artist • Built Different
      <div style={styles.footerSub}>
        Real music. Real energy. No limits.
      </div>
    </footer>
  );
}

// ────────────────────────────────────────────────
// MAIN APP
// ────────────────────────────────────────────────

function App() {
  useEffect(() => {
    injectGlobalCss(globalKeyframes);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("reveal");
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <div style={styles.page}>
      <Navbar />
      <Hero />
      <div className="reveal-on-scroll"><Platforms /></div>
      <div className="reveal-on-scroll"><Releases /></div>
      <div className="reveal-on-scroll"><About /></div>
      <Footer />
    </div>
  );
}

// ────────────────────────────────────────────────
// STYLES
// ────────────────────────────────────────────────

const styles = {
  page: {
    background: "linear-gradient(180deg, #0a0012 0%, #000000 100%)",
    color: "#f2f2ff",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    minHeight: "100vh",
    overflowX: "hidden",
    position: "relative",
  },

  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.5rem 6%",
    background: "rgba(8, 4, 18, 0.88)",
    backdropFilter: "blur(24px)",
    borderBottom: "1px solid rgba(124, 58, 237, 0.22)",
    zIndex: 2000,
    boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
  },

  logo: {
    fontSize: "2.4rem",
    fontWeight: 900,
    letterSpacing: "0.6em",
    background: "linear-gradient(90deg, #c084fc, #7c3aed, #60a5fa, #c084fc)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundSize: "200% 100%",
    animation: "gradientFlow 12s ease infinite",
    whiteSpace: "nowrap",
  },

  navLinks: {
    gap: "3rem",
    fontSize: "1.1rem",
    fontWeight: 500,
    transition: "all 0.4s ease",
    alignItems: "center",
  },

  navLinksMobile: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    flexDirection: "column",
    padding: "1rem 6% 1.5rem",
    background: "rgba(8, 4, 18, 0.96)",
    borderBottom: "1px solid rgba(124, 58, 237, 0.22)",
    gap: "1rem",
  },

  navLink: {
    color: "#e5e5ff",
    textDecoration: "none",
    position: "relative",
    transition: "color 0.3s",
  },

  mobileToggle: {
    fontSize: "2rem",
    cursor: "pointer",
    color: "#c084fc",
    background: "transparent",
    border: "none",
    lineHeight: 1,
    padding: 0,
  },

  hero: {
    position: "relative",
    textAlign: "center",
    padding: "clamp(260px, 32vh, 340px) 6% 160px",
    overflow: "hidden",
  },

  heroGlow1: {
    position: "absolute",
    top: "-50%",
    left: "10%",
    width: "clamp(600px, 80vw, 1200px)",
    height: "clamp(600px, 80vw, 1200px)",
    background: "radial-gradient(circle, rgba(124,58,237,0.28), transparent 55%)",
    filter: "blur(140px)",
    opacity: 0.75,
    animation: "pulseGlow1 14s infinite alternate ease-in-out",
    pointerEvents: "none",
  },

  heroGlow2: {
    position: "absolute",
    top: "-30%",
    right: "5%",
    width: "clamp(700px, 90vw, 1400px)",
    height: "clamp(700px, 90vw, 1400px)",
    background: "radial-gradient(circle, rgba(96,165,250,0.22), transparent 60%)",
    filter: "blur(160px)",
    opacity: 0.65,
    animation: "pulseGlow2 18s infinite alternate ease-in-out",
    pointerEvents: "none",
  },

  heroGlow3: {
    position: "absolute",
    bottom: "-40%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "800px",
    height: "800px",
    background: "radial-gradient(circle, rgba(29,185,84,0.15), transparent)",
    filter: "blur(180px)",
    opacity: 0.4,
    pointerEvents: "none",
  },

  heroTitle: {
    fontSize: "clamp(7rem, 22vw, 18rem)",
    fontWeight: 900,
    letterSpacing: "0.15em",
    margin: "0 0 1.2rem",
    background: "linear-gradient(90deg, #ffffff, #c084fc, #60a5fa, #ffffff)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundSize: "300% 100%",
    animation: "shineText 10s linear infinite",
    position: "relative",
    zIndex: 2,
  },

  heroSubtitle: {
    fontSize: "clamp(1.5rem, 5.5vw, 2.2rem)",
    color: "#b3b3ff",
    maxWidth: "800px",
    margin: "0 auto 3.5rem",
    lineHeight: 1.4,
    position: "relative",
    zIndex: 2,
  },

  heroButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "1.8rem",
    flexWrap: "wrap",
    position: "relative",
    zIndex: 2,
  },

  primaryBtn: {
    padding: "1.1rem 2.8rem",
    background: "linear-gradient(135deg, #7c3aed, #c084fc, #a78bfa)",
    color: "#000",
    fontWeight: 700,
    fontSize: "1.1rem",
    borderRadius: "999px",
    textDecoration: "none",
    boxShadow: "0 15px 50px rgba(124,58,237,0.6)",
    transition: "all 0.35s ease",
  },

  secondaryBtn: {
    padding: "1.1rem 2.8rem",
    border: "2px solid #7c3aed",
    borderRadius: "999px",
    color: "#e5e5ff",
    fontWeight: 600,
    fontSize: "1.1rem",
    textDecoration: "none",
    transition: "all 0.35s ease",
  },

  section: {
    padding: "clamp(100px, 14vw, 140px) 6%",
    maxWidth: "1400px",
    margin: "0 auto",
  },

  sectionTitle: {
    fontSize: "clamp(3rem, 9vw, 5rem)",
    fontWeight: 900,
    textAlign: "center",
    marginBottom: "4rem",
    background: "linear-gradient(90deg, #c084fc, #7c3aed, #60a5fa, #c084fc)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundSize: "200% 100%",
    animation: "gradientFlow 8s ease infinite",
  },

  platformGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
    gap: "2rem",
  },

  platformCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1.8rem 2.4rem",
    background: "rgba(25,15,45,0.65)",
    borderRadius: "24px",
    textDecoration: "none",
    color: "inherit",
    border: "1px solid rgba(124,58,237,0.25)",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    backdropFilter: "blur(12px)",
  },

  platformCardLeft: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    minWidth: 0,
  },

  platformLogoWrap: {
    width: "60px",
    height: "60px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.08)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    overflow: "hidden",
    padding: "10px",
    boxSizing: "border-box",
  },

  platformLogoInner: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  platformName: {
    fontSize: "1.5rem",
    fontWeight: 700,
  },

  platformSub: {
    fontSize: "1rem",
    color: "#a8a8ff",
  },

  arrow: {
    fontSize: "2rem",
    opacity: 0.8,
    transition: "transform 0.4s",
    flexShrink: 0,
  },

  spotifyEmbedWrap: {
    margin: "80px auto 0",
    maxWidth: "900px",
    textAlign: "center",
  },

  spotifyEmbed: {
    borderRadius: "20px",
    boxShadow: "0 20px 60px rgba(29,185,84,0.3)",
  },

  releaseGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
    gap: "2.5rem",
  },

  releaseCard: {
    padding: "2.2rem",
    background: "rgba(25,15,45,0.6)",
    borderRadius: "24px",
    border: "1px solid rgba(255,255,255,0.08)",
    transition: "all 0.45s ease",
  },

  releaseTitle: {
    fontSize: "2.1rem",
    fontWeight: 800,
    marginBottom: "1rem",
  },

  releaseDesc: {
    color: "#b3b3ff",
    marginBottom: "1.8rem",
    fontSize: "1.15rem",
  },

  listenBtn: {
    padding: "1rem 2.4rem",
    background: "linear-gradient(135deg, #7c3aed, #c084fc)",
    color: "#000",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: 700,
    fontSize: "1.05rem",
    display: "inline-block",
    transition: "all 0.3s",
  },

  aboutText: {
    color: "#d5d5ff",
    fontSize: "1.3rem",
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
    lineHeight: 1.8,
  },

  footer: {
    textAlign: "center",
    padding: "8rem 1rem 10rem",
    color: "#8a8ab5",
    fontSize: "1.1rem",
    borderTop: "1px solid rgba(124,58,237,0.15)",
  },

  footerSub: {
    marginTop: "20px",
    fontSize: "0.9rem",
  },
};

// ────────────────────────────────────────────────
// GLOBAL KEYFRAMES + REVEAL CSS
// ────────────────────────────────────────────────

const globalKeyframes = `
@keyframes pulseGlow1 {
  0% { transform: scale(1); opacity: 0.6; }
  100% { transform: scale(1.18); opacity: 0.95; }
}

@keyframes pulseGlow2 {
  0% { transform: scale(1); opacity: 0.5; }
  100% { transform: scale(1.25); opacity: 0.85; }
}

@keyframes shineText {
  0% { background-position: -300%; }
  100% { background-position: 300%; }
}

@keyframes gradientFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.reveal-on-scroll {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.reveal-on-scroll.reveal {
  opacity: 1;
  transform: translateY(0);
}

nav a:hover {
  color: #c084fc !important;
}

section a:hover {
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  nav {
    padding: 1rem 5% !important;
  }
}
`;

// ────────────────────────────────────────────────
// RENDER
// ────────────────────────────────────────────────

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
