// import { motion } from "framer-motion";
// import type { IconType } from "react-icons";
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
// } from "react-icons/si";

// /* ------------------ Types ------------------ */
// type IconItem = {
//   name: string;
//   icon: IconType;
// };

// /* ------------------ Component ------------------ */
// export default function FooterTechMarquee() {
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
//   ];

//   return (
//     <footer className="fixed right-0 top-1/2 -translate-y-1/2 h-120 rounded-2xl  border-2 bg-black overflow-hidden flex ">
//       <motion.div
//         className="flex flex-col"
//         animate={{ y: [0, "-150.333%"] }}
//         transition={{
//           duration: 20,
//           ease: "linear",
//           repeat: Infinity,
//           repeatType: "loop",
//         }}
//       >
//         {/* Triple set to always fill viewport */}
//         {[0, 1, 2].map((set) => (
//           <div key={set} className="flex flex-col gap-10">
//             {items.map((item, index) => (
//               <div
//                 key={`${set}-${index}`}
//                 className="flex flex-col items-center text-teal-400"
//               >
//                 <item.icon className="text-4xl" />
//                 <span className="mt-1 text-xs opacity-80">{item.name}</span>
//               </div>
//             ))}
//           </div>
//         ))}
//       </motion.div>
//     </footer>
//   );
// }

// import { motion } from "framer-motion";
// import type { IconType } from "react-icons";
// import { useEffect, useState } from "react";
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
// import { RefObject } from "react";

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
//   const [isSkillsInView, setIsSkillsInView] = useState(false);
//   const [collapsedByScroll, setCollapsedByScroll] = useState(false);

//   useEffect(() => {
//     let observedEl: Element | null = null;
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsSkillsInView(entry.isIntersecting);
//       },
//       // much tighter detection: require ~95% of the small target visible
//       { root: null, rootMargin: "100px", threshold: 0.95 }
//     );

//     if (skillsRef && skillsRef.current) {
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

//   // collapse expanded grid when the user does any small scroll/wheel while it's open
//   useEffect(() => {
//     if (!isSkillsInView) {
//       // reset when not in view
//       setCollapsedByScroll(false);
//       return;
//     }

//     const onWheel = (e: WheelEvent) => {
//       if (Math.abs(e.deltaY) > 20) setCollapsedByScroll(true);
//     };

//     const onTouch = () => setCollapsedByScroll(true);

//     window.addEventListener("wheel", onWheel, { passive: true });
//     window.addEventListener("touchmove", onTouch, { passive: true });

//     return () => {
//       window.removeEventListener("wheel", onWheel);
//       window.removeEventListener("touchmove", onTouch);
//     };
//   }, [isSkillsInView]);

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

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.12,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, scale: 0.8, y: 20 },
//     visible: { opacity: 1, scale: 1, y: 0 },
//   };

//   return (
//     <footer
//       className={`fixed right-6
//         rounded-2xl border-2 bg-black text-teal-400
//         transition-all duration-500
//         ${
//           isSkillsInView
//             ? "w-100 p-8 h-100 top-1/2 -translate-y-1/2 mr-50"
//             : "w-24 h-120 overflow-hidden top-1/2 -translate-y-1/2"
//         }
//       `}
//     >
//       {/* ---------- GRID MODE ---------- */}
//       {isSkillsInView ? (
//         <motion.div
//           className="grid grid-cols-4 gap-11 place-items-center mt-8"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {items.map((item, index) => (
//             <motion.div
//               key={index}
//               className="flex flex-col items-center"
//               variants={itemVariants}
//               whileHover={{ scale: 1.1 }}
//             >
//               <item.icon className="text-4xl" />
//               <span className="mt-1 text-xs bg-green-300 ">{item.name}</span>
//             </motion.div>
//           ))}
//         </motion.div>
//       ) : (
//         <motion.div
//           className="flex flex-col"
//           // animate={{ y: [0, "40.333%"] }}
//           transition={{
//             duration: 1,
//             ease: "backInOut",
//             repeat: Infinity,
//             repeatType: "loop",
//           }}
//         >
//           {/* Triple set to always fill viewport */}
//           {[0, 1, 2].map((set) => (
//             <div key={set} className="flex flex-col gap-10">
//               {items.map((item, index) => (
//                 <div
//                   key={`${set}-${index}`}
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

import { motion } from "framer-motion";
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

  useEffect(() => {
    let observedEl: Element | null = null;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSkillsInView(entry.isIntersecting);
      },
      { root: null, rootMargin: "100px", threshold: 0.95 }
    );

    if (skillsRef?.current) {
      observedEl = skillsRef.current;
      observer.observe(observedEl);
    } else {
      observedEl = document.getElementById("skills");
      if (observedEl) observer.observe(observedEl);
    }

    return () => {
      if (observedEl) observer.unobserve(observedEl);
      observer.disconnect();
    };
  }, [skillsRef]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        opacity: { delay: 0.5, duration: 0.3 },
      },
    },
  };
  return (
    <footer
      className={`fixed right-6
        rounded-2xl border-2 bg-black
        transition-all duration-500
        ${
          isSkillsInView
            ? "w-100 p-8 h-100 top-1/2 -translate-y-1/2 mr-50"
            : "w-16 h-120 overflow-hidden top-1/2 -translate-y-1/2"
        }
      `}
    >
      {/* ---------- GRID MODE ---------- */}
      {isSkillsInView ? (
        <motion.div
          className="grid grid-cols-4 gap-11 place-items-center mt-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {items.map((item) => (
            <motion.div
              key={item.name}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center"
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
            >
              <div className="text-teal-400">
                <item.icon className="text-4xl" />
                <span className="mt-1 text-xs ">{item.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          className="flex flex-col"
          animate={{ y: ["0%", "-40%"] }}
          transition={{
            duration: 12,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[0, 1, 2].map((set) => (
            <div key={set} className="flex flex-col gap-10">
              {items.map((item) => (
                <div
                  key={`${set}-${item.name}`}
                  className="flex flex-col items-center text-teal-400"
                >
                  <item.icon className="text-4xl" />
                  <span className="mt-1 text-xs opacity-80">{item.name}</span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      )}
    </footer>
  );
}
