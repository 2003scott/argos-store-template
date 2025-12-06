'use client';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

export const Wsaap = () => {
  return (
    <FloatingWhatsApp
      accountName="Arena Roja"
      phoneNumber="+51902844989"
      avatar="https://arenaroja.com/cdn/shop/files/Logo_Arena_Roja_250x.png?v=1689674863&width=360"
      statusMessage="Generalmente responde en minutos"
      chatMessage="Hola! ¿En qué podemos ayudarte?"
      placeholder="Escribe un Mensaje"
      allowEsc
    />
  );
};
