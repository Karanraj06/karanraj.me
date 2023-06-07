import { Blog, Education, Home, Project, Skill } from '@/types';
import { createClient, groq } from 'next-sanity';

import 'server-only';

import { apiVersion, dataset, projectId, useCdn } from '../env';

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

export async function getHomePageData(): Promise<Home> {
  return await client.fetch(groq`*[_type == "home"][0]`);
}

export async function getEducationData(): Promise<Education> {
  return await client.fetch(groq`*[_type == "education"][0]`);
}

export async function getProjectData(): Promise<Project[]> {
  return await client.fetch(groq`*[_type == "project"]{
    description,
    href,
    image,
    metadescription,
    'slug': slug.current,
    title
  }`);
}

export async function getSkillData(): Promise<Skill[]> {
  return await client.fetch(groq`*[_type == "skill"]`);
}

export async function getProjectBySlug(slug: string): Promise<Project> {
  return await client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      description,
      href,
      image,
      metadescription,
      'slug': slug.current,
      title
    }`,
    { slug }
  );
}

export async function getBlogData(): Promise<Blog[]> {
  return await client.fetch(groq`*[_type == 'blog']{
    alt,
    description,
    mainImage,
    metadescription,
    publishedAt,
    'slug': slug.current,
    title
  }`);
}

export async function getBlogBySlug(slug: string): Promise<Blog> {
  return await client.fetch(
    groq`*[_type == 'blog' && slug.current == $slug][0]{
      alt,
      description,
      mainImage,
      metadescription,
      publishedAt,
      'slug': slug.current,
      title
    }`,
    { slug }
  );
}
