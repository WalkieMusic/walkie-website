const links = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/3HkQPPZVeuoEfuzcwJNX4M?si=Bey_hdaoQ_GG_afS21tCjw",
    subtitle: "Stream Walkie on Spotify",
    icon: "🎧",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UCrKt3xZWrvMnxyPcjAY8iZw",
    subtitle: "Watch full songs and new uploads",
    icon: "▶️",
  },
  {
    name: "Apple Music",
    url: "https://music.apple.com/us/artist/walkie-music/1875428459",
    subtitle: "Listen on Apple Music",
    icon: "🍎",
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@walkiemusic",
    subtitle: "Follow for clips, teasers and updates",
    icon: "🎵",
  },
];

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, rgba(255,255,255,0.12), transparent 25%), linear-gradient(180deg, #0b0b0d 0%, #111114 45%, #09090b 100%)",
    color: "#ffffff",
    fontFamily: "Inter, Arial, sans-serif",
  },
  shell: {
    maxWidth: "1180px",
    margin: "0 auto",
    padding: "40px 24px 60px",
  },
  hero: {
    display: "grid",
    gridTemplateColumns: "1.15fr 0.85fr",
    gap: "32px",
    alignItems: "center",
  },
  badge: {
    display: "inline-block",
    padding: "10px 16px",
    border: "1px solid rgba(255,255,255,0.14)",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.06)",
    fontSize: "12px",
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.75)",
  },
  title: {
    fontSize: "82px",
    lineHeight: 1,
    margin: "22px 0 18px",
    fontWeight: 800,
    letterSpacing: "0.02em",
  },
  subtitle: {
    fontSize: "21px",
    lineHeight: 1.7,
    maxWidth: "720px",
    color: "rgba(255,255,255,0.78)",
    marginBottom: "28px",
  },
  buttonRow: {
    display: "flex",
    gap: "14px",
    flexWrap: "wrap",
    marginBottom: "30px",
  },
  primaryBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    padding: "15px 22px",
    borderRadius: "18px",
    background: "#ffffff",
    color: "#0d0d10",
    textDecoration: "none",
    fontWeight: 700,
    border: "1px solid rgba(255,255,255,0.2)",
  },
  secondaryBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    padding: "15px 22px",
    borderRadius: "18px",
    background: "rgba(255,255,255,0.06)",
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: 700,
    border: "1px solid rgba(255,255,255,0.15)",
  },
  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "14px",
  },
  statCard: {
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.05)",
    borderRadius: "26px",
    padding: "18px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
  },
  statValue: {
    fontSize: "28px",
    fontWeight: 800,
    marginBottom: "4px",
  },
  statLabel: {
    color: "rgba(255,255,255,0.6)",
    fontSize: "14px",
  },
  heroCardWrap: {
    position: "relative",
  },
  glow: {
    position: "absolute",
    inset: "-18px",
    background: "rgba(255,255,255,0.08)",
    filter: "blur(34px)",
    borderRadius: "34px",
  },
  heroCard: {
    position: "relative",
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.06)",
    borderRadius: "34px",
    padding: "22px",
    boxShadow: "0 30px 80px rgba(0,0,0,0.35)",
    backdropFilter: "blur(18px)",
  },
  heroInner: {
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "28px",
    padding: "28px",
    background: "linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.03))",
  },
  logoBox: {
    width: "190px",
    height: "190px",
    margin: "0 auto",
    border: "1.5px solid rgba(255,255,255,0.45)",
    background: "#09090b",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 20px 60px rgba(0,0,0,0.45)",
    position: "relative",
  },
  logoText: {
    fontSize: "20px",
    lineHeight: 1.1,
    fontWeight: 800,
    letterSpacing: "0.22em",
    textAlign: "center",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.92)",
  },
  centerLabel: {
    textAlign: "center",
    marginTop: "22px",
    color: "rgba(255,255,255,0.55)",
    fontSize: "12px",
    letterSpacing: "0.32em",
    textTransform: "uppercase",
  },
  heroCardTitle: {
    textAlign: "center",
    margin: "14px 0 8px",
    fontSize: "36px",
    fontWeight: 800,
  },
  heroCardText: {
    textAlign: "center",
    fontSize: "14px",
    color: "rgba(255,255,255,0.65)",
    marginBottom: "20px",
  },
  coverBox: {
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(0,0,0,0.35)",
    borderRadius: "22px",
    padding: "16px",
  },
  coverPlaceholder: {
    aspectRatio: "1 / 1",
    border: "1px dashed rgba(255,255,255,0.15)",
    background: "rgba(255,255,255,0.03)",
    borderRadius: "18px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "rgba(255,255,255,0.45)",
    fontSize: "14px",
  },
  songStrip: {
    marginTop: "14px",
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.04)",
    borderRadius: "18px",
    padding: "14px 16px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "18px",
    marginTop: "28px",
  },
  linkCard: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "18px",
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.05)",
    borderRadius: "28px",
    padding: "20px",
    textDecoration: "none",
    color: "#ffffff",
    boxShadow: "0 18px 40px rgba(0,0,0,0.22)",
  },
  linkLeft: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  iconBox: {
    width: "58px",
    height: "58px",
    borderRadius: "18px",
    background: "rgba(255,255,255,0.08)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    border: "1px solid rgba(255,255,255,0.1)",
  },
  linkTitle: {
    fontSize: "22px",
    fontWeight: 700,
    marginBottom: "4px",
  },
  linkSubtitle: {
    fontSize: "14px",
    color: "rgba(255,255,255,0.6)",
  },
  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "18px",
    marginTop: "18px",
  },
  infoCard: {
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.05)",
    borderRadius: "30px",
    padding: "24px",
    boxShadow: "0 18px 40px rgba(0,0,0,0.2)",
  },
  smallLabel: {
    fontSize: "12px",
    textTransform: "uppercase",
    letterSpacing: "0.28em",
    color: "rgba(255,255,255,0.5)",
  },
  infoTitle: {
    margin: "12px 0 10px",
    fontSize: "34px",
    fontWeight: 800,
  },
  infoText: {
    lineHeight: 1.8,
    color: "rgba(255,255,255,0.72)",
    fontSize: "16px",
  },
  footer: {
    marginTop: "42px",
    paddingTop: "22px",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    textAlign: "center",
    color: "rgba(255,255,255,0.5)",
    fontSize: "14px",
  },
};

