import { motion } from "framer-motion";
import { useMemo } from "react";

export default function FloatingParticles() {
  const particles = useMemo(() => {
    return Array.from({ length: 35 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 14 + 8,
      delay: Math.random() * 5,
      duration: Math.random() * 7 + 8,
    }));
  }, []);

  return (
    <>
      {particles.map((item) => (
        <motion.div
          key={item.id}
          className="absolute rounded-full bg-orange-400/20 blur-xl"
          style={{
            left: `${item.left}%`,
            width: `${item.size}px`,
            height: `${item.size}px`,
            bottom: "-60px",
          }}
          animate={{
            y: [-20, -950],
            x: [0, 20, -20, 10, 0],
            opacity: [0, 0.6, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: item.duration,
            delay: item.delay,
            ease: "linear",
          }}
        />
      ))}
    </>
  );
}