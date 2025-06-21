import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import { libInjectCss } from 'vite-plugin-lib-inject-css';
import dts from 'vite-plugin-dts';

const entry = './src/index.ts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({
      include: ['src'],
      outDir: 'dist',
      exclude: ['src/**/*.stories.tsx', 'src/**/*.test.tsx'],
      tsconfigPath: './tsconfig.app.json',
    }),
  ],
  build: {
    lib: {
      entry,
      name: 'UIKit',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        preserveModules: true,
        preserveModulesRoot: 'src',
        entryFileNames: '[name].js',
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    cssCodeSplit: false,
    sourcemap: true,
    outDir: 'dist',
    emptyOutDir: true,
    minify: true,
    target: 'esnext',
  },
});
