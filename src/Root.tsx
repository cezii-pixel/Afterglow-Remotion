import { Composition } from 'remotion';
import { AfterglowMotionIntro } from './components/AfterglowMotionIntro';
import './styles/globals.css'; // Memuat styling global dari paket UI[span_3](start_span)[span_3](end_span)

export const Root = () => {
  return (
    <Composition
      id="AfterglowIntro"
      component={AfterglowMotionIntro}
      durationInFrames={150} // Durasi 5 detik pada 30 FPS
      fps={30}
      width={1920}
      height={1080}
      defaultProps={{
        title: "AFTERGLOW V11",
        subtitle: "High-Performance Creator & Rendering Studio",
      }}
    />
  );
};

registerRoot(Root);
