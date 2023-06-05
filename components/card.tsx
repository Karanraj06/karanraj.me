import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface CardProps {
  imgSrc: string;
  title: string;
  url?: string;
  desc: string;
  className?: string;
}

export default function Card({
  imgSrc,
  title,
  url,
  desc,
  className,
}: CardProps) {
  return (
    <div
      className={`my-10 grid place-items-center gap-10 p-5 sm:grid-cols-2 ${className}`}
    >
      <Avatar className='h-24 w-24'>
        <AvatarImage src={imgSrc} />
        <AvatarFallback>...</AvatarFallback>
      </Avatar>
      <div className='grid grid-rows-3'>
        <div className='text-center text-2xl font-medium'>{title}</div>
        <div className='text-center'>{desc}</div>
        {url && (
          <div className='flex items-center justify-center'>
            <Link
              href={`\about\\${url}`}
              className='flex items-center text-[#0070f3] hover:text-[#52a8ff]'
            >
              View Project
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
        )}
      </div>
    </div>
  );
}
