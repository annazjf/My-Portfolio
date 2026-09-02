"use client";

import { useMotionPreference } from "./MotionPreferenceProvider";

const MotionToggle = () => {
  const { reduceMotion, toggleReduceMotion } = useMotionPreference();

  return (
    <button
      type="button"
      onClick={toggleReduceMotion}
      aria-pressed={reduceMotion}
      title={reduceMotion ? "Enable motion" : "Reduce motion"}
      className="rounded border border-[#33353F] px-3 py-2 text-sm text-[#ADB7BE] hover:border-white hover:text-white"
    >
      {reduceMotion ? "Motion off" : "Reduce motion"}
    </button>
  );
};

export default MotionToggle;