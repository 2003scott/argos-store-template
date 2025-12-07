'use client';
import { usePathname } from 'next/navigation';
import { Header, Footer } from '../shared';
import { MarqueeHeader } from '../custom/marquee-header';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();

  console.log('Current path:', path);

  const voidLayout = ['/auth/sign-in', '/auth/sign-up'];

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
