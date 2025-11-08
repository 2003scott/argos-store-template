'use client';

import { useState } from 'react';

interface CardProductProps {
  image: string;
  hoverImage: string;
  title: string;
  price: string;
  originalPrice: string;
}

export const CardProduct = ({ image, hoverImage, title, price, originalPrice }: CardProductProps) => {
  const [currentImage, setCurrentImage] = useState(image);

  return (
    <div className="flex flex-col gap-5">
      <img
        src={currentImage}
        alt={title}
        onMouseEnter={() => setCurrentImage(hoverImage)}
        onMouseLeave={() => setCurrentImage(image)}
        className="cursor-pointer rounded-md transition-opacity duration-700"
      />
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
