import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    author: z.string().default('Tsu'),
    lang: z.enum(['en', 'zh']).default('en'),
    translationId: z.string(), // key to link EN and ZH articles
    heroImage: z.string().optional(),
  }),
});

export const collections = { blog };
