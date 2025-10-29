'use client';
import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel as C, CarouselContent, CarouselItem, CarouselPrevious } from '@/components/ui/carousel';

export const Carousel = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };

  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <C opts={OPTIONS} plugins={[plugin.current]} className="w-full">
      <CarouselContent className="gap-2">
        <CarouselItem className="w-4/5 transition-opacity duration-700 ease-out [&.is-in-view]:opacity-20 [&.is-snapped]:opacity-100">
          <div className="h-[28em] rounded-xl bg-red-500 pl-2"></div>
        </CarouselItem>

        <CarouselItem className="w-4/5 transition-opacity duration-700 ease-out [&.is-in-view]:opacity-20 [&.is-snapped]:opacity-100">
          <div className="h-[28em] rounded-xl bg-blue-500"></div>
        </CarouselItem>

        <CarouselItem className="w-4/5 transition-opacity duration-700 ease-out [&.is-in-view]:opacity-20 [&.is-snapped]:opacity-100">
          <div className="h-[28em] rounded-xl bg-green-500"></div>
        </CarouselItem>

        <CarouselItem className="w-4/5 transition-opacity duration-700 ease-out [&.is-in-view]:opacity-20 [&.is-snapped]:opacity-100">
          <div className="h-[28em] rounded-xl bg-yellow-500"></div>
        </CarouselItem>
      </CarouselContent>

      <div className="flex justify-center py-2">
        <CarouselPrevious />
      </div>
    </C>
  );
};
