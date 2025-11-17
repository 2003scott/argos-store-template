import { DiscountsCard } from '@/presentation/discounts-card';
import { Hero } from '@/presentation/hero';
import { Products } from '@/presentation/products';
import { Promotion } from '@/presentation/promotion';
import { VideoBackground } from '@/presentation/video';

export default function Home() {
  return (
    <div className="space-y-10 lg:space-y-20">
      <Hero />
      <DiscountsCard />
      <Products />
      <Promotion />
      <VideoBackground />
    </div>
  );
}
