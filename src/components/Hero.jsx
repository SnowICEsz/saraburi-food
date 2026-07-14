import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaArrowDown } from "react-icons/fa";

export default function Hero() {
  return (
    <section
  className="relative flex h-screen items-center justify-center overflow-hidden bg-cover bg-center"
  style={{
    backgroundImage: "url('/saraburi.jpg')",
  }}
>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* วงกลมเบลอ */}
      <div className="absolute -left-20 top-20 h-72 w-72 animate-pulse rounded-full bg-orange-500/20 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 h-96 w-96 animate-pulse rounded-full bg-yellow-500/20 blur-3xl"></div>

      {/* ดาว */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1.5 w-1.5 rounded-full bg-white"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 2, 1],
          }}
          transition={{
            repeat: Infinity,
            duration: 2 + Math.random() * 3,
          }}
        />
      ))}

      <div className="relative z-10 max-w-4xl px-5 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6 text-6xl font-extrabold leading-tight md:text-7xl"
        >
          ค้นหา
          <br />

          <span className="text-orange-400">
            <Typewriter
              words={[
                "ร้านอาหารเด็ด",
                "อาหารอีสาน",
                "ร้านข้าวต้ม",
                "ร้านอาหารไทย",
                "ร้านดังในสระบุรี",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mx-auto max-w-2xl text-lg leading-8 text-gray-200"
        >
          รวมร้านอาหารท้องถิ่นในจังหวัดสระบุรี
          พร้อมรายละเอียด คะแนน รีวิว เวลาเปิด-ปิด
          และแผนที่ Google Maps
        </motion.p>

        <motion.a
          href="#restaurants"
          whileHover={{
            scale: 1.08,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-orange-500 px-10 py-4 text-xl font-bold shadow-2xl transition hover:bg-orange-600"
        >
          สำรวจร้านอาหาร

          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
            }}
          >
            <FaArrowDown />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}