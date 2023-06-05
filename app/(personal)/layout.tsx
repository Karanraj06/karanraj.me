import { Toaster } from '@/components/ui/toaster';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const year = new Date().getFullYear();

  return (
    <>
      <div className='mx-auto max-w-2xl px-6 py-20'>
        {children}
        <hr className='my-20' />
        <div className='my-20 flex items-center justify-start gap-1 text-sm'>
          <p>Built with Next.js and Sanity.io</p>
          <svg
            className='text-black'
            data-testid='geist-icon'
            height={18}
            shapeRendering='geometricPrecision'
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1.5'
            viewBox='0 0 24 24'
            width={24}
          >
            <path
              d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'
              fill='var(--geist-fill)'
            />
          </svg>
        </div>
        <div className='my-20 text-sm'>© {year} Karanraj Mehta</div>
      </div>
      <Toaster />
    </>
  );
}
