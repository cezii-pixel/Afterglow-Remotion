import { Composition, registerRoot } from 'remotion';
import { AfterglowMotionIntro } from './components/AfterglowMotionIntro';
import './styles/globals.css';

export const Root = () => {
  return (
    <Composition
      id="AfterglowIntro"
      component={AfterglowMotionIntro}
      durationInFrames={150}
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

