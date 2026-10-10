import { bundle } from '@remotion/bundler';
import { renderMedia, selectComposition } from '@remotion/renderer';
import path from 'path';

const start = async () => {
  console.log("📦 Sedang melakukan bundling proyek...");
  const bundleLocation = await bundle({
    entryPoint: path.resolve('./src/Root.tsx'),
    publicDir: path.resolve('./public'),
  });

  console.log("🎬 Memilih komposisi video...");
  const composition = await selectComposition({
    serveUrl: bundleLocation,
    id: 'AfterglowIntro',
  });

  console.log("🎥 Memulai proses rendering video...");
  await renderMedia({
    composition,
    serveUrl: bundleLocation,
    codec: 'h264',
    outputLocation: path.resolve('./out/video.mp4'),
  });

  console.log("✨ Render selesai dengan sukses!");
};

start().catch((err) => {
  console.error("❌ Terjadi error saat render:", err);
  process.exit(1);
});
