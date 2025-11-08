import Link from 'next/link';

export const DiscountsCard = () => {
  const images = [
    {
      src: 'https://arenaroja.com/cdn/shop/files/656D53CA-DBF4-4A4D-9484-0DF171783365.jpg?v=1762103080&width=6400',
      href: '#',
      text: 'Hasta un 20%'
    },
    {
      src: 'https://arenaroja.com/cdn/shop/files/IMG_1715.jpg?v=1762102795&width=640',
      href: '#',
      text: 'Hasta un 30%'
    },
    {
      src: 'https://arenaroja.com/cdn/shop/files/IMG_8075_3.jpg?v=1762103816&width=640',
      href: '#',
      text: 'Hasta un 50%'
    }
  ];

  return (
    <div className="container flex flex-col gap-6 px-4 pb-10 lg:px-0">
      <div>
        <p className="text-sm font-light uppercase">Ofertas especiales</p>
        <h3 className="text-md font-semibold uppercase">PEQUEÑOS PRECIOS, MISMO VALOR</h3>
      </div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
        {images.map((image, index) => (
          <Link key={index} href={image.href}>
            <div className="group relative h-[450px] w-full overflow-hidden rounded-sm">
              <img
                src={image.src}
                className="h-full w-full object-cover object-center transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/15" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h2 className="text-center text-2xl font-semibold text-white">{image.text}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
