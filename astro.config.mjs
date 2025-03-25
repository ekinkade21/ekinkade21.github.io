import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://ekinkade21.github.io',
  integrations: [tailwind(), react()],
  output: 'static', // Ensures Astro generates a static site
  build: {
    outDir: 'docs', // Astro will generate the static site in `docs/`
  },
  base: '/docs' 
});
