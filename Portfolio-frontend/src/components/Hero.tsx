// import { AnimatePresence, motion } from "framer-motion";
// import React, { useEffect, useState } from "react";
// import profile from "../assets/profile.png";
// import ConnectWithMe from "./Iconlinks";
// import ReviewCard from "./ReviewCard";

// const Hero: React.FC = () => {
//   const roles = [
//     { text: "Creative Designer", color: "from-green-500 to-emerald-600" },
//     { text: "Web Developer", color: "from-purple-500 to-pink-500" },
//     { text: "Student", color: "from-blue-500 to-cyan-500" },
//     { text: "UI/UX Enthusiast", color: "from-amber-500 to-orange-500" },
//   ];

//   const [index, setIndex] = useState(0);

//   const handleContactMe = (): void => {
//     window.location.hash = "contact";
//   };

//   const HandlePortfolioCick = (): void => {
//     window.location.hash = "portfolio";
//   };
//   // const handleContactMe = (): void => {
//   //   const el = document.getElementById("contact");
//   //   el?.scrollIntoView({ behavior: "smooth" });
//   // };
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % roles.length);
//     }, 2500);
//     return () => clearInterval(interval);
//   }, [roles.length]);

//   return (
//     // <section className="h-screen flex flex-col md:flex-row justify-between items-center pb-30 px-10 pt-60 ">
//     <section className="min-h-screen h-screen overflow-hidden flex flex-col md:flex-row justify-between items-center px-10 pt-20">
//       {/* Left */}
//       <div className=" max-w-xl space-y-6">
//         <div className="text-green-500 font-semibold">Welcome</div>

//         <h1 className="text-4xl md:text-7xl font-bold leading-tight">
//           I’m{" "}
//           <span className="inline-block min-w-60">
//             <AnimatePresence mode="wait">
//               <motion.span
//                 key={index}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 transition={{ duration: 0.5 }}
//                 className={`bg-linear-to-r ${roles[index].color} bg-clip-text text-transparent`}
//               >
//                 {roles[index].text}
//               </motion.span>
//             </AnimatePresence>
//           </span>
//         </h1>

//         <p>
//           I'm{" "}
//           <span className="text-green-500 font-semibold">
//             Rahul Sen Thakuri
//           </span>
//           , passionate about creating meaningful digital experiences. I blend
//           creativity and technology to design solutions that inspire and engage
//           users.
//         </p>

//         <div className="flex space-x-4">
//           <button
//             onClick={handleContactMe}
//             className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition"
//           >
//             Contact Me
//           </button>
//           <button
//             onClick={HandlePortfolioCick}
//             className="border border-gray-400 px-5 py-2 rounded-md hover:border-green-600 transition"
//           >
//             View Portfolio →
//           </button>
//         </div>
//         <ConnectWithMe />
//       </div>

//       {/* Right */}
//       <div className="hidden md:block relative mt-10 mr-50 md:mt-0 ">
//         {/* <div className="absolute -bottom-4 -right-4 border-4 border-black w-[260px] h-[260px] rounded-lg"></div> */}
//         <ReviewCard image={profile} />
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import profile from "../assets/profile.png";
import ConnectWithMe from "./Iconlinks";
import ReviewCard from "./ReviewCard";

const Hero: React.FC = () => {
  const roles = [
    { text: "Creative Designer", color: "from-[#00F5FF] to-[#3B82F6]" },
    { text: "Web Developer", color: "from-[#3B82F6] to-[#00F5FF]" },
    { text: "Student", color: "from-[#00F5FF] to-[#60A5FA]" },
    { text: "UI/UX Enthusiast", color: "from-[#3B82F6] to-[#7DD3FC]" },
  ];

  const [index, setIndex] = useState(0);

  const handleContactMe = (): void => {
    window.location.hash = "contact";
  };

  const handlePortfolioClick = (): void => {
    window.location.hash = "portfolio";
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="min-h-screen h-screen overflow-hidden flex flex-col md:flex-row justify-between items-center px-10 pt-20">
      {/* LEFT */}
      <div className="max-w-xl space-y-6">
        <div className="text-[#00F5FF] font-semibold tracking-widest uppercase text-sm">
          Welcome
        </div>

        <h1 className="text-4xl md:text-7xl font-bold leading-tight">
          I'm{" "}
          <span className="inline-block min-w-60">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className={`bg-gradient-to-r ${roles[index].color} bg-clip-text text-transparent`}
              >
                {roles[index].text}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        <p className="text-gray-200 leading-relaxed">
          I'm{" "}
          <span className="text-[#00F5FF] font-semibold">
            Rahul Sen Thakuri
          </span>
          , passionate about creating meaningful digital experiences. I blend
          creativity and technology to design solutions that inspire and engage
          users.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap gap-4">
          <button
            onClick={handleContactMe}
            className="bg-gradient-to-r from-[#00F5FF] to-[#3B82F6] text-[#021018] font-semibold px-5 py-2 rounded-md hover:brightness-110 hover:shadow-lg hover:shadow-[#00F5FF]/40 transition-all duration-300"
          >
            Contact Me
          </button>

          <button
            onClick={handlePortfolioClick}
            className="border border-[#00F5FF] text-[#00F5FF] px-5 py-2 rounded-md hover:bg-[#00F5FF]/10 hover:shadow-lg hover:shadow-[#3B82F6]/20 transition-all duration-300"
          >
            View Portfolio →
          </button>
        </div>

        <ConnectWithMe />
      </div>

      {/* RIGHT */}
      <div className="hidden md:block relative mt-10 md:mt-0 md:mr-20">
        <div className="absolute inset-0 bg-[#00F5FF]/10 blur-3xl rounded-full" />
        <div className="relative ring-1 ring-[#00F5FF]/30 rounded-full shadow-[0_0_30px_rgba(0,245,255,0.22)]">
          <ReviewCard image={profile} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
