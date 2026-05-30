// ===============================
// WALKIE – PREMIUM LINK TREE SITE
// Clean version: no streaming / no releases
// ===============================
const { useState, useEffect } = React;

const links = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/3HkQPPZVeuoEfuzcwJNX4M",
    color: "#1DB954",
    svg: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#1DB954"/><path d="M17.4 16.9a.75.75 0 0 1-1.03.24c-2.82-1.72-6.37-2.1-10.56-1.14a.75.75 0 0 1-.34-1.46c4.58-1.05 8.51-.61 11.68 1.32a.75.75 0 0 1 .25 1.04Zm1.47-3.27a.94.94 0 0 1-1.29.3c-3.23-1.99-8.15-2.56-11.98-1.38a.94.94 0 1 1-.56-1.8c4.37-1.36 9.8-.72 13.53 1.57.45.28.6.86.3 1.31Zm.13-3.4C15.15 7.9 8.8 7.7 5.1 8.82a1.13 1.13 0 1 1-.65-2.16c4.25-1.28 11.32-1.03 15.7 1.57a1.13 1.13 0 1 1-1.15 1.98Z" fill="#000"/></svg>`,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UCrKt3xZWrvMnxyPcjAY8iZw",
    color: "#FF0000",
    svg: `<svg viewBox="0 0 24 24"><path fill="#FF0000" d="M21.5 6.8c-.3-1.1-1.2-2-2.3-2.3C17.4 4 12 4 12 4s-5.4 0-7.2.5c-1.1.3-2 1.2-2.3 2.3C2 8.6 2 12 2 12s0 3.4.5 5.2c.3 1.1 1.2 2 2.3 2.3C6.6 20 12 20 12 20s5.4 0 7.2-.5c1.1-.3 2-1.2 2.3-2.3.5-1.8.5-5.2.5-5.2s0-3.4-.5-5.2z"/><polygon fill="#FFFFFF" points="10 15.5 15 12 10 8.5"/></svg>`,
  },
  {
    name: "Apple Music",
    url: "https://music.apple.com/us/artist/walkie-music/1875428459",
    color: "#FC3F5F",
    svg: `<svg viewBox="0 0 24 24"><path d="M16 3v12.5a2.5 2.5 0 1 1-1-2V6.5l4-1V14a2.5 2.5 0 1 1-1-2V4l-2 .5z" fill="#FC3F5F"/></svg>`,
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@walkiemusic",
    color: "#FE2C55",
    svg: `<svg viewBox="0 0 24 24"><path fill="#FFFFFF" d="M14 3c.3 1.6 1.6 3 3.2 3.3v3.2c-1.1-.1-2.2-.5-3.2-1.1v5.5a4.5 4.5 0 1 1-4.5-4.5c.3 0 .6 0 .9.1v3.2a1.5 1.5 0 1 0 1.1 1.5V3H14z"/></svg>`,
  },
];

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>WALKIE</div>
      <div style={styles.navLinks}>
        <a href="#home" style={styles.navLink}>Home</a>
        <a href="#connect" style={styles.navLink}>Links</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" style={styles.hero}>
      <div style={styles.glowLayer1} />
      <div style={styles.glowLayer2} />
      <h1 style={styles.heroTitle}>WALKIE</h1>
      <p style={styles.heroSubtitle}>Raw. Cinematic. Unstoppable.</p>
    </section>
  );
}

function ConnectSection() {
  return (
    <section id="connect" style={styles.section}>
      <h2 style={styles.sectionTitle}>Follow WALKIE</h2>
      <div style={styles.platformGrid}>
        {links.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ ...styles.platformCard, "--accent": item.color }}
          >
            <div style={styles.iconWrap}>
              <div dangerouslySetInnerHTML={{ __html: item.svg }} style={styles.icon} />
            </div>
            <span style={styles.platformName}>{item.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
      © {new Date().getFullYear()} WALKIE • Independent Artist
      <div style={styles.footerTag}>Real music. Real energy. No limits.</div>
    </footer>
  );
}

function App() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = globalCss;
    document.head.appendChild(style);
  }, []);

  return (
    <div style={styles.page}>
      <Navbar />
      <Hero />
      <ConnectSection />
      <Footer />
    </div>
  );
}

