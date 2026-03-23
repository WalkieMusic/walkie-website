// ===============================
// WALKIE – PREMIUM MINIMAL SITE 2026
// Clean. Raw. Elevated. Real icons. No release noise.
// ===============================
const { useState, useEffect } = React;

const links = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/3HkQPPZVeuoEfuzcwJNX4M",
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="12" fill="#1DB954"/><path d="M17.4 16.9a.75.75 0 0 1-1.03.24c-2.82-1.72-6.37-2.1-10.56-1.14a.75.75 0 0 1-.34-1.46c4.58-1.05 8.51-.61 11.68 1.32a.75.75 0 0 1 .25 1.04Zm1.47-3.27a.94.94 0 0 1-1.29.3c-3.23-1.99-8.15-2.56-11.98-1.38a.94.94 0 1 1-.56-1.8c4.37-1.36 9.8-.72 13.53 1.57.45.28.6.86.3 1.31Zm.13-3.4C15.15 7.9 8.8 7.7 5.1 8.82a1.13 1.13 0 1 1-.65-2.16c4.25-1.28 11.32-1.03 15.7 1.57a1.13 1.13 0 1 1-1.15 1.98Z" fill="#fff"/></svg>`,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UCrKt3xZWrvMnxyPcjAY8iZw",
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="4" width="20" height="16" rx="3" fill="#FF0000"/><path d="M10 8.5l6 3.5-6 3.5v-7z" fill="#fff"/></svg>`,
  },
  {
    name: "Apple Music",
    url: "https://music.apple.com/us/artist/walkie-music/1875428459",
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><rect width="24" height="24" rx="6" fill="#fc3f5f"/><path d="M12 5v14M8 9l4-4 4 4M8 15l4 4 4-4" fill="#fff" stroke="#fff" stroke-width="1.5"/></svg>`,
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@walkiemusic",
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.53.02C13.84 0 15.14.01 16.44.01c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.99-.57-.26-1.1-.59-1.62-.93v8.28c0 2.92-2.36 5.29-5.28 5.29-2.92 0-5.28-2.37-5.28-5.29s2.36-5.29 5.28-5.29c.68 0 1.32.13 1.91.36v-4.15c-1.22-.28-2.38-.9-3.35-1.8-1.98-1.84-2.42-4.73-1.41-7.09.43-.99 1.18-1.85 2.12-2.4.94-.56 2.01-.84 3.08-.84z" fill="#000"/><path d="M12.53 2.02c-.07 1.53-.63 3.09-1.75 4.17-1.12 1.11-2.7 1.62-4.24 1.79V2.02h6z" fill="#25f4ee" opacity="0.8"/><path d="M12.53 2.02c-.07 1.53-.63 3.09-1.75 4.17-1.12 1.11-2.7 1.62-4.24 1.79V2.02h6z" fill="#fe2c55" opacity="0.8"/></svg>`,
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = window.innerWidth <= 768;

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>WALKIE</div>
      <div style={{ ...styles.navLinks, display: isMobile ? (isOpen ? 'flex' : 'none') : 'flex', flexDirection: isMobile ? 'column' : 'row' }}>
        <a href="#home" style={styles.navLink}>Home</a>
        <a href="#connect" style={styles.navLink}>Connect</a>
      </div>
      {isMobile && (
        <button onClick={() => setIsOpen(!isOpen)} style={styles.toggle}>
          {isOpen ? '✕' : '☰'}
        </button>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" style={styles.hero}>
      <div style={styles.glow1} />
      <div style={styles.glow2} />
      <h1 style={styles.heroTitle}>WALKIE</h1>
      <p style={styles.heroSubtitle}>
        South African roots.<br />
        New Zealand based.<br />
        Raw. Real. Unfiltered.
      </p>
    </section>
  );
}

function Connect() {
  return (
    <section id="connect" style={styles.section}>
      <h2 style={styles.sectionTitle}>Connect</h2>
      <div style={styles.platformGrid}>
        {links.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.platformCard}
          >
            <div dangerouslySetInnerHTML={{ __html: item.svg }} style={styles.icon} />
            <span style={styles.platformName}>{item.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>Walkie</h2>
      <p style={styles.aboutText}>
        SA born. NZ forged.<br />
        Cinematic energy. Street truth.<br />
        No fake. Just fire that lingers.
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
      © {new Date().getFullYear()} WALKIE • Independent Artist
    </footer>
  );
}

function App() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = globalCss;
    document.head.appendChild(style);
  }, []);

  return (
    <div style={styles.page}>
      <Navbar />
      <Hero />
      <Connect />
      <About />
      <Footer />
    </div>
  );
}

