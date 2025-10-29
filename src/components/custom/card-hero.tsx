import { Marquee } from '@/components/ui/marquee';

const reviews = [
  {
    img: 'https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?q=80&w=880&auto=format&fit=crop',
    alt: 'Client Logo'
  },
  {
    img: 'https://images.unsplash.com/photo-1539552678512-4005a33c64db?q=80&w=880&auto=format&fit=crop',
    alt: 'Client Logo'
  },
  {
    img: 'https://images.unsplash.com/photo-1709983966747-58c311fa6976?q=80&w=880&auto=format&fit=crop',
    alt: 'Client Logo'
  },
  {
    img: 'https://images.unsplash.com/photo-1683722319473-f851deb3fdf2?q=80&w=880&auto=format&fit=crop',
    alt: 'Client Logo'
  },
  {
    img: 'https://images.unsplash.com/photo-1471899236350-e3016bf1e69e?q=80&w=880&auto=format&fit=crop',
    alt: 'Client Logo'
  },
  {
    img: 'https://images.unsplash.com/photo-1643994542584-1247b5266429?q=80&w=869&auto=format&fit=crop',
    alt: 'Client Logo'
  }
];

const ReviewCard = ({ img, alt, index }: { img: string; alt: string; index: number }) => {
  const height = index % 2 === 0 ? 'h-[300px]' : 'h-[180px]';

  return (
    <div className="flex items-end">
      <img
        className={`rounded-t-md rounded-b-sm object-cover ${height} w-[280px]`}
        width="auto"
        height="auto"
        alt={alt}
        src={img}
      />
    </div>
  );
};

export const CardHero = () => {
  return (
    <div className="relative">
      <Marquee pauseOnHover className="[--duration:50s]">
        {reviews.map((review, index) => (
          <ReviewCard key={index} index={index} {...review} />
        ))}
      </Marquee>
      <div className="dark:from-background pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r from-white"></div>
      <div className="dark:from-background pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l from-white"></div>
    </div>
  );
};