const styles = {
  page: {
    background: "linear-gradient(180deg, #05000f 0%, #000000 100%)",
    color: "#f0f0ff",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    minHeight: "100vh",
    overflowX: "hidden",
  },

  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 5%",
    background: "rgba(8,4,20,0.90)",
    backdropFilter: "blur(28px)",
    zIndex: 2000,
    borderBottom: "1px solid rgba(124,58,237,0.22)",
  },

  logo: {
    fontSize: "clamp(1.7rem, 6vw, 3.5rem)",
    fontWeight: 900,
    letterSpacing: "0.22em",
    background: "linear-gradient(90deg, #c084fc, #7c3aed, #60a5fa, #c084fc)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    whiteSpace: "nowrap",
  },

  navLinks: {
    display: "flex",
    gap: "1.5rem",
  },

  navLink: {
    color: "#e5e5ff",
    textDecoration: "none",
    fontWeight: 700,
    fontSize: "1rem",
  },

  hero: {
    position: "relative",
    textAlign: "center",
    padding: "clamp(220px, 40vh, 320px) 7% 100px",
    overflow: "hidden",
  },

  glowLayer1: {
    position: "absolute",
    top: "-55%",
    left: "10%",
    width: "1100px",
    height: "1100px",
    background: "radial-gradient(circle, rgba(124,58,237,0.35), transparent 65%)",
    filter: "blur(160px)",
  },

  glowLayer2: {
    position: "absolute",
    bottom: "-45%",
    right: "5%",
    width: "1000px",
    height: "1000px",
    background: "radial-gradient(circle, rgba(96,165,250,0.25), transparent 65%)",
    filter: "blur(180px)",
  },

  heroTitle: {
    position: "relative",
    fontSize: "clamp(5.5rem, 20vw, 20rem)",
    fontWeight: 900,
    margin: "0 0 1.5rem",
    lineHeight: 0.95,
    background: "linear-gradient(90deg, #ffffff, #c084fc, #7c3aed, #60a5fa, #ffffff)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundSize: "400% 100%",
    animation: "shineText 15s linear infinite",
  },

  heroSubtitle: {
    position: "relative",
    fontSize: "clamp(1.2rem, 5vw, 3.2rem)",
    opacity: 0.88,
    margin: 0,
  },

  section: {
    padding: "clamp(70px, 10vw, 130px) 7%",
    maxWidth: "1200px",
    margin: "0 auto",
  },

  sectionTitle: {
    fontSize: "clamp(2.6rem, 10vw, 7rem)",
    fontWeight: 900,
    textAlign: "center",
    marginBottom: "4rem",
    background: "linear-gradient(90deg, #c084fc, #7c3aed, #60a5fa)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  platformGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "2rem",
  },

  platformCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2.4rem 1.5rem",
    background: "rgba(124,58,237,0.06)",
    border: "1px solid rgba(124,58,237,0.28)",
    borderRadius: "24px",
    textDecoration: "none",
    color: "#fff",
    transition: "all 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    backdropFilter: "blur(12px)",
  },

  iconWrap: {
    width: "90px",
    height: "90px",
    marginBottom: "1.25rem",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.04)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
  },

  icon: {
    width: "70%",
    height: "70%",
  },

  platformName: {
    fontSize: "1.5rem",
    fontWeight: 800,
    marginTop: "0.5rem",
    textAlign: "center",
  },

  footer: {
    textAlign: "center",
    padding: "90px 7% 70px",
    opacity: 0.75,
    fontSize: "1.05rem",
    borderTop: "1px solid rgba(124,58,237,0.18)",
  },

  footerTag: {
    marginTop: "1rem",
    fontSize: "0.95rem",
    opacity: 0.6,
  },
};

const globalCss = `
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  overflow-x: hidden;
  background: #000;
}

@keyframes shineText {
  0% { background-position: -400%; }
  100% { background-position: 400%; }
}

.platformCard:hover {
  transform: translateY(-16px) scale(1.04);
  box-shadow: 0 30px 80px rgba(124,58,237,0.35);
  border-color: var(--accent, #c084fc);
}

@media (max-width: 768px) {
  .navLinks {
    gap: 1rem;
  }
}
`;

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
