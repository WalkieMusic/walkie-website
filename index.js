// ===============================
// DATA
// ===============================
const links = [
  { name: "Spotify", url: "https://open.spotify.com/artist/3HkQPPZVeuoEfuzcwJNX4M", subtitle: "Stream Walkie on Spotify", icon: "🎧" },
  { name: "YouTube", url: "https://www.youtube.com/channel/UCrKt3xZWrvMnxyPcjAY8iZw", subtitle: "Watch videos and releases", icon: "▶️" },
  { name: "Apple Music", url: "https://music.apple.com/us/artist/walkie-music/1875428459", subtitle: "Listen on Apple Music", icon: "🍎" },
  { name: "TikTok", url: "https://www.tiktok.com/@walkiemusic", subtitle: "Follow for updates", icon: "🎵" },
];

// ===============================
// SMALL COMPONENTS
// ===============================
function Icon({ icon }) {
  return <div style={styles.icon}>{icon}</div>;
}

function Button({ children, href, type }) {
  return (
    <a href={href} target="_blank" style={type === "main" ? styles.btnMain : styles.btnAlt}>
      {children}
    </a>
  );
}

function SectionTitle({ children }) {
  return <h2 style={styles.sectionTitle}>{children}</h2>;
}

// ===============================
// NAVBAR
// ===============================
function Navbar() {
  return (
    <div style={styles.navbar}>
      <div style={styles.navLogo}>WALKIE</div>
      <div style={styles.navLinks}>
        <a href="#">Home</a>
        <a href="#">Music</a>
        <a href="#">About</a>
      </div>
    </div>
  );
}

// ===============================
// HERO
// ===============================
function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.heroGlow}></div>

      <h1 style={styles.heroTitle}>WALKIE</h1>

      <p style={styles.heroSub}>
        Music built to move people. Real energy. Real sound. No limits.
      </p>

      <div style={styles.heroButtons}>
        <Button href={links[0].url} type="main">Spotify</Button>
        <Button href={links[1].url} type="alt">YouTube</Button>
      </div>
    </section>
  );
}

// ===============================
// PLATFORM CARD
// ===============================
function PlatformCard({ link }) {
  return (
    <a href={link.url} target="_blank" style={styles.card}>
      <div style={styles.cardLeft}>
        <Icon icon={link.icon} />
        <div>
          <div style={styles.cardTitle}>{link.name}</div>
          <div style={styles.cardSub}>{link.subtitle}</div>
        </div>
      </div>
      →
    </a>
  );
}

// ===============================
// PLATFORMS SECTION
// ===============================
function Platforms() {
  return (
    <section style={styles.section}>
      <SectionTitle>Platforms</SectionTitle>

      <div style={styles.grid}>
        {links.map((l) => (
          <PlatformCard key={l.name} link={l} />
        ))}
      </div>
    </section>
  );
}

// ===============================
// FEATURED RELEASE
// ===============================
function Featured() {
  return (
    <section style={styles.section}>
      <SectionTitle>Featured Release</SectionTitle>

      <div style={styles.featureBox}>
        <h3 style={styles.featureTitle}>As Die Tyd Stilbly</h3>
        <p style={styles.featureText}>
          A powerful Walkie release. Stream it now across all platforms.
        </p>

        <Button href={links[0].url} type="alt">Stream Now</Button>
      </div>
    </section>
  );
}

// ===============================
// ABOUT
// ===============================
function About() {
  return (
    <section style={styles.section}>
      <SectionTitle>The Walkie sound</SectionTitle>

      <div style={styles.aboutBox}>
        Walkie is an independent artist creating music with emotion, energy and a modern sound.
        Every track is built to connect, hit hard and stay with you.
        <br /><br />
        No filler. No shortcuts. Just real music.
      </div>
    </section>
  );
}

