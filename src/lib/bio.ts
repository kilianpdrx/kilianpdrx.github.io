import { z } from 'astro/zod';
import data from '../data/bio.json';

const isoDate = z.string().regex(/^\d{4}-\d{2}-\d{2}$/);

const entry = z.strictObject({
  company: z.string(),
  position: z.string(),
  location: z.string().optional(),
  website: z.string().url().optional(),
  startDate: isoDate,
  endDate: z.union([isoDate, z.literal('Present')]),
  summary: z.string().optional(),
  highlights: z.array(z.string()).optional(),
  logo: z.string().optional(),
});

const bioSchema = z.strictObject({
  basics: z.strictObject({
    name: z.string(),
    label: z.string(),
    picture: z.string(),
    email: z.string().email(),
    summary: z.string(),
    location: z.strictObject({ city: z.string(), countryCode: z.string() }),
    profiles: z.array(
      z.strictObject({
        // Doubles as the symbol id in public/img/icons.svg
        network: z.enum(['github', 'linkedin']),
        username: z.string(),
        url: z.string().url(),
        label: z.string(),
      }),
    ),
  }),
  interestsIntro: z.array(z.string()),
  interests: z.array(z.strictObject({ name: z.string() })),
  skills: z.array(z.strictObject({ name: z.string(), keywords: z.array(z.string()) })),
  education: z.array(
    z.strictObject({
      institution: z.string(),
      location: z.string(),
      area: z.string(),
      studyType: z.string(),
      website: z.string().url(),
      startDate: isoDate,
      endDate: z.union([isoDate, z.literal('Present')]),
      courses: z.array(z.string()),
      logo: z.string().optional(),
    }),
  ),
  work: z.array(entry),
  volunteer: z.array(entry),
});

export type Entry = z.infer<typeof entry>;
export const bio = bioSchema.parse(data);
