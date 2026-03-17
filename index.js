// ===============================
// LINKS
// ===============================
const links = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/3HkQPPZVeuoEfuzcwJNX4M",
    subtitle: "Stream Walkie on Spotify",
    icon: "spotify",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UCrKt3xZWrvMnxyPcjAY8iZw",
    subtitle: "Watch videos and releases",
    icon: "youtube",
  },
  {
    name: "Apple Music",
    url: "https://music.apple.com/us/artist/walkie-music/1875428459",
    subtitle: "Listen on Apple Music",
    icon: "apple",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@walkiemusic",
    subtitle: "Follow for updates",
    icon: "tiktok",
  },
];

// ===============================
// REAL ICONS
// ===============================
function PlatformIcon({ type }) {
  const style = { width: 26, height: 26, fill: "#fff" };

  if (type === "spotify") {
    return (
      <svg viewBox="0 0 24 24" style={style}>
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.4 17.3c-.2.3-.6.4-.9.2-2.5-1.5-5.7-1.8-9.5-1-.4.1-.7-.2-.8-.5-.1-.4.2-.7.5-.8 4.2-.9 7.8-.5 10.7 1.2.3.2.4.6.2.9zm1.3-3c-.3.4-.8.5-1.2.2-2.9-1.8-7.3-2.3-10.7-1.2-.5.2-1-.1-1.2-.6-.2-.5.1-1 .6-1.2 3.9-1.2 8.8-.6 12.2 1.5.4.3.5.8.3 1.3zm.1-3.2c-3.5-2.1-9.3-2.3-12.6-1.3-.6.2-1.2-.2-1.4-.8-.2-.6.2-1.2.8-1.4 3.8-1.2 10.2-1 14.2 1.5.5.3.7 1 .4 1.5-.3.5-1 .7-1.4.5z" />
      </svg>
    );
  }

  if (type === "youtube") {
    return (
      <svg viewBox="0 0 24 24" style={style}>
        <path d="M23.5 6.2s-.2-1.7-.8-2.5c-.8-.9-1.6-.9-2-.9C17.8 2.5 12 2.5 12 2.5h0s-5.8 0-8.7.3c-.4 0-1.2 0-2 .9-.6.8-.8 2.5-.8 2.5S0 8.1 0 10v1.9c0 1.9.5 3.8.5 3.8s.2 1.7.8 2.5c.8.9 1.9.9 2.4 1 1.7.2 7.3.3 8.3.3s6.6 0 8.3-.3c.5-.1 1.6-.1 2.4-1 .6-.8.8-2.5.8-2.5s.5-1.9.5-3.8V10c0-1.9-.5-3.8-.5-3.8zM9.5 14.6V8.8l6.3 2.9-6.3 2.9z" />
      </svg>
    );
  }

  if (type === "apple") {
    return (
      <svg viewBox="0 0 24 24" style={style}>
        <path d="M16.4 13.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.9-1.8-3.5-1.8-1.5-.2-2.9.9-3.6.9-.7 0-1.8-.9-3-.9-1.5 0-2.9.9-3.7 2.2-1.6 2.7-.4 6.7 1.1 8.8.7 1 1.6 2.1 2.8 2 1.1 0 1.5-.7 2.9-.7 1.3 0 1.7.7 2.9.7 1.2 0 2-1 2.7-2 .8-1.1 1.1-2.2 1.1-2.3-.1 0-2.1-.8-2.1-3.4zM14.6 6.6c.6-.7 1-1.7.9-2.6-.9 0-1.9.6-2.5 1.3-.5.6-1 1.6-.9 2.5 1 .1 1.9-.5 2.5-1.2z" />
      </svg>
    );
  }

  if (type === "tiktok") {
    return (
      <svg viewBox="0 0 24 24" style={style}>
        <path d="M21 8.1c-1.2 0-2.3-.4-3.2-1.2V16c0 2.8-2.3 5-5 5s-5-2.2-5-5 2.3-5 5-5c.3 0 .6 0 .9.1v2.6c-.3-.1-.6-.2-.9-.2-1.3 0-2.4 1.1-2.4 2.5S11.5 18 12.8 18s2.4-1.1 2.4-2.5V3h2.6c.2 1.5 1.4 2.7 3 2.9v2.2z"/>
      </svg>
    );
  }

  return null;
}

// ===============================
// MAIN COMPONENT
// ===============================
function App() {
  return (
    <div style={styles.page}>
      
      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.glow}></div>

        <h1 style={styles.title}>WALKIE</h1>

        <p style={styles.subtitle}>
          Music built to move people. Real energy. Real sound. No limits.
        </p>

        <div style={styles.buttons}>
          <a href={links[0].url} target="_blank" style={styles.btnMain}>Spotify</a>
          <a href={links[1].url} target="_blank" style={styles.btnAlt}>YouTube</a>
        </div>
      </section>

      {/* LINKS */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Platforms</h2>

        {links.map((l) => (
          <a key={l.name} href={l.url} target="_blank" style={styles.card}>
            <div style={styles.left}>
              <PlatformIcon type={l.icon} />
              <div>
                <div style={styles.cardTitle}>{l.name}</div>
                <div style={styles.cardSub}>{l.subtitle}</div>
              </div>
            </div>
            →
          </a>
        ))}
      </section>

      {/* FOOTER */}
      <div style={styles.footer}>
        WALKIE • Official Artist Website
      </div>
    </div>
  );
}

// ===============================
// STYLES
// ===============================
const styles = {
  page: {
    minHeight: "100vh",
    background: "#050507",
    color: "#fff",
    fontFamily: "Inter, Arial",
    padding: "40px 20px",
  },

  hero: {
    textAlign: "center",
    position: "relative",
    marginBottom: "60px",
  },

  glow: {
    position: "absolute",
    width: "400px",
    height: "400px",
    background: "rgba(255,255,255,0.1)",
    filter: "blur(100px)",
    left: "50%",
    transform: "translateX(-50%)",
  },

  title: {
    fontSize: "120px",
    fontWeight: 900,
    letterSpacing: "6px",
  },

  subtitle: {
    color: "#aaa",
    marginTop: "10px",
  },

  buttons: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "center",
    gap: "12px",
  },

  btnMain: {
    padding: "14px 20px",
    background: "#fff",
    color: "#000",
    borderRadius: "12px",
    textDecoration: "none",
  },

  btnAlt: {
    padding: "14px 20px",
    border: "1px solid #333",
    borderRadius: "12px",
    textDecoration: "none",
    color: "#fff",
  },

  section: {
    maxWidth: "800px",
    margin: "0 auto",
  },

  heading: {
    marginBottom: "20px",
  },

  card: {
    display: "flex",
    justifyContent: "space-between",
    padding: "18px",
    background: "#111",
    borderRadius: "14px",
    marginBottom: "12px",
    textDecoration: "none",
    color: "#fff",
    transition: "0.2s",
  },

  left: {
    display: "flex",
    gap: "12px",
  },

  cardTitle: {
    fontWeight: 700,
  },

  cardSub: {
    fontSize: "13px",
    color: "#aaa",
  },

  footer: {
    textAlign: "center",
    marginTop: "60px",
    color: "#666",
  },
};

// ===============================
// RENDER
// ===============================
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
