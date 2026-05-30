<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>WALKIE • Premium Link Tree</title>
  <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/babel-standalone/babel.min.js"></script>
  <style>
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
      transform: translateY(-16px) scale(1.04);
      box-shadow: 0 30px 80px rgba(124,58,237,0.35);
      border-color: var(--accent, #c084fc);
    }
    @media (max-width: 768px) {
      .navLinks { gap: 1rem; }
    }
  </style>
</head>
<body>
  <div id="root"></div>

  <script type="text/babel">
    const { useState, useEffect, useRef } = React;

    const links = [
      {
        name: "Spotify",
        url: "https://open.spotify.com/artist/3HkQPPZVeuoEfuzcwJNX4M",
        color: "#1DB954",
        svg: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#1DB954"/><path d="M17.4 16.9a.75.75 0 0 1-1.03.24c-2.82-1.72-6.37-2.1-10.56-1.14a.75.75 0 0 1-.34-1.46c4.58-1.05 8.51-.61 11.68 1.32a.75.75 0 0 1 .25 1.04Zm1.47-3.27a.94.94 0 0 1-1.29.3c-3.23-1.99-8.15-2.56-11.98-1.38a.94.94 0 1 1-.56-1.8c4.37-1.36 9.8-.72 13.53 1.57.45.28.6.86.3 1.31Zm.13-3.4C15.15 7.9 8.8 7.7 5.1 8.82a1.13 1.13 0 1 1-.65-2.16c4.25-1.28 11.32-1.03 15.7 1.57a1.13 1.13 0 1 1-1.15 1.98Z" fill="#000"/></svg>`,
      },
      {
        name: "YouTube",
        url: "https://www.youtube.com/@walkiemusicofficial",
        color: "#FF0000",
        svg: `<svg viewBox="0 0 24 24"><path fill="#FF0000" d="M21.5 6.8c-.3-1.1-1.2-2-2.3-2.3C17.4 4 12 4 12 4s-5.4 0-7.2.5c-1.1.3-2 1.2-2.3 2.3C2 8.6 2 12 2 12s0 3.4.5 5.2c.3 1.1 1.2 2 2.3 2.3C6.6 20 12 20 12 20s5.4 0 7.2-.5c1.1-.3 2-1.2 2.3-2.3.5-1.8.5-5.2.5-5.2s0-3.4-.5-5.2z"/><polygon fill="#FFFFFF" points="10 15.5 15 12 10 8.5"/></svg>`,
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

    const demoTracks = [
      {
        id: 1,
        title: "Crazy",
        artist: "WALKIE",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-18.mp3"
      },
      {
        id: 2,
        title: "Pulse",
        artist: "WALKIE",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3"
      },
      {
        id: 3,
        title: "Echo Chamber",
        artist: "WALKIE",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
      },
      {
        id: 4,
        title: "Midnight Drive",
        artist: "WALKIE",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3"
      }
    ];

    function Navbar() {
      return React.createElement('nav', { style: styles.navbar },
        React.createElement('div', { style: styles.logo }, 'WALKIE'),
        React.createElement('div', { style: styles.navLinks },
          React.createElement('a', { href: "#home", style: styles.navLink }, 'Home'),
          React.createElement('a', { href: "#listen", style: styles.navLink }, 'Listen'),
          React.createElement('a', { href: "#connect", style: styles.navLink }, 'Links')
        )
      );
    }

    function Hero() {
      return React.createElement('section', { id: "home", style: styles.hero },
        React.createElement('div', { style: styles.glowLayer1 }),
        React.createElement('div', { style: styles.glowLayer2 }),
        React.createElement('h1', { style: styles.heroTitle }, 'WALKIE'),
        React.createElement('p', { style: styles.heroSubtitle }, 'YES — this is your complete full website with interactive music player + playlist navigation.')
      );
    }

    function MusicPlayerSection() {
      const audioRef = React.useRef(null);
      const [isPlaying, setIsPlaying] = React.useState(false);
      const [progress, setProgress] = React.useState(0);
      const [currentTime, setCurrentTime] = React.useState(0);
      const [duration, setDuration] = React.useState(0);
      const [currentTrackIndex, setCurrentTrackIndex] = React.useState(0);
      const [tracks] = React.useState(demoTracks);

      const currentTrack = tracks[currentTrackIndex];

      const loadTrack = (index) => {
        const audio = audioRef.current;
        if (!audio) return;
        audio.src = tracks[index].src;
        audio.load();
        setProgress(0);
        setCurrentTime(0);
      };

      const playTrack = (index) => {
        const audio = audioRef.current;
        if (!audio) return;
        if (currentTrackIndex !== index) {
          setCurrentTrackIndex(index);
          loadTrack(index);
        }
        audio.play().then(() => setIsPlaying(true)).catch(() => {});
      };

      const togglePlay = () => {
        const audio = audioRef.current;
        if (!audio) return;
        if (isPlaying) {
          audio.pause();
          setIsPlaying(false);
        } else {
          audio.play().then(() => setIsPlaying(true)).catch(() => {});
        }
      };

      const nextTrack = () => {
        let next = currentTrackIndex + 1;
        if (next >= tracks.length) next = 0;
        setCurrentTrackIndex(next);
        loadTrack(next);
        const audio = audioRef.current;
        if (audio && isPlaying) {
          setTimeout(() => audio.play(), 150);
        }
      };

      const prevTrack = () => {
        let prev = currentTrackIndex - 1;
        if (prev < 0) prev = tracks.length - 1;
        setCurrentTrackIndex(prev);
        loadTrack(prev);
        const audio = audioRef.current;
        if (audio && isPlaying) {
          setTimeout(() => audio.play(), 150);
        }
      };

      const handleTimeUpdate = () => {
        const audio = audioRef.current;
        if (!audio) return;
        const prog = (audio.currentTime / audio.duration) * 100 || 0;
        setProgress(prog);
        setCurrentTime(audio.currentTime);
      };

      const handleLoadedMetadata = () => {
        const audio = audioRef.current;
        if (audio) setDuration(audio.duration);
      };

      const handleSeek = (e) => {
        const audio = audioRef.current;
        if (!audio) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        audio.currentTime = percent * audio.duration;
      };

      const handleTrackClick = (index) => {
        playTrack(index);
      };

      React.useEffect(() => {
        loadTrack(currentTrackIndex);
      }, [currentTrackIndex]);

      React.useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
          audio.addEventListener('timeupdate', handleTimeUpdate);
          audio.addEventListener('loadedmetadata', handleLoadedMetadata);
          audio.addEventListener('ended', nextTrack);
        }
        return () => {
          if (audio) {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
            audio.removeEventListener('ended', nextTrack);
          }
        };
      }, [currentTrackIndex]);

      const formatTime = (time) => {
        if (!time || isNaN(time)) return "0:00";
        const min = Math.floor(time / 60);
        const sec = Math.floor(time % 60);
        return `${min}:${sec < 10 ? '0' : ''}${sec}`;
      };

      return React.createElement('section', { id: "listen", style: styles.listenSection },
        React.createElement('div', { style: styles.sectionInner },
          React.createElement('h2', { style: styles.sectionTitle }, 'NOW PLAYING'),

          // Main Player Card
          React.createElement('div', { style: styles.playerCard },
            // Album art
            React.createElement('div', { style: styles.albumArt },
              React.createElement('div', { style: styles.albumInner },
                React.createElement('div', {
                  style: {
                    ...styles.albumGlow,
                    animation: isPlaying ? 'pulse 2s infinite' : 'none'
                  }
                }),
                React.createElement('span', { style: styles.albumText }, 'W')
              )
            ),

            // Track info
            React.createElement('div', { style: styles.trackInfo },
              React.createElement('div', { style: styles.trackTitle }, currentTrack.title),
              React.createElement('div', { style: styles.trackArtist }, currentTrack.artist)
            ),

            // Progress bar
            React.createElement('div', { style: styles.progressContainer, onClick: handleSeek },
              React.createElement('div', { style: styles.progressBar },
                React.createElement('div', {
                  style: {
                    ...styles.progressFill,
                    width: `${progress}%`
                  }
                })
              ),
              React.createElement('div', { style: styles.timeDisplay },
                React.createElement('span', null, formatTime(currentTime)),
                React.createElement('span', null, formatTime(duration))
              )
            ),

            // Controls
            React.createElement('div', { style: styles.controls },
              React.createElement('button', {
                style: styles.controlBtn,
                onClick: prevTrack
              }, '⫻'),
              React.createElement('button', {
                style: styles.playBtn,
                onClick: togglePlay
              },
                React.createElement('span', { style: { fontSize: '2.2rem', lineHeight: 1 } }, isPlaying ? '❚❚' : '▶')
              ),
              React.createElement('button', {
                style: styles.controlBtn,
                onClick: nextTrack
              }, '⫼')
            ),

            // Hidden audio
            React.createElement('audio', {
              ref: audioRef,
              preload: "metadata"
            })
          ),

          // Playlist Navigation
          React.createElement('div', { style: styles.playlistContainer },
            React.createElement('h3', { style: styles.playlistHeader }, 'Playlist'),
            React.createElement('div', { style: styles.playlistList },
              tracks.map((track, index) =>
                React.createElement('div', {
                  key: track.id,
                  style: {
                    ...styles.playlistItem,
                    background: index === currentTrackIndex ? 'rgba(124,58,237,0.25)' : 'transparent',
                    borderLeft: index === currentTrackIndex ? '4px solid #c084fc' : '4px solid transparent'
                  },
                  onClick: () => handleTrackClick(index)
                },
                  React.createElement('div', { style: styles.trackNumber }, index + 1),
                  React.createElement('div', { style: styles.playlistTrackInfo },
                    React.createElement('div', { style: styles.playlistTrackTitle }, track.title),
                    React.createElement('div', { style: styles.playlistTrackArtist }, track.artist)
                  ),
                  index === currentTrackIndex && isPlaying
                    ? React.createElement('div', { style: styles.nowPlayingDot }, '●')
                    : null
                )
              )
            )
          ),

          React.createElement('p', { style: styles.playerNote },
            'Full playlist navigation • Click any track • Auto-advance on end • Replace src URLs with your real hosted tracks'
          )
        )
      );
    }

    function ConnectSection() {
      return React.createElement('section', { id: "connect", style: styles.section },
        React.createElement('h2', { style: styles.sectionTitle }, 'Follow WALKIE'),
        React.createElement('div', { style: styles.platformGrid },
          links.map(item =>
            React.createElement('a', {
              key: item.name,
              href: item.url,
              target: "_blank",
              rel: "noopener noreferrer",
              style: { ...styles.platformCard, "--accent": item.color }
            },
              React.createElement('div', { style: styles.iconWrap },
                React.createElement('div', {
                  style: styles.icon,
                  dangerouslySetInnerHTML: { __html: item.svg }
                })
              ),
              React.createElement('span', { style: styles.platformName }, item.name)
            )
          )
        )
      );
    }

    function Footer() {
      return React.createElement('footer', { style: styles.footer },
        `© ${new Date().getFullYear()} WALKIE • Independent Artist`,
        React.createElement('div', { style: styles.footerTag }, 'Real music. Real energy. No limits.')
      );
    }

    function App() {
      useEffect(() => {
        const style = document.createElement("style");
        style.innerHTML = globalCss;
        document.head.appendChild(style);
      }, []);

      return React.createElement('div', { style: styles.page },
        React.createElement(Navbar),
        React.createElement(Hero),
        React.createElement(MusicPlayerSection),
        React.createElement(ConnectSection),
        React.createElement(Footer)
      );
    }

    const styles = {
      page: {
        background: "linear-gradient(180deg, #05000f 0%, #000000 100%)",
        color: "#f0f0ff",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
        minHeight: "100vh",
        overflowX: "hidden",
      },

      navbar: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 5%",
        background: "rgba(8,4,20,0.90)",
        backdropFilter: "blur(28px)",
        zIndex: 2000,
        borderBottom: "1px solid rgba(124,58,237,0.22)",
      },

      logo: {
        fontSize: "clamp(1.7rem, 6vw, 3.5rem)",
        fontWeight: 900,
        letterSpacing: "0.22em",
        background: "linear-gradient(90deg, #c084fc, #7c3aed, #60a5fa, #c084fc)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        whiteSpace: "nowrap",
      },

      navLinks: {
        display: "flex",
        gap: "1.5rem",
      },

      navLink: {
        color: "#e5e5ff",
        textDecoration: "none",
        fontWeight: 700,
        fontSize: "1rem",
      },

      hero: {
        position: "relative",
        textAlign: "center",
        padding: "clamp(220px, 40vh, 320px) 7% 100px",
        overflow: "hidden",
      },

      glowLayer1: {
        position: "absolute",
        top: "-55%",
        left: "10%",
        width: "1100px",
        height: "1100px",
        background: "radial-gradient(circle, rgba(124,58,237,0.35), transparent 65%)",
        filter: "blur(160px)",
      },

      glowLayer2: {
        position: "absolute",
        bottom: "-45%",
        right: "5%",
        width: "1000px",
        height: "1000px",
        background: "radial-gradient(circle, rgba(96,165,250,0.25), transparent 65%)",
        filter: "blur(180px)",
      },

      heroTitle: {
        position: "relative",
        fontSize: "clamp(5.5rem, 20vw, 20rem)",
        fontWeight: 900,
        margin: "0 0 1.5rem",
        lineHeight: 0.95,
        background: "linear-gradient(90deg, #ffffff, #c084fc, #7c3aed, #60a5fa, #ffffff)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundSize: "400% 100%",
        animation: "shineText 15s linear infinite",
      },

      heroSubtitle: {
        position: "relative",
        fontSize: "clamp(1.2rem, 5vw, 3.2rem)",
        opacity: 0.88,
        margin: 0,
      },

      listenSection: {
        padding: "clamp(70px, 10vw, 130px) 7%",
        maxWidth: "1200px",
        margin: "0 auto",
        background: "rgba(124,58,237,0.06)",
      },

      sectionInner: {
        maxWidth: "780px",
        margin: "0 auto",
      },

      playerCard: {
        background: "rgba(8,4,20,0.95)",
        border: "1px solid rgba(124,58,237,0.4)",
        borderRadius: "32px",
        padding: "2.5rem 2rem",
        boxShadow: "0 25px 60px rgba(124,58,237,0.25)",
        backdropFilter: "blur(20px)",
        textAlign: "center",
        position: "relative",
        marginBottom: "2rem",
      },

      albumArt: {
        width: "180px",
        height: "180px",
        margin: "0 auto 1.5rem",
        borderRadius: "50%",
        background: "linear-gradient(135deg, #c084fc, #7c3aed, #60a5fa)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 0 60px rgba(124,58,237,0.6)",
        position: "relative",
      },

      albumInner: {
        width: "140px",
        height: "140px",
        borderRadius: "50%",
        background: "#0a0520",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "4.5rem",
        fontWeight: 900,
        color: "#f0f0ff",
        boxShadow: "inset 0 0 40px rgba(0,0,0,0.6)",
      },

      albumGlow: {
        position: "absolute",
        inset: "-25px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,0.5), transparent)",
        filter: "blur(30px)",
        zIndex: -1,
      },

      albumText: {
        fontSize: "4.5rem",
        fontWeight: 900,
        background: "linear-gradient(90deg, #c084fc, #60a5fa)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },

      trackInfo: {
        marginBottom: "1.5rem",
      },

      trackTitle: {
        fontSize: "2.1rem",
        fontWeight: 800,
        margin: 0,
        letterSpacing: "-0.02em",
      },

      trackArtist: {
        fontSize: "1.1rem",
        opacity: 0.75,
        margin: 0,
      },

      progressContainer: {
        margin: "1.5rem 0",
        cursor: "pointer",
      },

      progressBar: {
        height: "6px",
        background: "rgba(255,255,255,0.15)",
        borderRadius: "9999px",
        position: "relative",
        overflow: "hidden",
      },

      progressFill: {
        height: "100%",
        background: "linear-gradient(90deg, #c084fc, #60a5fa)",
        borderRadius: "9999px",
        transition: "width 0.1s linear",
      },

      timeDisplay: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: "0.9rem",
        opacity: 0.7,
        marginTop: "0.4rem",
      },

      controls: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
      },

      controlBtn: {
        background: "none",
        border: "none",
        color: "#f0f0ff",
        fontSize: "2rem",
        cursor: "pointer",
        opacity: 0.6,
        transition: "all 0.3s ease",
      },

      playBtn: {
        width: "74px",
        height: "74px",
        background: "linear-gradient(90deg, #c084fc, #7c3aed)",
        border: "none",
        borderRadius: "50%",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 10px 30px rgba(124,58,237,0.5)",
        cursor: "pointer",
        transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },

      playlistContainer: {
        background: "rgba(8,4,20,0.85)",
        border: "1px solid rgba(124,58,237,0.3)",
        borderRadius: "24px",
        padding: "1.5rem",
        boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
      },

      playlistHeader: {
        fontSize: "1.4rem",
        fontWeight: 700,
        marginBottom: "1rem",
        textAlign: "center",
        opacity: 0.9,
      },

      playlistList: {
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      },

      playlistItem: {
        display: "flex",
        alignItems: "center",
        padding: "1rem 1.25rem",
        borderRadius: "16px",
        cursor: "pointer",
        transition: "all 0.3s ease",
      },

      trackNumber: {
        width: "28px",
        height: "28px",
        background: "rgba(255,255,255,0.1)",
        color: "#fff",
        fontSize: "1rem",
        fontWeight: 700,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        marginRight: "1rem",
      },

      playlistTrackInfo: {
        flex: 1,
      },

      playlistTrackTitle: {
        fontSize: "1.2rem",
        fontWeight: 700,
      },

      playlistTrackArtist: {
        fontSize: "0.95rem",
        opacity: 0.7,
      },

      nowPlayingDot: {
        color: "#c084fc",
        fontSize: "1.4rem",
        animation: "pulse 1.5s infinite",
      },

      playerNote: {
        textAlign: "center",
        fontSize: "0.95rem",
        opacity: 0.6,
        marginTop: "1.8rem",
      },

      section: {
        padding: "clamp(70px, 10vw, 130px) 7%",
        maxWidth: "1200px",
        margin: "0 auto",
      },

      sectionTitle: {
        fontSize: "clamp(2.6rem, 10vw, 7rem)",
        fontWeight: 900,
        textAlign: "center",
        marginBottom: "4rem",
        background: "linear-gradient(90deg, #c084fc, #7c3aed, #60a5fa)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
      },

      platformGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "2rem",
      },

      platformCard: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2.4rem 1.5rem",
        background: "rgba(124,58,237,0.06)",
        border: "1px solid rgba(124,58,237,0.28)",
        borderRadius: "24px",
        textDecoration: "none",
        color: "#fff",
        transition: "all 0.45s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
        backdropFilter: "blur(12px)",
      },

      iconWrap: {
        width: "90px",
        height: "90px",
        marginBottom: "1.25rem",
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
      },

      platformName: {
        fontSize: "1.5rem",
        fontWeight: 800,
        marginTop: "0.5rem",
        textAlign: "center",
      },

      footer: {
        textAlign: "center",
        padding: "90px 7% 70px",
        opacity: 0.75,
        fontSize: "1.05rem",
        borderTop: "1px solid rgba(124,58,237,0.18)",
      },

      footerTag: {
        marginTop: "1rem",
        fontSize: "0.95rem",
        opacity: 0.6,
      },
    };

    const globalCss = `
      * {
        box-sizing: border-box;
      }
      html {
        scroll-behavior: smooth;
      }
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
        transform: translateY(-16px) scale(1.04);
        box-shadow: 0 30px 80px rgba(124,58,237,0.35);
        border-color: var(--accent, #c084fc);
      }
      @keyframes pulse {
        0%, 100% { opacity: 0.6; }
        50% { opacity: 1; }
      }
      @media (max-width: 768px) {
        .navLinks {
          gap: 1rem;
        }
      }
    `;

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(React.createElement(App));
  </script>
</body>
</html>
