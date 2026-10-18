import { sentrySvelteKit } from '@sentry/sveltekit/vite';
import adapter from '@sveltejs/adapter-vercel';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
	const { SENTRY_ORG, SENTRY_PROJECT } = loadEnv(
		mode,
		process.cwd(),
		'SENTRY_'
	);

	return {
		plugins: [
			sentrySvelteKit({
				org: SENTRY_ORG,
				project: SENTRY_PROJECT
			}),
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
	};
});
