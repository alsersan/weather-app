import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],
	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					$models: resolve('./src/models'),
					$services: resolve('./src/services'),
					$assets: resolve('./src/assets'),
					$components: resolve('./src/components'),
					$store: resolve('./src/store'),
					$utils: resolve('./src/utils')
				}
			}
		}
	}
};

export default config;
