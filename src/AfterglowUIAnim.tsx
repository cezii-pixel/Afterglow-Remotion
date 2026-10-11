import { AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import React from "react";

export const AfterglowUIAnim = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // --- Sistem Motion Kamera & Transisi Layar ---
  // Total durasi dibagi menjadi beberapa sekuens: Home -> Browser -> Create/Editor -> Project -> Settings
  
  // 1. Zoom & Pan Kamera (Simulasi 3D Camera Movement)
  const cameraZoom = interpolate(
    frame,
    [0, 30, 90, 120, 180, 210, 270, 300, 360],
    [1, 1.2, 1.2, 1.5, 1.5, 1.1, 1.1, 1.3, 1],
    { extrapolateRight: "clamp" }
  );

  const cameraX = interpolate(
    frame,
    [30, 90, 120, 180, 210, 270, 300, 360],
    [0, -400, -400, -800, -800, -200, -200, -600, 0],
    { extrapolateRight: "clamp" }
  );

  const cameraY = interpolate(
    frame,
    [30, 90, 120, 180, 210, 270, 300, 360],
    [0, -200, -200, -500, -500, -100, -100, -400, 0],
    { extrapolateRight: "clamp" }
  );

  // Active Screen Indicator berdasarkan frame
  const currentScreen = 
    frame < 90 ? "home" :
    frame < 180 ? "browser" :
    frame < 270 ? "editor" :
    frame < 330 ? "project" : "settings";

  return (
    <AbsoluteFill style={{ backgroundColor: "#09090b", color: "#f8fafc", fontFamily: "system-ui, sans-serif", overflow: "hidden" }}>
      {/* Wrapper Kamera dengan Efek Transform Dinamis */}
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transform: `scale(${cameraZoom}) translate(${cameraX}px, ${cameraY}px)`,
          transformOrigin: "center center",
          transition: "transform 0.1s ease-out",
        }}
      >
        {/* Canvas UI Utama Afterglow */}
        <div style={{ width: 1280, height: 720, background: "#18181b", borderRadius: 16, border: "1px solid #27272a", display: "flex", flexDirection: "column", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)" }}>
          
          {/* Top Bar / Navigation */}
          <div style={{ height: 50, borderBottom: "1px solid #27272a", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", background: "#121214" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#ef4444" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#f59e0b" }} />
              <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#10b981" }} />
              <span style={{ marginLeft: 15, fontSize: 14, fontWeight: 600, color: "#a1a1aa" }}>Afterglow Studio v11[span_1](start_span)[span_1](end_span)</span>
            </div>
            <div style={{ fontSize: 12, background: "#27272a", padding: "4px 12px", borderRadius: 6, color: "#38bdf8" }}>
              Active Mode: {currentScreen.toUpperCase()}
            </div>
          </div>

          {/* Dynamic Content Area */}
          <div style={{ flex: 1, position: "relative", overflow: "hidden", padding: 30 }}>
            
            {/* 1. HOME SCREEN */}
            {currentScreen === "home" && (
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", gap: 20 }}>
                <h1 style={{ fontSize: 48, fontWeight: 800, background: "linear-gradient(to right, #38bdf8, #818cf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Welcome to Afterglow Studio
                </h1>
                <p style={{ color: "#a1a1aa", fontSize: 18 }}>Next-Gen Native Desktop & Web Creation Engine[span_2](start_span)[span_2](end_span)</p>
                <div style={{ display: "flex", gap: 15, marginTop: 20 }}>
                  <div style={{ background: "#3b82f6", padding: "12px 24px", borderRadius: 8, fontWeight: 600 }}>Create New Project</div>
                  <div style={{ background: "#27272a", padding: "12px 24px", borderRadius: 8, fontWeight: 600 }}>Open Browser</div>
                </div>
              </div>
            )}

            {/* 2. BROWSER SCREEN */}
            {currentScreen === "browser" && (
              <div style={{ display: "flex", flexDirection: "column", height: "100%", gap: 20 }}>
                <h2>Project Asset Browser</h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} style={{ background: "#27272a", height: 140, borderRadius: 10, padding: 15, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                      <span style={{ fontWeight: 600 }}>Cinematic_Shot_0{item}.mp4</span>
                      <span style={{ fontSize: 12, color: "#a1a1aa" }}>4K 60FPS • 00:15</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 3. CREATE PROJECT / EDITOR SCREEN (KOMPLEKS) */}
            {currentScreen === "editor" && (
              <div style={{ display: "grid", gridTemplateColumns: "250px 1fr 300px", height: "100%", gap: 20 }}>
                {/* Panel Kiri: Tools / Layers */}
                <div style={{ background: "#121214", borderRadius: 10, padding: 15, display: "flex", flexDirection: "column", gap: 10 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#71717a" }}>LAYERS & SHADERS</span>
                  {["Video Track 1", "Shape Group[span_3](start_span)[span_3](end_span)", "Particle FX", "Adjustment Layer"].map((layer, idx) => (
                    <div key={idx} style={{ background: "#27272a", padding: 10, borderRadius: 6, fontSize: 14 }}>{layer}</div>
                  ))}
                </div>

                {/* Tengah: Preview & Timeline */}
                <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
                  <div style={{ flex: 1, background: "#000", borderRadius: 10, display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid #27272a" }}>
                    <span style={{ color: "#52525b" }}>Interactive Real-time Viewport</span>
                  </div>
                  <div style={{ height: 120, background: "#121214", borderRadius: 10, padding: 10, position: "relative" }}>
                    <span style={{ fontSize: 12, color: "#71717a" }}>Timeline & Keyframes</span>
                    <div style={{ height: 4, background: "#3b82f6", width: `${(frame % 90) * 4}%`, position: "absolute", bottom: 20, left: 10, borderRadius: 2 }} />
                  </div>
                </div>

                {/* Kanan: Inspector & Properties */}
                <div style={{ background: "#121214", borderRadius: 10, padding: 15, display: "flex", flexDirection: "column", gap: 12 }}>
                  <span style={{ fontSize: 12, fontWeight: 700, color: "#71717a" }}>INSPECTOR PROPERTIES</span>
                  <div style={{ fontSize: 13 }}>Transform X / Y</div>
                  <div style={{ height: 6, background: "#27272a", borderRadius: 3 }} />
                  <div style={{ fontSize: 13 }}>Shader FX Blend Mode</div>
                  <div style={{ height: 6, background: "#27272a", borderRadius: 3 }} />
                </div>
              </div>
            )}

            {/* 4. PROJECT SCREEN */}
            {currentScreen === "project" && (
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", gap: 15 }}>
                <h2>Project Export & Render Queue</h2>
                <p style={{ color: "#a1a1aa" }}>RAM Preview & WebCodecs Acceleration Active[span_4](start_span)[span_4](end_span)</p>
                <div style={{ width: 400, background: "#27272a", height: 8, borderRadius: 4, overflow: "hidden" }}>
                  <div style={{ width: "75%", height: "100%", background: "#10b981" }} />
                </div>
              </div>
            )}

            {/* 5. SETTINGS SCREEN */}
            {currentScreen === "settings" && (
              <div style={{ display: "flex", flexDirection: "column", height: "100%", gap: 20 }}>
                <h2>System Settings & GPU Acceleration</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 15, maxWidth: 600 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", background: "#121214", padding: 15, borderRadius: 8 }}>
                    <span>Hardware Acceleration (WebGPU / Native Offload)[span_5](start_span)[span_5](end_span)</span>
                    <span style={{ color: "#10b981", fontWeight: 600 }}>Enabled</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", background: "#121214", padding: 15, borderRadius: 8 }}>
                    <span>AI Agent Model Integration</span>
                    <span style={{ color: "#38bdf8", fontWeight: 600 }}>BYOK Connected</span>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

