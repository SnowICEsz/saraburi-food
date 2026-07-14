import { motion } from "framer-motion";
import { FaUtensils } from "react-icons/fa";

export default function Loading() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
    >
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          ease: "linear",
        }}
        className="mb-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 p-8 text-6xl text-white shadow-2xl"
      >
        <FaUtensils />
      </motion.div>

      <motion.h1
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="text-4xl font-bold text-white"
      >
        Saraburi Food
      </motion.h1>

      <p className="mt-4 text-gray-300">
        กำลังเข้าสู่ระบบ...
      </p>

      <motion.div
        className="mt-10 h-2 w-64 overflow-hidden rounded-full bg-white/20"
      >
        <motion.div
          animate={{
            x: [-250, 250],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "linear",
          }}
          className="h-full w-32 rounded-full bg-orange-500"
        />
      </motion.div>
    </motion.div>
  );
}