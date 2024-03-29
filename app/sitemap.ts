import { getBlogData, getProjectData } from '@/sanity/lib/client';

export default async function sitemap() {
  const [projects, blogs] = await Promise.all([
    getProjectData(),
    getBlogData(),
  ]);

  const projectRoutes = projects.map((project: any) => ({
    url: `https://www.karanraj.me/about/${project.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogs.map((blog: any) => ({
    url: `https://www.karanraj.me/blog/${blog.slug}`,
    lastModified: new Date(),
  }));

  const routes = ['', '/about', '/blog', '/contact'].map((route) => ({
    url: `https://www.karanraj.me${route}`,
    lastModified: new Date(),
  }));

  return [...projectRoutes, ...blogRoutes, ...routes];
}
