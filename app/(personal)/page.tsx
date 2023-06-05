import Image from 'next/image';
import Link from 'next/link';
import { getHomePageData } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import PortableText from 'react-portable-text';

import { Button } from '@/components/ui/button';

export default async function Page() {
  const homePageData = await getHomePageData();

  return (
    <div>
      <div className='text-4xl font-extrabold'>Karanraj Mehta</div>
      <div className='flex flex-wrap justify-end gap-6 py-10'>
        <Link href='/'>Home</Link>
        <Link href='/about' className='text-gray-500 underline'>
          About
        </Link>
        <Link href='/blog' className='text-gray-500 underline'>
          Blog
        </Link>
        <Link href='/contact' className='text-gray-500 underline'>
          Contact
        </Link>
      </div>
      <PortableText
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECTID}
        content={homePageData.content}
        className='mb-8'
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
            <a
              href={href}
              target='_blank'
              className='text-[#0070f3] hover:text-[#52a8ff]'
            >
              {children}
            </a>
          ),
        }}
      />
      <div className='flex flex-wrap items-center justify-start gap-4'>
        <div>
          <a href='https://www.linkedin.com/in/karanraj06/' target='_blank'>
            <Button size='lg'>View LinkedIn</Button>
          </a>
        </div>
        <div>
          <a href='https://github.com/Karanraj06' target='_blank'>
            <Button variant='outline' size='lg'>
              View GitHub
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
