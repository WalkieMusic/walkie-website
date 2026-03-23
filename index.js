// ===============================
// WALKIE – CLEAN & POWERFUL 2026 SITE
// Minimal. Raw. Focused on the drop.
// ===============================
const { useState, useEffect } = React;

const RELEASE_LIVE = false; // 🔥 Flip to true when "The Walkie Stomp" is live
const TRACK_ID = "PUT_YOUR_TRACK_ID_HERE"; // Spotify track ID after release

const links = [
  { name: "Spotify", url: "https://open.spotify.com/artist/3HkQPPZVeuoEfuzcwJNX4M" },
  { name: "YouTube", url: "https://www.youtube.com/channel/UCrKt3xZWrvMnxyPcjAY8iZw" },
  { name: "Apple Music", url: "https://music.apple.com/us/artist/walkie-music/1875428459" },
  { name: "TikTok", url: "https://www.tiktok.com/@walkiemusic" },
];

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>WALKIE</div>
      <div style={styles.navLinks}>
        <a href="#home" style={styles.navLink}>Home</a>
        <a href="#drop" style={styles.navLink}>Drop</a>
        <a href="#connect" style={styles.navLink}>Connect</a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" style={styles.hero}>
      <h1 style={styles.heroTitle}>WALKIE</h1>
      <p style={styles.heroSubtitle}>
        South African roots.<br />
        New Zealand based.<br />
        Raw energy. No bullshit.
      </p>
    </section>
  );
}

function NewReleaseSoon() {
  return (
    <section id="drop" style={styles.section}>
      <h2 style={styles.sectionTitle}>New Release Soon</h2>
      <div style={styles.teaserBox}>
        <h3 style={styles.teaserTitle}>The Walkie Stomp</h3>
        <p style={styles.teaserDesc}>
          Heavy. Real. Coming to stomp through everything.<br />
          Stay locked — it's dropping soon.
        </p>
        {!RELEASE_LIVE ? (
          <div style={styles.comingBadge}>Coming Soon</div>
        ) : (
          <iframe
            src={`https://open.spotify.com/embed/track/${TRACK_ID}`}
            width="100%"
            height="152"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media;"
            style={{ borderRadius: "12px", maxWidth: "600px", margin: "2rem auto 0", display: "block" }}
          />
        )}
      </div>
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
            {item.name}
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
        Real stories. Cinematic beats.<br />
        No trends. Just fire.
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
      © {new Date().getFullYear()} WALKIE • Independent
    </footer>
  );
}

function App() {
  return (
    <div style={styles.page}>
      <Navbar />
      <Hero />
      <NewReleaseSoon />
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
    background: "rgba(8, 4, 18, 0.9)",
    backdropFilter: "blur(20px)",
    zIndex: 1000,
    borderBottom: "1px solid rgba(124,58,237,0.18)",
  },
  logo: {
    fontSize: "2.6rem",
    fontWeight: 900,
    letterSpacing: "0.4em",
    background: "linear-gradient(90deg, #c084fc, #7c3aed)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  navLinks: { display: "flex", gap: "2.5rem" },
  navLink: {
    color: "#e0e0ff",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "1.1rem",
    transition: "color 0.3s",
  },
  hero: {
    textAlign: "center",
    padding: "clamp(220px, 40vh, 300px) 6% 140px",
  },
  heroTitle: {
    fontSize: "clamp(6rem, 18vw, 14rem)",
    fontWeight: 900,
    margin: 0,
    background: "linear-gradient(90deg, #ffffff, #c084fc, #7c3aed)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  heroSubtitle: {
    fontSize: "clamp(1.6rem, 5vw, 2.4rem)",
    opacity: 0.85,
    marginTop: "1.5rem",
    lineHeight: 1.4,
  },
  section: {
    padding: "clamp(80px, 12vw, 120px) 6%",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  sectionTitle: {
    fontSize: "clamp(2.8rem, 8vw, 4.5rem)",
    fontWeight: 900,
    textAlign: "center",
    marginBottom: "2.5rem",
    background: "linear-gradient(90deg, #c084fc, #7c3aed)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  teaserBox: {
    background: "rgba(124,58,237,0.08)",
    border: "1px solid rgba(124,58,237,0.3)",
    borderRadius: "20px",
    padding: "3rem 2rem",
    textAlign: "center",
    maxWidth: "700px",
    margin: "0 auto",
    boxShadow: "0 10px 40px rgba(0,0,0,0.6)",
  },
  teaserTitle: {
    fontSize: "3rem",
    fontWeight: 800,
    color: "#c084fc",
    marginBottom: "1rem",
  },
  teaserDesc: {
    fontSize: "1.3rem",
    opacity: 0.9,
    lineHeight: 1.6,
    marginBottom: "2rem",
  },
  comingBadge: {
    display: "inline-block",
    padding: "0.8rem 2rem",
    background: "linear-gradient(135deg, #7c3aed, #c084fc)",
    color: "#000",
    fontWeight: 700,
    fontSize: "1.2rem",
    borderRadius: "999px",
  },
  platformGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "1.5rem",
  },
  platformCard: {
    padding: "1.5rem",
    background: "rgba(124,58,237,0.1)",
    border: "1px solid rgba(124,58,237,0.35)",
    borderRadius: "12px",
    textAlign: "center",
    textDecoration: "none",
    color: "#fff",
    fontSize: "1.3rem",
    fontWeight: 600,
    transition: "all 0.3s",
  },
  aboutText: {
    fontSize: "1.4rem",
    textAlign: "center",
    maxWidth: "800px",
    margin: "0 auto",
    lineHeight: 1.7,
    opacity: 0.9,
  },
  footer: {
    textAlign: "center",
    padding: "4rem 1rem",
    opacity: 0.6,
    fontSize: "1rem",
    borderTop: "1px solid rgba(124,58,237,0.15)",
  },
};

// Add subtle global animations
const globalCss = `
@keyframes glowPulse {
  0% { box-shadow: 0 0 20px rgba(124,58,237,0.2); }
  100% { box-shadow: 0 0 40px rgba(124,58,237,0.4); }
}
.teaserBox:hover { animation: glowPulse 3s infinite alternate; }
`;

const styleTag = document.createElement("style");
styleTag.innerHTML = globalCss;
document.head.appendChild(styleTag);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
