import { getBlogData, getProjectData } from '@/sanity/lib/client';

export default async function sitemap() {
  const [projects, blogs] = await Promise.all([
    getProjectData(),
    getBlogData(),
  ]);

  const projectRoutes = projects.map((project: any) => ({
    url: `${process.env.NEXT_PUBLIC_WEBSITE}/about/${project.slug}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogs.map((blog: any) => ({
    url: `${process.env.NEXT_PUBLIC_WEBSITE}/blog/${blog.slug}`,
    lastModified: new Date(),
  }));

  const routes = ['', '/about', '/blog', '/contact'].map(route => ({
    url: `${process.env.NEXT_PUBLIC_WEBSITE}${route}`,
    lastModified: new Date(),
  }));

  return [...projectRoutes, ...blogRoutes, ...routes];
}
