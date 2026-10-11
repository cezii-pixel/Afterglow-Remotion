import { Composition, registerRoot } from 'remotion';
import { AfterglowMotionIntro } from './components/AfterglowMotionIntro';

export const Root = () => {
  return (
    <Composition
      id="AfterglowIntro"
      component={AfterglowMotionIntro}
      durationInFrames={150}
      fps={30}
      width={1920}
      height={1080}
    />
  );
};

registerRoot(Root);
