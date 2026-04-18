import React from "react";

export default function KyraaWebsite() {
  const inviteLink =
    "https://discord.com/oauth2/authorize?client_id=1410402936487411774&permissions=8&scope=bot%20applications.commands";

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#07030f",
        color: "white",
        padding: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Kyraa.xo</h1>
      <p>Website is working.</p>

      <button
        onClick={() => window.open(inviteLink, "_blank", "noopener,noreferrer")}
        style={{
          padding: "12px 18px",
          borderRadius: "12px",
          border: "none",
          background: "#7c3aed",
          color: "white",
          cursor: "pointer",
        }}
      >
        Invite Bot
      </button>

      <a
        href="https://discord.gg/zErS7FTxhX"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginLeft: "12px",
          padding: "12px 18px",
          borderRadius: "12px",
          background: "#27272a",
          color: "white",
          textDecoration: "none",
        }}
      >
        Support Server
      </a>
    </div>
  );
}
