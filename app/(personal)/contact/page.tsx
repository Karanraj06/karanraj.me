import type { Metadata } from 'next';
import Link from 'next/link';

import { ProfileForm } from '@/components/contact';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch',
};

export default async function Page() {
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
      <p className='mb-5 text-2xl font-bold'>Get in touch</p>
      <p className='mb-10'>
        Feel free to reach me at{' '}
        <a
          href='mailto:karan@karanraj.me'
          target='_blank'
          className='bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent'
        >
          karan@karanraj.me
        </a>
        . You can also find me on{' '}
        <a
          href='https://github.com/Karanraj06'
          target='_blank'
          className='bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent'
        >
          GitHub
        </a>{' '}
        and{' '}
        <a
          href='https://www.linkedin.com/in/karanraj06/'
          target='_blank'
          className='bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text text-transparent'
        >
          LinkedIn
        </a>
        .
      </p>
      <ProfileForm />
    </div>
  );
}
