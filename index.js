// ===============================
// WALKIE – ULTIMATE PREMIUM ARTIST SITE (BEAT MODE)
// March 2026 – Auckland ready
// ===============================

const links = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/3HkQPPZVeuoEfuzcwJNX4M",
    svg: '<svg viewBox="0 0 512 123" xmlns="http://www.w3.org/2000/svg"><path d="M.057 75.44c5.077-.36 9.78-2.46 13.54-6.18 3.76-3.72 6.04-8.5 6.4-13.82.36-5.32-1.3-10.56-4.7-14.7-3.4-4.14-8.07-6.7-13.14-7.06-5.07-.36-10.02 1.3-13.8 4.7-3.78 3.4-6.12 8.07-6.48 13.14-.36 5.07 1.3 10.02 4.7 13.8 3.4 3.78 8.07 6.12 13.14 6.48zM256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm94.3 368.9c-3.2 4.2-9.4 5.3-13.6 2.1-33.3-20.5-75.1-25.1-124.6-13.7-5.1 1.2-10.2-2-11.4-7.1-1.2-5.1 2-10.2 7.1-11.4 54.8-12.7 101.6-7.5 139.8 16.3 4.2 3.2 5.3 9.4 2.1 13.8zm25-57.7c-4 5.3-11.8 6.7-17.1 2.7-39.5-30.4-99.6-39.2-146.4-21.4-4.9 1.8-10.3-1-12.1-5.9-1.8-4.9 1-10.3 5.9-12.1 52.6-19.3 118.3-9.4 163.3 25.3 5.3 4 6.7 11.8 2.7 17.1zm.2-57.8c-47.3-28-125.5-30.5-170.9-16.9-5.7 1.7-11.8-1.6-13.5-7.3-1.7-5.7 1.6-11.8 7.3-13.5 51.6-15.3 136.3-12.3 189.5 19.7 5.3 3.2 7 10.4 3.8 15.7-3.2 5.3-10.4 7-15.7 3.8z" fill="#1DB954"/></svg>',
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UCrKt3xZWrvMnxyPcjAY8iZw",
    svg: '<svg viewBox="0 0 512 358" xmlns="http://www.w3.org/2000/svg"><path d="M427 169c-4-15-17-27-32-31-34-9-239-9-278 0-15 4-28 16-32 31-9 38-9 123 0 161 4 15 17 27 32 31 36 9 241 9 278 0 15-4 28-16 32-31 9-36 9-123 0-161zM210 267v-92l93 46-93 46z" fill="#FF0000"/><path d="M256 0C114 0 0 114 0 256s114 256 256 256 256-114 256-256S398 0 256 0zm0 0" fill="none"/></svg>',
  },
  {
    name: "Apple Music",
    url: "https://music.apple.com/us/artist/walkie-music/1875428459",
    svg: '<svg viewBox="0 0 512 126" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm48 368h-96c-22 0-40-18-40-40v-96c0-22 18-40 40-40h96c22 0 40 18 40 40v96c0 22-18 40-40 40z" fill="#000"/><path d="M256 128c-70.7 0-128 57.3-128 128s57.3 128 128 128 128-57.3 128-128-57.3-128-128-128zm0 192c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z" fill="#fff"/></svg>',
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@walkiemusic",
    svg: '<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M48 0C21.5 0 0 21.5 0 48s21.5 48 48 48 48-21.5 48-48S74.5 0 48 0zm20.7 72.3c-3.8 3.8-10.2 3.8-14 0l-6.7-6.7c-3.8-3.8-10.2-3.8-14 0l-6.7 6.7c-3.8 3.8-10.2 3.8-14 0-3.8-3.8-3.8-10.2 0-14l6.7-6.7c3.8-3.8 3.8-10.2 0-14l-6.7-6.7c-3.8-3.8-3.8-10.2 0-14 3.8-3.8 10.2-3.8 14 0l6.7 6.7c3.8 3.8 10.2 3.8 14 0l6.7-6.7c3.8-3.8 10.2-3.8 14 0 3.8 3.8 3.8 10.2 0 14l-6.7 6.7c-3.8 3.8-3.8 10.2 0 14l6.7 6.7c3.8 3.8 3.8 10.2 0 14z" fill="#000"/></svg>',
  },
];

const releases = [
  { title: "As Die Tyd Stilbly", desc: "Latest cinematic drop – streaming everywhere now.", color: "#1DB954" },
  { title: "No More Runnin", desc: "High-octane energy. Built to hit hard.", color: "#FF0000" },
  { title: "Brothers Forever", desc: "Loyalty, emotion, real bars.", color: "#007AFF" },
];

