'use client';
import { Inputform } from '@/components/custom/input-form';
import { TextAreaform } from '@/components/custom/textarea-form';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'sonner';

interface ContactFormData {
  names: string;
  surnames: string;
  email: string;
  tel: string;
  message: string;
}

export const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    const dataMapper = {
      names: data.names,
      surnames: data.surnames,
      to: data.email,
      subject: 'Nuevo mensaje de contacto',
      tel: data.tel,
      text: data.message
    };
    axios
      .post('/api/contact', dataMapper)
      .then((response) => {
        reset();
        toast.success(response.data.message);
      })
      .catch(() => {
        toast.error('Error al enviar el mensaje. Por favor, intenta de nuevo.');
      });
  };

  return (
    <section className="container space-y-4 px-4 md:px-0">
      <div className="items-center justify-center text-center">
        <h2 className="text-md text-start font-semibold uppercase">Contactanos</h2>
        <p className="text-start text-sm font-light uppercase">Para consultas y soporte, envíanos un correo</p>
      </div>
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
        <Card className="p-4">
          <form className="grid grid-cols-1 gap-4 lg:grid-cols-2" onSubmit={handleSubmit(onSubmit)}>
            <Inputform
              title="Nombres"
              placeholder="Ingresa tus nombres"
              type="text"
              {...register('names', { required: true })}
              error={errors.names && 'El nombre es requerido'}
            />
            <Inputform
              title="Apellidos"
              placeholder="Ingresa tus apellidos"
              type="text"
              {...register('surnames', { required: true })}
              error={errors.surnames && 'El apellido es requerido'}
            />
            <Inputform
              title="Correo Electrónico"
              placeholder="Ingresa tu correo electrónico"
              type="email"
              {...register('email', { required: true })}
              error={errors.email && 'El correo es requerido'}
            />
            <Inputform
              title="Teléfono"
              placeholder="Ingresa tu teléfono"
              type="tel"
              {...register('tel', { required: true })}
              error={errors.tel && 'El teléfono es requerido'}
            />
            <TextAreaform
              title="Mensaje"
              placeholder="Escribe tu mensaje aquí"
              className="col-span-full"
              {...register('message', { required: true })}
              error={errors.message && 'El mensaje es requerido'}
            />
            <Button className="col-span-full" type="submit">
              Enviar Mensaje
            </Button>
          </form>
        </Card>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1228.8089522225655!2d-77.0282075027266!3d-12.096722889092803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1spacifico%20seguros!5e0!3m2!1ses-419!2spe!4v1765125440693!5m2!1ses-419!2spe"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};
