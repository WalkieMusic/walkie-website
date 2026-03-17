// ===============================
// WALKIE – UPGRADED PREMIUM WEBSITE (2026 edition)
// ===============================

const links = [
  { name: "Spotify", url: "https://open.spotify.com/artist/3HkQPPZVeuoEfuzcwJNX4M", icon: "🎧" },
  { name: "YouTube", url: "https://www.youtube.com/channel/UCrKt3xZWrvMnxyPcjAY8iZw", icon: "▶️" },
  { name: "Apple Music", url: "https://music.apple.com/us/artist/walkie-music/1875428459", icon: "🍎" },
  { name: "TikTok", url: "https://www.tiktok.com/@walkiemusic", icon: "✨" },
];

const releases = [
  { title: "As Die Tyd Stilbly", desc: "Latest cinematic drop – out now everywhere.", accent: "#a78bfa" },
  { title: "No More Runnin", desc: "High-octane energy. Pure adrenaline.", accent: "#f472b6" },
  { title: "Brothers Forever", desc: "Loyalty in every bar. Emotional heavyweight.", accent: "#60a5fa" },
];

// ────────────────────────────────────────────────
// COMPONENTS
// ────────────────────────────────────────────────

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>WALKIE</div>
      <div style={styles.navLinks}>
        <a href="#home">Home</a>
        <a href="#music">Music</a>
        <a href="#platforms">Connect</a>
        <a href="#about">About</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" style={styles.hero}>
      <div style={styles.heroGlow} />
      <h1 style={styles.heroTitle}>WALKIE</h1>
      <p style={styles.heroSubtitle}>
        Real emotion. Raw energy. Music that hits different.
      </p>
      <div style={styles.heroButtons}>
        <a href={links[0].url} target="_blank" rel="noopener noreferrer" style={styles.primaryBtn}>
          Stream on Spotify
        </a>
        <a href={links[1].url} target="_blank" rel="noopener noreferrer" style={styles.secondaryBtn}>
          Watch on YouTube
        </a>
      </div>
    </section>
  );
}

function SocialCard({ item }) {
  return (
    <a href={item.url} target="_blank" rel="noopener noreferrer" style={styles.socialCard}>
      <span style={styles.socialIcon}>{item.icon}</span>
      <div>
        <div style={styles.socialName}>{item.name}</div>
        <div style={styles.socialSub}>Connect now</div>
      </div>
      <span style={styles.arrow}>→</span>
    </a>
  );
}

