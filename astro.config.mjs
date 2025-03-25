import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://ekinkade21.github.io/docs',
  integrations: [tailwind(), react()],
  output: 'static', // Ensures Astro generates a static site
  build: {
    outDir: 'dist', // Astro will generate the static site in `docs/`
  },
  base: '/docs' 
});