function WalkieMusicWebsite() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 900;

  return (
    <div style={styles.page}>
      <main style={styles.shell}>
        <section
          style={{
            ...styles.hero,
            gridTemplateColumns: isMobile ? "1fr" : styles.hero.gridTemplateColumns,
          }}
        >
          <div>
            <div style={styles.badge}>Official Artist Website</div>
            <h1 style={{ ...styles.title, fontSize: isMobile ? "56px" : styles.title.fontSize }}>
              Walkie
            </h1>
            <p style={{ ...styles.subtitle, fontSize: isMobile ? "18px" : styles.subtitle.fontSize }}>
              SA roots in NZ soil. Original music, new releases, streaming links and everything in one place.
            </p>

            <div style={styles.buttonRow}>
              <a href={links[0].url} target="_blank" rel="noreferrer" style={styles.primaryBtn}>
                🎧 Listen on Spotify
              </a>
              <a href={links[1].url} target="_blank" rel="noreferrer" style={styles.secondaryBtn}>
                ▶️ Watch on YouTube
              </a>
            </div>

            <div
              style={{
                ...styles.stats,
                gridTemplateColumns: isMobile ? "1fr" : styles.stats.gridTemplateColumns,
              }}
            >
              {[
                ["4", "Official platforms"],
                ["24/7", "Music access"],
                ["100%", "Original sound"],
              ].map(([value, label]) => (
                <div key={label} style={styles.statCard}>
                  <div style={styles.statValue}>{value}</div>
                  <div style={styles.statLabel}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.heroCardWrap}>
            <div style={styles.glow} />
            <div style={styles.heroCard}>
              <div style={styles.heroInner}>
                <div style={styles.logoBox}>
                  <div style={styles.logoText}>
                    <div>Official</div>
                    <div style={{ marginTop: "10px", fontSize: "30px", letterSpacing: "0.16em" }}>Logo</div>
                    <div style={{ marginTop: "10px", fontSize: "11px", letterSpacing: "0.18em", color: "rgba(255,255,255,0.55)" }}>
                      Replace with final Walkie mark
                    </div>
                  </div>
                </div>

                <div style={styles.centerLabel}>Now Playing</div>
                <div style={styles.heroCardTitle}>Latest Release</div>
                <div style={styles.heroCardText}>Drop your newest song title here</div>

                <div style={styles.coverBox}>
                  <div style={styles.coverPlaceholder}>Add cover art here</div>
                  <div style={styles.songStrip}>
                    <div>
                      <div style={{ fontWeight: 700 }}>Featured Song</div>
                      <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", marginTop: "4px" }}>
                        Update with your latest track
                      </div>
                    </div>
                    <div style={{ fontSize: "20px" }}>→</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            ...styles.sectionGrid,
            gridTemplateColumns: isMobile ? "1fr" : styles.sectionGrid.gridTemplateColumns,
          }}
        >
          {links.map((link) => (
            <a key={link.name} href={link.url} target="_blank" rel="noreferrer" style={styles.linkCard}>
              <div style={styles.linkLeft}>
                <div style={styles.iconBox}>{link.icon}</div>
                <div>
                  <div style={styles.linkTitle}>{link.name}</div>
                  <div style={styles.linkSubtitle}>{link.subtitle}</div>
                </div>
              </div>
              <div style={{ fontSize: "22px", color: "rgba(255,255,255,0.55)" }}>↗</div>
            </a>
          ))}
        </section>

        <section
          style={{
            ...styles.infoGrid,
            gridTemplateColumns: isMobile ? "1fr" : styles.infoGrid.gridTemplateColumns,
          }}
        >
          <div style={styles.infoCard}>
            <div style={styles.smallLabel}>About</div>
            <div style={styles.infoTitle}>The Walkie sound</div>
            <div style={styles.infoText}>
              Walkie creates original music with emotion, energy and a modern sound. From full song releases to short-form previews, this is the home for every platform and every new drop.
            </div>
          </div>

          <div style={styles.infoCard}>
            <div style={styles.smallLabel}>Featured Release</div>
            <div style={styles.infoTitle}>Your newest track</div>
            <div style={styles.infoText}>
              Add your latest song title, a short one-line description, and a direct streaming link here to push your newest release first.
            </div>
            <div style={{ marginTop: "20px" }}>
              <a href={links[0].url} target="_blank" rel="noreferrer" style={styles.secondaryBtn}>
                🎧 Stream now
              </a>
            </div>
          </div>
        </section>

        <footer style={styles.footer}>
          <div>www.walkiemusic.com</div>
          <div style={{ marginTop: "8px" }}>Walkie Music • Official Links</div>
        </footer>
      </main>
    </div>
  );
}

// MOUNT THE WEBSITE
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<WalkieMusicWebsite />);
