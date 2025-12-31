// import BoxCard from "./BoxCard";

// interface Skill {
//   title: string;
//   description: string;
// }

// const Skills: React.FC = () => {
//   const skills: Skill[] = [
//     {
//       title: "Visual Design",
//       description:
//         "I craft clean, modern, and visually appealing interfaces that balance creativity with usability.",
//     },
//     {
//       title: "UX Research",
//       description:
//         "I understand user behavior through data-driven insights, research, and testing.",
//     },
//     {
//       title: "Design Prototyping",
//       description: "I use tools like Figma to translate ideas ",
//     },
//   ];

//   return (
//     <div className="min-h-screen border-neon-foreground/10 mx-40 ">
//       <section className="pb-16 pt-30 px-10 " id="skills">
//         <h2 className="text-3xl font-bold mb-6">
//           Why Hire Me For Your Next{" "}
//           <span className="text-green-600">Project?</span>
//         </h2>
//         <p className=" mb-10 max-w-2xl">
//           I’m a passionate{" "}
//           <span className="text-green-600 font-semibold">UI/UX Designer</span>{" "}
//           and
//           <span className="text-green-600 font-semibold">
//             {" "}
//             Frontend Developer
//           </span>{" "}
//           with a strong foundation in modern web technologies such as{" "}
//           <span className="font-semibold text-green-600">JavaScript</span>,{" "}
//           <span className="font-semibold text-green-600">TypeScript</span>,{" "}
//           <span className="font-semibold text-green-600">React</span>,{" "}
//           <span className="font-semibold text-green-600">Next.js</span>,{" "}
//           <span className="font-semibold text-green-600">Node.js</span>, and{" "}
//           {/* <span className="font-semibold text-green-600">MongoDB</span>. I bring
//           together design and development skills to build interfaces that are
//           both visually engaging and technically robust. */}
//         </p>

//         <div className="flex flex-col md:flex-row justify-between ">
//           <div className="mr-12 ml-10 mt-40">
//             <BoxCard />
//           </div>
//           <div>
//             {skills.map((skill, i) => (
//               <div
//                 key={i}
//                 className="py-8 w-120 bg-white shadow-8xl p-6 rounded-xl hover:shadow-lg transition mt-4 max-w-xl hover:-translate-y-1 duration-300 shadow-black hover:border-b-4 border-green-500 hover:border-r-4"
//               >
//                 <h3 className="font-semibold text-xl mb-2 text-gray-800">
//                   {skill.title}
//                 </h3>
//                 <p className="text-gray-600">{skill.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Skills;

// import BoxCard from "./BoxCard";

// interface Skill {
//   title: string;
//   description: string;
// }

// const Skills: React.FC = () => {
//   return (
//     <div className="min-h-screen border-neon-foreground/10 mx-40 ">
//       <section className="pb-16 pt-30 px-10 " id="skills">
//         <div className="mr-12 ml-10 mt-40">
//           <BoxCard />
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Skills;

// import { motion } from "framer-motion";

// const BoxCard = () => {
//   return (
//     <motion.div
//       className="fixed w-32 h-32 bg-blue-600 text-white flex items-center justify-center rounded-lg"
//       initial={{ x: "0vw", y: "0vh" }}
//       animate={{
//         x: ["0vw", "calc(100vw - 8rem)", "calc(100vw - 8rem)", "0vw", "0vw"],
//         y: ["0vh", "0vh", "calc(100vh - 8rem)", "calc(100vh - 8rem)", "0vh"],
//       }}
//       transition={{
//         duration: 10,
//         ease: "linear",
//         repeat: Infinity,
//       }}
//     >
//       BoxCard
//     </motion.div>
//   );
// };

// export default BoxCard;

import { motion } from "framer-motion";
import BoxCard from "./BoxCard";
import { useRef } from "react";

const Skills = () => {
  const skillsRef = useRef(null);
  return (
    <div
      id="skills"
      className="relative h-screen w-full  flex items-center justify-center"
    >
      {/* Parent is visible and centered */}
      <div ref={skillsRef} className=" sm:none md:h-5  "></div>
      <motion.div
        className="w-32 h-32 bg-blue-600 text-white flex items-center justify-center rounded-lg"
        initial={{ x: -900 }} // start slightly to the RIGHT
        animate={{ x: -300 }} // move to the LEFT
        transition={{
          duration: 3,
          ease: "easeInOut",
        }}
      >
        <BoxCard />
      </motion.div>
    </div>
  );
};

export default Skills;
