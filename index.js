// ===============================
// WALKIE – ULTIMATE 2026 ARTIST SITE
// Raw SA × NZ Energy | Neon Purple Dark Mode | Immersive Drop Hype
// ===============================
const { useState, useEffect } = React;

const RELEASE_DATE = new Date("2026-03-28T00:00:00+13:00"); // Friday midnight NZDT – adjust if needed
const TRACK_ID = "PUT_YOUR_TRACK_ID_HERE"; // e.g. "7exampleID1234567890"
const COVER_IMAGE = "https://via.placeholder.com/800x800/1a0033/7c3aed?text=The+Walkie+Stomp"; // Replace with real cover art URL

const RELEASE_LIVE = false; // 🔥 Set true on release day

const links = [
  { name: "Spotify", url: "https://open.spotify.com/artist/3HkQPPZVeuoEfuzcwJNX4M", color: "#1DB954" },
  { name: "YouTube", url: "https://www.youtube.com/channel/UCrKt3xZWrvMnxyPcjAY8iZw", color: "#FF0000" },
  { name: "Apple Music", url: "https://music.apple.com/us/artist/walkie-music/1875428459", color: "#fc3f5f" },
  { name: "TikTok", url: "https://www.tiktok.com/@walkiemusic", color: "#fe2c55" },
];

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>WALKIE</div>
      <div style={styles.navLinks}>
        <a href="#home" style={styles.navLink}>Home</a>
        <a href="#drop" style={styles.navLink}>The Drop</a>
        <a href="#connect" style={styles.navLink}>Connect</a>
      </div>
    </nav>
  );
}

function Hero() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" style={{ ...styles.hero, opacity: scrolled ? 0.92 : 1 }}>
      <div style={styles.particleBg} />
      <h1 style={styles.heroTitle}>WALKIE</h1>
      <p style={styles.heroSubtitle}>
        South African fire.<br />New Zealand steel.<br />
        <span style={{ color: "#c084fc" }}>Raw emotion. Cinematic stomp.</span>
      </p>
      <a href="#drop" style={styles.ctaBtn}>Witness The Stomp ↓</a>
    </section>
  );
}

