import React from "react";
import DownloadCV from "./DownloadCV";

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center py-6 px-10 bg-white shadow-sm">
      <div className="text-2xl font-bold text-green-600">M Design</div>
      <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonial">Testimonial</a>
        </li>
      </ul>

      {/* Download CV Button */}
      <DownloadCV />
    </nav>
  );
};

export default Navbar;

// import React from "react";
// import DownloadCV from "./DownloadCV";
// import { Link } from "react-scroll";

// const Navbar: React.FC = () => {
//   return (
//     <nav className="flex justify-between items-center py-6 px-10 bg-white shadow-sm fixed w-full top-0 z-50">
//       <div className="text-2xl font-bold text-green-600">M Design</div>

//       <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
//         <li>
//           <Link
//             to="about"
//             smooth={true}
//             duration={600}
//             offset={-80} // adjust for navbar height
//             className="cursor-pointer hover:text-green-600 transition"
//           >
//             About
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="skills"
//             smooth={true}
//             duration={600}
//             offset={-80}
//             className="cursor-pointer hover:text-green-600 transition"
//           >
//             Skills
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="portfolio"
//             smooth={true}
//             duration={600}
//             offset={-80}
//             className="cursor-pointer hover:text-green-600 transition"
//           >
//             Portfolio
//           </Link>
//         </li>
//         <li>
//           <Link
//             to="testimonial"
//             smooth={true}
//             duration={600}
//             offset={-80}
//             className="cursor-pointer hover:text-green-600 transition"
//           >
//             Testimonial
//           </Link>
//         </li>
//       </ul>

//       <DownloadCV />
//     </nav>
//   );
// };

// export default Navbar;
