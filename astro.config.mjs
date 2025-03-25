import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://ekinkade21.github.io',
  integrations: [tailwind(), react()],
  output: 'static', // Ensures Astro generates a static site
  base: '/', // Set this to your repo name if using a project site (e.g., "/my-portfolio/")
  build: {
    outDir: 'docs', // Astro will generate the static site in `dist/`
  }
});
