'use client';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

export const Wsaap = () => {
  return (
    <FloatingWhatsApp
      accountName="Arena Roja"
      phoneNumber="+51902844989"
      avatar="https://arenaroja.com/cdn/shop/files/Nueva_caja_2024_copia.jpg?v=1747438258&width=1280"
      statusMessage="Generalmente responde en minutos"
      chatMessage="Hola! ¿En qué podemos ayudarte?"
      placeholder="Escribe un Mensaje"
      allowEsc
    />
  );
};
