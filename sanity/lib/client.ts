import { createClient, groq } from 'next-sanity';

import 'server-only';

import { apiVersion, dataset, projectId, useCdn } from '../env';

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
});

export async function getHomePageData() {
  return await client.fetch(groq`*[_type == "home"][0]`);
}

export async function getEducationData() {
  return await client.fetch(groq`*[_type == "education"][0]`);
}

export async function getProjectData() {
  return await client.fetch(groq`*[_type == "project"]{
    title,
    image,
    metadescription,
    description,
    'slug': slug.current,
    href
  }`);
}

export async function getSkillData() {
  return await client.fetch(groq`*[_type == "skill"]`);
}

export async function getProjectBySlug(slug: string) {
  return await client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      title,
      image,
      metadescription,
      description,
      'slug': slug.current,
      href
    }`,
    { slug }
  );
}

export async function getBlogData() {
  return await client.fetch(groq`*[_type == 'blog']{
    title,
    metadescription,
    'slug': slug.current,
    publishedAt,
    description,
    mainImage
  }`);
}

export async function getBlogBySlug(slug: string) {
  return await client.fetch(
    groq`*[_type == 'blog' && slug.current == $slug][0]{
      title,
      metadescription,
      'slug': slug.current,
      publishedAt,
      description,
      mainImage
    }`,
    { slug }
  );
}
