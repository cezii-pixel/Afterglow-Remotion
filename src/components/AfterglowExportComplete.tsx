import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import React from "react";

export const AfterglowExportComplete = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const popIn = spring({
    frame,
    fps,
    config: { damping: 10, stiffness: 120 },
  });

  const cardOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "#09090b",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          width: 500,
          background: "#121214",
          border: "1px solid #27272a",
          borderRadius: 16,
          padding: 30,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
          opacity: cardOpacity,
          transform: `scale(${popIn})`,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8)",
        }}
      >
        {/* Checkmark Sukses Ikon */}
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: "50%",
            background: "rgba(16, 185, 129, 0.15)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid rgba(16, 185, 129, 0.3)",
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#10b981"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <div style={{ textAlign: "center" }}>
          <h2 style={{ color: "#f8fafc", fontSize: 22, margin: 0, fontWeight: 700 }}>
            Render Completed Successfully!
          </h2>
          <p style={{ color: "#a1a1aa", fontSize: 14, marginTop: 6 }}>
            Your project has been rendered via WebGPU acceleration.
          </p>
        </div>

        {/* Informasi Detail File */}
        <div
          style={{
            width: "100%",
            background: "#18181b",
            borderRadius: 10,
            padding: 15,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            border: "1px solid #27272a",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
            <span style={{ color: "#71717a" }}>File Name</span>
            <span style={{ color: "#f8fafc", fontWeight: 500 }}>Cinematic_Master_v11.mp4</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
            <span style={{ color: "#71717a" }}>Resolution & FPS</span>
            <span style={{ color: "#38bdf8", fontWeight: 500 }}>4K Ultra HD (60 FPS)</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
            <span style={{ color: "#71717a" }}>File Size</span>
            <span style={{ color: "#f8fafc", fontWeight: 500 }}>142.8 MB</span>
          </div>
        </div>

        {/* Aksi Tombol */}
        <div style={{ display: "flex", gap: 12, width: "100%", marginTop: 5 }}>
          <div
            style={{
              flex: 1,
              background: "#27272a",
              color: "#f8fafc",
              padding: "12px",
              borderRadius: 8,
              textAlign: "center",
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            Open Folder
          </div>
          <div
            style={{
              flex: 1,
              background: "#3b82f6",
              color: "#ffffff",
              padding: "12px",
              borderRadius: 8,
              textAlign: "center",
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            Share Project
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
