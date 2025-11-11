// import React from "react";
// import ReviewCard from "./ReviewCard";

// const Hero: React.FC = () => {
//   return (
//     <section className="flex flex-col md:flex-row justify-between items-center py-16 px-10">
//       {/* Left */}
//       <div className="max-w-xl space-y-6">
//         <div className="text-green-500 font-semibold">Welcome</div>
//         <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//           I have <span className="text-green-600">Creative Design</span>{" "}
//           Experience
//         </h1>
//         <p className="text-gray-600">
//           I'm Tanvir, a creative Product Designer. I've been helping businesses
//           solve their problems with design for 2 years.
//         </p>
//         <div className="flex space-x-4">
//           <button className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition">
//             Contact Me
//           </button>
//           <button className="border border-gray-400 px-5 py-2 rounded-md hover:border-green-600 transition">
//             View Portfolio →
//           </button>
//         </div>
//       </div>

//       {/* Right */}
//       {/* <div className="relative mt-10 md:mt-0">
//         <div className="absolute -bottom-4 -right-4 border-4 border-black w-[260px] h-[260px] rounded-lg"></div>
//         <img
//           src="/profile.png"
//           alt="Tanvir"
//           className="w-[260px] h-[260px] object-cover rounded-lg relative z-10 bg-green-200"
//         />
//       </div> */}
//       {/* <ReviewCard name="Tanvir" image="/images/tanvir.jpg" /> */}
//       <div className="relative mt-10 md:mt-0">
//         {/* black border background */}
//         <div className="absolute -bottom-4 -right-4 border-4 border-black w-[260px] h-[260px] rounded-lg"></div>

//         {/* main card */}
//         <ReviewCard name="Tanvir" image="/images/tanvir.jpg" />
//       </div>
//     </section>
//   );
// };

// export default Hero;

// import React, { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import ReviewCard from "./ReviewCard";

// const Hero: React.FC = () => {
//   const roles = [
//     "Creative Designer",
//     "Web Developer",
//     "Student",
//     "UI/UX Enthusiast",
//   ];
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % roles.length);
//     }, 2500); // every 2.5 seconds
//     return () => clearInterval(interval);
//   }, [roles.length]);

//   return (
//     <section className="flex flex-col md:flex-row justify-between items-center py-16 px-10">
//       {/* Left */}
//       <div className="max-w-xl space-y-6">
//         <div className="text-green-500 font-semibold">Welcome</div>

//         <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//           I have{" "}
//           <span className="text-green-600 inline-block min-w-[180px]">
//             <AnimatePresence mode="wait">
//               <motion.span
//                 key={index}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 transition={{ duration: 0.5 }}
//                 className="inline-block"
//               >
//                 {roles[index]}
//               </motion.span>
//             </AnimatePresence>
//           </span>{" "}
//           Experience
//         </h1>

//         <p className="text-gray-600">
//           I'm Tanvir, a creative Product Designer. I've been helping businesses
//           solve their problems with design for 2 years.
//         </p>

//         <div className="flex space-x-4">
//           <button className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition">
//             Contact Me
//           </button>
//           <button className="border border-gray-400 px-5 py-2 rounded-md hover:border-green-600 transition">
//             View Portfolio →
//           </button>
//         </div>
//       </div>

//       {/* Right */}
//       <div className="relative mt-10 md:mt-0">
//         <div className="absolute -bottom-4 -right-4 border-4 border-black w-[260px] h-[260px] rounded-lg"></div>
//         <ReviewCard name="Tanvir" image="/images/tanvir.jpg" />
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReviewCard from "./ReviewCard";
import profile from "../assets/profile.png";

const Hero: React.FC = () => {
  const roles = [
    { text: "Creative Designer", color: "from-green-500 to-emerald-600" },
    { text: "Web Developer", color: "from-purple-500 to-pink-500" },
    { text: "Student", color: "from-blue-500 to-cyan-500" },
    { text: "UI/UX Enthusiast", color: "from-amber-500 to-orange-500" },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="flex flex-col md:flex-row justify-between items-center py-16 px-10">
      {/* Left */}
      <div className="max-w-xl space-y-6">
        <div className="text-green-500 font-semibold">Welcome</div>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          I’m{" "}
          <span className="inline-block min-w-60">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className={`bg-linear-to-r ${roles[index].color} bg-clip-text text-transparent`}
              >
                {roles[index].text}
              </motion.span>
            </AnimatePresence>
          </span>
        </h1>

        {/* <p className="text-gray-600">
          I'm Rahul Sen Thakuri, passionate about creating meaningful digital
          experiences. I blend creativity and technology to design solutions
          that inspire and engage users.
        </p> */}
        <p className="text-gray-600">
          I'm{" "}
          <span className="text-black font-semibold">Rahul Sen Thakuri</span>,
          passionate about creating meaningful digital experiences. I blend
          creativity and technology to design solutions that inspire and engage
          users.
        </p>

        <div className="flex space-x-4">
          <button className="bg-green-600 text-white px-5 py-2 rounded-md hover:bg-green-700 transition">
            Contact Me
          </button>
          <button className="border border-gray-400 px-5 py-2 rounded-md hover:border-green-600 transition">
            View Portfolio →
          </button>
        </div>
      </div>

      {/* Right */}
      <div className="relative mt-10 md:mt-0">
        <div className="absolute -bottom-4 -right-4 border-4 border-black w-[260px] h-[260px] rounded-lg"></div>
        <ReviewCard image={profile} />
      </div>
    </section>
  );
};

export default Hero;
