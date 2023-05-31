import Image from 'next/image';
import Link from 'next/link';
import { getHomePageData } from '@/sanity/lib/client';
import { urlForImage } from '@/sanity/lib/image';
import PortableText from 'react-portable-text';

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
      <div className='grid gap-20'>
        <div className='flex justify-start gap-2'>
          <div>GitHub</div>
          <div>
            <a
              href='https://github.com/Karanraj06'
              className='text-[#0070f3] underline hover:text-[#52a8ff]'
            >
              @Karanraj06
            </a>
          </div>
        </div>
        <div className='flex justify-start gap-2'>
          <div>Gmail</div>
          <div>
            <a
              href='mailto:karanrajmehta06@gmail.com'
              className='text-[#0070f3] underline hover:text-[#52a8ff]'
            >
              karanrajmehta06@gmail.com
            </a>
          </div>
        </div>
        <div className='flex justify-start gap-2'>
          <div>LinkedIn</div>
          <div>
            <a
              href='https://www.linkedin.com/in/karanraj06/'
              className='text-[#0070f3] underline hover:text-[#52a8ff]'
            >
              /karanraj06
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
