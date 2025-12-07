'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { IoMenu } from 'react-icons/io5';
import { IoMdClose } from 'react-icons/io';
import { Button } from '../ui/button';
import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      label: 'Inicio',
      href: '/'
    },
    {
      label: 'Productos',
      href: '/productos'
    },
    {
      label: 'Ofertas',
      href: '/ofertas'
    },
    {
      label: 'Nuevos',
      href: '/nuevos'
    },
    {
      label: 'Contactanos',
      href: '/contactanos'
    }
  ];

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

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: 'auto'
    },
    exit: {
      opacity: 0,
      height: 0
    }
  };

  const MotionLink = motion.create(Link);

  return (
    <header className="bg-background/80 border-border sticky top-0 z-50 w-full border-b backdrop-blur-md">
      {/* Desktop Navigation */}
      <nav className="container hidden items-center justify-between py-4 md:flex lg:px-4 2xl:px-0">
        <motion.div variants={itemVariants} initial="hidden" animate="visible">
          <Link href="/">
            <Image src="/images/logo-argos.avif" alt="Arena Roja Logo" width={120} height={100} />
          </Link>
        </motion.div>

        <motion.div className="flex items-center gap-8" variants={containerVariants} initial="hidden" animate="visible">
          {navItems.map((item) => (
            <MotionLink
              key={item.label}
              variants={itemVariants}
              href={item.href}
              initial="hidden"
              animate="visible"
              className="text-foreground hover:text-muted-foreground group relative text-sm font-medium transition-colors duration-300"
            >
              {item.label}
            </MotionLink>
          ))}

          <motion.div variants={itemVariants}>
            <Button className="w-full" asChild>
              <Link href="/auth/sign-in">Iniciar Sesión</Link>
            </Button>
          </motion.div>
        </motion.div>
      </nav>

      {/* Mobile Navigation */}
      <div className="flex items-center justify-between px-4 py-4 md:hidden">
        <motion.div variants={itemVariants} initial="hidden" animate="visible">
          <Link href="/">
            <Image src="/images/logo-argos.avif" alt="Arena Roja Logo" width={120} height={100} />
          </Link>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <IoMdClose size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <IoMenu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-background border-border overflow-hidden border-t md:hidden"
          >
            <motion.div className="space-y-4 px-4 py-4" variants={containerVariants} initial="hidden" animate="visible">
              {navItems.map((item) => (
                <MotionLink
                  key={item.label}
                  variants={itemVariants}
                  href={item.href}
                  initial="hidden"
                  animate="visible"
                  className="text-foreground hover:text-muted-foreground block py-2 text-sm font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </MotionLink>
              ))}
              <motion.div variants={itemVariants} className="border-border border-t pt-4">
                <Button className="w-full" asChild>
                  <Link href="/auth/sign-in">Iniciar Sesión</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
