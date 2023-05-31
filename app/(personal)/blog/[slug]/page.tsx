import Image from 'next/image';
import Link from 'next/link';
import { getBlogBySlug, getBlogData } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import PortableText from 'react-portable-text';

export async function generateStaticParams() {
  const blogs = await getBlogData();

  return blogs.map((blog: any) => ({
    slug: blog.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const blog = await getBlogBySlug(params.slug);

  return (
    <div>
      <div className='text-4xl font-extrabold'>{blog.title}</div>
      <div className='py-10'>
        <Link
          href='/blog'
          className='flex items-center text-[#0070f3] hover:text-[#52a8ff]'
        >
          <svg
            data-testid='geist-icon'
            fill='none'
            height={18}
            shapeRendering='geometricPrecision'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.5'
            viewBox='0 0 24 24'
            width={24}
          >
            <path d='M19 12H5' />
            <path d='M12 19l-7-7 7-7' />
          </svg>
          Go back
        </Link>
      </div>
      <div className='text-sm text-slate-400'>
        {new Date(blog.publishedAt).toLocaleDateString('en-US', {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        })}
      </div>
      <div className='my-10'>{blog.metadescription}</div>
      {blog.mainImage && (
        <div className='my-10 flex justify-center'>
          <Image
            src={urlForImage(blog.mainImage).url()}
            alt={blog.mainImage.alt}
            className='rounded-md object-cover'
            width={400}
            height={300}
          />
        </div>
      )}
      <PortableText
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECTID}
        content={blog.description}
        serializers={{
          h1: (props: any) => (
            <h1 className='my-5 text-2xl font-bold' {...props}></h1>
          ),
          h2: (props: any) => (
            <h1 className='my-5 text-xl font-bold' {...props}></h1>
          ),
          h6: () => <div className='h-10'></div>,
          li: ({ children }: { children: React.ReactNode }) => (
            <li className='ml-4 list-disc'>{children}</li>
          ),
          image: (value: any) => (
            <div className='my-10 flex justify-center'>
              <Image
                src={urlForImage(value).url()}
                alt={value.alt}
                className='rounded-md object-cover'
                width={400}
                height={300}
              />
            </div>
          ),
          link: ({
            children,
            href,
          }: {
            children: React.ReactNode;
            href: string;
          }) => (
            <a href={href} className='text-[#0070f3] hover:text-[#52a8ff]'>
              {children}
            </a>
          ),
        }}
      />
      <hr className='my-20' />
    </div>
  );
}
