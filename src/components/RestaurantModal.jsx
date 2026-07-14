import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimes,
  FaStar,
  FaMapMarkerAlt,
  FaClock,
  FaPhone,
  FaMapMarkedAlt,
} from "react-icons/fa";

export default function RestaurantModal({ restaurant, onClose }) {
  return (
    <AnimatePresence>
      {restaurant && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{
              scale: 0.7,
              opacity: 0,
              y: 100,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
            }}
            exit={{
              scale: 0.8,
              opacity: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
            }}
            className="relative max-h-[95vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
          >
            {/* ปุ่มปิด */}

            <button
              onClick={onClose}
              className="absolute right-5 top-5 z-50 rounded-full bg-white p-3 shadow-xl transition hover:bg-red-500 hover:text-white"
            >
              <FaTimes />
            </button>

            {/* รูปใหญ่ */}

            <div className="relative">

              <img
                src={restaurant.image}
                className="h-[420px] w-full object-cover"
                alt={restaurant.name}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent"></div>

              <div className="absolute bottom-8 left-8">

                <h1 className="text-5xl font-extrabold text-white">
                  {restaurant.name}
                </h1>

                <div className="mt-3 flex gap-4">

                  <div className="rounded-full bg-yellow-400 px-4 py-2 font-bold text-black">
                    ⭐ {restaurant.rating}
                  </div>

                  <div className="rounded-full bg-orange-500 px-4 py-2 font-bold text-white">
                    {restaurant.price}
                  </div>

                </div>

              </div>

            </div>

            {/* รายละเอียด */}

            <div className="grid gap-10 p-10 lg:grid-cols-2">

              <div>

                <h2 className="mb-5 text-3xl font-bold">
                  รายละเอียดร้าน
                </h2>

                <p className="leading-8 text-gray-600">
                  {restaurant.description}
                </p>

                <div className="mt-8 space-y-4">

                  <div className="flex items-center gap-3">
                    <FaClock className="text-orange-500" />
                    <span>{restaurant.open}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaMapMarkerAlt className="text-green-500" />
                    <span>{restaurant.address}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaPhone className="text-green-500" />
                    <span>{restaurant.phone}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaStar className="text-yellow-500" />
                    <span>
                      {restaurant.rating} ({restaurant.review} รีวิว)
                    </span>
                  </div>

                </div>

              </div>

              {/* ปุ่ม */}

              <div className="rounded-3xl bg-orange-50 p-8">

                <h2 className="mb-6 text-2xl font-bold">
                  ข้อมูลเพิ่มเติม
                </h2>

                <div className="space-y-5">

                  <a
                    href={`tel:${restaurant.phone}`}
                    className="flex items-center justify-center gap-3 rounded-xl bg-green-500 py-4 font-bold text-white transition hover:bg-green-600"
                  >
                    <FaPhone />
                    โทรหาร้าน
                  </a>

                  <a
                    href={restaurant.maps}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-3 rounded-xl bg-orange-500 py-4 font-bold text-white transition hover:bg-orange-600"
                  >
                    <FaMapMarkedAlt />
                    เปิด Google Maps
                  </a>

                </div>

                {/* ดาว */}

                <div className="mt-10 flex justify-center gap-2 text-3xl text-yellow-400">

                  {[1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, 15, 0],
                      }}
                      transition={{
                        repeat: Infinity,
                        delay: i * 0.15,
                        duration: 1.8,
                      }}
                    >
                      <FaStar />
                    </motion.div>
                  ))}

                </div>

              </div>

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}