// ===============================
// WALKIE – PREMIUM ARTIST SITE (FIXED)
// South African roots • NZ based
// ===============================

const { useState, useEffect } = React;

const links = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/3HkQPPZVeuoEfuzcwJNX4M",
    svg: `
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="12" cy="12" r="12" fill="#1DB954"/>
        <path d="M17.4 16.9a.75.75 0 0 1-1.03.24c-2.82-1.72-6.37-2.1-10.56-1.14a.75.75 0 0 1-.34-1.46c4.58-1.05 8.51-.61 11.68 1.32a.75.75 0 0 1 .25 1.04Zm1.47-3.27a.94.94 0 0 1-1.29.3c-3.23-1.99-8.15-2.56-11.98-1.38a.94.94 0 1 1-.56-1.8c4.37-1.36 9.8-.72 13.53 1.57.45.28.6.86.3 1.31Zm.13-3.4C15.15 7.9 8.8 7.7 5.1 8.82a1.13 1.13 0 1 1-.65-2.16c4.25-1.28 11.32-1.03 15.7 1.57a1.13 1.13 0 1 1-1.15 1.98Z" fill="#fff"/>
      </svg>
    `,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UCrKt3xZWrvMnxyPcjAY8iZw",
    svg: `
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="1.5" y="5" width="21" height="14" rx="4" fill="#FF0000"/>
        <path d="M10 9.2L15.6 12 10 14.8V9.2Z" fill="#fff"/>
      </svg>
    `,
  },
  {
    name: "Apple Music",
    url: "https://music.apple.com/us/artist/walkie-music/1875428459",
    svg: `
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="1.5" y="1.5" width="21" height="21" rx="6" fill="#FA233B"/>
        <path d="M14.8 6.5v8.1a2.45 2.45 0 1 1-1.2-2.1V8.5l4.3-1v6.2a2.45 2.45 0 1 1-1.2-2.1V6.2l-1.9.3Z" fill="#fff"/>
      </svg>
    `,
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@walkiemusic",
    svg: `
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="1.5" y="1.5" width="21" height="21" rx="6" fill="#111"/>
        <path d="M14.4 6.1c.55 1.28 1.5 2.06 2.9 2.23v2.05a5.34 5.34 0 0 1-2.85-.84v4.54a4.24 4.24 0 1 1-4.24-4.24c.24 0 .47.02.7.06v2.13a2.14 2.14 0 1 0 1.45 2.05V4.5h2.05v1.6Z" fill="#fff"/>
        <path d="M13.8 6.1c.4 1.1 1.2 1.82 2.5 2.08v1.1a4.5 4.5 0 0 1-2.5-.78V6.1Z" fill="#25F4EE" opacity="0.9"/>
        <path d="M12.25 11.95a2.14 2.14 0 1 0 1.45 2.05V8.7l2-.3v-.2a4.42 4.42 0 0 1-1.9-1.22v7.02a2.14 2.14 0 1 1-2.25-2.05Z" fill="#FE2C55" opacity="0.9"/>
      </svg>
    `,
  },
];

const releases = [
  { title: "As Die Tyd Stilbly", desc: "Latest cinematic drop – out now everywhere.", color: "#1DB954" },
  { title: "No More Runnin", desc: "High-octane energy. Pure adrenaline.", color: "#FF0000" },
  { title: "Brothers Forever", desc: "Loyalty in every bar. Emotional heavyweight.", color: "#007AFF" },
];

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
  const existing = document.getElementById("walkie-global-css");
  if (existing) return;
  const styleTag = document.createElement("style");
  styleTag.id = "walkie-global-css";
  styleTag.innerHTML = cssText;
  document.head.appendChild(styleTag);
}

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
        South African roots. New Zealand based. Raw emotion, real energy, and sound that stays with you.
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
      <h2 style={styles.sectionTitle}>Find WALKIE Everywhere</h2>

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
        South African born and now based in New Zealand, Walkie brings raw delivery,
        cinematic energy, loyalty, hustle and real emotion into every track.
        <br /><br />
        No trends. No shortcuts. Just music that lingers long after the drop.
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
      © {new Date().getFullYear()} WALKIE • South African Born • New Zealand Based • Independent Artist
      <div style={styles.footerSub}>
        Real music. Real energy. No limits.
      </div>
    </footer>
  );
}

function App() {
  useEffect(() => {
    injectGlobalCss(globalCss);

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
    width: "68px",
    height: "68px",
    borderRadius: "18px",
    background: "rgba(255,255,255,0.08)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    overflow: "hidden",
    padding: "12px",
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

const globalCss = `
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

.platformLogoInner svg {
  width: 100%;
  height: 100%;
  display: block;
}

.platformLogoInner svg[viewBox="0 0 512 123"],
.platformLogoInner svg[viewBox="0 0 2560 720"] {
  width: 100%;
  height: auto;
}

@media (max-width: 768px) {
  nav {
    padding: 1rem 5% !important;
  }
}
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
