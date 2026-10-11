import { Composition, Series, registerRoot } from "remotion";
import { AfterglowMotionIntro } from "./AfterglowMotionIntro";
import { AfterglowUIAnim } from "./AfterglowUIAnim";
import { AfterglowExportComplete } from "./AfterglowExportComplete";
import "./styles/globals.css";

export const AfterglowMaster = () => {
  return (
    <Series>
      {/* 1. Intro Animation */}
      <Series.Sequence durationInFrames={90}>
        <AfterglowMotionIntro />
      </Series.Sequence>

      {/* 2. UI Workspace & Editor */}
      <Series.Sequence durationInFrames={360}>
        <AfterglowUIAnim />
      </Series.Sequence>

      {/* 3. Export Complete / Outro */}
      <Series.Sequence durationInFrames={120}>
        <AfterglowExportComplete />
      </Series.Sequence>
    </Series>
  );
};

export const Root = () => {
  return (
    <>
      {/* Gabungan Full Video */}
      <Composition
        id="AfterglowFullVideo"
        component={AfterglowMaster}
        durationInFrames={570}
        fps={30}
        width={1280}
        height={720}
      />

      {/* Komposisi Parsial (Satuan) */}
      <Composition
        id="AfterglowIntro"
        component={AfterglowMotionIntro}
        durationInFrames={90}
        fps={30}
        width={1280}
        height={720}
      />
      
      <Composition
        id="AfterglowWorkspace"
        component={AfterglowUIAnim}
        durationInFrames={360}
        fps={30}
        width={1280}
        height={720}
      />
      
      <Composition
        id="AfterglowOutro"
        component={AfterglowExportComplete}
        durationInFrames={120}
        fps={30}
        width={1280}
        height={720}
      />
    </>
  );
};

registerRoot(Root);
