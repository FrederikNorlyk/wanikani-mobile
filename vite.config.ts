import adapter from '@sveltejs/adapter-vercel';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: { experimental: { async: true } },
			csp: {
				directives: {
					'script-src': ['self'],
					'worker-src': ['self', 'blob:'],
					'frame-ancestors': ['self']
				}
			},
			experimental: { remoteFunctions: true },
			adapter: adapter()
		})
	]
});
