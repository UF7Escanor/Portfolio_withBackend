// import React from "react";
// import { motion } from "framer-motion";

// interface ReviewCardProps {
//   image: string;
// }

// const ReviewCard: React.FC<ReviewCardProps> = ({ image }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -200 }} // starts offscreen (left)
//       animate={{ opacity: 1, x: 1 }} // moves to normal position
//       transition={{
//         duration: 1.2,
//         ease: "backIn", // smooth non-bouncy motion
//       }}
//       className="relative z-10 w-[260px] h-[260px] rounded-lg bg-green-200 shadow-lg flex flex-col items-center justify-center overflow-hidden transition-transform hover:-translate-y-2 duration-300"
//     >
//       <img
//         src={image}
//         alt={image}
//         className="w-full h-full overflow-hidden object-cover border-4 border-collapse shadow-sm"
//       />
//       {/* <p className="font-semibold text-gray-800">{name}</p> */}
//     </motion.div>
//   );
// };

// export default ReviewCard;
// import React from "react";
// import { motion } from "framer-motion";

// interface ReviewCardProps {
//   image: string;
// }

// const ReviewCard: React.FC<ReviewCardProps> = ({ image }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -800, scale: 0.95 }}
//       animate={{ opacity: 1, x: 0, scale: 1 }}
//       transition={{
//         duration: 3,
//         ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier
//       }}
//       className="relative z-10 w-[260px] h-[260px] rounded-xl bg-green-200 shadow-lg flex flex-col items-center justify-center overflow-hidden transform-gpu will-change-transform hover:-translate-y-2 hover:shadow-2xl transition-transform duration-300"
//     >
//       <motion.img
//         src={image}
//         alt="Review"
//         className="w-full h-full object-cover border-4 border-green-300 shadow-inner"
//         loading="lazy"
//         whileHover={{ scale: 1.05 }}
//         transition={{ type: "spring", stiffness: 200, damping: 20 }}
//       />
//     </motion.div>
//   );
// };

// export default ReviewCard;
// import React from "react";
// import { motion } from "framer-motion";

// interface ReviewCardProps {
//   image: string;
// }

// const ReviewCard: React.FC<ReviewCardProps> = ({ image }) => {
//   return (
//     <motion.div
//       className="relative flex items-center justify-center"
//       initial={{ opacity: 0, scale: 0.8 }}
//       animate={{
//         opacity: 1,
//         scale: [1, 1.05, 1],
//         y: [0, -8, 0],
//       }}
//       transition={{
//         duration: 4,
//         ease: "easeInOut",
//         repeat: Infinity,
//       }}
//     >
//       {/* Glowing ring effect */}
//       <motion.div
//         className="absolute w-[270px] h-[270px] rounded-full bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600 blur-lg opacity-60"
//         animate={{
//           scale: [1, 1.1, 1],
//           opacity: [0.6, 0.9, 0.6],
//         }}
//         transition={{
//           duration: 4,
//           ease: "easeInOut",
//           repeat: Infinity,
//         }}
//       />

//       {/* Circular image container */}
//       <div className="relative w-[260px] h-[260px] rounded-full overflow-hidden border-[4px] border-blue-500 shadow-2xl">
//         <motion.img
//           src={image}
//           alt="Profile"
//           className="w-full h-full object-cover rounded-full"
//           whileHover={{
//             scale: 1.05,
//             rotate: 1,
//           }}
//           transition={{
//             type: "spring",
//             stiffness: 150,
//             damping: 10,
//           }}
//         />
//       </div>

//       {/* Small floating dots */}
//       <motion.div
//         className="absolute bottom-4 left-4 w-3 h-3 bg-blue-400 rounded-full"
//         animate={{ y: [0, -8, 0], opacity: [0.8, 1, 0.8] }}
//         transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
//       />
//       <motion.div
//         className="absolute top-4 right-5 w-2 h-2 bg-indigo-400 rounded-full"
//         animate={{ y: [0, 6, 0], opacity: [0.7, 1, 0.7] }}
//         transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity }}
//       />
//     </motion.div>
//   );
// };

// export default ReviewCard;

import React from "react";
import { motion } from "framer-motion";

interface ReviewCardProps {
  image: string;
}

const bubbles = Array.from({ length: 8 }); // total bubble count

const ReviewCard: React.FC<ReviewCardProps> = ({ image }) => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Glowing aura */}
      <motion.div
        className="absolute w-[270px] h-[270px] rounded-full 0 blur-xl opacity-60"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 50,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* Floating main image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={{
          opacity: 1,
          scale: [1, 1.03, 1],
          y: [0, -8, 0],
        }}
        className="relative w-[260px] h-[260px] rounded-full overflow-hidden border-2 border-green-400 shadow-2xl "
      >
        <motion.img
          src={image}
          alt="Profile"
          className="w-full h-full object-cover rounded-full"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 150, damping: 10 }}
        />
      </motion.div>

      {/* Animated random bubbles */}
      {bubbles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-green-300/60 backdrop-blur-sm"
          style={{
            width: Math.random() * 12 + 6,
            height: Math.random() * 12 + 6,
            left: `${Math.random() * 100}%`,
            bottom: `${Math.random() * 60}px`,
          }}
          animate={{
            y: [0, -150 - Math.random() * 100],
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.8],
          }}
          transition={{
            duration: Math.random() * 5 + 4,
            ease: "easeInOut",
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
};

export default ReviewCard;
