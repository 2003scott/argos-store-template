'use client';
import { Inputform } from '@/components/custom/input-form';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { motion } from 'motion/react';

const SignInPage = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <motion.div initial="hidden" animate="visible" variants={containerVariants} className="w-full max-w-lg">
        <Card className="flex w-full flex-col gap-6 p-8">
          <div className="flex w-full flex-col items-center justify-center gap-4">
            <motion.div variants={logoVariants}>
              <Link href="/">
                <Image src="/images/logo-argos.avif" alt="logo argos" width={120} height={120} />
              </Link>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-md mb-4">
              Inicia sesión en tu cuenta
            </motion.h1>

            <motion.div variants={itemVariants} className="w-full">
              <Inputform
                title="Correo Electronico"
                type="email"
                className="w-full"
                placeholder="Ingresa tu correo electrónico"
              />
            </motion.div>

            <motion.div variants={itemVariants} className="w-full">
              <Inputform title="Contraseña" type="password" className="w-full" placeholder="Ingresa tu contraseña" />
            </motion.div>

            <motion.div variants={itemVariants} className="w-full">
              <Button className="w-full">Iniciar Session</Button>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-300 dark:border-slate-600" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-slate-600 dark:bg-slate-800 dark:text-slate-400">O continúa con</span>
            </div>
          </motion.div>

          <div className="flex flex-col items-center justify-center gap-4">
            <motion.div variants={itemVariants} className="w-full">
              <Button className="w-full" variant={'outline'}>
                <FcGoogle />
                Google
              </Button>
            </motion.div>

            <motion.p variants={itemVariants} className="text-center text-sm">
              ¿No tienes cuenta?{' '}
              <Link href="/sign-up" className="font-semibold hover:underline">
                Regístrate aquí
              </Link>
            </motion.p>
          </div>
        </Card>

        <motion.div variants={itemVariants} className="mt-8 text-center text-xs text-slate-500 dark:text-slate-400">
          <p>Al iniciar sesión, aceptas nuestros términos y condiciones</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SignInPage;
