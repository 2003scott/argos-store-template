'use client';
import { Button } from '@/components/ui/button';
import { Badge } from '../ui/badge';
import Link from 'next/link';
import { CardHero } from './card-hero';
import { motion } from 'framer-motion';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, 0.05, 0.01, 0.9] as const
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const
      }
    }
  };

  const underlineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: 'easeInOut' as const
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: 'easeInOut' as const
      }
    }
  };

  return (
    <section className="container flex flex-1 flex-col justify-between gap-12 overflow-hidden py-8 sm:gap-16 sm:py-16 lg:gap-24 lg:py-20">
      <motion.div
        className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 text-center sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="bg-muted flex items-center gap-2.5 rounded-full border px-3 py-2"
          variants={badgeVariants}
        >
          <Badge className="rounded-full">Lima - Peru</Badge>
          <span className="text-muted-foreground text-xs md:text-base">Nuestros clientes marcan la diferencia</span>
        </motion.div>

        <motion.h1
          className="text-3xl leading-[1.29167] font-bold text-balance sm:text-4xl lg:text-5xl"
          variants={itemVariants}
        >
          Somos ARENA ROJA
          <br />
          <span className="relative">
            Tienda
            <motion.svg
              width="223"
              height="12"
              viewBox="0 0 223 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-x-0 bottom-0 w-full origin-left translate-y-1/2 max-sm:hidden"
              variants={underlineVariants}
            >
              <path
                d="M1.11716 10.428C39.7835 4.97282 75.9074 2.70494 114.894 1.98894C143.706 1.45983 175.684 0.313587 204.212 3.31596C209.925 3.60546 215.144 4.59884 221.535 5.74551"
                stroke="url(#paint0_linear_10365_68643)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_10365_68643"
                  x1="18.8541"
                  y1="3.72033"
                  x2="42.6487"
                  y2="66.6308"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="var(--primary)" />
                  <stop offset="1" stopColor="var(--primary-foreground)" />
                </linearGradient>
              </defs>
            </motion.svg>
          </span>{' '}
          100% Peruana de Confianza!
        </motion.h1>

        <motion.p className="text-muted-foreground" variants={itemVariants}>
          Descubre tu estilo único con nuestra colección exclusiva de moda y accesorios.
          <br />
          Desde tendencias urbanas hasta piezas elegantes que transforman tu look.
        </motion.p>

        <motion.div className="flex items-center justify-center gap-5" variants={itemVariants}>
          <Button variant="outline" size="lg" asChild>
            <Link href="#">Contactanos</Link>
          </Button>
          <Button size="lg" asChild>
            <Link href="#">Comprar Ahora</Link>
          </Button>
        </motion.div>
      </motion.div>
      <motion.div variants={cardVariants} initial="hidden" animate="visible">
        <CardHero />
      </motion.div>
    </section>
  );
};
