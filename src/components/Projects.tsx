// import React from "react";

// interface Project {
//   title: string;
//   description: string;
//   image: string;
// }

// const Projects: React.FC = () => {
//   const projects: Project[] = [
//     {
//       title: "App UI Design",
//       description:
//         "Creative mobile app interfaces designed with modern UX principles.",
//       image: "/project1.png",
//     },
//     {
//       title: "Website Redesign",
//       description:
//         "Transforming old websites into modern and responsive designs.",
//       image: "/project2.png",
//     },
//     {
//       title: "Dashboard Concept",
//       description:
//         "Minimal dashboard design focused on usability and visual balance.",
//       image: "/project3.png",
//     },
//   ];

//   return (
//     <section id="portfolio" className="py-16 px-10 bg-gray-50">
//       <div className="flex flex-col md:flex-row justify-between items-center mb-10">
//         <div>
//           <p className="text-green-500 font-semibold">Portfolio</p>
//           <h2 className="text-3xl font-bold">
//             My Creative Works Latest{" "}
//             <span className="text-green-600">Projects</span>
//           </h2>
//           <p className="text-gray-600 mt-2 max-w-md">
//             I have selected and mentioned here some of my latest projects for
//             design inspiration.
//           </p>
//         </div>
//         <button className="bg-green-600 text-white px-6 py-2 mt-6 md:mt-0 rounded-md hover:bg-green-700 transition">
//           Show More
//         </button>
//       </div>

//       <div className="grid md:grid-cols-3 gap-6">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
//           >
//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-5">
//               <h3 className="font-semibold text-lg">{project.title}</h3>
//               <p className="text-gray-600 mt-2">{project.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Projects;

// import React from "react";
// import { motion } from "framer-motion";

// interface Project {
//   title: string;
//   description: string;
//   image: string;
// }

// const Projects: React.FC = () => {
//   const projects: Project[] = [
//     {
//       title: "App UI Design",
//       description:
//         "Creative mobile app interfaces designed with modern UX principles.",
//       image: "/project1.png",
//     },
//     {
//       title: "Website Redesign",
//       description:
//         "Transforming old websites into modern and responsive designs.",
//       image: "/project2.png",
//     },
//     {
//       title: "Dashboard Concept",
//       description:
//         "Minimal dashboard design focused on usability and visual balance.",
//       image: "/project3.png",
//     },
//   ];

//   // ===== Framer Motion Variants =====
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.3, // delay each child by 0.3s
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, x: -80 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: {
//         type: "spring",
//         stiffness: 80,
//         damping: 15,
//       },
//     },
//   };

//   return (
//     <section id="portfolio" className="py-16 px-10 bg-gray-50">
//       {/* Header Section */}
//       <div className="flex flex-col md:flex-row justify-between items-center mb-10">
//         <div>
//           <p className="text-green-500 font-semibold">Portfolio</p>
//           <h2 className="text-3xl font-bold">
//             My Creative Works Latest{" "}
//             <span className="text-green-600">Projects</span>
//           </h2>
//           <p className="text-gray-600 mt-2 max-w-md">
//             I have selected and mentioned here some of my latest projects for
//             design inspiration.
//           </p>
//         </div>

//         <button className="bg-green-600 text-white px-6 py-2 mt-6 md:mt-0 rounded-md hover:bg-green-700 transition">
//           Show More
//         </button>
//       </div>

//       {/* ===== Animated Projects Grid ===== */}
//       <motion.div
//         className="grid md:grid-cols-3 gap-6"
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }} // triggers when 20% visible
//       >
//         {projects.map((project, index) => (
//           <motion.div
//             key={index}
//             variants={cardVariants}
//             className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
//           >
//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-5">
//               <h3 className="font-semibold text-lg">{project.title}</h3>
//               <p className="text-gray-600 mt-2">{project.description}</p>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default Projects;

import React from "react";
import { motion, type Variants } from "framer-motion";
import dashboard from "../assets/dashboard.jpg";
import website from "../assets/website.png";
import mobile from "../assets/mobileUi.png";

interface Project {
  title: string;
  description: string;
  image: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "App UI Design",
      description:
        "Creative mobile app interfaces designed with modern UX principles.",
      image: mobile,
    },
    {
      title: "Website Redesign",
      description:
        "Transforming old websites into modern and responsive designs.",
      image: website,
    },
    {
      title: "Dashboard Concept",
      description:
        "Minimal dashboard design focused on usability and visual balance.",
      image: dashboard,
    },
  ];

  // Container (staggered children)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        ease: "easeInOut",
      },
    },
  };

  // Card animation (smoother motion)
  const cardVariants: Variants = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 60, // lower stiffness for smoother motion
        damping: 20,
      },
    },
  };

  return (
    <section id="portfolio" className="py-16 px-10 bg-gray-50">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <div>
          <p className="text-green-500 font-semibold">Portfolio</p>
          <h2 className="text-3xl font-bold">
            My Creative Works Latest{" "}
            <span className="text-green-600">Projects</span>
          </h2>
          <p className="text-gray-600 mt-2 max-w-md">
            I have selected and mentioned here some of my latest projects for
            design inspiration.
          </p>
        </div>
        <button className="bg-green-600 text-white px-6 py-2 mt-6 md:mt-0 rounded-md hover:bg-green-700 transition">
          Show More
        </button>
      </div>
      <div className="flex items-center  ">
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <div key={index}>
              <div className=" -bottom-4 -right-4 mt-10 ml-8 border-4 border-black w-115 h-80 rounded-lg"></div>
            </div>
          ))}

        {/* <div className="absolute -bottom-4 -right-4 border-4 border-black w-115 h-80 rounded-lg"></div> */}
        {/* Motion container with stagger animation */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 absolute"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }} // 👈 animate every time it's visible
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-xl border-4 shadow hover:shadow-lg transition  shadow-green-500 hover:shadow-gray-500 overflow-hidden hover:-translate-y-1 duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
