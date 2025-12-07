import { Contact } from '@/presentation/contact';
import { DiscountsCard } from '@/presentation/discounts-card';
import { Faq } from '@/presentation/faq';
import { Hero } from '@/presentation/hero';
import { Products } from '@/presentation/products';
import { Promotion } from '@/presentation/promotion';
import { VideoBackground } from '@/presentation/video';
import { Wsaap } from '@/presentation/wsaap';

export default function Home() {
  return (
    <div className="space-y-10 lg:space-y-20">
      <Hero />
      <DiscountsCard />
      <Products />
      <Promotion />
      <Faq />
      <VideoBackground />
      <Contact />
      <Wsaap />
    </div>
  );
}
