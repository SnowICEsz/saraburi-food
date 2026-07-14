import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaStar,
  FaHeart,
  FaClock,
} from "react-icons/fa";
import { useState } from "react";

export default function RestaurantCard({
  restaurant,
  onSelect,
}) {
  const [favorite, setFavorite] = useState(false);

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
        rotateX: 3,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
      }}
      className="group overflow-hidden rounded-3xl bg-white shadow-xl transition hover:shadow-2xl"
    >
      {/* รูปภาพ */}
      <div className="relative overflow-hidden">

        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70"></div>

        {/* Badge */}
        <div className="absolute left-4 top-4 rounded-full bg-orange-500 px-4 py-1 text-sm font-bold text-white shadow-lg">
          ⭐ ร้านแนะนำ
        </div>

        {/* Favorite */}
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={() => setFavorite(!favorite)}
          className="absolute right-4 top-4 rounded-full bg-white p-3 shadow-lg"
        >
          <FaHeart
            className={`text-xl transition ${
              favorite
                ? "text-green-500"
                : "text-gray-400"
            }`}
          />
        </motion.button>

        {/* คะแนน */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 font-semibold shadow">
          <FaStar className="text-yellow-500" />
          {restaurant.rating}
        </div>

      </div>

      {/* เนื้อหา */}
      <div className="space-y-4 p-6">

        <div className="flex items-center justify-between">

          <h2 className="text-2xl font-bold">
            {restaurant.name}
          </h2>

          <span className="rounded-full bg-orange-100 px-3 py-1 font-semibold text-orange-600">
            {restaurant.price}
          </span>

        </div>

        <p className="line-clamp-2 text-gray-500">
          {restaurant.description}
        </p>

        <div className="flex justify-between text-sm text-gray-600">

          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-orange-500" />
            {restaurant.location}
          </div>

          <div className="flex items-center gap-2">
            <FaClock className="text-blue-500" />
            {restaurant.open}
          </div>

        </div>

        {/* ดาว */}
        <div className="flex gap-1 text-yellow-400">
          {[1, 2, 3, 4, 5].map((item) => (
            <motion.div
              key={item}
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                delay: item * 0.2,
              }}
            >
              <FaStar />
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() => onSelect(restaurant)}
          className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-red-500 py-3 text-lg font-bold text-white shadow-lg transition"
        >
          ดูรายละเอียด
        </motion.button>

      </div>
    </motion.div>
  );
}