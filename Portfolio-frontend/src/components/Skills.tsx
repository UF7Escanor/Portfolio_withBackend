// import { motion } from "framer-motion";
// import { useRef } from "react";
// import BoxCard from "./BoxCard";
// import RandomTitle from "./RandomTitle";

// const Skills = () => {
//   const skillsRef = useRef(null);
//   return (
//     <div
//       id="skills"
//       className="relative h-screen w-full  flex items-center justify-center"
//     >
//       <RandomTitle title="Skills" description="Skills I worked on" />

//       {/* Parent is visible and centered */}
//       <div ref={skillsRef} className=" sm:none md:h-5  "></div>
//       <motion.div
//         className="w-32 h-32 bg-blue-600 text-white flex items-center justify-center rounded-lg"
//         initial={{ x: -900 }} // start slightly to the RIGHT
//         animate={{ x: -300 }} // move to the LEFT
//         transition={{
//           duration: 3,
//           ease: "easeInOut",
//         }}
//       >
//         <BoxCard />
//       </motion.div>
//     </div>
//   );
// };

// export default Skills;

import { motion } from "framer-motion";
import BoxCard from "./BoxCard";

const Skills = () => {
  return (
    <div>
      <section
        id="skills"
        className="relative min-h-screen w-full flex flex-col items-center justify-center px-4"
      >
        {/* Title */}

        {/* Skills Card */}
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <BoxCard />
        </motion.div>
      </section>
    </div>
  );
};

export default Skills;
