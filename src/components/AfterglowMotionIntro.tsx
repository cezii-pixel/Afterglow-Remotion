import { AbsoluteFill } from 'remotion';

export const AfterglowMotionIntro: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: '#2563eb', // Biru terang
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#ffffff',
        fontSize: '100px',
        fontWeight: 'bold',
        fontFamily: 'sans-serif',
      }}
    >
      TEST REMOTION BERHASIL
    </AbsoluteFill>
  );
};

