import { bundle } from '@remotion/bundler';
import { renderMedia, selectComposition } from '@remotion/renderer';
import path from 'path';
import fs from 'fs';

const start = async () => {
  const outDir = path.resolve('./out');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  console.log("📦 Sedang melakukan bundling proyek...");
  const bundleLocation = await bundle({
    entryPoint: path.resolve('./src/Root.tsx'),
    publicDir: path.resolve('./public'),
  });

  console.log("🎬 Memilih komposisi 'AfterglowIntro'...");
  const composition = await selectComposition({
    serveUrl: bundleLocation,
    id: 'AfterglowIntro',
  });

  console.log("📊 DETAIL KOMPOSISI:", {
    id: composition.id,
    width: composition.width,
    height: composition.height,
    fps: composition.fps,
    durationInFrames: composition.durationInFrames,
  });

  if (composition.durationInFrames <= 0 || composition.width <= 0) {
    throw new Error("❌ Error: Komposisi memiliki ukuran atau durasi 0!");
  }

  console.log("🎥 Memulai render media dengan log verbose...");
  await renderMedia({
    composition,
    serveUrl: bundleLocation,
    codec: 'h264',
    pixelFormat: 'yuv420p',
    outputLocation: path.resolve('./out/video.mp4'),
    overwrite: true,
    logLevel: 'verbose',
    chromiumOptions: {
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-gpu',
      ],
    },
  });

  console.log("✨ Render selesai!");
};

start().catch((err) => {
  console.error("❌ Render Gagal:", err);
  process.exit(1);
});
