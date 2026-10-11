import { Composition, Series, registerRoot } from "remotion";
import { AfterglowMotionIntro } from "./components/AfterglowMotionIntro";
import { AfterglowUIAnim } from "./components/AfterglowUIAnim";
import { AfterglowExportComplete } from "./components/AfterglowExportComplete";
import "./styles/globals.css";

// Komponen Master untuk menggabungkan Intro -> Workspace -> Outro secara berurutan
export const AfterglowMaster = () => {
  return (
    <Series>
      {/* 1. Intro Animation (Durasi: 90 frame / 3 detik) */}
      <Series.Sequence durationInFrames={90}>
        <AfterglowMotionIntro />
      </Series.Sequence>

      {/* 2. UI Workspace & Editor (Durasi: 360 frame / 12 detik) */}
      <Series.Sequence durationInFrames={360}>
        <AfterglowUIAnim />
      </Series.Sequence>

      {/* 3. Export Complete / Outro (Durasi: 120 frame / 4 detik) */}
      <Series.Sequence durationInFrames={120}>
        <AfterglowExportComplete />
      </Series.Sequence>
    </Series>
  );
};

export const Root = () => {
  return (
    <>
      {/* Gabungan Full Video (Total: 570 frame / ~19 detik) */}
      <Composition
        id="AfterglowFullVideo"
        component={AfterglowMaster}
        durationInFrames={570}
        fps={30}
        width={1280}
        height={720}
      />

      {/* Komposisi Parsial (Satuan untuk preview/testing) */}
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

// WAJIB ADA agar Remotion Bundler / GitHub Actions membaca entry point
registerRoot(Root);
