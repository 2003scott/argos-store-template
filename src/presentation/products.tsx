import { CardProduct } from '@/components/custom/card-product';

export const Products = () => {
  const productsList = [
    {
      image:
        'https://arenaroja.com/cdn/shop/files/10_3ca8697d-9d34-4809-aa29-b19dd02d9f88_copia.jpg?v=1747563300&width=450',
      hoverImage:
        'https://arenaroja.com/cdn/shop/files/w2_copia_0ad5b7d3-b055-45d6-a707-d94ce043bdf4.jpg?v=1747419353&width=450',
      title: 'Belon',
      price: '701.00',
      originalPrice: '877.00'
    },
    {
      image: 'https://arenaroja.com/cdn/shop/files/after_sex.jpg?v=1747563281&width=450',
      hoverImage: 'https://arenaroja.com/cdn/shop/files/THE_DATE_ARENAROJA27197.png?v=1747419802&width=450',
      title: 'AFTER SEX',
      price: ' 124.00',
      originalPrice: '180.00'
    },
    {
      image:
        'https://arenaroja.com/cdn/shop/files/viajering_331393a5-57e7-44be-aeb2-06b2efaf0286.jpg?v=1755360841&width=360',
      hoverImage:
        'https://arenaroja.com/cdn/shop/files/8EDEB3E9-53B3-4B6B-A327-2FD545E7B6BB.jpg?v=1758563030&width=540',
      title: 'EL OLEAJE RING',
      price: '156.00',
      originalPrice: '106.00'
    },
    {
      image: 'https://arenaroja.com/cdn/shop/files/Castanea.jpg?v=1747565486&width=450',
      hoverImage: 'https://arenaroja.com/cdn/shop/files/DEV_6085.jpg?v=1747435311&width=450',
      title: 'CASTANEA',
      price: '144.00',
      originalPrice: '180.00'
    },
    {
      image:
        'https://arenaroja.com/cdn/shop/files/7_copia_923d17d1-8743-423a-a7ce-aed3f8315600.jpg?v=1747566231&width=360',
      hoverImage:
        'https://arenaroja.com/cdn/shop/products/image_1c3db8f7-80f8-439b-85d6-c568e7c91403.jpg?v=1747438809&width=540',
      title: 'Belon',
      price: '701.00',
      originalPrice: '877.00'
    },
    {
      image: 'https://arenaroja.com/cdn/shop/files/Anillolazo.jpg?v=1747562372&width=360',
      hoverImage:
        'https://arenaroja.com/cdn/shop/files/62C4430C-DC88-4B05-A085-3193DD1EE1E5.jpg?v=1747402690&width=360',
      title: 'Belon',
      price: '701.00',
      originalPrice: '877.00',
      badge: 'Nuevo'
    },
    {
      image: 'https://arenaroja.com/cdn/shop/files/Brazalete_4_perlas_copia3.jpg?v=1758560841&width=360',
      hoverImage: 'https://arenaroja.com/cdn/shop/files/IMG_0076.heic?v=1758560841&width=360',
      title: 'Belon',
      price: '701.00',
      originalPrice: '877.00'
    },
    {
      image: 'https://arenaroja.com/cdn/shop/files/Pendientesconcha.jpg?v=1755360895&width=360',
      hoverImage: 'https://arenaroja.com/cdn/shop/files/IMG_6287.jpg?v=1758562798&width=360',
      title: 'Belon',
      price: '701.00',
      originalPrice: '877.00'
    }
  ];

  return (
    <div className="container flex flex-col gap-6 px-4 pb-10 2xl:px-0">
      <div>
        <p className="text-sm font-light uppercase">PIEZAS de las que todos se han enamorado</p>
        <h3 className="text-md font-semibold uppercase">LO MÁS AMADO A LA VENTA. UNIDADES LIMITADAS.</h3>
      </div>
      <div className="grid grid-cols-2 items-center justify-center gap-2 lg:gap-4 xl:grid-cols-4">
        {productsList.map((product, index) => (
          <CardProduct key={index} {...product} />
        ))}
      </div>
    </div>
  );
};
