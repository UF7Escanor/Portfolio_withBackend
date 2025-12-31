import React from "react";
import { motion, type Variants } from "framer-motion";
import dashboard from "../assets/dashboard.jpg";
import website from "../assets/website.png";
import mobile from "../assets/mobileUi.png";
import chess from "../assets/chess.png";
interface Project {
  title: string;
  description: string;
  image: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Chess Engine",
      description:
        "Final Year project,Chess Engine that blends traditional alpha beta pruning with neural predction ",
      image: chess,
    },
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

  /* Container animation */
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

  /* Card animation */
  const cardVariants: Variants = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
      },
    },
  };

  return (
    <section id="portfolio" className="min-h-screen px-6 md:px-72 py-3">
      {/* <div>
        <p className="text-green-500 font-semibold">Portfolio</p>
      </div> */}
      {/* 🔒 DO NOT CHANGE UI STRUCTURE */}
      <div className="relative">
        {/* ✅ Static Center Vertical Line (NO Framer Motion) */}
        <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 h-200 w-[3px] bg-white " />
        <div className="hidden md:block absolute top-100 left-1/2 -translate-x-1/2 w-200 h-[3px] bg-white " />
        {/* Background Border Boxes */}
        {/* <div className="hidden md:grid md:grid-cols-2 grid-rows-2 gap-10 pb-16">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="flex justify-center">
                <div className="mt-10 border-4 border-gray-100 w-[460px] h-80 rounded-lg"></div>
              </div>
            ))}
        </div> */}
        <div className="hidden md:grid md:grid-cols-2 grid-rows-2 gap-10 pb-16">
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <div key={index} className="flex justify-center">
                <div className="mt-10 border-4 border-gray-100 w-[460px] h-80 rounded-lg"></div>
              </div>
            ))}
        </div>

        {/* Projects Grid (Framer Motion preserved)
            - absolute layout on md+ screens
            - normal flow on small screens */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full mt-4 md:absolute md:top-0 md:left-0 md:w-full md:mt-15"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white m-4 rounded-xl border-4 shadow shadow-green-500 hover:shadow-gray-500 transition duration-300 overflow-hidden hover:-translate-y-1"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="font-semibold text-lg text-green-500">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-1">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
