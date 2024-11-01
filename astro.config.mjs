import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import rehypePrettyCode from "rehype-pretty-code";

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://erikveld.com',
	integrations: [mdx(), sitemap()],
	markdown: {
		shikiConfig: {
			theme: 'catppuccin-latte',
		},
  },
});
