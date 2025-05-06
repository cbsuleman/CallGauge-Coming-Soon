"use client";

import React from "react";
import dynamic from "next/dynamic";
import SocialLinks from "../components/SocialLinks";
import logoMain from "@/public/logo/logo-mask-white.png";
import Image from "next/image";
import { permanentMarker, inter } from "./ui/fonts";
import { FaChartLine, FaPlug, FaBrain } from "react-icons/fa";
import { motion } from "motion/react";

// Dynamically import ParticleCanvas with SSR disabled
const ParticleCanvas = dynamic(() => import("../components/ParticleCanvas"), {
  ssr: false,
});

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-950 via-purple-900 to-pink-900 font-sans">
      {/* Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        <ParticleCanvas />
      </div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-bg" />

      {/* Header */}
      <header className="absolute top-1 lg:top-4 left-0 lg:left-10 right-0 p-4 sm:p-6 flex justify-center sm:justify-start items-center z-20">
        <div className="inline-flex items-center rounded-full backdrop-blur-sm border border-white/20 text-white text-lg font-semibold animate-pulse-slow">
          <Image
            src={logoMain}
            alt="CallGauge"
            className="w-12 h-12 sm:w-16 sm:h-16 transition-transform hover:scale-110 duration-300"
            priority
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-6xl mx-auto text-center px-4 sm:px-6 py-20 sm:py-24 lg:py-20">
        <div className="space-y-12">
          {/* Hero Section */}
          <div className="space-y-6">
            <h2
              className={`${inter.className} text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight`}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">
                CallGauge
              </span>{" "}
              Redefines Call Tracking
            </h2>
            <p
              className={`${inter.className} text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed`}
            >
              Unlock powerful call analytics, seamless integrations, and
              AI-driven insights to elevate your customer interactions. The
              future of call tracking is almost here.
            </p>
          </div>

          {/* Coming Soon Title */}
          <motion.h1
            // initial={{ y: 25, opacity: 0 }}
            // animate={{ y: 0, opacity: 1 }}
            // transition={{ duration: 1, ease: "easeInOut" }}
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className={`${permanentMarker.className} min-[413px]:overflow-hidden min-[413px]:whitespace-nowrap text-6xl sm:text-8xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r max-w-fit mx-auto from-blue-400 to-pink-400 drop-shadow-2xl`}
          >
            Coming Soon
          </motion.h1>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Real-Time Analytics",
                description:
                  "Instant insights into every call with dynamic dashboards.",
                icon: <FaChartLine className="text-3xl text-blue-400" />,
              },
              {
                title: "Smart Integrations",
                description: "Seamlessly syncs with your existing tech stack.",
                icon: <FaPlug className="text-3xl text-blue-400" />,
              },
              {
                title: "AI-Driven Insights",
                description:
                  "Intelligent call analysis powered by advanced AI.",
                icon: <FaBrain className="text-3xl text-blue-400" />,
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-blue-300/30 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3
                  className={`${inter.className} text-xl font-semibold text-white mb-3 tracking-wide`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`${inter.className} text-white/80 text-sm leading-relaxed`}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 pb-10">
        <SocialLinks />
        <p
          className={`${inter.className} mt-6 text-sm text-center text-white/50`}
        >
          © {new Date().getFullYear()} CallGauge. All rights reserved.
        </p>
      </footer>

      <style jsx>{`
        @keyframes gradient-bg {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-bg {
          background-size: 200% 200%;
          animation: gradient-bg 15s ease infinite;
        }
        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.03);
            opacity: 0.9;
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 1.2s ease-out;
        }
      `}</style>
    </div>
  );
}

export default Home;
