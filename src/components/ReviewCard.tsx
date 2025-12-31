// import React from "react";
// import { motion } from "framer-motion";

// interface ReviewCardProps {
//   image: string;
// }

// const bubbles = Array.from({ length: 8 }); // total bubble count

// const ReviewCard: React.FC<ReviewCardProps> = ({ image }) => {
//   return (
//     <div className="relative flex items-center justify-center">
//       {/* Glowing aura */}
//       <motion.div
//         className="absolute w-[270px] h-[270px] rounded-full 0 blur-xl opacity-60"
//         animate={{
//           scale: [1, 1.08, 1],
//           opacity: [0.6, 0.9, 0.6],
//         }}
//         transition={{
//           duration: 1000,
//           ease: "easeInOut",
//           repeat: Infinity,
//         }}
//       />

//       {/* Floating main image */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9, y: 30 }}
//         animate={{
//           opacity: 1,
//           scale: [1, 1.03, 1],
//           y: [0, 0, 0],
//         }}
//         className="relative w-[260px] h-[260px] rounded-full overflow-hidden border-4 border-green-500 shadow-2xl "
//       >
//         <motion.img
//           src={image}
//           alt="Profile"
//           className="w-full h-full object-cover rounded-full"
//           whileHover={{ scale: 1.05 }}
//           transition={{ type: "spring", stiffness: 150, damping: 10 }}
//         />
//       </motion.div>

//       {/* Animated random bubbles */}
//       {bubbles.map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute rounded-full bg-green-300/60 backdrop-blur-sm"
//           style={{
//             width: Math.random() * 12 + 6,
//             height: Math.random() * 12 + 6,
//             left: `${Math.random() * 100}%`,
//             bottom: `${Math.random() * 60}px`,
//           }}
//           animate={{
//             y: [0, -150 - Math.random() * 100],
//             opacity: [0, 1, 0],
//             scale: [0.5, 1.2, 0.8],
//           }}
//           transition={{
//             duration: Math.random() * 5 + 4,
//             ease: "easeInOut",
//             repeat: Infinity,
//             delay: Math.random() * 3,
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default ReviewCard;

// import React, { useMemo, useState } from "react";
// import { motion } from "framer-motion";

// interface ReviewCardProps {
//   image: string;
// }

// // keep same count
// const BUBBLE_COUNT = 8;

// const ReviewCard: React.FC<ReviewCardProps> = ({ image }) => {
//   const [loaded, setLoaded] = useState(false);

//   // 🔒 freeze random values (NO UI CHANGE)
//   const bubbles = useMemo(
//     () =>
//       Array.from({ length: BUBBLE_COUNT }).map(() => ({
//         size: Math.random() * 12 + 6,
//         left: `${Math.random() * 100}%`,
//         bottom: `${Math.random() * 60}px`,
//         rise: -150 - Math.random() * 100,
//         duration: Math.random() * 5 + 4,
//         delay: Math.random() * 3,
//       })),
//     []
//   );

//   return (
//     <div className="relative flex items-center justify-center">
//       {/* Glowing aura (UNCHANGED UI) */}
//       <motion.div
//         className="absolute w-[270px] h-[270px] rounded-full blur-xl opacity-60"
//         animate={{
//           scale: [1, 1.08, 1],
//           opacity: [0.6, 0.9, 0.6],
//         }}
//         transition={{
//           duration: 10, // ⚠️ was 1000 seconds
//           ease: "easeInOut",
//           repeat: Infinity,
//         }}
//       />

//       {/* Floating main image (TOP ↕ DOWN smooth) */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9, y: -1000 }}
//         animate={
//           loaded
//             ? {
//                 opacity: 1,
//                 scale: [1, 1.03, 1],
//                 y: [-1000, 0], // top → down
//               }
//             : {}
//         }
//         transition={{
//           y: {
//             duration: 6, // ⏳ slower = increase
//             ease: "easeInOut",
//             repeat: Infinity,
//             repeatType: "reverse",
//           },
//           scale: {
//             duration: 4,
//             repeat: Infinity,
//             ease: "easeInOut",
//           },
//         }}
//         className="relative w-[260px] h-[260px] rounded-full overflow-hidden border-4 border-green-500 shadow-2xl"
//       >
//         <img
//           src={image}
//           alt="Profile"
//           loading="lazy"
//           decoding="async"
//           onLoad={() => setLoaded(true)}
//           className="w-full h-full object-cover rounded-full"
//         />
//       </motion.div>

//       {/* Floating bubbles (SAME LOOK, smoother) */}
//       {bubbles.map((b, i) => (
//         <motion.div
//           key={i}
//           className="absolute rounded-full bg-green-300/60 backdrop-blur-sm"
//           style={{
//             width: b.size,
//             height: b.size,
//             left: b.left,
//             bottom: b.bottom,
//           }}
//           animate={{
//             y: [0, b.rise],
//             opacity: [0, 1, 0],
//             scale: [0.5, 1.2, 0.8],
//           }}
//           transition={{
//             duration: b.duration,
//             ease: "easeInOut",
//             repeat: Infinity,
//             delay: b.delay,
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default ReviewCard;

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

interface ReviewCardProps {
  image: string;
}

// keep same count
const BUBBLE_COUNT = 8;

const ReviewCard: React.FC<ReviewCardProps> = ({ image }) => {
  const [loaded, setLoaded] = useState(false);

  // 🔒 freeze random values (NO UI CHANGE)
  const bubbles = useMemo(
    () =>
      Array.from({ length: BUBBLE_COUNT }).map(() => ({
        size: Math.random() * 20 + 6,
        left: `${Math.random() * 100}%`,
        bottom: `${Math.random() * 70}px`,
        rise: -150 - Math.random() * 100,
        duration: Math.random() * 5 + 4,
        delay: Math.random() * 3,
      })),
    []
  );

  return (
    <div className="relative flex items-center justify-center">
      {/* Glowing aura */}
      <motion.div
        className="absolute w-[270px] h-[270px] rounded-full blur-xl opacity-60"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 10,
          ease: "anticipate",
          repeat: Infinity,
        }}
      />

      {/* Floating main image — TOP/DOWN removed */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={
          loaded
            ? {
                opacity: 1,
                scale: [1, 1.03, 1],
              }
            : {}
        }
        transition={{
          scale: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="relative w-[260px] h-[260px] rounded-full overflow-hidden border-4 border-green-500 shadow-2xl"
      >
        {/* <img
          src={image}
          alt="Profile"
          loading="lazy"
          decoding="async"
          onLoad={() => setLoaded(true)}
          className="w-full h-full object-cover rounded-full"
        /> */}
      </motion.div>

      {/* Floating bubbles */}
      {bubbles.map((b, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-green-300/60 backdrop-blur-sm"
          style={{
            width: b.size,
            height: b.size,
            left: b.left,
            bottom: b.bottom,
          }}
          animate={{
            y: [0, b.rise],
            opacity: [0, 1, 0],
            scale: [0.9, 1.2, 0.8],
          }}
          transition={{
            duration: b.duration,
            ease: "easeInOut",
            repeat: Infinity,
            delay: b.delay,
          }}
        />
      ))}
    </div>
  );
};

export default ReviewCard;