function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({});
  useEffect(() => {
    const interval = setInterval(() => {
      const diff = targetDate - new Date();
      if (diff <= 0) {
        setTimeLeft({ done: true });
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (timeLeft.done) return <p style={{ color: "#c084fc", fontSize: "1.8rem" }}>IT'S LIVE 🔥</p>;

  return (
    <div style={styles.countdown}>
      {["days", "hours", "minutes", "seconds"].map((unit) => (
        <div key={unit} style={styles.countdownUnit}>
          <span style={styles.countdownNum}>{timeLeft[unit] ?? "00"}</span>
          <span style={styles.countdownLabel}>{unit.toUpperCase()}</span>
        </div>
      ))}
    </div>
  );
}

function NewRelease() {
  return (
    <section id="drop" style={styles.section}>
      <h2 style={styles.sectionTitle}>The Walkie Stomp</h2>
      <div style={styles.releaseContainer}>
        <img src={COVER_IMAGE} alt="The Walkie Stomp Cover" style={styles.coverArt} />
        <div style={styles.releaseInfo}>
          {!RELEASE_LIVE ? (
            <>
              <h3 style={styles.comingSoon}>DROPPING THIS FRIDAY</h3>
              <Countdown targetDate={RELEASE_DATE} />
              <p style={styles.releaseDesc}>
                Heavy bass. Street stories. That unstoppable WALKIE energy.<br />
                This one stomps through speakers and souls alike.
              </p>
              <div style={styles.preSave}>
                <p>Pre-save / Pre-add now – be first in line</p>
                <a href="https://distrokid.com/hyperfollow/walkie/the-walkie-stomp" target="_blank" rel="noopener noreferrer" style={styles.preSaveBtn}>
                  Pre-Save on Spotify
                </a>
              </div>
            </>
          ) : (
            <>
              <iframe
                src={`https://open.spotify.com/embed/track/${TRACK_ID}`}
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen;"
                style={{ borderRadius: "16px", boxShadow: "0 20px 60px rgba(124,58,237,0.5)" }}
              />
              <p style={{ marginTop: "1.5rem", textAlign: "center", fontSize: "1.2rem" }}>
                Out now • Stream • Share • Stomp with us
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function Platforms() {
  return (
    <section id="connect" style={styles.section}>
      <h2 style={styles.sectionTitle}>Connect Worldwide</h2>
      <div style={styles.platformGrid}>
        {links.map((item) => (
          <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" style={{ ...styles.platformCard, borderColor: item.color }}>
            <span style={{ color: item.color, fontSize: "1.8rem" }}>{item.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function Signup() {
  return (
    <section style={{ ...styles.section, background: "rgba(12, 0, 24, 0.7)" }}>
      <h2 style={styles.sectionTitle}>Join The Movement</h2>
      <p style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 2rem", fontSize: "1.2rem" }}>
        Get first access to drops, exclusives, and behind-the-scenes fire.
      </p>
      <form style={styles.signupForm} onSubmit={(e) => { e.preventDefault(); alert("Thanks – you're in! 🔥"); }}>
        <input type="email" placeholder="Your email" required style={styles.input} />
        <button type="submit" style={styles.submitBtn}>Sign Up</button>
      </form>
    </section>
  );
}

function About() {
  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>Walkie DNA</h2>
      <p style={styles.aboutText}>
        Born in South Africa. Forged in New Zealand.<br />
        No fake vibes. No shortcuts.<br />
        Just powerful stories, cinematic beats, loyalty in every bar.<br /><br />
        This is the start of something global. Join the stomp.
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
      © {new Date().getFullYear()} WALKIE • Independent • SA × NZ<br />
      <div style={styles.footerSocials}>
        {links.map((l) => <a key={l.name} href={l.url} target="_blank" style={styles.footerLink}>{l.name}</a>)}
      </div>
    </footer>
  );
}

function App() {
  return (
    <div style={styles.page}>
      <Navbar />
      <Hero />
      <NewRelease />
      <Platforms />
      <Signup />
      <About />
      <Footer />
    </div>
  );
}

const styles = {
  page: {
    background: "#000",
    color: "#f2f2ff",
    fontFamily: "system-ui, sans-serif",
    minHeight: "100vh",
    overflowX: "hidden",
    position: "relative",
  },
  particleBg: {
    position: "absolute",
    inset: 0,
    background: "radial-gradient(circle at 20% 30%, rgba(124,58,237,0.12) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(96,165,250,0.08) 0%, transparent 50%)",
    pointerEvents: "none",
    animation: "pulseBg 18s infinite alternate ease-in-out",
  },
  navbar: {
    position: "fixed",
    top: 0, left: 0, right: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.5rem 6%",
    background: "rgba(10,0,20,0.85)",
    backdropFilter: "blur(16px)",
    zIndex: 1000,
    borderBottom: "1px solid rgba(124,58,237,0.2)",
  },
  logo: {
    fontSize: "2.8rem",
    fontWeight: 900,
    letterSpacing: "0.5em",
    background: "linear-gradient(90deg, #c084fc, #7c3aed, #60a5fa)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  navLinks: { display: "flex", gap: "2.5rem" },
  navLink: {
    color: "#d5d5ff",
    textDecoration: "none",
    fontWeight: 600,
    transition: "color 0.3s",
  },
  hero: {
    position: "relative",
    textAlign: "center",
    padding: "clamp(220px, 35vh, 320px) 6% 180px",
    transition: "opacity 0.6s",
  },
  heroTitle: {
    fontSize: "clamp(8rem, 20vw, 16rem)",
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
    fontSize: "clamp(1.8rem, 5vw, 3rem)",
    margin: "2rem 0 3rem",
    lineHeight: 1.4,
  },
  ctaBtn: {
    padding: "1.2rem 3rem",
    background: "linear-gradient(135deg, #7c3aed, #c084fc)",
    color: "#000",
    fontWeight: 800,
    fontSize: "1.3rem",
    borderRadius: "999px",
    textDecoration: "none",
    boxShadow: "0 15px 50px rgba(124,58,237,0.5)",
    transition: "transform 0.3s, box-shadow 0.3s",
  },
  section: {
    padding: "clamp(80px, 12vw, 140px) 6%",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  sectionTitle: {
    fontSize: "clamp(3rem, 9vw, 6rem)",
    fontWeight: 900,
    textAlign: "center",
    marginBottom: "3rem",
    background: "linear-gradient(90deg, #c084fc, #7c3aed)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  releaseContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "4rem",
    justifyContent: "center",
    alignItems: "center",
  },
  coverArt: {
    width: "clamp(300px, 50vw, 500px)",
    height: "clamp(300px, 50vw, 500px)",
    objectFit: "cover",
    borderRadius: "24px",
    boxShadow: "0 30px 80px rgba(124,58,237,0.6)",
    border: "2px solid rgba(192,132,252,0.3)",
  },
  releaseInfo: { flex: 1, minWidth: "300px", textAlign: "center" },
  comingSoon: { fontSize: "2.5rem", color: "#c084fc", marginBottom: "1rem" },
  countdown: {
    display: "flex",
    justifyContent: "center",
    gap: "1.5rem",
    margin: "2rem 0",
  },
  countdownUnit: { textAlign: "center" },
  countdownNum: { fontSize: "3.5rem", fontWeight: 900, color: "#7c3aed" },
  countdownLabel: { fontSize: "1rem", opacity: 0.7 },
  releaseDesc: { fontSize: "1.3rem", opacity: 0.9, margin: "2rem 0" },
  preSave: { marginTop: "2rem" },
  preSaveBtn: {
    padding: "1rem 2.5rem",
    background: "#1DB954",
    color: "#000",
    fontWeight: 700,
    borderRadius: "999px",
    textDecoration: "none",
    display: "inline-block",
    marginTop: "1rem",
  },
  platformGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "2rem",
  },
  platformCard: {
    padding: "2rem",
    background: "rgba(124,58,237,0.1)",
    border: "2px solid",
    borderRadius: "16px",
    textAlign: "center",
    textDecoration: "none",
    fontSize: "1.6rem",
    fontWeight: 700,
    transition: "transform 0.3s, box-shadow 0.3s",
  },
  signupForm: {
    display: "flex",
    maxWidth: "500px",
    margin: "0 auto",
    gap: "1rem",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  input: {
    flex: 1,
    padding: "1rem 1.5rem",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid #7c3aed",
    borderRadius: "999px",
    color: "#fff",
    fontSize: "1.1rem",
    minWidth: "220px",
  },
  submitBtn: {
    padding: "1rem 2.5rem",
    background: "linear-gradient(135deg, #7c3aed, #c084fc)",
    color: "#000",
    border: "none",
    borderRadius: "999px",
    fontWeight: 700,
    cursor: "pointer",
  },
  aboutText: {
    fontSize: "1.4rem",
    textAlign: "center",
    maxWidth: "900px",
    margin: "0 auto",
    lineHeight: 1.7,
    opacity: 0.9,
  },
  footer: {
    textAlign: "center",
    padding: "6rem 1rem 4rem",
    borderTop: "1px solid rgba(124,58,237,0.2)",
    opacity: 0.7,
  },
  footerSocials: { marginTop: "1rem", display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap" },
  footerLink: { color: "#c084fc", textDecoration: "none" },
};

// Global CSS animations
const globalCss = `
@keyframes shine { 0% { background-position: -300%; } 100% { background-position: 300%; } }
@keyframes pulseBg { 0% { opacity: 0.6; } 100% { opacity: 1; } }
`;

const styleTag = document.createElement("style");
styleTag.innerHTML = globalCss;
document.head.appendChild(styleTag);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
