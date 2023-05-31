import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
    },
    sitemap: 'https://karanraj.vercel.app/sitemap.xml',
    host: 'https://karanraj.vercel.app',
  };
}