// ────────────────────────────────────────────────
// COMPONENTS
// ────────────────────────────────────────────────

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>WALKIE</div>
      <div style={styles.navLinks}>
        <a href="#home" style={styles.navLink}>Home</a>
        <a href="#music" style={styles.navLink}>Music</a>
        <a href="#platforms" style={styles.navLink}>Connect</a>
        <a href="#about" style={styles.navLink}>About</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" style={styles.hero}>
      <div style={styles.heroGlow1} />
      <div style={styles.heroGlow2} />
      <h1 style={styles.heroTitle}>WALKIE</h1>
      <p style={styles.heroSubtitle}>
        Raw emotion. Street energy. Sound that stays in your head for days.
      </p>
      <div style={styles.heroButtons}>
        <a href={links[0].url} target="_blank" rel="noopener noreferrer" style={styles.primaryBtn}>
          Play on Spotify
        </a>
        <a href={links[1].url} target="_blank" rel="noopener noreferrer" style={styles.secondaryBtn}>
          YouTube Channel
        </a>
      </div>
    </section>
  );
}

function PlatformCard({ item }) {
  return (
    <a href={item.url} target="_blank" rel="noopener noreferrer" style={styles.platformCard}>
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <div dangerouslySetInnerHTML={{ __html: item.svg }} style={{ width: "48px", height: "48px" }} />
        <div>
          <div style={styles.platformName}>{item.name}</div>
          <div style={styles.platformSub}>Connect / Stream</div>
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
        {links.map((item) => <PlatformCard key={item.name} item={item} />)}
      </div>
      <div style={{ margin: "60px auto 0", maxWidth: "640px" }}>
        <iframe
          title="Spotify Artist"
          src="https://open.spotify.com/embed/artist/3HkQPPZVeuoEfuzcwJNX4M?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          style={{ borderRadius: "16px" }}
        />
      </div>
    </section>
  );
}

function ReleaseCard({ release }) {
  return (
    <div style={{ ...styles.releaseCard, borderLeft: `5px solid ${release.color}` }}>
      <h3 style={{ ...styles.releaseTitle, color: release.color }}>{release.title}</h3>
      <p style={styles.releaseDesc}>{release.desc}</p>
      <a href={links[0].url} target="_blank" rel="noopener noreferrer" style={styles.listenBtn}>
        Listen Now
      </a>
    </div>
  );
}

function Releases() {
  return (
    <section id="music" style={styles.section}>
      <h2 style={styles.sectionTitle}>Releases</h2>
      <div style={styles.releaseGrid}>
        {releases.map((r) => <ReleaseCard key={r.title} release={r} />)}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.sectionTitle}>The WALKIE Sound</h2>
      <p style={styles.aboutText}>
        Independent. Unfiltered. Every bar carries real life — hustle, loyalty, heartbreak, victory.
        <br /><br />
        Cinematic beats meet raw emotion. No gimmicks. Just music that connects deep and hits harder every time.
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
      © {new Date().getFullYear()} WALKIE • Auckland Independent • Real Sound Only
    </footer>
  );
}

// ────────────────────────────────────────────────
// MAIN APP
// ────────────────────────────────────────────────

function App() {
  return (
    <div style={styles.page}>
      <Navbar />
      <Hero />
      <Platforms />
      <Releases />
      <About />
      <Footer />
    </div>
  );
}

// ────────────────────────────────────────────────
// STYLES (big upgrade)
// ────────────────────────────────────────────────

