// ===============================
// WALKIE – ULTIMATE PREMIUM ARTIST SITE
// 2026 Level: Cosmic Neon, Raw Energy, Zero Fluff
// Real official-style SVG icons, immersive glows, scroll reveals
// ===============================
const { useState, useEffect } = React;

const links = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/3HkQPPZVeuoEfuzcwJNX4M",
    color: "#1DB954",
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#1DB954"/>
      <path d="M17.4 16.9a.75.75 0 0 1-1.03.24c-2.82-1.72-6.37-2.1-10.56-1.14a.75.75 0 0 1-.34-1.46c4.58-1.05 8.51-.61 11.68 1.32a.75.75 0 0 1 .25 1.04Zm1.47-3.27a.94.94 0 0 1-1.29.3c-3.23-1.99-8.15-2.56-11.98-1.38a.94.94 0 1 1-.56-1.8c4.37-1.36 9.8-.72 13.53 1.57.45.28.6.86.3 1.31Zm.13-3.4C15.15 7.9 8.8 7.7 5.1 8.82a1.13 1.13 0 1 1-.65-2.16c4.25-1.28 11.32-1.03 15.7 1.57a1.13 1.13 0 1 1-1.15 1.98Z" fill="#000"/>
    </svg>`,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UCrKt3xZWrvMnxyPcjAY8iZw",
    color: "#FF0000",
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fill="#FF0000" d="M21.5 6.8c-.3-1.1-1.2-2-2.3-2.3C17.4 4 12 4 12 4s-5.4 0-7.2.5c-1.1.3-2 1.2-2.3 2.3C2 8.6 2 12 2 12s0 3.4.5 5.2c.3 1.1 1.2 2 2.3 2.3C6.6 20 12 20 12 20s5.4 0 7.2-.5c1.1-.3 2-1.2 2.3-2.3.5-1.8.5-5.2.5-5.2s0-3.4-.5-5.2z"/>
      <polygon fill="#FFFFFF" points="10 15.5 15 12 10 8.5"/>
    </svg>`,
  },
  {
    name: "Apple Music",
    url: "https://music.apple.com/us/artist/walkie-music/1875428459",
    color: "#FC3F5F",
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M16 3v12.5a2.5 2.5 0 1 1-1-2V6.5l4-1V14a2.5 2.5 0 1 1-1-2V4l-2 .5z" fill="#FC3F5F"/>
    </svg>`,
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@walkiemusic",
    color: "#FE2C55",
    svg: `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path fill="#FFFFFF" d="M14 3c.3 1.6 1.6 3 3.2 3.3v3.2c-1.1-.1-2.2-.5-3.2-1.1v5.5a4.5 4.5 0 1 1-4.5-4.5c.3 0 .6 0 .9.1v3.2a1.5 1.5 0 1 0 1.1 1.5V3H14z"/>
    </svg>`,
  },
];

function MobileToggle({ isOpen, toggle }) {
  return (
    <button onClick={toggle} style={styles.mobileToggle} aria-label={isOpen ? "Close menu" : "Open menu"}>
      {isOpen ? "✕" : "☰"}
    </button>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>WALKIE</div>
      <div style={{ ...styles.navLinks, ...(window.innerWidth <= 768 ? { display: isOpen ? "flex" : "none" } : {}) }}>
        <a href="#home" style={styles.navLink} onClick={close}>Home</a>
        <a href="#connect" style={styles.navLink} onClick={close}>Connect</a>
      </div>
      {window.innerWidth <= 768 && <MobileToggle isOpen={isOpen} toggle={toggle} />}
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" style={styles.hero}>
      <div style={styles.glowLayer1} />
      <div style={styles.glowLayer2} />
      <div style={styles.glowLayer3} />
      <h1 style={styles.heroTitle}>WALKIE</h1>
      <p style={styles.heroSubtitle}>
        South African fire.<br />
        New Zealand steel.<br />
        Raw. Cinematic. Unstoppable.
      </p>
    </section>
  );
}

function ConnectSection() {
  return (
    <section id="connect" style={styles.section}>
      <h2 style={styles.sectionTitle}>Find WALKIE</h2>
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

function About() {
  return (
    <section style={styles.section}>
      <h2 style={styles.sectionTitle}>Walkie DNA</h2>
      <p style={styles.aboutText}>
        South African born. New Zealand based.<br /><br />
        WALKIE blends raw storytelling with cinematic production — delivering music built on energy, identity, and real emotion.<br /><br />
        No trends. No shortcuts.<br />
        Just authentic sound, powerful moments, and music that stays with you.
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer style={styles.footer}>
      © {new Date().getFullYear()} WALKIE • Independent • SA × NZ
      <div style={styles.footerTag}>Real music. Real energy. No limits.</div>
    </footer>
  );
}

function App() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = globalCss;
    document.head.appendChild(style);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-active");
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div style={styles.page}>
      <Navbar />
      <Hero />
      <div className="reveal"><ConnectSection /></div>
      <div className="reveal"><About /></div>
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
    position: "relative",
  },
  navbar: {
    position: "fixed",
    top: 0, left: 0, right: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.8rem 7%",
    background: "rgba(8,4,20,0.90)",
    backdropFilter: "blur(28px)",
    zIndex: 2000,
    borderBottom: "1px solid rgba(124,58,237,0.22)",
  },
  logo: {
    fontSize: "clamp(2.2rem, 7vw, 3.8rem)",
    fontWeight: 900,
    letterSpacing: "0.6em",
    background: "linear-gradient(90deg, #c084fc, #7c3aed, #60a5fa, #c084fc)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundSize: "200% 100%",
    animation: "gradientFlow 14s ease infinite",
  },
  navLinks: {
    display: "flex",
    gap: "3.5rem",
    alignItems: "center",
  },
  navLink: {
    color: "#e5e5ff",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: "1.25rem",
    transition: "color 0.4s, transform 0.3s",
  },
  mobileToggle: {
    fontSize: "2.2rem",
    background: "none",
    border: "none",
    color: "#c084fc",
    cursor: "pointer",
    padding: 0,
  },
  hero: {
    position: "relative",
    textAlign: "center",
    padding: "clamp(280px, 50vh, 400px) 7% 220px",
    overflow: "hidden",
  },
  glowLayer1: {
    position: "absolute",
    top: "-60%",
    left: "15%",
    width: "clamp(800px, 90vw, 1600px)",
    height: "clamp(800px, 90vw, 1600px)",
    background: "radial-gradient(circle at 30% 40%, rgba(124,58,237,0.32), transparent 65%)",
    filter: "blur(160px)",
    opacity: 0.75,
    animation: "pulseGlow 16s infinite alternate ease-in-out",
  },
  glowLayer2: {
    position: "absolute",
    bottom: "-50%",
    right: "10%",
    width: "clamp(700px, 80vw, 1400px)",
    height: "clamp(700px, 80vw, 1400px)",
    background: "radial-gradient(circle at 70% 60%, rgba(96,165,250,0.24), transparent 60%)",
    filter: "blur(180px)",
    opacity: 0.65,
    animation: "pulseGlow2 20s infinite alternate ease-in-out",
  },
  glowLayer3: {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "clamp(400px, 60vw, 1000px)",
    height: "clamp(400px, 60vw, 1000px)",
    background: "radial-gradient(circle, rgba(192,132,252,0.18), transparent 70%)",
    filter: "blur(140px)",
    opacity: 0.5,
  },
  heroTitle: {
    fontSize: "clamp(9rem, 25vw, 20rem)",
    fontWeight: 900,
    margin: "0 0 1.5rem",
    background: "linear-gradient(90deg, #ffffff, #c084fc, #7c3aed, #60a5fa, #ffffff)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundSize: "400% 100%",
    animation: "shineText 15s linear infinite",
  },
  heroSubtitle: {
    fontSize: "clamp(2rem, 6vw, 3.5rem)",
    opacity: 0.88,
    lineHeight: 1.45,
    margin: 0,
  },
  section: {
    padding: "clamp(120px, 18vw, 180px) 7%",
    maxWidth: "1300px",
    margin: "0 auto",
  },
  sectionTitle: {
    fontSize: "clamp(4rem, 12vw, 7.5rem)",
    fontWeight: 900,
    textAlign: "center",
    marginBottom: "4rem",
    background: "linear-gradient(90deg, #c084fc, #7c3aed, #60a5fa)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundSize: "200% 100%",
    animation: "gradientFlow 10s ease infinite",
  },
  platformGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "2.5rem",
  },
  platformCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "3rem 2rem",
    background: "rgba(124,58,237,0.06)",
    border: "1px solid rgba(124,58,237,0.28)",
    borderRadius: "24px",
    textDecoration: "none",
    color: "#fff",
    transition: "all 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    backdropFilter: "blur(12px)",
  },
  iconWrap: {
    width: "100px",
    height: "100px",
    marginBottom: "1.5rem",
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
    filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.6))",
  },
  platformName: {
    fontSize: "1.8rem",
    fontWeight: 800,
    marginTop: "0.5rem",
  },
  aboutText: {
    fontSize: "clamp(1.5rem, 4.5vw, 2.2rem)",
    textAlign: "center",
    maxWidth: "1000px",
    margin: "0 auto",
    lineHeight: 1.8,
    opacity: 0.9,
  },
  footer: {
    textAlign: "center",
    padding: "clamp(100px, 15vw, 140px) 7% 80px",
    opacity: 0.75,
    fontSize: "1.2rem",
    borderTop: "1px solid rgba(124,58,237,0.18)",
  },
  footerTag: {
    marginTop: "1.5rem",
    fontSize: "1rem",
    opacity: 0.6,
  },
};

const globalCss = `
@keyframes shineText {
  0% { background-position: -400%; }
  100% { background-position: 400%; }
}
@keyframes gradientFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
@keyframes pulseGlow {
  0% { transform: scale(1); opacity: 0.55; }
  100% { transform: scale(1.18); opacity: 0.92; }
}
@keyframes pulseGlow2 {
  0% { transform: scale(1); opacity: 0.5; }
  100% { transform: scale(1.22); opacity: 0.88; }
}
.reveal {
  opacity: 0;
  transform: translateY(60px);
  transition: opacity 1.2s ease, transform 1.2s ease;
}
.reveal-active {
  opacity: 1;
  transform: translateY(0);
}
.platformCard:hover {
  transform: translateY(-16px) scale(1.04);
  box-shadow: 0 30px 80px rgba(var(--accent-rgb, 124,58,237), 0.45);
  border-color: var(--accent, #c084fc);
}
@media (max-width: 768px) {
  .navLinks {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: rgba(8,4,20,0.98);
    padding: 2rem 7%;
    gap: 2rem;
    border-bottom: 1px solid rgba(124,58,237,0.22);
  }
  .navLink { font-size: 1.5rem; }
}
`;

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
