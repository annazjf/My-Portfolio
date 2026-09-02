"use client";

import { MotionConfig } from "framer-motion";
import { createContext, useContext, useEffect, useState } from "react";

const MotionPreferenceContext = createContext(null);

export const MotionPreferenceProvider = ({ children }) => {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const savedPreference = window.localStorage.getItem("reduce-motion");
    const systemPreference = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const shouldReduceMotion = savedPreference === null
      ? systemPreference
      : savedPreference === "true";

    setReduceMotion(shouldReduceMotion);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("reduce-motion", reduceMotion);
  }, [reduceMotion]);

  const toggleReduceMotion = () => {
    setReduceMotion((currentValue) => {
      const nextValue = !currentValue;
      window.localStorage.setItem("reduce-motion", String(nextValue));
      return nextValue;
    });
  };

  return (
    <MotionPreferenceContext.Provider value={{ reduceMotion, toggleReduceMotion }}>
      <MotionConfig reducedMotion={reduceMotion ? "always" : "never"}>
        {children}
      </MotionConfig>
    </MotionPreferenceContext.Provider>
  );
};

export const useMotionPreference = () => useContext(MotionPreferenceContext);
