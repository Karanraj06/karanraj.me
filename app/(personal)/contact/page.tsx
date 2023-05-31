import Link from 'next/link';
import { getHomePageData } from '@/sanity/lib/client';

import { ProfileForm } from '@/components/contact';

export default async function Page() {
  const homePageData = await getHomePageData();

  return (
    <div>
      <div className='text-4xl font-extrabold'>Karanraj Mehta</div>
      <div className='flex flex-wrap justify-end gap-6 py-10'>
        <Link href='/' className='text-gray-500 underline'>
          Home
        </Link>
        <Link href='/about' className='text-gray-500 underline'>
          About
        </Link>
        <Link href='/blog' className='text-gray-500 underline'>
          Blog
        </Link>
        <Link href='/contact'>Contact</Link>
      </div>
      <ProfileForm />
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
