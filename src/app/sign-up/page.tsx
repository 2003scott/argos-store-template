'use client';
import { Inputform } from '@/components/custom/input-form';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const SignUpPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="flex w-full max-w-lg flex-col gap-6 p-8">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <Link href="/">
            <Image src="/images/logo-argos.avif" alt="logo argos" width={120} height={120} />
          </Link>

          <h1 className="text-md mb-4">Crea tu cuenta</h1>

          <div className="flex w-full items-center justify-center gap-2">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`h-2 flex-1 rounded-full transition-all ${
                  index + 1 <= currentStep ? 'bg-primary' : 'bg-slate-300'
                }`}
              />
            ))}
          </div>

          <p className="text-muted-foreground text-sm">
            Paso {currentStep} de {totalSteps}
          </p>

          <div className="relative w-full overflow-hidden p-1">
            <AnimatePresence mode="wait" custom={currentStep}>
              <motion.div
                key={currentStep}
                custom={currentStep}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="w-full space-y-4"
              >
                {currentStep === 1 && (
                  <>
                    <h2 className="text-center text-lg font-semibold">Información Personal</h2>
                    <Inputform title="Nombres" type="text" className="w-full" />
                    <Inputform title="Apellidos" type="text" className="w-full" />
                    <Inputform title="Numero de Teléfono" type="tel" className="w-full" />
                  </>
                )}

                {currentStep === 2 && (
                  <>
                    <h2 className="text-center text-lg font-semibold">Información Adicional</h2>
                    <Inputform title="Fecha de Nacimiento" type="date" className="w-full" />
                  </>
                )}

                {currentStep === 3 && (
                  <>
                    <h2 className="text-center text-lg font-semibold">Seguridad</h2>
                    <Inputform title="Correo Electrónico" type="email" className="w-full" />
                    <Inputform title="Contraseña" type="password" className="w-full" />
                    <Inputform title="Confirmar Contraseña" type="password" className="w-full" />
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="flex w-full gap-4 p-1">
            {currentStep > 1 && (
              <Button variant="outline" className="flex-1" onClick={prevStep}>
                Anterior
              </Button>
            )}
            {currentStep < totalSteps ? (
              <Button className="flex-1" onClick={nextStep}>
                Siguiente
              </Button>
            ) : (
              <Button className="flex-1">Crear Cuenta</Button>
            )}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-300 dark:border-slate-600" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-slate-600 dark:bg-slate-800 dark:text-slate-400">O</span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-center text-sm">
            ¿Ya tienes cuenta?{' '}
            <Link href="/sign-in" className="font-semibold hover:underline">
              Inicia sesión aquí
            </Link>
          </p>
        </div>
      </Card>
    </div>
  );
};

export default SignUpPage;