const styles = {
  page: {
    background: "linear-gradient(180deg, #0a0012 0%, #000000 100%)",
    color: "#f2f2ff",
    fontFamily: "system-ui, -apple-system, sans-serif",
    minHeight: "100vh",
    overflowX: "hidden",
  },
  navbar: {
    position: "fixed",
    top: 0, left: 0, right: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.5rem 6%",
    background: "rgba(8,4,18,0.92)",
    backdropFilter: "blur(24px)",
    zIndex: 1000,
    borderBottom: "1px solid rgba(124,58,237,0.2)",
  },
  logo: {
    fontSize: "clamp(2rem, 6vw, 3.2rem)",
    fontWeight: 900,
    letterSpacing: "0.5em",
    background: "linear-gradient(90deg, #c084fc, #7c3aed, #60a5fa)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  navLinks: {
    display: "flex",
    gap: "3rem",
  },
  navLink: {
    color: "#e0e0ff",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "1.2rem",
    transition: "color 0.3s",
  },
  toggle: {
    fontSize: "2rem",
    background: "none",
    border: "none",
    color: "#c084fc",
    cursor: "pointer",
  },
  hero: {
    position: "relative",
    textAlign: "center",
    padding: "clamp(240px, 45vh, 340px) 6% 180px",
    overflow: "hidden",
  },
  glow1: {
    position: "absolute",
    top: "-40%",
    left: "10%",
    width: "clamp(600px, 80vw, 1400px)",
    height: "clamp(600px, 80vw, 1400px)",
    background: "radial-gradient(circle, rgba(124,58,237,0.25), transparent 60%)",
    filter: "blur(120px)",
    opacity: 0.7,
    animation: "pulseGlow 14s infinite alternate ease-in-out",
  },
  glow2: {
    position: "absolute",
    bottom: "-30%",
    right: "15%",
    width: "clamp(500px, 70vw, 1200px)",
    height: "clamp(500px, 70vw, 1200px)",
    background: "radial-gradient(circle, rgba(96,165,250,0.18), transparent 60%)",
    filter: "blur(140px)",
    opacity: 0.6,
    animation: "pulseGlow 18s infinite alternate ease-in-out",
  },
  heroTitle: {
    fontSize: "clamp(8rem, 22vw, 18rem)",
    fontWeight: 900,
    margin: 0,
    background: "linear-gradient(90deg, #fff, #c084fc, #7c3aed, #fff)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundSize: "300%",
    animation: "shine 12s linear infinite",
  },
  heroSubtitle: {
    fontSize: "clamp(1.8rem, 6vw, 3rem)",
    opacity: 0.9,
    marginTop: "2rem",
    lineHeight: 1.4,
  },
  section: {
    padding: "clamp(100px, 15vw, 160px) 6%",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  sectionTitle: {
    fontSize: "clamp(3.5rem, 10vw, 6rem)",
    fontWeight: 900,
    textAlign: "center",
    marginBottom: "3rem",
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
    padding: "2.5rem 1.5rem",
    background: "rgba(124,58,237,0.08)",
    border: "1px solid rgba(124,58,237,0.3)",
    borderRadius: "20px",
    textDecoration: "none",
    color: "#fff",
    transition: "all 0.4s ease",
    backdropFilter: "blur(10px)",
  },
  icon: {
    width: "80px",
    height: "80px",
    marginBottom: "1.2rem",
    filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.5))",
  },
  platformName: {
    fontSize: "1.6rem",
    fontWeight: 700,
  },
  aboutText: {
    fontSize: "clamp(1.4rem, 4vw, 2rem)",
    textAlign: "center",
    maxWidth: "900px",
    margin: "0 auto",
    lineHeight: 1.7,
    opacity: 0.92,
  },
  footer: {
    textAlign: "center",
    padding: "6rem 1rem 4rem",
    opacity: 0.7,
    fontSize: "1.1rem",
    borderTop: "1px solid rgba(124,58,237,0.2)",
  },
};

const globalCss = `
@keyframes shine {
  0% { background-position: -300%; }
  100% { background-position: 300%; }
}
@keyframes pulseGlow {
  0% { transform: scale(1); opacity: 0.6; }
  100% { transform: scale(1.15); opacity: 0.95; }
}
.platformCard:hover {
  transform: translateY(-12px);
  box-shadow: 0 20px 60px rgba(124,58,237,0.4);
  border-color: #c084fc;
}
`;

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
