import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const AnimatedComponent = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const ref = useRef(null);

  const variants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay } },
    hidden: { opacity: 0, scale: 0.4 }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Перевірка на вхід у видиму область
        if (entry.isIntersecting) {
          if (ref.current) {
            controls.start('visible');  // Запускаємо анімацію тільки коли елемент видимий
          }
        } else {
        //   controls.start('hidden');
        }
      },
      {
        threshold: 0.5 // 50% елемента повинно бути видимим, перш ніж спрацьовує анімація
      }
    );

    if (ref.current) {
      observer.observe(ref.current);  // Стартуємо спостереження
    }

    return () => {
      // Це дуже важливо: зупиняємо спостереження за елементом при демонтажі компоненту
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]); // Залежність тільки від controls

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedComponent;
