import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		published_at: z.coerce.date(),
		updated_at: z.coerce.date().optional(),
	}),
});

export const collections = { blog };
