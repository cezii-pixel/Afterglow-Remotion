import React from 'react';
import { 
  AbsoluteFill, 
  interpolate, 
  spring, 
  useCurrentFrame, 
  useVideoConfig 
} from 'remotion';

export const AfterglowMotionIntro: React.FC<{
  title?: string;
  subtitle?: string;
}> = ({ 
  title = "AFTERGLOW STUDIO", 
  subtitle = "Next-Generation Motion & Video Engine" 
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Efek spring untuk skala kontainer utama
  const containerScale = spring({
    frame,
    fps,
    config: {
      damping: 12,
      stiffness: 100,
    },
  });

  // Animasi transisi opacity dan pergerakan vertikal untuk judul
  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: 'clamp',
  });

  const titleTranslateY = interpolate(frame, [0, 20], [30, 0], {
    extrapolateRight: 'clamp',
  });

  // Animasi subtitle dengan jeda waktu (delay)
  const subtitleOpacity = interpolate(frame, [15, 35], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const subtitleTranslateY = interpolate(frame, [15, 35], [20, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Efek kilau latar belakang (glow effect)
  const glowOpacity = interpolate(
    frame, 
    [0, 30, 60], 
    [0.2, 0.6, 0.3], 
    { extrapolateRight: 'clamp' }
  );

  return (
    <AbsoluteFill className="bg-slate-950 flex items-center justify-center overflow-hidden font-sans">
      {/* Background Glow Element */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full bg-indigo-600/30 blur-[120px] pointer-events-none"
        style={{ opacity: glowOpacity }}
      />

      {/* Main Content Container */}
      <div 
        className="flex flex-col items-center text-center z-10 px-6 max-w-4xl"
        style={{
          transform: `scale(${containerScale})`,
        }}
      >
        {/* Badge / Tag */}
        <div className="mb-4 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-widest uppercase shadow-inner">
          Afterglow v11 Motion Component
        </div>

        {/* Title */}
        <h1 
          className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4 drop-shadow-lg"
          style={{
            opacity: titleOpacity,
            transform: `translateY(${titleTranslateY}px)`,
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        <p 
          className="text-lg md:text-xl text-slate-400 font-medium max-w-xl leading-relaxed"
          style={{
            opacity: subtitleOpacity,
            transform: `translateY(${subtitleTranslateY}px)`,
          }}
        >
          {subtitle}
        </p>
      </div>
    </AbsoluteFill>
  );
};
