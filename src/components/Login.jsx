import Loading from "./Loading";
import Stars from "./Stars";
import FloatingParticles from "./FloatingParticles";
import { Typewriter } from "react-simple-typewriter";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaUtensils,
  FaArrowRight,
} from "react-icons/fa";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [flash, setFlash] = useState(false);
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  }); 
  const [time, setTime] = useState(new Date());

const [greeting, setGreeting] = useState("");

const [cursor, setCursor] = useState({
  x: -100,
  y: -100,
});
useEffect(() => {
  const saved = localStorage.getItem("lastUsername");

  if (saved) {
    setUsername(saved);
  }

  const timer = setInterval(() => {
    setTime(new Date());
  }, 1000);

  return () => clearInterval(timer);
}, []);

useEffect(() => {
  const h = time.getHours();

  if (h < 12) {
    setGreeting("🌞 Good Morning");
  } else if (h < 17) {
    setGreeting("☀️ Good Afternoon");
  } else if (h < 20) {
    setGreeting("🌇 Good Evening");
  } else {
    setGreeting("🌙 Good Night");
  }
}, [time]); 
  const handleLogin = () => {
    if (loading) return;

    if (username === "snowicesz" && password === "kingof67") {
        setLoading(true);

  setTimeout(() => {
    setFlash(true);
  }, 1200);

  setTimeout(() => {
    onLogin();
  }, 2200);

  return;
      setError("");
      setLoading(true);

      setTimeout(() => {
        onLogin();
      }, 1800);
    } else {
      setError("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
    }
  };
if (loading && !flash) {
  return <Loading />;
}
  return (
    <div
  onMouseMove={(e) => {
    const { innerWidth, innerHeight } = window;

    setMouse({
      x: (e.clientX - innerWidth / 2) / 35,
      y: (e.clientY - innerHeight / 2) / 35,
    });
  }}
  className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cover bg-center"
  style={{
    backgroundImage: "url('/login-bg.jpg')",
  }}
>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      {flash && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="absolute inset-0 bg-white"
  />
)}
      <Stars />
    <FloatingParticles />

      {/* Glow */}
      <div className="absolute -left-32 top-16 h-96 w-96 rounded-full bg-orange-500/25 blur-3xl animate-pulse"></div>

      <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-yellow-400/20 blur-3xl animate-pulse"></div>

      {/* Login Card */}
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
          scale: 0.85,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        whileHover={{
          scale: 1.02,
        }}
        style={{
  x: mouse.x,
  y: mouse.y,
}}
        className="relative z-10 w-full max-w-md rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl"
      >
        {/* Logo */}
        <div className="mb-8 text-center">
          <motion.div
            animate={{
              rotate: [0, 8, -8, 0],
              y: [0, -8, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="mx-auto mb-5 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-5xl text-white shadow-2xl"
          >
            <FaUtensils />
          </motion.div>

          <motion.h1
    animate={{
    textShadow: [
      "0 0 5px white",
      "0 0 25px orange",
      "0 0 5px white",
    ],
  }}
  transition={{
    repeat: Infinity,
    duration: 2,
  }}
  className="text-4xl font-extrabold text-white"
>
  Saraburi Food
</motion.h1>

          <p className="mt-3 text-lg text-gray-200">
  <Typewriter
    words={[
      "Welcome Back 👋",
      "ค้นหาร้านเด็ดในสระบุรี 🍜",
      "Discover Hidden Restaurants 🍽️",
    ]}
    loop={0}
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={40}
    delaySpeed={1800}
  />
</p>
        </div>

        {/* Username */}
        <div className="mb-5 flex items-center rounded-2xl bg-white px-5 py-4 shadow-lg">
          <FaUser className="mr-3 text-orange-500" />

          <input
            type="text"
            placeholder="Username"
            className="w-full bg-transparent outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="mb-5 flex items-center rounded-2xl bg-white px-5 py-4 shadow-lg">
          <FaLock className="mr-3 text-orange-500" />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full bg-transparent outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleLogin();
              }
            }}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="text-orange-500 transition hover:scale-110"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
                {/* Error */}
        {error && (
          <motion.div
          whileHover={{
  scale: 1.02,
  rotateX: 2,
  rotateY: -2,
}}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 rounded-xl border border-red-400/40 bg-red-500/20 py-3 text-center text-sm font-medium text-red-100"
          >
            {error}
          </motion.div>
        )}

        {/* Login Button */}
        <motion.button
          whileHover={{
            scale: 1.03,
            boxShadow: "0 0 30px rgba(249,115,22,.7)",
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={handleLogin}
          disabled={loading}
          className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 py-4 text-lg font-bold text-white shadow-xl transition disabled:cursor-not-allowed disabled:opacity-80"
        >
          {loading ? (
            <>
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  ease: "linear",
                }}
                className="h-6 w-6 rounded-full border-4 border-white border-t-transparent"
              />

              กำลังเข้าสู่ระบบ...
            </>
          ) : (
            <>
              Login
              <FaArrowRight />
            </>
          )}
        </motion.button>

        {/* Demo Account */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 rounded-2xl border border-white/20 bg-white/10 p-5 text-center text-white backdrop-blur-md"
        >
          <h3 className="mb-3 text-lg font-bold">
            รหัสผ่านตัวอย่าง
          </h3>

          <div className="space-y-2 text-sm text-gray-200">
            <p>
              Username :
              <span className="ml-2 font-bold text-orange-300">
                pakornkit
              </span>
            </p>

            <p>
              Password :
              <span className="ml-2 font-bold text-orange-300">
                ibuki67
              </span>
            </p>
          </div>
        </motion.div>

        {/* Footer */}
        <p className="mt-8 text-center text-xs text-gray-300">
          © 2026 Saraburi Food Guide
        </p>
      </motion.div>
    </div>
  );
}