// ===============================
// EMBEDS
// ===============================
function SpotifyEmbed() {
  return (
    <section style={styles.section}>
      <SectionTitle>Listen</SectionTitle>

      <iframe
        src="https://open.spotify.com/embed/artist/3HkQPPZVeuoEfuzcwJNX4M"
        width="100%"
        height="352"
        style={styles.embed}
      ></iframe>
    </section>
  );
}

function YouTubeEmbed() {
  return (
    <section style={styles.section}>
      <SectionTitle>Watch</SectionTitle>

      <iframe
        width="100%"
        height="352"
        src="https://www.youtube.com/embed/videoseries?list=UUrKt3xZWrvMnxyPcjAY8iZw"
        style={styles.embed}
      ></iframe>
    </section>
  );
}

// ===============================
// FOOTER
// ===============================
function Footer() {
  return (
    <div style={styles.footer}>
      WALKIE • Official Artist Website
    </div>
  );
}

// ===============================
// MAIN APP
// ===============================
function App() {
  return (
    <div style={styles.page}>
      <Navbar />

      <div style={styles.container}>
        <Hero />
        <Platforms />
        <Featured />
        <About />
        <SpotifyEmbed />
        <YouTubeEmbed />
        <Footer />
      </div>
    </div>
  );
}

// ===============================
// STYLES (BIG SECTION)
// ===============================
const styles = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, rgba(255,255,255,0.08), transparent 30%), linear-gradient(180deg,#040406,#09090d)",
    color: "#fff",
    fontFamily: "Inter, Arial",
  },

  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "80px 20px",
  },

  navbar: {
    position: "fixed",
    top: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    background: "rgba(0,0,0,0.6)",
    backdropFilter: "blur(10px)",
    zIndex: 10,
  },

  navLogo: {
    fontWeight: 900,
    letterSpacing: "4px",
  },

  navLinks: {
    display: "flex",
    gap: "20px",
  },

  hero: {
    textAlign: "center",
    marginTop: "60px",
    position: "relative",
  },

  heroGlow: {
    width: "300px",
    height: "300px",
    background: "rgba(255,255,255,0.1)",
    borderRadius: "50%",
    filter: "blur(100px)",
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
  },

  heroTitle: {
    fontSize: "120px",
    fontWeight: 900,
    letterSpacing: "8px",
  },

  heroSub: {
    color: "#aaa",
    marginTop: "10px",
  },

  heroButtons: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    gap: "12px",
  },

  btnMain: {
    padding: "16px 24px",
    background: "#fff",
    color: "#000",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: 800,
  },

  btnAlt: {
    padding: "16px 24px",
    background: "#111",
    border: "1px solid #333",
    color: "#fff",
    borderRadius: "14px",
    textDecoration: "none",
  },

  section: {
    marginTop: "60px",
  },

  sectionTitle: {
    fontSize: "30px",
    fontWeight: 900,
    marginBottom: "20px",
  },

  grid: {
    display: "grid",
    gap: "16px",
  },

  card: {
    padding: "20px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.05)",
    display: "flex",
    justifyContent: "space-between",
    textDecoration: "none",
    color: "#fff",
  },

  cardLeft: {
    display: "flex",
    gap: "12px",
  },

  icon: {
    fontSize: "22px",
  },

  cardTitle: {
    fontWeight: 800,
  },

  cardSub: {
    fontSize: "13px",
    color: "#aaa",
  },

  featureBox: {
    padding: "24px",
    background: "rgba(255,255,255,0.05)",
    borderRadius: "16px",
  },

  featureTitle: {
    fontSize: "24px",
    fontWeight: 800,
  },

  featureText: {
    color: "#aaa",
    marginBottom: "12px",
  },

  aboutBox: {
    padding: "20px",
    background: "rgba(255,255,255,0.05)",
    borderRadius: "16px",
  },

  embed: {
    borderRadius: "12px",
    border: 0,
  },

  footer: {
    marginTop: "60px",
    textAlign: "center",
    color: "#666",
  },
};

// ===============================
// RENDER
// ===============================
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
