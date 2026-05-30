// ===============================
// WALKIE – PREMIUM LINK TREE SITE
// ===============================
const { useEffect } = React;

const youtubeSvg = `<svg viewBox="0 0 24 24"><path fill="#FF0000" d="M21.5 6.8c-.3-1.1-1.2-2-2.3-2.3C17.4 4 12 4 12 4s-5.4 0-7.2.5c-1.1.3-2 1.2-2.3 2.3C2 8.6 2 12 2 12s0 3.4.5 5.2c.3 1.1 1.2 2 2.3 2.3C6.6 20 12 20 12 20s5.4 0 7.2-.5c1.1-.3 2-1.2 2.3-2.3.5-1.8.5-5.2.5-5.2s0-3.4-.5-5.2z"/><polygon fill="#FFFFFF" points="10 15.5 15 12 10 8.5"/></svg>`;

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
    svg: youtubeSvg,
  },
  {
    name: "Early Releases",
    url: "https://youtube.com/@walkiemusicofficial?si=Hb8IdOIsBVFPDsy-",
    color: "#FF0000",
    svg: youtubeSvg,
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

function App() {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = globalCss;
    document.head.appendChild(style);
  }, []);

  return (
    <div style={styles.page}>
      <nav style={styles.navbar}>
        <div style={styles.logo}>WALKIE</div>
        <a href="#links" style={styles.navLink}>Links</a>
      </nav>

      <section style={styles.hero}>
        <div style={styles.glowOne}></div>
        <div style={styles.glowTwo}></div>

        <div style={styles.badge}>OFFICIAL MUSIC LINKS</div>
        <h1 style={styles.heroTitle}>WALKIE</h1>
        <p style={styles.heroText}>Raw. Cinematic. Unstoppable.</p>

        <a href="#links" style={styles.mainButton}>Follow My Music</a>
      </section>

      <section id="links" style={styles.section}>
        <h2 style={styles.sectionTitle}>Follow WALKIE</h2>

        <div style={styles.platformGrid}>
          {links.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="platformCard"
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

      <footer style={styles.footer}>
        © {new Date().getFullYear()} WALKIE • Independent Artist
        <div style={styles.footerTag}>Real music. Real energy. No limits.</div>
      </footer>
    </div>
  );
}

const styles = {
  page: {
    background: "radial-gradient(circle at top, #211044 0%, #07020f 45%, #000000 100%)",
    color: "#f5f3ff",
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
    minHeight: "100vh",
    overflowX: "hidden",
  },

  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 6%",
    background: "rgba(5, 0, 15, 0.82)",
    backdropFilter: "blur(24px)",
    borderBottom: "1px solid rgba(192,132,252,0.18)",
  },

  logo: {
    fontSize: "clamp(1.6rem, 6vw, 3rem)",
    fontWeight: 950,
    letterSpacing: "0.22em",
    background: "linear-gradient(90deg, #ffffff, #c084fc, #60a5fa)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  navLink: {
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: 800,
    fontSize: "1rem",
  },

  hero: {
    position: "relative",
    textAlign: "center",
    padding: "220px 7% 120px",
    overflow: "hidden",
  },

  glowOne: {
    position: "absolute",
    width: "900px",
    height: "900px",
    top: "-430px",
    left: "-220px",
    background: "radial-gradient(circle, rgba(124,58,237,0.45), transparent 65%)",
    filter: "blur(120px)",
  },

  glowTwo: {
    position: "absolute",
    width: "900px",
    height: "900px",
    right: "-240px",
    bottom: "-420px",
    background: "radial-gradient(circle, rgba(96,165,250,0.30), transparent 65%)",
    filter: "blur(140px)",
  },

  badge: {
    position: "relative",
    display: "inline-block",
    padding: "0.7rem 1.2rem",
    borderRadius: "999px",
    border: "1px solid rgba(192,132,252,0.35)",
    background: "rgba(124,58,237,0.16)",
    fontWeight: 900,
    letterSpacing: "0.16em",
    fontSize: "0.78rem",
    marginBottom: "1.6rem",
  },

  heroTitle: {
    position: "relative",
    fontSize: "clamp(5rem, 22vw, 18rem)",
    lineHeight: 0.9,
    margin: 0,
    fontWeight: 950,
    letterSpacing: "0.02em",
    background: "linear-gradient(90deg, #ffffff, #d8b4fe, #7c3aed, #60a5fa, #ffffff)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundSize: "400% 100%",
    animation: "shineText 14s linear infinite",
  },

  heroText: {
    position: "relative",
    fontSize: "clamp(1.2rem, 5vw, 2.5rem)",
    opacity: 0.9,
    margin: "1.5rem 0 2.2rem",
  },

  mainButton: {
    position: "relative",
    display: "inline-block",
    padding: "1rem 1.6rem",
    borderRadius: "999px",
    textDecoration: "none",
    color: "#fff",
    fontWeight: 900,
    background: "linear-gradient(90deg, #7c3aed, #c084fc, #60a5fa)",
    boxShadow: "0 18px 55px rgba(124,58,237,0.45)",
  },

  section: {
    padding: "80px 7% 130px",
    maxWidth: "1200px",
    margin: "0 auto",
  },

  sectionTitle: {
    fontSize: "clamp(2.4rem, 9vw, 6rem)",
    fontWeight: 950,
    textAlign: "center",
    marginBottom: "3rem",
    background: "linear-gradient(90deg, #c084fc, #7c3aed, #60a5fa)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  platformGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
    gap: "1.6rem",
  },

  platformCard: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "2.2rem 1.3rem",
    background: "linear-gradient(180deg, rgba(255,255,255,0.075), rgba(124,58,237,0.055))",
    border: "1px solid rgba(192,132,252,0.25)",
    borderRadius: "28px",
    textDecoration: "none",
    color: "#fff",
    transition: "all 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
    backdropFilter: "blur(16px)",
    boxShadow: "0 18px 50px rgba(0,0,0,0.35)",
  },

  iconWrap: {
    width: "88px",
    height: "88px",
    marginBottom: "1.25rem",
    borderRadius: "24px",
    background: "rgba(255,255,255,0.055)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "inset 0 0 25px rgba(255,255,255,0.04), 0 10px 30px rgba(0,0,0,0.4)",
  },

  icon: {
    width: "68%",
    height: "68%",
  },

  platformName: {
    fontSize: "1.35rem",
    fontWeight: 900,
    textAlign: "center",
  },

  footer: {
    textAlign: "center",
    padding: "70px 7%",
    opacity: 0.75,
    borderTop: "1px solid rgba(192,132,252,0.15)",
  },

  footerTag: {
    marginTop: "0.8rem",
    opacity: 0.6,
  },
};

const globalCss = `
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
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
  transform: translateY(-14px) scale(1.035);
  border-color: var(--accent, #c084fc) !important;
  box-shadow: 0 28px 80px rgba(124,58,237,0.38);
}

@media (max-width: 768px) {
  .platformCard:hover {
    transform: none;
  }
}
`;

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
