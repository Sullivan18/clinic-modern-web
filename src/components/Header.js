import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== "/agende-consulta") {
        setScrollPosition(window.scrollY);
      }
    };

    // Automatically scroll to top when navigating to homepage
    if (location.pathname === "/") {
      window.scrollTo(0, 0);
      setScrollPosition(0); // Reset scroll position to the top
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const isAgendeConsultaPage = location.pathname === "/agende-consulta";

  return (
    <motion.header
      className={`fixed w-full z-50 p-4 transition-colors duration-300 ${
        isAgendeConsultaPage || scrollPosition > 50
          ? "bg-blue-500 text-white shadow-lg" // Change the color when scrolling
          : "bg-transparent text-[#a0c4ff]"    // Transparent header at the top
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-bold cursor-pointer"
          onClick={() => setIsOpen(false)}
        >
          Uniderma
        </Link>

        {/* Menu for Desktop */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link to="/" className="cursor-pointer hover:text-accent transition">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/#services"
              className="cursor-pointer hover:text-accent transition"
            >
              Serviços
            </Link>
          </li>
          <li>
            <Link
              to="/#team"
              className="cursor-pointer hover:text-accent transition"
            >
              Equipe
            </Link>
          </li>
          <li>
            <Link
              to="/#contact"
              className="cursor-pointer hover:text-accent transition"
            >
              Contato
            </Link>
          </li>
        </ul>

        {/* Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-16 left-0 w-full bg-blue-600 text-white shadow-lg"
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link to="/" className="cursor-pointer" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/#services"
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                to="/#team"
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Equipe
              </Link>
            </li>
            <li>
              <Link
                to="/#contact"
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </Link>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
