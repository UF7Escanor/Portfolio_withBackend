import React from "react";
import { motion } from "framer-motion";

interface ReviewCardProps {
  image: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -500 }} // starts offscreen (left)
      animate={{ opacity: 1, x: 0 }} // moves to normal position
      transition={{
        duration: 1.2,
        ease: "linear", // smooth non-bouncy motion
      }}
      className="relative z-10 w-[260px] h-[260px] rounded-lg bg-green-200 shadow-lg flex flex-col items-center justify-center overflow-hidden transition-transform hover:-translate-y-2 duration-300"
    >
      <img
        src={image}
        alt={image}
        className="w-full h-full overflow-hidden object-cover border-4 border-black shadow-sm"
      />
      {/* <p className="font-semibold text-gray-800">{name}</p> */}
    </motion.div>
  );
};

export default ReviewCard;
