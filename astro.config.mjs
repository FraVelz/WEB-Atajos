// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://fravelz.github.io/WEB-Atajos/',
  base: '/WEB-Atajos/',

  vite: {
    plugins: [tailwindcss()]
  }
});