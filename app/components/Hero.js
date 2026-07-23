"use client"

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

// Mock data based on your image
const SLIDES = [
  {
    id: 1,
    title: "Heritage Stay",
    subtitle: "A modern hotel offering comfort, safety & elegance in Bagerhat’s heritage zone.",
    bgImage: "https://res.cloudinary.com/b3knhi8f/image/upload/v1784715506/552506787_122119731950966799_6457546689319655953_n_iyyuq0.jpg", 
  },
  {
    id: 2,
    title: "Luxury Defined",
    subtitle: "Experience world-class hospitality and comfort.",
    bgImage: "https://res.cloudinary.com/b3knhi8f/image/upload/v1784714897/bed-5_qxkplk.jpg",
  },
  {
    id: 3,
    title: "Serene Spaces",
    subtitle: "A perfect blend of modern design and tranquility.",
    bgImage: "https://res.cloudinary.com/b3knhi8f/image/upload/v1784715507/561339712_122124380954966799_4798082669804800009_n_drlyot.jpg",
  },
];

export default function HeroSlider() {
  const router = useRouter()
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality (changes slide every 5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDES.length);
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black select-none">

      {/* --- SLIDE ANIMATION ENGINE --- */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${SLIDES[currentIndex].bgImage})` }}
        >
          {/* Dark overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/30" />

          {/* --- TEXT CONTENT ANIMATION --- */}
          <div className="absolute inset-y-0 left-0 flex flex-col justify-center px-12 md:px-24 max-w-xl text-white z-20">
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl md:text-8xl font-serif tracking-tight leading-none mb-4"
            >
              {SLIDES[currentIndex].title}
            </motion.h1>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-sm md:text-base tracking-wide font-light opacity-90 mb-8"
            >
              {SLIDES[currentIndex].subtitle}
            </motion.p>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <button onClick={()=> router.push("/search-room")} className="group flex items-center space-x-2 text-xs font-semibold tracking-[0.2em] uppercase border-b-2 border-white/60 pb-1 hover:border-white transition">
                <span className="w-4 h-[2px] bg-white group-hover:w-6 transition-all" />
                <span>Book Now</span>
              </button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* --- PAGINATION DOTS --- */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="group relative p-2 focus:outline-none"
          >
            <div
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index 
                  ? "bg-white scale-125" 
                  : "bg-white/40 group-hover:bg-white/70"
              }`}
            />
          </button>
        ))}
      </div>

    </div>
  );
}