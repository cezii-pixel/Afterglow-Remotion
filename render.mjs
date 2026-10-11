import { bundle } from '@remotion/bundler';
import { renderMedia, selectComposition } from '@remotion/renderer';
import path from 'path';
import fs from 'fs';

const start = async () => {
  // Pastikan folder out/ ada agar FFmpeg tidak gagal menyimpan file
  const outDir = path.resolve('./out');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

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
    pixelFormat: 'yuv420p',
    outputLocation: path.resolve('./out/video.mp4'),
    overwrite: true,
  });

  console.log("✨ Render selesai dengan sukses!");
};

start().catch((err) => {
  console.error("❌ Terjadi error saat render:", err);
  process.exit(1);
});
