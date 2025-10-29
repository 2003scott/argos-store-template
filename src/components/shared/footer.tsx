import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  const enlaces = [
    {
      nombre: 'Inicio',
      href: '#'
    },
    {
      nombre: 'Productos',
      href: '#'
    },
    {
      nombre: 'Ofertas',
      href: '#'
    },
    {
      nombre: 'Nuevos',
      href: '#'
    },
    {
      nombre: 'Contactanos',
      href: '#'
    }
  ];

  const legal = [
    'Accesibilidad',
    'Política de devoluciones',
    'Política de reembolsos',
    'Estadísticas de contratación-3'
  ];

  return (
    <footer>
      <div className="container space-y-8 px-4 py-10 sm:px-6 lg:space-y-12 lg:px-8 2xl:px-0">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Image src="/images/logo-argos.avif" alt="Arena Roja Logo" width={120} height={100} />

            <p className="mt-4 max-w-xs text-gray-500">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non cupiditate quae nam molestias.
            </p>

            <ul className="mt-8 flex gap-6">
              <li>
                <a href="#" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:opacity-75">
                  <FaFacebook className="size-6" />
                </a>
              </li>

              <li>
                <a href="#" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:opacity-75">
                  <FaYoutube className="size-6" />
                </a>
              </li>

              <li>
                <a href="#" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:opacity-75">
                  <FaInstagram className="size-6" />
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
            <div>
              <p className="font-medium text-gray-900">Services</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    {' '}
                    1on1 Coaching{' '}
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    {' '}
                    Company Review{' '}
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    Accounts Review
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    {' '}
                    HR Consulting{' '}
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    SEO Optimisation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Company</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    {' '}
                    About{' '}
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    {' '}
                    Meet the Team{' '}
                  </a>
                </li>

                <li>
                  <a href="#" className="text-gray-700 transition hover:opacity-75">
                    Accounts Review
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Enlaces útiles</p>

              <ul className="mt-6 space-y-4 text-sm">
                {enlaces.map((enlace, index) => (
                  <li key={index}>
                    <Link href={enlace.href} className="text-gray-700 transition hover:opacity-75">
                      {enlace.nombre}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-medium text-gray-900">Legal</p>

              <ul className="mt-6 space-y-4 text-sm">
                {legal.map((item, index) => (
                  <li key={index}>
                    <Link href="#" className="text-gray-700 transition hover:opacity-75">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p className="text-xs text-gray-500">© 2025. Argos Store. All rights reserved.</p>
      </div>
    </footer>
  );
};