function Platforms() {
  return (
    <section id="platforms" style={styles.section}>
      <h2 style={styles.sectionTitle}>Find Me Everywhere</h2>
      <div style={styles.socialGrid}>
        {links.map((item) => (
          <SocialCard key={item.name} item={item} />
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <iframe
          title="Spotify Embed"
          style={{ borderRadius: "12px", border: "none" }}
          src="https://open.spotify.com/embed/artist/3HkQPPZVeuoEfuzcwJNX4M?utm_source=generator"
          width="100%"
          height="380"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        />
      </div>
    </section>
  );
}

function ReleaseCard({ release }) {
  return (
    <div style={{ ...styles.releaseCard, borderLeft: `4px solid ${release.accent || "#8b5cf6"}` }}>
      <h3 style={{ ...styles.releaseTitle, color: release.accent || "#fff" }}>
        {release.title}
      </h3>
      <p style={styles.releaseDesc}>{release.desc}</p>
      <a
        href={links[0].url}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.listenBtn}
      >
        Listen Now
      </a>
    </div>
  );
}

function Releases() {
  return (
    <section id="music" style={styles.section}>
      <h2 style={styles.sectionTitle}>Latest Releases</h2>
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
      <h2 style={styles.sectionTitle}>The Walkie Vibe</h2>
      <p style={styles.aboutText}>
        Independent artist. No boundaries. Every track is built from real life — pain, loyalty, hustle, and pure sonic power.
        <br /><br />
        Cinematic soundscapes meet street-level emotion. Nothing fake. Nothing watered down.
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
      © {new Date().getFullYear()} WALKIE • Independent • Real Music Only
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
// STYLES
// ────────────────────────────────────────────────

const styles = {
  page: {
    background: "linear-gradient(to bottom, #0a0a0f, #000000)",
    color: "#f1f1f1",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    minHeight: "100vh",
    lineHeight: 1.6,
  },
  navbar: {
    position: "fixed",
    top: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.2rem 5%",
    background: "rgba(0,0,0,0.75)",
    backdropFilter: "blur(16px)",
    borderBottom: "1px solid rgba(255,255,255,0.06)",
    zIndex: 1000,
  },
  logo: {
    fontSize: "1.8rem",
    fontWeight: 900,
    letterSpacing: "0.4em",
    background: "linear-gradient(90deg, #c084fc, #a78bfa)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  navLinks: {
    display: "flex",
    gap: "2.2rem",
    fontWeight: 500,
  },
  hero: {
    position: "relative",
    textAlign: "center",
    padding: "clamp(180px, 22vh, 240px) 5% 120px",
    overflow: "hidden",
  },
  heroGlow: {
    position: "absolute",
    top: "-30%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "min(90vw, 900px)",
    height: "min(90vw, 900px)",
    background: "radial-gradient(circle at center, rgba(168,85,247,0.18), transparent 60%)",
    filter: "blur(100px)",
    opacity: 0.7,
    pointerEvents: "none",
  },
  heroTitle: {
    fontSize: "clamp(5rem, 18vw, 14rem)",
    fontWeight: 900,
    letterSpacing: "0.08em",
    margin: "0 0 0.8rem",
    background: "linear-gradient(90deg, #fff, #d1d5db, #fff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  heroSubtitle: {
    fontSize: "clamp(1.2rem, 4vw, 1.6rem)",
    color: "#a1a1aa",
    maxWidth: "640px",
    margin: "0 auto 2.5rem",
  },
  heroButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "1.2rem",
    flexWrap: "wrap",
  },
  primaryBtn: {
    padding: "0.9rem 2.2rem",
    background: "linear-gradient(135deg, #a78bfa, #c084fc)",
    color: "#000",
    fontWeight: 700,
    borderRadius: "50px",
    textDecoration: "none",
    boxShadow: "0 8px 30px rgba(168,85,247,0.35)",
  },
  secondaryBtn: {
    padding: "0.9rem 2.2rem",
    border: "1px solid #4b5563",
    borderRadius: "50px",
    color: "#e5e7eb",
    textDecoration: "none",
    fontWeight: 600,
  },
  section: {
    padding: "clamp(60px, 10vw, 100px) 5%",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  sectionTitle: {
    fontSize: "clamp(2.2rem, 6vw, 3.5rem)",
    fontWeight: 900,
    marginBottom: "2.5rem",
    textAlign: "center",
    background: "linear-gradient(90deg, #c084fc, #a78bfa, #60a5fa)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  socialGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "1.2rem",
  },
  socialCard: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "1.4rem 1.6rem",
    background: "rgba(30,30,40,0.7)",
    borderRadius: "16px",
    textDecoration: "none",
    color: "inherit",
    border: "1px solid rgba(168,85,247,0.15)",
    transition: "all 0.25s ease",
    backdropFilter: "blur(8px)",
  },
  socialIcon: { fontSize: "1.8rem", marginRight: "1rem" },
  socialName: { fontWeight: 700, fontSize: "1.15rem" },
  socialSub: { fontSize: "0.9rem", color: "#9ca3af" },
  arrow: { fontSize: "1.4rem", opacity: 0.7 },
  releaseGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "1.8rem",
  },
  releaseCard: {
    padding: "1.8rem",
    background: "rgba(30,30,40,0.6)",
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.05)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  releaseTitle: { fontSize: "1.6rem", fontWeight: 800, marginBottom: "0.6rem" },
  releaseDesc: { color: "#9ca3af", marginBottom: "1.4rem" },
  listenBtn: {
    display: "inline-block",
    padding: "0.7rem 1.6rem",
    background: "#6d28d9",
    color: "#fff",
    borderRadius: "50px",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "0.95rem",
  },
  aboutText: {
    color: "#d1d5db",
    fontSize: "1.15rem",
    maxWidth: "780px",
    margin: "0 auto",
    textAlign: "center",
  },
  footer: {
    textAlign: "center",
    padding: "4rem 1rem 6rem",
    color: "#6b7280",
    fontSize: "0.95rem",
    borderTop: "1px solid rgba(255,255,255,0.04)",
  },
};

// Hover effects (add to cards via :hover in real CSS, or use onMouseEnter if needed)
const cardHover = {
  transform: "translateY(-8px)",
  boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
};

// ────────────────────────────────────────────────
// RENDER
// ────────────────────────────────────────────────

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