const styles = {
  page: {
    background: "linear-gradient(180deg, #0b0015, #000000)",
    color: "#f0f0f5",
    fontFamily: "system-ui, -apple-system, sans-serif",
    minHeight: "100vh",
    overflowX: "hidden",
  },
  navbar: {
    position: "fixed",
    top: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.4rem 6%",
    background: "rgba(10, 5, 20, 0.82)",
    backdropFilter: "blur(20px)",
    borderBottom: "1px solid rgba(147, 51, 234, 0.18)",
    zIndex: 1000,
    boxShadow: "0 4px 30px rgba(0,0,0,0.4)",
  },
  logo: {
    fontSize: "2.2rem",
    fontWeight: 900,
    letterSpacing: "0.5em",
    background: "linear-gradient(90deg, #c084fc, #7c3aed, #60a5fa)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  navLinks: {
    display: "flex",
    gap: "2.8rem",
    fontSize: "1.05rem",
    fontWeight: 500,
  },
  navLink: {
    color: "#e0e0ff",
    textDecoration: "none",
    transition: "color 0.3s",
  },
  hero: {
    position: "relative",
    textAlign: "center",
    padding: "clamp(220px, 28vh, 300px) 5% 140px",
    overflow: "hidden",
  },
  heroGlow1: {
    position: "absolute",
    top: "-40%",
    left: "20%",
    width: "clamp(400px, 60vw, 900px)",
    height: "clamp(400px, 60vw, 900px)",
    background: "radial-gradient(circle, rgba(168,85,247,0.22), transparent 60%)",
    filter: "blur(120px)",
    opacity: 0.8,
    animation: "pulse1 12s infinite alternate",
  },
  heroGlow2: {
    position: "absolute",
    top: "-20%",
    right: "15%",
    width: "clamp(500px, 70vw, 1100px)",
    height: "clamp(500px, 70vw, 1100px)",
    background: "radial-gradient(circle, rgba(96,165,250,0.18), transparent 65%)",
    filter: "blur(140px)",
    opacity: 0.6,
    animation: "pulse2 15s infinite alternate",
  },
  heroTitle: {
    fontSize: "clamp(6rem, 20vw, 16rem)",
    fontWeight: 900,
    letterSpacing: "0.12em",
    margin: "0 0 1rem",
    background: "linear-gradient(90deg, #e0e0ff, #c084fc, #60a5fa, #e0e0ff)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: "shine 8s linear infinite",
  },
  heroSubtitle: {
    fontSize: "clamp(1.4rem, 5vw, 1.9rem)",
    color: "#b0b0ff",
    maxWidth: "720px",
    margin: "0 auto 3rem",
  },
  heroButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "1.5rem",
    flexWrap: "wrap",
  },
  primaryBtn: {
    padding: "1rem 2.6rem",
    background: "linear-gradient(135deg, #7c3aed, #c084fc)",
    color: "#000",
    fontWeight: 700,
    borderRadius: "999px",
    textDecoration: "none",
    boxShadow: "0 12px 40px rgba(124,58,237,0.5)",
    transition: "all 0.3s",
  },
  secondaryBtn: {
    padding: "1rem 2.6rem",
    border: "2px solid #6b7280",
    borderRadius: "999px",
    color: "#e0e0ff",
    fontWeight: 600,
    textDecoration: "none",
    transition: "all 0.3s",
  },
  section: {
    padding: "clamp(80px, 12vw, 120px) 6%",
    maxWidth: "1280px",
    margin: "0 auto",
  },
  sectionTitle: {
    fontSize: "clamp(2.8rem, 8vw, 4.5rem)",
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
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "1.6rem",
  },
  platformCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1.6rem 2rem",
    background: "rgba(30,20,50,0.6)",
    borderRadius: "20px",
    textDecoration: "none",
    color: "inherit",
    border: "1px solid rgba(124,58,237,0.2)",
    transition: "all 0.35s ease",
    backdropFilter: "blur(10px)",
  },
  platformName: { fontSize: "1.4rem", fontWeight: 700 },
  platformSub: { fontSize: "0.95rem", color: "#a0a0ff" },
  arrow: { fontSize: "1.8rem", opacity: 0.7, transition: "transform 0.3s" },
  releaseGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "2rem",
  },
  releaseCard: {
    padding: "2rem",
    background: "rgba(30,20,50,0.55)",
    borderRadius: "20px",
    border: "1px solid rgba(255,255,255,0.06)",
    transition: "all 0.4s ease",
  },
  releaseTitle: { fontSize: "1.9rem", fontWeight: 800, marginBottom: "0.8rem" },
  releaseDesc: { color: "#b0b0ff", marginBottom: "1.6rem", fontSize: "1.1rem" },
  listenBtn: {
    padding: "0.9rem 2rem",
    background: "linear-gradient(135deg, #7c3aed, #c084fc)",
    color: "#000",
    borderRadius: "999px",
    textDecoration: "none",
    fontWeight: 700,
    display: "inline-block",
  },
  aboutText: {
    color: "#d0d0ff",
    fontSize: "1.25rem",
    maxWidth: "820px",
    margin: "0 auto",
    textAlign: "center",
    lineHeight: 1.7,
  },
  footer: {
    textAlign: "center",
    padding: "6rem 1rem 8rem",
    color: "#7c7ca5",
    fontSize: "1.05rem",
    borderTop: "1px solid rgba(124,58,237,0.12)",
  },
};

// Keyframe animations (inline via style tag in real app, or just know they work)
const keyframes = `
@keyframes pulse1 { 0% { transform: scale(1); opacity: 0.6; } 100% { transform: scale(1.15); opacity: 0.9; } }
@keyframes pulse2 { 0% { transform: scale(1); opacity: 0.5; } 100% { transform: scale(1.2); opacity: 0.8; } }
@keyframes shine { 0% { background-position: -200%; } 100% { background-position: 200%; } }
`;

// In a real index.html you'd add <style>{keyframes}</style> in head

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
