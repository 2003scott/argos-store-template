import { Inputform } from '@/components/custom/input-form';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';

const SignInPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="flex w-full max-w-lg flex-col gap-6 p-8">
        <div className="flex w-full flex-col items-center justify-center gap-4">
          <Link href="/">
            <Image src="/images/logo-argos.avif" alt="logo argos" width={120} height={120} />
          </Link>

          <h1 className="text-md mb-4">Inicia sesión en tu cuenta</h1>
          <Inputform title="Correo Electronico" type="email" className="w-full" />
          <Inputform title="Contraseña" type="password" className="w-full" />
          <Button className="w-full">Iniciar Session</Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-300 dark:border-slate-600" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-slate-600 dark:bg-slate-800 dark:text-slate-400">O continúa con</span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <Button className="w-full" variant={'outline'}>
            <FcGoogle />
            Google
          </Button>
          <p className="text-center text-sm">
            ¿No tienes cuenta?{' '}
            <Link href="/sign-up" className="font-semibold hover:underline">
              Regístrate aquí
            </Link>
          </p>
        </div>
      </Card>
      <div className="mt-8 text-center text-xs text-slate-500 dark:text-slate-400">
        <p>Al iniciar sesión, aceptas nuestros términos y condiciones</p>
      </div>
    </div>
  );
};

export default SignInPage;
