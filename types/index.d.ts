import type { PortableTextBlock } from '@portabletext/types';
import type { Image } from 'sanity';

export interface Home {
  _id: string;
  _updatedAt: string;
  content: PortableTextBlock[];
  _createdAt: string;
  _rev: string;
  _type: 'home';
}

export interface Education {
  _type: 'education';
  description: string;
  _id: string;
  title: string;
  _updatedAt: string;
  image: Image;
  _createdAt: string;
  _rev: string;
}

export interface Project {
  metadescription: string;
  description: PortableTextBlock[];
  slug: string;
  href: string;
  title: string;
  image: Image;
}

export interface Skill {
  alt: string;
  _id: string;
  href: string;
  _updatedAt: string;
  image: Image;
  _createdAt: string;
  _rev: string;
  _type: 'skill';
}

export interface Blog {
  title: string;
  metadescription: string;
  slug: string;
  publishedAt: string;
  description: PortableTextBlock[];
  mainImage?: Image;
}
