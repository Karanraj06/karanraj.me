import Link from 'next/link';
import { getBlogData } from '@/sanity/lib/client';

export default async function Page() {
  const blogData = await getBlogData();

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
        <Link href='/blog'>Blog</Link>
        <Link href='/contact' className='text-gray-500 underline'>
          Contact
        </Link>
      </div>
      {/* Blogs Start */}
      {blogData.map((blog: any) => (
        <div className='mb-10' key={blog.slug}>
          <p className='mb-5 text-2xl font-bold'>{blog.title}</p>
          <div className='my-5 flex gap-10'>
            <div className='grow'>{blog.metadescription}</div>
            <div className='shrink-0'>
              <Link
                href={`/blog/${blog.slug}`}
                className='flex items-center text-[#0070f3] hover:text-[#52a8ff]'
              >
                Read
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
                  width={18}
                >
                  <path d='M5 12h14' />
                  <path d='M12 5l7 7-7 7' />
                </svg>
              </Link>
            </div>
          </div>
          <div className='text-sm text-slate-400'>
            {new Date(blog.publishedAt).toLocaleDateString('en-US', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </div>
        </div>
      ))}
      {/* Blogs End */}
      <hr className='my-20' />
    </div>
  );
}
