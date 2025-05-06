import React from "react";

const AnimatedBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-300 via-blue-900 to-cyan-800"></div>

      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-cyan-600/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-slate-600/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]"></div>
    </div>
  );
};

export default AnimatedBackground;
