import type { PortableTextBlock } from '@portabletext/types';
import type { Image } from 'sanity';

export interface Home {
  content: PortableTextBlock[];
}

export interface Education {
  description: string;
  image: Image;
  title: string;
}

export interface Project {
  description: PortableTextBlock[];
  href: string;
  image: Image;
  metadescription: string;
  slug: string;
  title: string;
}

export interface Skill {
  alt: string;
  href: string;
  image: Image;
}

export interface Blog {
  alt: string;
  description: PortableTextBlock[];
  mainImage?: Image;
  metadescription: string;
  publishedAt: string;
  slug: string;
  title: string;
}
