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
        <div className='mt-20 text-xs'>{year} © Karanraj Mehta</div>
      </div>
      <Toaster />
    </>
  );
}
