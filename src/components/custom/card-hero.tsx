import { Marquee } from '@/components/ui/marquee';

const reviews = [
  {
    img: 'https://arenaroja.com/cdn/shop/files/C927C8B0-01AF-42D8-8649-058F3A0EBB21.jpg?v=1758560841&width=1024',
    alt: 'Client Logo'
  },
  {
    img: 'https://arenaroja.com/cdn/shop/files/IMG_7468_copia.jpg?v=1758560841&width=1024',
    alt: 'Client Logo'
  },
  {
    img: 'https://arenaroja.com/cdn/shop/files/IMG_0076.heic?v=1758560841&width=1024',
    alt: 'Client Logo'
  },
  {
    img: 'https://arenaroja.com/cdn/shop/files/DABDB199-EB62-46CF-986E-B3DEDFA0E5E3.jpg?v=1758560841&width=1024',
    alt: 'Client Logo'
  },
  {
    img: 'https://arenaroja.com/cdn/shop/files/D6AEC87A-0055-4607-B1FC-EDB582F33B4B_copia.jpg?v=1746989807&width=840',
    alt: 'Client Logo'
  },
  {
    img: 'https://arenaroja.com/cdn/shop/files/DEV_6032.jpg?v=1747435435&width=1024',
    alt: 'Client Logo'
  }
];

const ReviewCard = ({ img, alt, index }: { img: string; alt: string; index: number }) => {
  const height = index % 2 === 0 ? 'h-[280px]' : 'h-[200px]';

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
