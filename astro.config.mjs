import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    redirects: {
        "/work/[...slug]": "/projets/[...slug]"
    }
});
