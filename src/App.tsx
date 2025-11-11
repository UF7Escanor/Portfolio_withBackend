// import React, { useState, useEffect } from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Stats from "./components/Stats";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Testimonials from "./components/Testimonials";
// import Loader from "./components/Loader"; // ✅ new loader component

// const App: React.FC = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading delay (2 seconds)
//     const timer = setTimeout(() => setLoading(false), 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return <Loader />; // ✅ show only loader until loading is done
//   }

//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Stats />
//       <Skills />
//       <Projects />
//       <Testimonials />
//       <Contact />
//     </>
//   );
// };

// export default App;

// import React, { useState, useEffect } from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Stats from "./components/Stats";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Testimonials from "./components/Testimonials";
// import Loader from "./components/Loader";
// import "./App.css"; // make sure global styles are loaded

// const App: React.FC = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="relative min-h-screen">
//       {/* Loader overlay */}
//       {loading && (
//         <div className=" min-h-screen fixed inset-0 flex items-center justify-center bg-white z-50">
//           <Loader />
//         </div>
//       )}

//       {/* Main content */}
//       <Navbar />
//       <Hero />
//       <Stats />
//       <Skills />
//       <Projects />
//       <Testimonials />
//       <Contact />
//     </div>
//   );
// };

// export default App;

// import React, { useState, useEffect } from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Stats from "./components/Stats";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Testimonials from "./components/Testimonials";
// import Loader from "./components/Loader";
// import "./App.css";

// const App: React.FC = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading delay
//     const timer = setTimeout(() => {
//       setLoading(false);
//       // ✅ Re-enable scroll when loading ends
//       document.body.style.overflow = "auto";
//     }, 2000);

//     // ✅ Disable scroll while loading
//     document.body.style.overflow = "hidden";

//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     // ✅ Only render loader, not the UI, but keep body scroll disabled
//     return (
//       <div className="flex items-center justify-center h-screen w-screen bg-white">
//         <Loader />
//       </div>
//     );
//   }

//   // ✅ Normal UI after loader disappears
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Stats />
//       <Skills />
//       <Projects />
//       <Testimonials />
//       <Contact />
//     </>
//   );
// };

// export default App;

// import React, { useState, useEffect } from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Stats from "./components/Stats";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Testimonials from "./components/Testimonials";
// import { motion, AnimatePresence } from "framer-motion";

// const App: React.FC = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading delay (2 seconds)
//     const timer = setTimeout(() => setLoading(false), 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="min-h-screen bg-white overflow-hidden">
//       <AnimatePresence>
//         {loading ? (
//           // 🌈 Loader Screen
//           <motion.div
//             key="loader"
//             className="fixed inset-0 flex items-center justify-center bg-black z-50"
//             initial={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             {/* Spinner */}
//             <motion.div
//               className="w-16 h-16 border-4 border-transparent rounded-full"
//               style={{
//                 borderTopColor: "#d946ef", // pink
//                 borderRightColor: "#8b5cf6", // purple
//               }}
//               animate={{ rotate: 360 }}
//               transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
//             />
//           </motion.div>
//         ) : (
//           // 🌿 Main Content
//           <motion.div
//             key="content"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <Navbar />
//             <Hero />
//             <Stats />
//             <Skills />
//             <Projects />
//             <Testimonials />
//             <Contact />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default App;

// import React, { useState, useEffect } from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Stats from "./components/Stats";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Testimonials from "./components/Testimonials";
// import Loader from "./components/Loader";
// import "./App.css";

// const App: React.FC = () => {
//   const [loading, setLoading] = useState(true);
//   const [fadeOut, setFadeOut] = useState(false);

//   useEffect(() => {
//     // Loader appears for 2 seconds
//     const timer = setTimeout(() => {
//       setFadeOut(true); // start fade-out animation
//       setTimeout(() => setLoading(false), 600); // remove loader after fade
//     }, 2000);

//     // Disable scroll during loader
//     document.body.style.overflow = "hidden";

//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     // Re-enable scroll when loader is gone
//     if (!loading) document.body.style.overflow = "auto";
//   }, [loading]);

//   return (

//   );
// };

// export default App;

// import React, { useState, useEffect } from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Stats from "./components/Stats";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Testimonials from "./components/Testimonials";
// import { motion, AnimatePresence } from "framer-motion";

