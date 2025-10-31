'use client';
import { usePathname } from 'next/navigation';
import { MarqueeHeader } from '../custom';
import { Header, Footer } from '../shared';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();

  console.log('Current path:', path);

  const voidLayout = ['/sign-in', '/sign-up'];

  if (voidLayout.includes(path)) {
    return <main>{children}</main>;
  }

  return (
    <main>
      <MarqueeHeader />
      <Header />
      <div>{children}</div>
      <Footer />
    </main>
  );
};
