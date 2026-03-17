// ===============================
// WALKIE FULL PREMIUM WEBSITE
// ===============================

// -------------------------------
// DATA
// -------------------------------
const links = [
  { name: "Spotify", url: "https://open.spotify.com/artist/3HkQPPZVeuoEfuzcwJNX4M" },
  { name: "YouTube", url: "https://www.youtube.com/channel/UCrKt3xZWrvMnxyPcjAY8iZw" },
  { name: "Apple Music", url: "https://music.apple.com/us/artist/walkie-music/1875428459" },
  { name: "TikTok", url: "https://www.tiktok.com/@walkiemusic" },
];

const releases = [
  { title: "As Die Tyd Stilbly", desc: "Latest release – streaming everywhere now." },
  { title: "No More Runnin", desc: "High energy track built to hit hard." },
  { title: "Brothers Forever", desc: "Emotional release dedicated to loyalty." },
];

// -------------------------------
// COMPONENTS
// -------------------------------

function Navbar() {
  return (
    <div style={styles.navbar}>
      <div style={styles.logo}>WALKIE</div>
      <div style={styles.navLinks}>
        <a href="#home">Home</a>
        <a href="#music">Music</a>
        <a href="#about">About</a>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="home" style={styles.hero}>
      <div style={styles.heroGlow}></div>

      <h1 style={styles.heroTitle}>WALKIE</h1>

      <p style={styles.heroSubtitle}>
        Music built to move people. Real energy. Real sound. No limits.
      </p>

      <div style={styles.heroButtons}>
        <a href={links[0].url} target="_blank" style={styles.mainBtn}>Spotify</a>
        <a href={links[1].url} target="_blank" style={styles.altBtn}>YouTube</a>
      </div>
    </section>
  );
}

function PlatformCard({ item }) {
  return (
    <a href={item.url} target="_blank" style={styles.platformCard}>
      <div style={styles.platformLeft}>
        <div style={styles.platformName}>{item.name}</div>
        <div style={styles.platformSub}>Open {item.name}</div>
      </div>
      <div style={styles.arrow}>→</div>
    </a>
  );
}

function Platforms() {
  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>Platforms</h2>
      <div style={styles.platformGrid}>
        {links.map((l) => (
          <PlatformCard key={l.name} item={l} />
        ))}
      </div>
    </section>
  );
}

function ReleaseCard({ r }) {
  return (
    <div style={styles.releaseCard}>
      <h3 style={styles.releaseTitle}>{r.title}</h3>
      <p style={styles.releaseDesc}>{r.desc}</p>
      <a href={links[0].url} target="_blank" style={styles.altBtn}>
        Listen
      </a>
    </div>
  );
}

function Releases() {
  return (
    <section id="music" style={styles.section}>
      <h2 style={styles.sectionTitle}>Music</h2>
      <div style={styles.releaseGrid}>
        {releases.map((r) => (
          <ReleaseCard key={r.title} r={r} />
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.sectionTitle}>The Walkie sound</h2>
      <p style={styles.aboutText}>
        Walkie is an independent artist creating music with emotion, energy and a modern sound.
        Every track is built to connect, hit hard and stay with you.
        <br /><br />
        No filler. No shortcuts. Just real music.
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
      WALKIE • Official Artist Website
    </footer>
  );
}

// -------------------------------
// MAIN APP
// -------------------------------
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

// -------------------------------
// STYLES (BIG SECTION)
// -------------------------------
const styles = {

  page: {
    background: "#050507",
    color: "#fff",
    fontFamily: "Arial",
  },

  navbar: {
    position: "fixed",
    top: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    background: "rgba(0,0,0,0.7)",
    backdropFilter: "blur(10px)",
    zIndex: 10,
  },

  logo: {
    fontWeight: 900,
    letterSpacing: "4px",
  },

  navLinks: {
    display: "flex",
    gap: "20px",
  },

  hero: {
    textAlign: "center",
    padding: "140px 20px 80px",
    position: "relative",
  },

  heroGlow: {
    position: "absolute",
    width: "600px",
    height: "600px",
    background: "radial-gradient(circle, rgba(255,255,255,0.15), transparent)",
    filter: "blur(140px)",
    left: "50%",
    transform: "translateX(-50%)",
    top: "-200px",
  },

  heroTitle: {
    fontSize: "150px",
    fontWeight: 900,
    letterSpacing: "10px",
  },

  heroSubtitle: {
    color: "#aaa",
    marginTop: "10px",
  },

  heroButtons: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    gap: "16px",
  },

  mainBtn: {
    padding: "16px 26px",
    background: "#fff",
    color: "#000",
    borderRadius: "12px",
    textDecoration: "none",
  },

  altBtn: {
    padding: "16px 26px",
    border: "1px solid #444",
    borderRadius: "12px",
    textDecoration: "none",
    color: "#fff",
  },

  section: {
    padding: "60px 20px",
    maxWidth: "1000px",
    margin: "0 auto",
  },

  sectionTitle: {
    fontSize: "30px",
    fontWeight: 900,
    marginBottom: "20px",
  },

  platformGrid: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  platformCard: {
    display: "flex",
    justifyContent: "space-between",
    padding: "18px",
    background: "#111",
    borderRadius: "14px",
    textDecoration: "none",
    color: "#fff",
  },

  platformLeft: {
    display: "flex",
    flexDirection: "column",
  },

  platformName: {
    fontWeight: 800,
  },

  platformSub: {
    fontSize: "13px",
    color: "#aaa",
  },

  arrow: {
    opacity: 0.6,
  },

  releaseGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },

  releaseCard: {
    background: "#111",
    padding: "24px",
    borderRadius: "16px",
  },

  releaseTitle: {
    fontSize: "22px",
    fontWeight: 800,
  },

  releaseDesc: {
    color: "#aaa",
    marginBottom: "12px",
  },

  aboutText: {
    color: "#aaa",
    lineHeight: "1.6",
  },

  footer: {
    textAlign: "center",
    padding: "40px",
    color: "#666",
  },
};

// -------------------------------
// RENDER
// -------------------------------
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
