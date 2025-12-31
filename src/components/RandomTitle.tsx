import { motion } from "framer-motion";

type portfolioProps = {
  title: string;
  description: string;
};

const RandomTitle = ({ title, description }: portfolioProps) => {
  return (
    <div className="w-screen pt-10 flex flex-col items-center overflow-hidden">
      {/* Small title */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="text-sm uppercase tracking-widest text-teal-400 "
      >
        {title}
      </motion.p>

      {/* Main title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: false }}
        className="text-4xl md:text-4xl font-bold text-white text-center"
      >
        {description}
      </motion.h2>

      {/* Underline */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 150, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: false }}
        className="h-1 bg-teal-400 mt-4 rounded-full "
      />
    </div>
  );
};

export default RandomTitle;
