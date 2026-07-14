import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaUtensils,
  FaBars,
  FaTimes,
  FaHome,
  FaStore,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scroll
          ? "bg-white/90 shadow-xl backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}

        <motion.div
          whileHover={{
            rotate: 10,
            scale: 1.1,
          }}
          className="flex items-center gap-3"
        >
          <div className="rounded-2xl bg-orange-500 p-3 text-2xl text-white shadow-lg">
            <FaUtensils />
          </div>

          <div>
            <h1
              className={`text-2xl font-extrabold ${
                scroll ? "text-orange-600" : "text-white"
              }`}
            >
              ร้านอร่อยสระบุรี
            </h1>

            <p
              className={`text-xs ${
                scroll ? "text-gray-500" : "text-gray-200"
              }`}
            >
              (Saraburi Food Guide)
            </p>
          </div>
        </motion.div>

        {/* Desktop Menu */}

        <div className="hidden items-center gap-10 md:flex">
          {[
            {
              name: "หน้าแรก",
              icon: <FaHome />,
              link: "#",
            },
            {
              name: "ร้านอาหาร",
              icon: <FaStore />,
              link: "#restaurants",
            },
            {
              name: "ติดต่อ",
              icon: <FaPhoneAlt />,
              link: "#footer",
            },
          ].map((item) => (
            <a
              key={item.name}
              href={item.link}
              className={`group flex items-center gap-2 font-semibold transition ${
                scroll
                  ? "text-gray-700"
                  : "text-white"
              }`}
            >
              {item.icon}

              {item.name}

              <span className="block h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Mobile */}

        <button
          onClick={() => setMenu(!menu)}
          className={`text-2xl md:hidden ${
            scroll ? "text-black" : "text-white"
          }`}
        >
          {menu ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}

      {menu && (
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="space-y-6 bg-white p-6 shadow-xl md:hidden"
        >
          <a
            href="#"
            className="block font-semibold"
          >
            หน้าแรก
          </a>

          <a
            href="#restaurants"
            className="block font-semibold"
          >
            ร้านอาหาร
          </a>

          <a
            href="#footer"
            className="block font-semibold"
          >
            ติดต่อ
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}