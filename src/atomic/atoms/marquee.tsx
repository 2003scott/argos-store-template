'use client';
import { JSX, useRef } from 'react';
import { motion, useTransform, useMotionValue, useAnimationFrame } from 'framer-motion';

interface MarqueeProps {
  children: React.ReactNode;
  baseVelocity: number;
}

function MarqueeText({ children, baseVelocity = 200 }: MarqueeProps) {
  const baseX = useMotionValue(0);
  const directionFactor = useRef<number>(-1);

  const wrap = (min: number, max: number, v: number) => {
    const range = max - min;
    return ((((v - min) % range) + range) % range) + min;
  };

  const x = useTransform(baseX, (v) => `${wrap(0, -50, v)}%`);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * Math.abs(baseVelocity) * (delta / 1000);
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="flex overflow-hidden whitespace-nowrap">
      <motion.div className="flex" style={{ x }}>
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export const Marquee = () => {
  const messages = [
    'ENVÍO GRATUITO EN PEDIDOS SUPERIORES A S/ 100 PEN EN PERÚ',
    'ARGOS STORE - TU TIENDA DE CONFIANZA'
  ];

  const renderItems = () => {
    const items: JSX.Element[] = [];

    for (let i = 0; i < 3; i++) {
      messages.forEach((message, index) => {
        items.push(
          <span key={`${i}-${index}`} className="px-8 whitespace-nowrap uppercase">
            {message}
          </span>
        );
      });
    }
    return items;
  };

  return (
    <section className="w-full overflow-hidden bg-black py-[10px] text-[9px] font-bold text-white md:text-xs">
      <MarqueeText baseVelocity={-1}>{renderItems()}</MarqueeText>
    </section>
  );
};