// const App: React.FC = () => {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setLoading(false), 2500); // 2.5s loader
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="min-h-screen bg-white">
//       <AnimatePresence mode="wait">
//         {loading ? (
//           // 🌈 Loader Screen
//           <motion.div
//             key="loader"
//             className="fixed  inset-0 flex flex-col items-center justify-center bg-linear-to-b from-green-200 to-white z-50"
//             initial={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <motion.div
//               className="fixed w-50 mt-20 h-50 border border-transparent rounded-full mb-6"
//               style={{
//                 borderTopColor: "#1c223d",
//                 borderRightColor: "#16a34a",
//               }}
//               animate={{ rotate: 360 }}
//               transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
//             />
//             {/* Spinner */}
//             <motion.div
//               className="fixed w-30 h-30 border-4 border-transparent rounded-full mb-6"
//               style={{
//                 borderTopColor: "#b02757",
//                 borderRightColor: "#16a34a",
//               }}
//               animate={{ rotate: 360 }}
//               transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
//             />
//             <motion.div
//               className="relative w-50 h-50 border-4 border-transparent rounded-full mb-6"
//               style={{
//                 borderTopColor: "#22a34a",
//                 borderRightColor: "#16a34a",
//               }}
//               animate={{ rotate: 360 }}
//               transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
//             />
//             <motion.div
//               className="fixed w-50 mt-20 h-50 border border-transparent rounded-full mb-6"
//               style={{
//                 borderTopColor: "#1c223d",
//                 borderRightColor: "#e8c048",
//               }}
//               animate={{ rotate: 360 }}
//               transition={{ repeat: Infinity, ease: "linear", duration: 1 }}
//             />

//             {/* “M Design” Text Animation */}
//             <motion.h1
//               className="text-3xl font-bold text-green-600 tracking-widest"
//               initial={{ opacity: 0, letterSpacing: "0.5em" }}
//               animate={{ opacity: 1, letterSpacing: "1em" }}
//               transition={{ duration: 1.2, ease: "easeOut" }}
//             >
//               WELCOME
//             </motion.h1>
//           </motion.div>
//         ) : (
//           // 🌿 Main Content
//           <motion.div
//             key="content"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <Navbar />
//             <Hero />
//             <Stats />
//             <Skills />
//             <Projects />
//             <Testimonials />
//             <Contact />
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import { motion, AnimatePresence } from "framer-motion";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500); // 3.5s loader
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <AnimatePresence mode="wait">
        {loading ? (
          // 🌈 Complex Loader Screen
          <motion.div
            key="loader"
            className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-green-200 via-white to-green-100 z-50 overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Animated Background Gradient */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-green-400 via-pink-400 to-yellow-300 blur-3xl opacity-40"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Outer Glow Circle */}
            <motion.div
              className="absolute w-80 h-80 rounded-full border-[8px] border-transparent"
              style={{
                borderTopColor: "#16a34a",
                borderRightColor: "#eab308",
              }}
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 5,
              }}
            />

            {/* Middle Ring */}
            <motion.div
              className="absolute w-60 h-60 rounded-full border-[6px] border-transparent"
              style={{
                borderTopColor: "#b02757",
                borderRightColor: "#16a34a",
              }}
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 3.5,
              }}
            />

            {/* Inner Core */}
            <motion.div
              className="absolute w-36 h-36 rounded-full border-[4px] border-transparent"
              style={{
                borderTopColor: "#1c223d",
                borderRightColor: "#22c55e",
              }}
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 2.5,
              }}
            />

            {/* Pulsating Glow */}
            <motion.div
              className="absolute w-24 h-24 rounded-full bg-green-400 blur-2xl opacity-70"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.6, 0.9, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* “WELCOME” Text Animation */}
            <motion.h1
              className="relative text-5xl font-extrabold text-green-700 tracking-[0.3em] mt-64"
              initial={{ opacity: 0, y: 40 }}
              animate={{
                opacity: [0, 1, 1],
                y: [40, 0, 0],
                textShadow: [
                  "0 0 0px #16a34a",
                  "0 0 15px #16a34a",
                  "0 0 5px #16a34a",
                ],
              }}
              transition={{
                duration: 1.6,
                ease: "easeOut",
                delay: 0.5,
              }}
            >
              WELCOME
            </motion.h1>

            {/* Subtext */}
            <motion.p
              className="text-gray-700 mt-3 tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.9] }}
              transition={{
                duration: 1.5,
                delay: 1.2,
              }}
            >
              Loading your portfolio...
            </motion.p>
          </motion.div>
        ) : (
          // 🌿 Main Content
          <motion.div
            key="content"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Navbar />
            <Hero />
            <Stats />
            <Skills />
            <Projects />
            <Testimonials />
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
