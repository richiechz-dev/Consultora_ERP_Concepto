import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({

  site: 'https://concepto.github.io',
  experimental: {
    viewTransitions: true,
  },
  integrations: [tailwind(), compress()],
  
});
