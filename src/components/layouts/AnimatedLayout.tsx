import React, { useState, useEffect } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { Outlet } from "react-router-dom";

const AnimatedLayout: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-black">
      {/* AnimatePresence WITHOUT exit lag */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 flex items-center justify-center bg-black z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} // instant fade
            transition={{ duration: 0.3 }}
          >
            {/* Circle 1 */}
            <motion.div
              className="absolute w-25 h-25 rounded-full border-4 border-transparent"
              style={{ borderTopColor: "#22c55e" }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Circle 2 (flow delay) */}
            <motion.div
              className="absolute w-20 h-20 rounded-full border-4 border-transparent"
              style={{ borderTopColor: "#4425a1" }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "linear",
                delay: 0.2, // 👈 flow effect
              }}
            />

            {/* Circle 3 (flow delay) */}
            <motion.div
              className="absolute w-16 h-16 rounded-full border-4 border-transparent"
              style={{ borderTopColor: "#2fc4bf" }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: 0.3, // 👈 flow effect
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content (mounted immediately → no lag) */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-[var(--bg)] text-[var(--text)]"
        >
          <Outlet />
        </motion.div>
      )}
    </div>
  );
};

export default AnimatedLayout;
