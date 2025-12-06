import { Button } from '@/components/ui/button';
import { GrShop } from 'react-icons/gr';

export const Promotion = () => {
  return (
    <div className="container px-4 md:px-0">
      <h2 className="text-md text-center font-semibold uppercase">Promocion Especial</h2>
      <p className="text-center text-sm font-light uppercase">
        Aprovecha nuestra oferta exclusiva por tiempo limitado.
      </p>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        <img
          src="https://arenaroja.com/cdn/shop/files/IMG_7468_copia.jpg?v=1758560841&width=1024"
          alt="promotion-product"
          className="mt-4 w-full rounded-md"
        />
        <img
          src="https://arenaroja.com/cdn/shop/files/DABDB199-EB62-46CF-986E-B3DEDFA0E5E3.jpg?v=1758560841&width=1024"
          alt="promotion-product"
          className="mt-4 w-full rounded-md"
        />
        <img
          src="https://arenaroja.com/cdn/shop/files/viajering_331393a5-57e7-44be-aeb2-06b2efaf0286.jpg?v=1755360841&width=360"
          alt="product-promotion"
          className="mt-4 w-full rounded-md"
        />
        <img
          src="https://arenaroja.com/cdn/shop/files/Collaraceitunas.jpg?v=1758184713&width=360"
          alt="product-promotion"
          className="mt-4 w-full rounded-md"
        />
      </div>
      <div className="flex justify-center">
        <Button size={'lg'} className="mt-4">
          Comprar Promocion <GrShop />
        </Button>
      </div>
    </div>
  );
};
