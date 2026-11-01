import { getCollection } from 'astro:content';

export const getPublishedProjects = () => getCollection('projects', ({ data }) => data.published);

export const byNewest = <T extends { data: { start_date: string } }>(a: T, b: T) =>
  b.data.start_date.localeCompare(a.data.start_date);

export const byTitle = <T extends { data: { title: string } }>(a: T, b: T) =>
  a.data.title < b.data.title ? -1 : a.data.title > b.data.title ? 1 : 0;

export const projectPath = (id: string) => `/projects/${id}.html`;
