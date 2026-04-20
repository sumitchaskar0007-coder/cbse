import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const NewsTicker = () => {
  const news = [
    "Admissions Open for 2026-27",
    "Join Our School Community - Admissions Open",
  ];

  return (
    <div className="overflow-hidden bg-blue-600 py-2 text-white">
      <div className="animate-scroll whitespace-nowrap text-sm font-semibold md:text-base">
        {news.map((item, index) => (
          <span key={index} className="mx-10">
            * {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [academicsOpen, setAcademicsOpen] = useState(false);
  const [desktopDropdown, setDesktopDropdown] = useState(null);
  const location = useLocation();
  const isUdanPath = location.pathname.startsWith("/udan");

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
    {
      label: "Udan",
      dropdown: true,
      type: "udan",
      items: Array.from({ length: 8 }, (_, index) => ({
        label: `Udan ${index + 1}`,
        path: `/udan/${index + 1}`,
      })),
    },
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
        { label: "Academics", isDropdownParent: true },
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
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white/95"
      }`}
    >
      <NewsTicker />

      <div className="mx-auto max-w-[1400px] px-4 py-2 sm:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center">
            <img
              src="/images/logo1.png"
              alt="Logo"
              className="h-16 w-16 object-contain sm:h-20 sm:w-20"
            />
          </Link>

          <div className="flex flex-1 flex-col items-center">
            <h2 className="text-center text-[20px] font-bold leading-tight text-primary sm:text-[24px] md:text-[28px]">
              Jadhavar International School & Jr. College
            </h2>
          </div>

          <div className="hidden min-w-[160px] text-right lg:block">
            <p className="text-[12px] text-gray-500">
              <span className="font-semibold text-primary">UDISE:</span>
              27250509920
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="ml-2 rounded-lg p-2 text-gray-700 hover:bg-gray-100 lg:hidden"
          >
            <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <div className="relative mt-2 hidden items-center justify-center space-x-1 pb-2 lg:flex xl:space-x-3">
          {mainNavLinks.map((link, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => {
                if (link.dropdown) {
                  setDesktopDropdown(link.type || link.label);
                }
              }}
              onMouseLeave={() => {
                setDesktopDropdown(null);
                setAcademicsOpen(false);
              }}
            >
              {!link.dropdown ? (
                <Link
                  to={link.path}
                  className={`rounded-md px-3 py-2 text-[14px] font-medium transition-all ${
                    location.pathname === link.path
                      ? "bg-primary text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {link.label}
                </Link>
              ) : link.type === "udan" ? (
                <>
                  <button
                    type="button"
                    className={`cursor-pointer rounded-md px-3 py-2 text-[14px] font-medium transition-all ${
                      isUdanPath
                        ? "bg-primary text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {link.label}
                  </button>

                  <div
                    className={`absolute left-1/2 top-full z-50 mt-1 w-48 -translate-x-1/2 transform rounded-md bg-white py-2 shadow-lg ${
                      desktopDropdown === link.type ? "block" : "hidden"
                    }`}
                  >
                    {link.items.map((item, i) => (
                      <Link
                        key={i}
                        to={item.path}
                        className={`block px-4 py-2 text-sm transition ${
                          location.pathname === item.path
                            ? "bg-blue-50 text-primary"
                            : "text-gray-700 hover:bg-gray-100 hover:text-primary"
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    className="cursor-pointer rounded-md px-3 py-2 text-[14px] font-medium text-gray-700 hover:bg-gray-100"
                  >
                    {link.label}
                  </button>

                  <div
                    className={`absolute left-1/2 top-full z-50 mt-1 w-56 -translate-x-1/2 transform rounded-md bg-white py-2 shadow-lg ${
                      desktopDropdown === link.label ? "block" : "hidden"
                    }`}
                  >
                    {link.items.map((item, i) => (
                      <div key={i} className="relative">
                        {!item.isDropdownParent ? (
                          <Link
                            to={item.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
                          >
                            {item.label}
                          </Link>
                        ) : (
                          <div className="relative">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setAcademicsOpen(!academicsOpen);
                              }}
                              className="flex w-full cursor-pointer items-center justify-between px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
                            >
                              <span>{item.label}</span>
                            </button>

                            {academicsOpen && (
                              <div className="absolute left-0 right-0 top-full z-50 mt-0 rounded-md bg-white py-2 shadow-lg">
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="max-h-[80vh] overflow-y-auto border-t bg-white shadow-md lg:hidden"
          >
            <div className="space-y-1 px-4 py-4">
              <p className="mb-2 border-b pb-2 text-center text-[13px] text-gray-600">
                <span className="font-semibold text-primary">UDISE:</span>
                27250509920
              </p>

              {mainNavLinks.map((link, index) => (
                <div key={index} className="border-b last:border-b-0">
                  {!link.dropdown ? (
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block rounded-lg px-4 py-3 text-[15px] font-medium ${
                        location.pathname === link.path
                          ? "bg-primary text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ) : link.type === "udan" ? (
                    <details className="group" onClick={(e) => e.stopPropagation()}>
                      <summary
                        className={`list-none cursor-pointer rounded-lg px-4 py-3 text-[15px] font-medium ${
                          isUdanPath
                            ? "bg-primary text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <div className="flex items-center">
                          <span>{link.label}</span>
                        </div>
                      </summary>

                      <div className="ml-4 mt-1 space-y-1 border-l pl-2">
                        {link.items.map((item, i) => (
                          <Link
                            key={i}
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={`block rounded-md px-3 py-2 text-[14px] ${
                              location.pathname === item.path
                                ? "bg-blue-50 text-primary"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <details className="group" onClick={(e) => e.stopPropagation()}>
                      <summary className="list-none cursor-pointer rounded-lg px-4 py-3 text-[15px] font-medium text-gray-700 hover:bg-gray-100">
                        <div className="flex items-center">
                          <span>{link.label}</span>
                        </div>
                      </summary>

                      <div className="ml-4 mt-1 space-y-1 border-l pb-2 pl-2">
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
                              <details className="mt-1">
                                <summary
                                  className="list-none cursor-pointer rounded-md px-3 py-2 text-[14px] text-gray-700 hover:bg-gray-100"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  <div className="flex items-center">
                                    <span>{item.label}</span>
                                  </div>
                                </summary>

                                <div className="ml-4 mt-1 space-y-1 rounded-md bg-gray-50 p-2">
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
          display: inline-block;
          animation: scroll 30s linear infinite;
        }

        body:has(.lg\\:hidden .max-h-\\[80vh\\]) {
          overflow: hidden;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
