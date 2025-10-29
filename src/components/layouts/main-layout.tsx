import { MarqueeHeader } from '../custom';
import { Header, Footer } from '../shared';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <MarqueeHeader />
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </main>
  );
};
