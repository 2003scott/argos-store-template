'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LuStore } from 'react-icons/lu';
import { motion } from 'motion/react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 space-y-6 py-20 lg:flex-row">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <img src="/images/not-found.svg" alt="Not Found" draggable="false" referrerPolicy="no-referrer" />
      </motion.div>

      <article className="flex flex-col items-center justify-center space-y-4 px-2 text-center">
        <motion.h1
          className="hidden text-9xl font-extrabold lg:block"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          404
        </motion.h1>

        <motion.div
          className="flex flex-col items-center justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
        >
          <h4 className="text-2xl font-extralight md:text-4xl">Ups!</h4>
          <p className="text-2xl font-extralight md:text-4xl">Página No Encontrada</p>
        </motion.div>

        <motion.p
          className="max-w-2xl text-center text-xl font-semibold text-[#B0B0B0] md:text-3xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
        >
          Esta página no existe o ha sido eliminada. Le sugerimos que vuelva a la página de inicio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: 'easeOut' }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button asChild>
            <Link href="/" className="flex items-center gap-2">
              <LuStore />
              Seguir comprando
            </Link>
          </Button>
        </motion.div>
      </article>
    </div>
  );
}
