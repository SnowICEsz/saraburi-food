import { motion } from "framer-motion";
import { useMemo } from "react";

export default function Stars() {
  const stars = useMemo(() => {
    return Array.from({ length: 120 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }));
  }, []);

  return (
    <>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: "0 0 8px white",
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.6, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: star.duration,
            delay: star.delay,
          }}
        />
      ))}
    </>
  );
}