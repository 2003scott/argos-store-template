'use client';
import { useState } from 'react';
import { Badge } from '../ui/badge';

interface CardProductProps {
  image: string;
  hoverImage: string;
  title: string;
  price: string;
  originalPrice: string;
  badge?: string;
}

export const CardProduct = ({ image, hoverImage, title, price, originalPrice, badge }: CardProductProps) => {
  const [currentImage, setCurrentImage] = useState(image);

  return (
    <div className="flex flex-col gap-5">
      <div className="group relative w-full">
        <img
          src={currentImage}
          alt={title}
          onMouseEnter={() => setCurrentImage(hoverImage)}
          onMouseLeave={() => setCurrentImage(image)}
          className="h-[18.563rem] w-full cursor-pointer rounded-md object-cover transition-opacity duration-700 sm:h-[26.25rem] md:h-[31.813rem] lg:h-[44.063rem] xl:h-[32.5rem]"
        />
        {badge && (
          <Badge variant="secondary" className="absolute top-2 left-2 rounded-sm">
            {badge}
          </Badge>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-xs uppercase">{title}</h2>
        <div className="flex gap-2">
          <p className="text-sm">s/ {price}</p>
          <p className="text-sm text-gray-400 line-through">s/ {originalPrice}</p>
        </div>
      </div>
    </div>
  );
};
