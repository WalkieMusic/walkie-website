const links = [
  {
    name: "Spotify",
    url: "https://open.spotify.com/artist/3HkQPPZVeuoEfuzcwJNX4M?si=Bey_hdaoQ_GG_afS21tCjw",
    subtitle: "Stream Walkie on Spotify",
    icon: "spotify",
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UCrKt3xZWrvMnxyPcjAY8iZw",
    subtitle: "Watch full songs and new uploads",
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
    subtitle: "Follow for clips, teasers and updates",
    icon: "tiktok",
  },
];

function PlatformIcon({ type, size = 28 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };

  if (type === "spotify") {
    return (
      <svg {...common} aria-label="Spotify icon">
        <circle cx="16" cy="16" r="13" stroke="rgba(255,255,255,0.92)" strokeWidth="1.8" />
        <path d="M9.5 12.8C14.2 11.3 18.8 11.6 23 13.7" stroke="rgba(255,255,255,0.92)" strokeWidth="2" strokeLinecap="round" />
        <path d="M10.7 16.6C14.6 15.4 18.1 15.6 21.5 17.3" stroke="rgba(255,255,255,0.78)" strokeWidth="1.9" strokeLinecap="round" />
        <path d="M12 20.1C14.7 19.3 17.3 19.5 19.8 20.7" stroke="rgba(255,255,255,0.64)" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "youtube") {
    return (
      <svg {...common} aria-label="YouTube icon">
        <rect x="5" y="8" width="22" height="16" rx="5" stroke="rgba(255,255,255,0.92)" strokeWidth="1.8" />
        <path d="M14 12.8L20.5 16L14 19.2V12.8Z" fill="rgba(255,255,255,0.92)" />
      </svg>
    );
  }

  if (type === "apple") {
    return (
      <svg {...common} aria-label="Apple Music icon">
        <path
          d="M20.8 8.4C19.8 9.6 18.3 10.3 16.9 10.2C16.7 8.7 17.4 7.2 18.3 6.2C19.4 5 20.9 4.4 22.2 4.5C22.3 5.9 21.8 7.2 20.8 8.4Z"
          fill="rgba(255,255,255,0.92)"
        />
        <path
          d="M22.4 11.3C20.9 10.4 18.7 10.2 17.4 11.1C16.6 11.6 15.5 11.6 14.7 11.1C13.1 10.2 10.7 10.3 9.1 11.5C6.8 13.2 6.2 17.3 7.8 20.1C8.9 22 10.3 24.1 12.1 24C13.2 24 13.8 23.3 15.2 23.3C16.6 23.3 17.1 24 18.3 24C20.1 24 21.4 22.1 22.4 20.2C23.1 18.8 23.4 17.4 23.5 17.3C23.4 17.3 20.3 16.1 20.3 12.7C20.3 11.8 20.6 11.1 22.4 11.3Z"
          fill="rgba(255,255,255,0.92)"
        />
      </svg>
    );
  }

  if (type === "tiktok") {
    return (
      <svg {...common} aria-label="TikTok icon">
        <path
          d="M18.2 7.2C18.8 9.1 20.4 10.5 22.4 10.9V13.6C20.9 13.5 19.5 12.9 18.2 12V18.7C18.2 22 15.7 24.5 12.6 24.5C9.5 24.5 7 22 7 18.9C7 15.9 9.4 13.4 12.5 13.4C12.9 13.4 13.2 13.4 13.6 13.5V16.3C13.3 16.2 13 16.1 12.6 16.1C11 16.1 9.7 17.4 9.7 19C9.7 20.6 11 21.9 12.6 21.9C14.2 21.9 15.5 20.6 15.5 19V6.2H18.2V7.2Z"
          fill="rgba(255,255,255,0.92)"
        />
      </svg>
    );
  }

  return null;
}

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, rgba(255,255,255,0.12), transparent 24%), linear-gradient(180deg, #040406 0%, #09090d 48%, #050507 100%)",
    color: "#ffffff",
    fontFamily: "Inter, Arial, sans-serif",
  },
  shell: {
    maxWidth: "1180px",
    margin: "0 auto",
    padding: "42px 24px 72px",
  },
  hero: {
    display: "grid",
    gridTemplateColumns: "1.15fr 0.85fr",
    gap: "34px",
    alignItems: "center",
  },
  badge: {
    display: "inline-block",
    padding: "10px 16px",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "999px",
    background: "rgba(255,255,255,0.05)",
    fontSize: "12px",
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.74)",
  },
  title: {
    fontSize: "88px",
    lineHeight: 0.95,
    margin: "22px 0 18px",
    fontWeight: 900,
    letterSpacing: "0.03em",
  },
  subtitle: {
    fontSize: "22px",
    lineHeight: 1.7,
    maxWidth: "760px",
    color: "rgba(255,255,255,0.8)",
    marginBottom: "30px",
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
    padding: "16px 22px",
    borderRadius: "18px",
    background: "#ffffff",
    color: "#0d0d10",
    textDecoration: "none",
    fontWeight: 800,
    border: "1px solid rgba(255,255,255,0.2)",
  },
  secondaryBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    padding: "16px 22px",
    borderRadius: "18px",
    background: "rgba(255,255,255,0.06)",
    color: "#ffffff",
    textDecoration: "none",
    fontWeight: 800,
    border: "1px solid rgba(255,255,255,0.14)",
  },
  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "14px",
  },
  statCard: {
    border: "1px solid rgba(255,255,255,0.09)",
    background: "rgba(255,255,255,0.04)",
    borderRadius: "24px",
    padding: "18px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.22)",
  },
  statValue: {
    fontSize: "28px",
    fontWeight: 900,
    marginBottom: "4px",
  },
  statLabel: {
    color: "rgba(255,255,255,0.62)",
    fontSize: "14px",
  },
  heroCardWrap: {
    position: "relative",
  },
  glow: {
    position: "absolute",
    inset: "-20px",
    background: "rgba(255,255,255,0.07)",
    filter: "blur(36px)",
    borderRadius: "38px",
  },
  heroCard: {
    position: "relative",
    border: "1px solid rgba(255,255,255,0.09)",
    background: "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))",
    borderRadius: "34px",
    padding: "22px",
    boxShadow: "0 30px 80px rgba(0,0,0,0.34)",
    backdropFilter: "blur(16px)",
  },
  heroInner: {
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "28px",
    padding: "28px",
    background: "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
  },
  logoBox: {
    width: "190px",
    height: "190px",
    margin: "0 auto",
    border: "1.5px solid rgba(255,255,255,0.22)",
    background: "#060608",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 0 30px rgba(255,255,255,0.08), 0 20px 60px rgba(0,0,0,0.45)",
    position: "relative",
    overflow: "hidden",
  },
  logoText: {
    fontSize: "26px",
    lineHeight: 1.02,
    fontWeight: 900,
    letterSpacing: "0.18em",
    textAlign: "center",
    textTransform: "uppercase",
    color: "rgba(255,255,255,0.96)",
  },
  centerLabel: {
    textAlign: "center",
    marginTop: "22px",
    color: "rgba(255,255,255,0.52)",
    fontSize: "12px",
    letterSpacing: "0.3em",
    textTransform: "uppercase",
  },
  heroCardTitle: {
    textAlign: "center",
    margin: "14px 0 8px",
    fontSize: "38px",
    fontWeight: 900,
    lineHeight: 1.05,
  },
  heroCardText: {
    textAlign: "center",
    fontSize: "14px",
    color: "rgba(255,255,255,0.68)",
    marginBottom: "20px",
  },
  coverBox: {
    marginTop: "10px",
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(0,0,0,0.24)",
    borderRadius: "22px",
    padding: "18px",
  },
  releaseMeta: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    textAlign: "center",
    padding: "8px 4px 4px",
  },
  releasePill: {
    display: "inline-block",
    padding: "8px 14px",
    borderRadius: "999px",
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.05)",
    color: "rgba(255,255,255,0.72)",
    fontSize: "12px",
    letterSpacing: "0.18em",
    textTransform: "uppercase",
  },
  releaseTitle: {
    fontSize: "30px",
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
  },
  releaseSub: {
    fontSize: "14px",
    color: "rgba(255,255,255,0.62)",
    lineHeight: 1.7,
    maxWidth: "300px",
    margin: 0,
  },
  songStrip: {
    marginTop: "14px",
    border: "1px solid rgba(255,255,255,0.08)",
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
    border: "1px solid rgba(255,255,255,0.09)",
    background: "rgba(255,255,255,0.04)",
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
    background: "rgba(255,255,255,0.06)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid rgba(255,255,255,0.1)",
    flexShrink: 0,
  },
  linkTitle: {
    fontSize: "22px",
    fontWeight: 800,
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
    border: "1px solid rgba(255,255,255,0.09)",
    background: "rgba(255,255,255,0.04)",
    borderRadius: "30px",
    padding: "26px",
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
    fontWeight: 900,
    lineHeight: 1.1,
  },
  infoText: {
    lineHeight: 1.85,
    color: "rgba(255,255,255,0.74)",
    fontSize: "16px",
  },
  embedGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "18px",
    marginTop: "18px",
  },
  embedCard: {
    border: "1px solid rgba(255,255,255,0.09)",
    background: "rgba(255,255,255,0.04)",
    borderRadius: "30px",
    padding: "22px",
    boxShadow: "0 18px 40px rgba(0,0,0,0.2)",
  },
  iframeWrap: {
    marginTop: "16px",
    overflow: "hidden",
    borderRadius: "18px",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  footer: {
    marginTop: "42px",
    paddingTop: "22px",
    borderTop: "1px solid rgba(255,255,255,0.08)",
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

            <h1 style={{ ...styles.title, fontSize: isMobile ? "58px" : styles.title.fontSize }}>
              WALKIE
            </h1>

            <p style={{ ...styles.subtitle, fontSize: isMobile ? "18px" : styles.subtitle.fontSize }}>
              South African roots. New Zealand soil. Original music with heart, energy and a sound built to move people.
            </p>

            <div style={styles.buttonRow}>
              <a href={links[0].url} target="_blank" rel="noreferrer" style={styles.primaryBtn}>
                <PlatformIcon type="spotify" />
                <span>Listen on Spotify</span>
              </a>
              <a href={links[1].url} target="_blank" rel="noreferrer" style={styles.secondaryBtn}>
                <PlatformIcon type="youtube" />
                <span>Watch on YouTube</span>
              </a>
            </div>

            <div
              style={{
                ...styles.stats,
                gridTemplateColumns: isMobile ? "1fr" : styles.stats.gridTemplateColumns,
              }}
            >
              {[
                ["4", "Streaming platforms"],
                ["New", "Music drops"],
                ["100%", "Walkie sound"],
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
                  <div style={styles.logoText}>WALKIE<br />MUSIC</div>
                </div>

                <div style={styles.centerLabel}>Featured release</div>
                <div style={styles.heroCardTitle}>As Die Tyd Stilbly</div>
                <div style={styles.heroCardText}>Now streaming on all main platforms</div>

                <div style={styles.coverBox}>
                  <div style={styles.releaseMeta}>
                    <div style={styles.releasePill}>Out Now</div>
                    <p style={styles.releaseTitle}>As Die Tyd Stilbly</p>
                    <p style={styles.releaseSub}>
                      A powerful Walkie release available now. Stream it, share it and stay locked in for every next drop.
                    </p>
                  </div>
                  <div style={styles.songStrip}>
                    <div>
                      <div style={{ fontWeight: 800 }}>As Die Tyd Stilbly</div>
                      <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", marginTop: "4px" }}>
                        Streaming now
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
                <div style={styles.iconBox}>
                  <PlatformIcon type={link.icon} />
                </div>
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
              Walkie is an independent artist creating music with emotion, rhythm and real energy. From Afrikaans releases
              to modern crossover sounds, every track is built to connect, hit hard and stay with you.
              <br /><br />
              This is the home for every new release, every official link and every step of the journey.
            </div>
          </div>

          <div style={styles.infoCard}>
            <div style={styles.smallLabel}>Featured Release</div>
            <div style={styles.infoTitle}>As Die Tyd Stilbly</div>
            <div style={styles.infoText}>
              Walkie’s latest release is out now. Stream “As Die Tyd Stilbly” and follow the journey across every platform.
            </div>
            <div style={{ marginTop: "20px" }}>
              <a href={links[0].url} target="_blank" rel="noreferrer" style={styles.secondaryBtn}>
                <PlatformIcon type="spotify" />
                <span>Stream now</span>
              </a>
            </div>
          </div>
        </section>

        <section
          style={{
            ...styles.embedGrid,
            gridTemplateColumns: isMobile ? "1fr" : styles.embedGrid.gridTemplateColumns,
          }}
        >
          <div style={styles.embedCard}>
            <div style={styles.smallLabel}>Spotify Player</div>
            <div style={{ ...styles.infoTitle, fontSize: "30px", marginBottom: "0" }}>Listen here</div>
            <div style={styles.iframeWrap}>
              <iframe
                style={{ border: 0, display: "block" }}
                src="https://open.spotify.com/embed/artist/3HkQPPZVeuoEfuzcwJNX4M?utm_source=generator&theme=0"
                width="100%"
                height="352"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Walkie Spotify Player"
              ></iframe>
            </div>
          </div>

          <div style={styles.embedCard}>
            <div style={styles.smallLabel}>YouTube</div>
            <div style={{ ...styles.infoTitle, fontSize: "30px", marginBottom: "0" }}>Watch on YouTube</div>
            <div style={styles.iframeWrap}>
              <iframe
                width="100%"
                height="352"
                src="https://www.youtube.com/embed/videoseries?list=UUrKt3xZWrvMnxyPcjAY8iZw"
                title="Walkie YouTube"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<WalkieMusicWebsite />);
