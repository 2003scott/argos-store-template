import { DiscountsCard } from '@/components/presentation/discounts-card';
import { Hero } from '@/components/presentation/hero';
import { Products } from '@/components/presentation/products';
import { VideoBackground } from '@/components/presentation/video';

export default function Home() {
  return (
    <>
      <Hero />
      <DiscountsCard />
      <Products />
      <VideoBackground />
    </>
  );
}
