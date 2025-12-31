// import { motion } from "framer-motion";
// import type { IconType } from "react-icons";
// import { useEffect, useState, RefObject } from "react";
// import {
//   SiHtml5,
//   SiCss3,
//   SiJavascript,
//   SiTypescript,
//   SiReact,
//   SiNextdotjs,
//   SiTailwindcss,
//   SiNodedotjs,
//   SiGit,
//   SiGithub,
//   SiDocker,
//   SiRedux,
// } from "react-icons/si";

// /* ------------------ Types ------------------ */
// type IconItem = {
//   name: string;
//   icon: IconType;
// };

// type Props = {
//   skillsRef?: RefObject<HTMLElement>;
// };

// /* ------------------ Component ------------------ */
// export default function FooterTechMarquee({ skillsRef }: Props) {
//   const items: IconItem[] = [
//     { name: "HTML5", icon: SiHtml5 },
//     { name: "CSS3", icon: SiCss3 },
//     { name: "JavaScript", icon: SiJavascript },
//     { name: "TypeScript", icon: SiTypescript },
//     { name: "React", icon: SiReact },
//     { name: "Next.js", icon: SiNextdotjs },
//     { name: "Tailwind", icon: SiTailwindcss },
//     { name: "Node.js", icon: SiNodedotjs },
//     { name: "Git", icon: SiGit },
//     { name: "GitHub", icon: SiGithub },
//     { name: "Docker", icon: SiDocker },
//     { name: "Redux", icon: SiRedux },
//   ];
//   const [isSkillsInView, setIsSkillsInView] = useState(false);

//   useEffect(() => {
//     let observedEl: Element | null = null;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsSkillsInView(entry.isIntersecting);
//       },
//       { root: null, rootMargin: "100px", threshold: 0.95 }
//     );

//     if (skillsRef?.current) {
//       observedEl = skillsRef.current;
//       observer.observe(observedEl);
//     } else {
//       observedEl = document.getElementById("skills");
//       if (observedEl) observer.observe(observedEl);
//     }

//     return () => {
//       if (observedEl) observer.unobserve(observedEl);
//       observer.disconnect();
//     };
//   }, [skillsRef]);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       // transition: { staggerChildren: 0.12 },
//     },
//   };

//   const itemVariants = {
//     hidden: {
//       opacity: 0,
//     },
//     visible: {
//       opacity: 1,
//       // scale: 1,
//       // y: 0,
//       transition: {
//         opacity: { delay: 0.5, duration: 0.3 },
//       },
//     },
//   };
//   return (
//     <footer
//       className={`fixed right-6
//         rounded-2xl border-2 bg-black
//         transition-all duration-500
//         ${
//           isSkillsInView
//             ? "w-100 p-8 h-100 top-1/2 -translate-y-1/2 mr-50"
//             : "w-16 h-120 overflow-hidden top-1/2 -translate-y-1/2"
//         }
//       `}
//     >
//       {/* ---------- GRID MODE ---------- */}
//       {isSkillsInView ? (
//         <motion.div
//           className="grid grid-cols-4 gap-11 place-items-center mt-9"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {items.map((item) => (
//             <motion.div
//               key={item.name}
//               initial="hidden"
//               animate="visible"
//               className="flex flex-col items-center"
//               variants={itemVariants}
//               // whileHover={{ scale: 1.1 }}
//             >
//               <div className="text-teal-400 flex items-center text-center">
//                 <item.icon className="text-4xl " />
//                 <span className="mt-12 text-xs  ">{item.name}</span>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       ) : (
//         <motion.div
//           className="flex flex-col"
//           animate={{ y: ["0%", "-40%"] }}
//           transition={{
//             duration: 12,
//             ease: "linear",
//             repeat: Infinity,
//           }}
//         >
//           {[0, 1, 2].map((set) => (
//             <div key={set} className="flex flex-col gap-10">
//               {items.map((item) => (
//                 <div
//                   key={`${set}-${item.name}`}
//                   className="flex flex-col items-center text-teal-400"
//                 >
//                   <item.icon className="text-4xl" />
//                   <span className="mt-1 text-xs opacity-80">{item.name}</span>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </motion.div>
//       )}
//     </footer>
//   );
// }

import { motion, type Variants } from "framer-motion";
import type { IconType } from "react-icons";
import { useEffect, useState, RefObject } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiGit,
  SiGithub,
  SiDocker,
  SiRedux,
} from "react-icons/si";

/* ------------------ Types ------------------ */
type IconItem = {
  name: string;
  icon: IconType;
};

type Props = {
  skillsRef?: RefObject<HTMLElement>;
};

/* ------------------ Variants ------------------ */
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",

      opacity: { delay: 0.5, duration: 0.3 },
    },
  },
};

/* ------------------ Component ------------------ */
export default function FooterTechMarquee({ skillsRef }: Props) {
  const items: IconItem[] = [
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: SiCss3 },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Docker", icon: SiDocker },
    { name: "Redux", icon: SiRedux },
  ];

  const [isSkillsInView, setIsSkillsInView] = useState(false);

  /* ---------- Intersection Observer ---------- */
  useEffect(() => {
    let observedEl: Element | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => setIsSkillsInView(entry.isIntersecting),
      {
        root: null,
        rootMargin: "100px",
        threshold: 0.6,
      }
    );

    observedEl = skillsRef?.current ?? document.getElementById("skills");
    if (observedEl) observer.observe(observedEl);

    return () => {
      if (observedEl) observer.unobserve(observedEl);
      observer.disconnect();
    };
  }, [skillsRef]);

  return (
    <footer
      className={`fixed right-1 md:right-6 top-1/2 -translate-y-1/2
        rounded-2xl border-2 bg-black
        transition-all duration-500
        ${
          isSkillsInView
            ? " w-[380px] md:p-8  md:mr-[250px] "
            : "w-16 h-[440px] overflow-hidden"
        }
      `}
    >
      {/* ---------- GRID MODE (VISIBLE IN VIEW) ---------- */}
      <motion.div
        className="grid grid-cols-4 gap-10 place-items-center"
        variants={containerVariants}
        initial="hidden"
        animate={isSkillsInView ? "visible" : "hidden"}
      >
        {items.map((item) => (
          <motion.div
            key={item.name}
            variants={itemVariants}
            className="flex flex-col items-center h-[90px]"
          >
            <item.icon className="text-4xl text-teal-400" />
            <span className="mt-2 text-xs text-teal-400">{item.name}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* ---------- MARQUEE MODE (OUT OF VIEW) ---------- */}
      <motion.div
        className={`absolute inset-0 flex flex-col items-center gap-10
          ${isSkillsInView ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
        animate={{ y: ["0%", "-40%"] }}
        transition={{
          duration: 10,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {[0, 1].map((set) => (
          <div key={set} className="flex flex-col gap-6">
            {items.map((item) => (
              <div
                key={`${set}-${item.name}`}
                className="flex flex-col items-center h-[90px] text-teal-400"
              >
                <item.icon className="text-4xl" />
                <span className="mt-2 text-xs opacity-80">{item.name}</span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </footer>
  );
}
