"use client";

import React, { useState } from "react";

const EmailSignup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !email.includes("@")) {
      setIsError(true);
      return;
    }

    // In a real application, you would send this to your backend
    console.log("Email submitted:", email);
    setIsSubmitted(true);
    setIsError(false);
    setEmail("");

    // Reset submission state after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setIsError(false);
          }}
          placeholder="Enter your email"
          className={`w-full px-4 py-3 pr-32 rounded-lg bg-white/10 backdrop-blur-md border 
            ${isError ? "border-red-500" : "border-purple-300/30"} 
            text-white placeholder-purple-200/70 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300`}
        />
        <button
          type="submit"
          className="absolute right-1.5 top-1.5 px-4 py-1.5 bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium rounded-md hover:from-purple-700 hover:to-blue-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        >
          Notify Me
        </button>
      </form>

      {isError && (
        <p className="mt-2 text-red-400 text-sm">
          Please enter a valid email address.
        </p>
      )}

      {isSubmitted && (
        <p className="mt-2 text-green-400 text-sm animate-pulse">
          Thanks! We&apos;ll notify you when we launch.
        </p>
      )}

      <p className="mt-3 text-xs text-purple-200/70 text-center">
        We respect your privacy and will never share your email.
      </p>
    </div>
  );
};

export default EmailSignup;
