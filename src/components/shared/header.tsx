'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, User } from 'lucide-react';
import { Button } from '../ui/button';
import Image from 'next/image';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Inicio', 'Productos', 'Ofertas', 'Nuevos', 'Contactanos'];

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

  return (
    <header className="bg-background/80 border-border sticky top-0 z-50 w-full border-b backdrop-blur-md">
      {/* Desktop Navigation */}
      <nav className="hidden items-center justify-between px-6 py-4 md:flex lg:px-12">
        <motion.div variants={itemVariants} initial="hidden" animate="visible">
          <Image src="/images/logo-argos.avif" alt="Arena Roja Logo" width={120} height={100} />
        </motion.div>

        <motion.div className="flex items-center gap-8" variants={containerVariants} initial="hidden" animate="visible">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href="#"
              variants={itemVariants}
              className="text-foreground hover:text-muted-foreground group relative text-sm font-medium transition-colors duration-300"
            >
              {item}
              <motion.div
                className="bg-foreground absolute bottom-0 left-0 h-0.5"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}

          <motion.div variants={itemVariants}>
            <Button>Iniciar Sesión</Button>
          </motion.div>
        </motion.div>
      </nav>

      {/* Mobile Navigation */}
      <div className="flex items-center justify-between px-4 py-4 md:hidden">
        <motion.div variants={itemVariants} initial="hidden" animate="visible">
          <Image src="/images/logo-argos.avif" alt="Arena Roja Logo" width={120} height={100} />
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
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu size={24} />
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
                <motion.a
                  key={item}
                  href="#"
                  variants={itemVariants}
                  className="text-foreground hover:text-muted-foreground block py-2 text-sm font-medium transition-colors"
                >
                  {item}
                </motion.a>
              ))}
              <motion.div variants={itemVariants} className="border-border border-t pt-4">
                <Button className="w-full">Iniciar Sesión</Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
