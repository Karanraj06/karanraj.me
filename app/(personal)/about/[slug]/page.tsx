import Image from 'next/image';
import Link from 'next/link';
import { getProjectBySlug, getProjectData } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import PortableText from 'react-portable-text';

export async function generateStaticParams() {
  const projects = await getProjectData();

  return projects.map((project: any) => ({
    slug: project.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const project = await getProjectBySlug(params.slug);

  return (
    <div>
      <div className='text-4xl font-extrabold'>{project.title}</div>
      <div className='my-10'>
        <Link
          href='/about'
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
      <div className='my-10 flex gap-10'>
        <div className='grow text-sm text-slate-400'>
          {project.metadescription}
        </div>
        <div className='shrink-0'>
          <a
            href={project.href}
            className='text-[#0070f3] hover:text-[#52a8ff]'
          >
            <svg
              data-testid='geist-icon'
              fill='none'
              height={24}
              shapeRendering='geometricPrecision'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.5'
              viewBox='0 0 24 24'
              width={24}
            >
              <path d='M16 18l6-6-6-6' />
              <path d='M8 6l-6 6 6 6' />
            </svg>
          </a>
        </div>
      </div>
      <PortableText
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECTID}
        content={project.description}
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
