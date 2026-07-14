import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaUtensils,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="mt-20 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-16">

        {/* ข้อมูลเว็บไซต์ */}
        <div className="grid gap-10 md:grid-cols-3">

          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-2xl bg-orange-500 p-3 text-2xl shadow-lg">
                <FaUtensils />
              </div>

              <h2 className="text-3xl font-bold text-orange-400">
                Saraburi Food
              </h2>
            </div>

            <p className="leading-8 text-gray-300">
              เว็บไซต์รวบรวมร้านอาหารแนะนำในจังหวัดสระบุรี
              พร้อมข้อมูลร้าน รีวิว เบอร์โทร เวลาเปิด-ปิด
              และ Google Maps
            </p>
          </div>

          {/* เมนู */}

          <div>
            <h3 className="mb-5 text-xl font-bold">
              เมนู
            </h3>

            <ul className="space-y-4">

              <li>
                <a href="#" className="transition hover:text-orange-400">
                  หน้าแรก
                </a>
              </li>

              <li>
                <a
                  href="#restaurants"
                  className="transition hover:text-orange-400"
                >
                  ร้านอาหาร
                </a>
              </li>

              <li>
                <a
                  href="#footer"
                  className="transition hover:text-orange-400"
                >
                  ผู้จัดทำ
                </a>
              </li>

            </ul>
          </div>

          {/* ติดต่อ */}

          <div>

            <h3 className="mb-5 text-xl font-bold">
              ติดต่อเว็บไซต์
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-orange-400" />
                จังหวัดสระบุรี ประเทศไทย
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-orange-400" />
                065-862-5737
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-orange-400" />
                icerghd@gmail.com
              </div>

            </div>

            <div className="mt-8 flex gap-4">

              <button className="rounded-full bg-orange-500 p-3 transition hover:scale-110 hover:bg-orange-600">
                <FaFacebookF />
              </button>

              <button className="rounded-full bg-pink-500 p-3 transition hover:scale-110 hover:bg-pink-600">
                <FaInstagram />
              </button>

            </div>

          </div>

        </div>

        {/* เส้นคั่น */}

        <div className="my-12 border-t border-gray-700"></div>

        {/* ผู้จัดทำ */}

        <div className="flex flex-col items-center text-center">

          <img
            src="/korawit.jpg"
            alt="Korawit"
            className="h-40 w-40 rounded-full border-4 border-orange-500 object-cover shadow-2xl transition duration-500 hover:scale-110"
          />

          <h2 className="mt-6 text-3xl font-bold text-orange-400">
            ผู้จัดทำ
          </h2>

          <p className="mt-3 text-2xl font-semibold">
            นายกรวิชญ์ พงษ์ศิริ
          </p>

          <div className="mt-5 space-y-2 text-gray-300">

            <p className="flex items-center justify-center gap-2">
              <FaEnvelope className="text-orange-400" />
              icerghd@gmail.com
            </p>

            <p className="flex items-center justify-center gap-2">
              <FaPhoneAlt className="text-orange-400" />
              065-862-5737
            </p>

          </div>

        </div>

        {/* Copyright */}

        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400">

          © 2026 <span className="font-bold text-orange-400">
            Saraburi Food
          </span>

          <br />

          Designed & Developed by
          <span className="font-semibold text-orange-400">
            {" "}
            นายกรวิชญ์ พงษ์ศิริ
          </span>

        </div>

      </div>
    </footer>
  );
}