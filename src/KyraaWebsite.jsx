import React from "react";

export default function KyraaWebsite() {
  const inviteLink =
    "https://discord.com/oauth2/authorize?client_id=1410402936487411774&permissions=8&scope=bot%20applications.commands";

  const openInvite = () => {
    window.open(inviteLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #07030f 0%, #140724 45%, #1f0a38 100%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          padding: "18px 24px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          background: "rgba(0,0,0,0.25)",
          backdropFilter: "blur(10px)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 14,
              background:
                "linear-gradient(135deg, #d946ef 0%, #8b5cf6 50%, #6d28d9 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: 20,
            }}
          >
            K
          </div>
          <div>
            <div style={{ fontSize: 20, fontWeight: 700 }}>Kyraa.xo</div>
            <div style={{ fontSize: 12, opacity: 0.7 }}>
              Premium Discord Bot Website
            </div>
          </div>
        </div>

        <button
          onClick={openInvite}
          style={{
            background:
              "linear-gradient(90deg, #d946ef 0%, #8b5cf6 50%, #7c3aed 100%)",
            color: "white",
            border: "none",
            padding: "12px 18px",
            borderRadius: 14,
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Invite Bot
        </button>
      </header>

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "60px 24px" }}>
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: 28,
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                padding: "8px 14px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
                marginBottom: 20,
                fontSize: 14,
                color: "#e9d5ff",
              }}
            >
              Beautiful website for your Discord bot
            </div>

            <h1
              style={{
                fontSize: "clamp(42px, 8vw, 72px)",
                margin: 0,
                fontWeight: 800,
                lineHeight: 1.05,
                background:
                  "linear-gradient(90deg, #f0abfc 0%, #c4b5fd 50%, #8b5cf6 100%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Kyraa.xo
            </h1>

            <p
              style={{
                fontSize: 18,
                lineHeight: 1.8,
                opacity: 0.82,
                marginTop: 18,
                maxWidth: 650,
              }}
            >
              Welcome to Kyraa.xo — your ultimate Discord music bot. Enjoy
              smooth playback, powerful controls, and a premium experience
              designed to elevate your server&apos;s vibe.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 28 }}>
              <button
                onClick={openInvite}
                style={{
                  background:
                    "linear-gradient(90deg, #d946ef 0%, #8b5cf6 50%, #7c3aed 100%)",
                  color: "white",
                  border: "none",
                  padding: "14px 22px",
                  borderRadius: 16,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Invite Kyraa.xo
              </button>

              <a
                href="#features"
                style={{
                  color: "white",
                  textDecoration: "none",
                  padding: "14px 22px",
                  borderRadius: 16,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.05)",
                  fontWeight: 700,
                }}
              >
                Explore Website
              </a>
            </div>
          </div>

          <div
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 28,
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(12px)",
              overflow: "hidden",
              boxShadow: "0 20px 80px rgba(76, 29, 149, 0.35)",
            }}
          >
            <div
              style={{
                padding: 16,
                borderBottom: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", gap: 8 }}>
                <span style={{ width: 12, height: 12, borderRadius: 999, background: "#f87171", display: "inline-block" }} />
                <span style={{ width: 12, height: 12, borderRadius: 999, background: "#fbbf24", display: "inline-block" }} />
                <span style={{ width: 12, height: 12, borderRadius: 999, background: "#4ade80", display: "inline-block" }} />
              </div>
              <div style={{ fontSize: 13, opacity: 0.65 }}>kyraa-xo.vercel.app</div>
            </div>

            <div style={{ padding: 24 }}>
              <div
                style={{
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 24,
                  padding: 22,
                  background:
                    "linear-gradient(135deg, rgba(217,70,239,0.18), rgba(124,58,237,0.16))",
                }}
              >
                <div style={{ fontSize: 13, color: "#e9d5ff", marginBottom: 8 }}>
                  Featured Bot Panel
                </div>
                <div style={{ fontSize: 34, fontWeight: 800 }}>Kyraa.xo</div>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 18 }}>
                  {["Music", "24/7", "Invite"].map((tag) => (
                    <div
                      key={tag}
                      style={{
                        padding: "8px 12px",
                        borderRadius: 12,
                        background: "rgba(255,255,255,0.1)",
                        border: "1px solid rgba(255,255,255,0.1)",
                        fontSize: 14,
                      }}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" style={{ marginTop: 70 }}>
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <div style={{ color: "#d8b4fe", fontSize: 12, letterSpacing: 3, textTransform: "uppercase" }}>
              Features
            </div>
            <h2 style={{ fontSize: 42, margin: "10px 0 0", fontWeight: 800 }}>
              Everything your bot website should have
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
              gap: 18,
            }}
          >
            {[
              ["🎵", "Fast Music Playback"],
              ["🔗", "Invite in One Click"],
              ["⚡", "Modern Controls"],
              ["💜", "Server Friendly"],
            ].map(([icon, title]) => (
              <div
                key={title}
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 24,
                  padding: 22,
                  background: "rgba(255,255,255,0.06)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <div style={{ fontSize: 34 }}>{icon}</div>
                <div style={{ fontSize: 22, fontWeight: 700, marginTop: 10 }}>
                  {title}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="support" style={{ marginTop: 70 }}>
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 30,
              padding: 28,
              textAlign: "center",
              background:
                "linear-gradient(135deg, rgba(217,70,239,0.18), rgba(124,58,237,0.12), rgba(0,0,0,0.28))",
            }}
          >
            <div style={{ color: "#d8b4fe", fontSize: 12, letterSpacing: 3, textTransform: "uppercase" }}>
              Kyraa.xo
            </div>
            <h2 style={{ fontSize: 44, margin: "10px 0", fontWeight: 800 }}>
              Invite your bot in one click
            </h2>

            <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 24 }}>
              <button
                onClick={openInvite}
                style={{
                  background:
                    "linear-gradient(90deg, #d946ef 0%, #8b5cf6 50%, #7c3aed 100%)",
                  color: "white",
                  border: "none",
                  padding: "14px 22px",
                  borderRadius: 16,
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Invite Kyraa.xo
              </button>

              <a
                href="https://discord.gg/zErS7FTxhX"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "white",
                  textDecoration: "none",
                  padding: "14px 22px",
                  borderRadius: 16,
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.05)",
                  fontWeight: 700,
                }}
              >
                Support Server
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
