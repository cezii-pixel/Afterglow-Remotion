import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import React from "react";

export const AfterglowMotionIntro = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Animasi spring untuk kemunculan logo utama
  const logoScale = spring({
    frame,
    fps,
    config: { damping: 12, stiffness: 100 },
  });

  // Efek kedip/glow teks intro
  const textOpacity = interpolate(frame, [15, 35], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const textY = interpolate(frame, [15, 40], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Garis aksen neon yang membesar
  const lineWidth = interpolate(frame, [0, 25], [0, 300], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#09090b",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* Background Glow Effect */}
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(56,189,248,0.15) 0%, rgba(9,9,11,0) 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Container Logo */}
      <div
        style={{
          transform: `scale(${logoScale})`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 15,
          zIndex: 2,
        }}
      >
        {/* Ikon/Simbol Abstrak Afterglow */}
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: 20,
            background: "linear-gradient(135deg, #38bdf8 0%, #6366f1 100%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 0 30px rgba(56, 189, 248, 0.4)",
          }}
        >
          <div
            style={{
              width: 35,
              height: 35,
              borderRadius: "50%",
              background: "#09090b",
            }}
          />
        </div>

        {/* Garis Neon Transisi */}
        <div
          style={{
            width: lineWidth,
            height: 2,
            background: "linear-gradient(to right, transparent, #38bdf8, transparent)",
          }}
        />

        {/* Teks Brand & Subtitle */}
        <div
          style={{
            opacity: textOpacity,
            transform: `translateY(${textY}px)`,
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: 42,
              fontWeight: 800,
              color: "#f8fafc",
              margin: 0,
              letterSpacing: "-0.025em",
            }}
          >
            AFTERGLOW<span style={{ color: "#38bdf8" }}>.</span>
          </h1>
          <p
            style={{
              color: "#a1a1aa",
              fontSize: 14,
              marginTop: 6,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Motion & Creation Suite
          </p>
        </div>
      </div>
    </AbsoluteFill>
  );
};
