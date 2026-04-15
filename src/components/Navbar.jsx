import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

/* ⭐ NEWS TICKER */
const NewsTicker = () => {
  const news = [
    "Admissions Open for 2026–27",
    "Join Our School Community – Admissions Open",
  ];

  return (
    <div className="bg-blue-600 text-white py-2 overflow-hidden">
      <div className="animate-scroll whitespace-nowrap font-semibold text-sm md:text-base">
        {news.map((item, index) => (
          <span key={index} className="mx-10">
            • {item}
          </span>
        ))}
      </div>
    </div>
  );
};

/* ⭐ NAVBAR */
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const mainNavLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Why Jadhavar", path: "/why-jadhavar" },
    { label: "Curriculum", path: "/curriculum" },
    { label: "Admissions", path: "/admissions" },
    { label: "Life At Jadhavar", path: "/life-at-jadhavar" },
    { label: "Gallery", path: "/gallery" },
    { label: "Announcements", path: "/announcements" },
    { label: "Career", path: "/career" },
    { label: "Contact", path: "/contact" },
    { label: "Blogs", path: "/blog" },
    {
      label: "More",
      dropdown: true,
      items: [
        {
          label: "Academics",
          isDropdownParent: true,
        },
        { label: "Facilities", path: "/facilities" },
        { label: "Info Center", path: "/info-center" },
      ],
    },
  ];

  const academicsDropdown = [

    { label: "Syllabus", path: "/syllabus" },
    { label: "Departments", path: "/departments" },
    { label: "Academic Calendar", path: "/academic-calendar" },
  ];

  // Close all dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (academicsOpen) {
        setAcademicsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [academicsOpen]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md" : "bg-white/95"
        }`}
    >
      {/* ⭐ NEWS TICKER */}
      <NewsTicker />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 py-2">
        <div className="flex items-center justify-between gap-4">
          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/logo1.png"
              alt="Logo"
              className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
            />
          </Link>

          {/* TITLE */}
          <div className="flex flex-col items-center flex-1">
            <h2 className="text-[20px] sm:text-[24px] md:text-[28px] font-bold text-primary text-center leading-tight">
              Jadhavar International School & Jr. College
            </h2>
            {/* <p className="text-[10px] sm:text-[11px] md:text-[12px] text-gray-600 -mt-1">
              School & Jr. College
            </p> */}
          </div>

          {/* UDISE */}
          <div className="hidden lg:block text-right min-w-[160px]">
            <p className="text-[12px] text-gray-500">
              <span className="font-semibold text-primary">UDISE:</span>
              27250509920
            </p>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden ml-2 p-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* ⭐ DESKTOP NAVBAR */}
        <div className="hidden lg:flex items-center justify-center space-x-1 xl:space-x-3 pb-2 relative mt-2">
          {mainNavLinks.map((link, index) => (
            <div key={index} className="relative group">
              {/* Normal Links */}
              {!link.dropdown ? (
                <Link
                  to={link.path}
                  className={`px-3 py-2 text-[14px] font-medium rounded-md transition-all ${location.pathname === link.path
                      ? "bg-primary text-white"
                      : "text-gray-700 hover:bg-gray-100"
                    }`}
                >
                  {link.label}
                </Link>
              ) : (
                <>
                  {/* More Dropdown Button */}
                  <button className="px-3 py-2 text-[14px] font-medium text-gray-700 hover:bg-gray-100 rounded-md flex items-center gap-1">
                    {link.label} ▾
                  </button>

                  {/* MAIN DROPDOWN - Shows on hover of "More" */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-1 hidden group-hover:block bg-white shadow-lg rounded-md w-56 py-2 z-50">
                    {link.items.map((item, i) => (
                      <div key={i} className="relative">
                        {/* Simple Links */}
                        {!item.isDropdownParent ? (
                          <Link
                            to={item.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
                          >
                            {item.label}
                          </Link>
                        ) : (
                          /* Academics item with clickable dropdown */
                          <div className="relative">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setAcademicsOpen(!academicsOpen);
                              }}
                              className="w-full text-left flex justify-between items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary cursor-pointer"
                            >
                              <span>{item.label}</span>
                              <span className={`transform transition-transform ${academicsOpen ? 'rotate-180' : ''}`}>▾</span>
                            </button>

                            {/* ACADEMICS SUB-DROPDOWN - Shows below when clicked */}
                            {academicsOpen && (
                              <div className="absolute left-0 right-0 top-full mt-0 bg-white shadow-lg rounded-md py-2 z-50">
                                {academicsDropdown.map((sub, subIndex) => (
                                  <Link
                                    to={sub.path}
                                    key={subIndex}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
                                    onClick={() => setAcademicsOpen(false)}
                                  >
                                    {sub.label}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ⭐ MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-md border-t overflow-y-auto max-h-[80vh]"
          >
            <div className="px-4 py-4 space-y-1">
              <p className="text-[13px] text-gray-600 text-center pb-2 border-b mb-2">
                <span className="font-semibold text-primary">UDISE:</span>
                27250509920
              </p>

              {mainNavLinks.map((link, index) => (
                <div key={index} className="border-b last:border-b-0">
                  {!link.dropdown ? (
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 text-[15px] font-medium rounded-lg ${location.pathname === link.path
                          ? "bg-primary text-white"
                          : "text-gray-700 hover:bg-gray-100"
                        }`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <details
                      className="group"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <summary className="px-4 py-3 cursor-pointer text-[15px] font-medium text-gray-700 hover:bg-gray-100 rounded-lg list-none">
                        <div className="flex justify-between items-center">
                          <span>{link.label}</span>
                          <span className="transition-transform group-open:rotate-180">▾</span>
                        </div>
                      </summary>

                      <div className="ml-4 mt-1 space-y-1 pb-2 border-l pl-2">
                        {link.items.map((item, i) => (
                          <div key={i}>
                            {!item.isDropdownParent ? (
                              <Link
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 text-[14px] text-gray-700 hover:bg-gray-100"
                              >
                                {item.label}
                              </Link>
                            ) : (
                              /* Academics dropdown for mobile - works with details/summary */
                              <details className="mt-1">
                                <summary
                                  className="px-3 py-2 cursor-pointer text-[14px] text-gray-700 hover:bg-gray-100 rounded-md list-none"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <div className="flex justify-between items-center">
                                    <span>{item.label}</span>
                                    <span className="transition-transform">▾</span>
                                  </div>
                                </summary>

                                <div className="ml-4 mt-1 space-y-1 bg-gray-50 rounded-md p-2">
                                  {academicsDropdown.map((sub, subIndex) => (
                                    <Link
                                      key={subIndex}
                                      to={sub.path}
                                      onClick={() => setIsOpen(false)}
                                      className="block px-3 py-2 text-[14px] text-gray-700 hover:bg-gray-100"
                                    >
                                      {sub.label}
                                    </Link>
                                  ))}
                                </div>
                              </details>
                            )}
                          </div>
                        ))}
                      </div>
                    </details>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          display: inline-block;
        }
        
        /* Prevent body scroll when mobile menu is open */
        body:has(.lg\\:hidden .max-h-\\[80vh\\]) {
          overflow: hidden;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;