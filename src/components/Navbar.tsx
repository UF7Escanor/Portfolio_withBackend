import React, { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import DownloadCV from "./DownloadCV";
import { useTheme } from "../context/ThemeContext";

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [scrolled, setScrolled] = useState(false);
  const { toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (
    hash: string,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(`${location.pathname}${hash}`, { replace: false });
  };

  const linkClass = (hash: string) => {
    const active = location.hash === hash;
    if (active) {
      return `font-medium px-0 transition-colors  duration-150 pb-1 text-teal-400 border-b-2 border-teal-400 dark:text-teal-400 dark:neon-accent dark:border-b-2`;
    }
    return `font-medium px-0 transition-colors duration-150 border-b-2 border-transparent pb-1 text-gray-800 hover:text-teal-400 dark:text-gray-300 dark:hover:neon-accent`;
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-3 " : "py-6"
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between transition-all duration-300 border-2 py-2 ${
          scrolled
            ? "max-w-4xl border border-teal-400 bg-gray-200 dark:bg-[#02050d] dark:border-gray-200 rounded-xl px-6 py-2 shadow-md dark:text-gray-800"
            : "max-w-7xl bg-transparent px-10 border-teal-400 dark:border-gray-200"
        }`}
      >
        <ul
          className={`hidden md:flex ${scrolled ? "space-x-6" : "space-x-8"}`}
        >
          <li>
            <NavLink
              to={`${location.pathname}#about`}
              onClick={(e) => handleNavClick("#about", e)}
              className={() => linkClass("#about")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${location.pathname}#skills`}
              onClick={(e) => handleNavClick("#skills", e)}
              className={() => linkClass("#skills")}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${location.pathname}#portfolio`}
              onClick={(e) => handleNavClick("#portfolio", e)}
              className={() => linkClass("#portfolio")}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${location.pathname}#testimonial`}
              onClick={(e) => handleNavClick("#testimonial", e)}
              className={() => linkClass("#testimonial")}
            >
              Blogs
            </NavLink>
          </li>
        </ul>

        <div className="ml-4 flex items-center space-x-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-md hover:bg-gray-100"
            title="Toggle theme"
          >
            {/* Sun: visible in dark mode (indicates switch to light) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="hidden dark:block text-yellow-400"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <path d="M12 1v2"></path>
              <path d="M12 21v2"></path>
              <path d="M4.22 4.22l1.42 1.42"></path>
              <path d="M18.36 18.36l1.42 1.42"></path>
              <path d="M1 12h2"></path>
              <path d="M21 12h2"></path>
              <path d="M4.22 19.78l1.42-1.42"></path>
              <path d="M18.36 5.64l1.42-1.42"></path>
            </svg>

            {/* Moon: visible in light mode */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="block dark:hidden text-gray-800"
            >
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
            </svg>
          </button>

          <DownloadCV />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// import React, { useEffect } from "react";
// import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import DownloadCV from "./DownloadCV";
// import { useTheme } from "../context/ThemeContext";

// const Navbar: React.FC = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const [scrolled, setScrolled] = React.useState(false);
//   const { toggleTheme } = useTheme();
//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 24);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // `toggleTheme` comes from ThemeContext; no local theme state or localStorage here.

//   const handleNavClick = (
//     hash: string,
//     e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
//   ) => {
//     e.preventDefault();
//     const id = hash.replace("#", "");
//     const el = document.getElementById(id);
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth", block: "start" });
//     } else {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//     navigate(`${location.pathname}${hash}`, { replace: false });
//   };

//   const linkClass = (hash: string) => {
//     const active = location.hash === hash;
//     if (active) {
//       return `font-medium px-0 transition-colors duration-150 ${
//         theme === "dark"
//           ? "neon-accent border-b-2"
//           : "text-teal-400 border-b-2 border-teal-400"
//       } pb-1`;
//     }
//     return `font-medium px-0 transition-colors duration-150  ${
//       theme === "dark"
//         ? "text-gray-300 hover:neon-accent"
//         : "text-gray-100 hover:text-teal-400"
//     } border-b-2 border-transparent pb-1`;
//   };

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         scrolled ? "py-3" : "py-6"
//       }`}
//     >
//       <div
//         className={`mx-auto flex items-center justify-between transition-all duration-300 border-2 py-2 ${
//           scrolled
//             ? `max-w-4xl ${
//                 theme === "light" ? "bg-neutral-200" : "bg-[#02050d]"
//               } border border-gray-200 rounded-xl px-6 py-2 shadow-md text-gray-800`
//             : "max-w-7xl bg-transparent px-10"
//         }`}
//       >
//         {/* <div className="text-2xl font-bold text-green-600">M Design</div> */}

//         <ul
//           className={`hidden md:flex ${scrolled ? "space-x-6" : "space-x-8"}`}
//         >
//           <li>
//             <NavLink
//               to={`${location.pathname}#about`}
//               onClick={(e) => handleNavClick("#about", e)}
//               className={() => linkClass("#about")}
//             >
//               About
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to={`${location.pathname}#skills`}
//               onClick={(e) => handleNavClick("#skills", e)}
//               className={() => linkClass("#skills")}
//             >
//               Skills
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to={`${location.pathname}#portfolio`}
//               onClick={(e) => handleNavClick("#portfolio", e)}
//               className={() => linkClass("#portfolio")}
//             >
//               Portfolio
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               to={`${location.pathname}#testimonial`}
//               onClick={(e) => handleNavClick("#testimonial", e)}
//               className={() => linkClass("#testimonial")}
//             >
//               Blogs
//             </NavLink>
//           </li>
//         </ul>

//         <div className="ml-4 flex items-center space-x-3">
//           {/* Theme toggle */}
//           return `font-medium px-0 transition-colors duration-150 pb-1 text-teal-400 border-b-2 border-teal-400 dark:text-gray-300 dark:neon-accent dark:border-b-2`;
//           >
//         return `font-medium px-0 transition-colors duration-150 border-b-2 border-transparent pb-1 text-gray-100 hover:text-teal-400 dark:text-gray-300 dark:hover:neon-accent`;
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="text-yellow-400"
//               >
//                 <circle cx="12" cy="12" r="5"></circle>
//                 <path d="M12 1v2"></path>
//                 <path d="M12 21v2"></path>
//                 <path d="M4.22 4.22l1.42 1.42"></path>
//                 <path d="M18.36 18.36l1.42 1.42"></path>
//                 <path d="M1 12h2"></path>
//                 <path d="M21 12h2"></path>
//                 <path d="M4.22 19.78l1.42-1.42"></path>
//                 <path d="M18.36 5.64l1.42-1.42"></path>
//               </svg>
//             ) : (
//               // Moon icon (dark)
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="text-gray-800"
//               >
//                 <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
//               </svg>
//             )}
//           </button>

//           <DownloadCV />
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
