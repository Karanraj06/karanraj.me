import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface CardProps {
  imgSrc: string;
  title: string;
  url?: string;
  desc: string;
}

export default function Card({ imgSrc, title, url, desc }: CardProps) {
  return (
    <div className='my-10 grid place-items-center gap-10 p-5 sm:grid-cols-2'>
      <Avatar className='h-24 w-24'>
        <AvatarImage src={imgSrc} />
        <AvatarFallback>...</AvatarFallback>
      </Avatar>
      <div className='grid place-items-center gap-10'>
        <div className='flex items-center gap-2'>
          <div className='text-center text-2xl font-medium'>{title}</div>
          {url && (
            <div>
              <Link
                href={`\about\\${url}`}
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
                  <path d='M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71' />
                  <path d='M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71' />
                </svg>
              </Link>
            </div>
          )}
        </div>
        <div className='text-center'>{desc}</div>
      </div>
    </div>
  );
}
