import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const yearMonth = z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/);

const projects = defineCollection({
  loader: glob({
    base: './src/content/projects',
    pattern: '*.md',
    // Keep the filename's case: public URLs such as /projects/BOMR.html depend on it
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.strictObject({
    title: z.string(),
    image: z.string(),
    start_date: yearMonth,
    end_date: z.union([yearMonth, z.literal('Ongoing')]).optional(),
    // Required, so a forgotten flag fails the build instead of publishing a project
    published: z.boolean(),
    labels: z.array(z.string()).default([]),
    summary: z.string().optional(),
    period: z.string().optional(),
    lab: z.string().optional(),
  }),
});

export const collections = { projects };
