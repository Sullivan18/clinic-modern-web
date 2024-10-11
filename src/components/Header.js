import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const location = useLocation(); // Hook para detectar a página atual

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname !== "/agende-consulta") {
        setScrollPosition(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Estilos baseados na página ativa
  const isAgendeConsultaPage = location.pathname === "/agende-consulta";

  return (
    <motion.header
      className={`fixed w-full z-50 p-4 transition-colors duration-300 ${
        isAgendeConsultaPage || scrollPosition > 50
          ? "bg-gray-800 text-[#a0c4ff] shadow-lg" // Quando na página de agendamento ou ao rolar
          : "bg-transparent text-[#a0c4ff]" // Quando na página inicial ou ao rolar no topo
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }} // Suavidade na transição de opacidade
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Link para a página inicial */}
        <Link
          to="/"
          className="text-2xl font-bold cursor-pointer"
          onClick={() => setIsOpen(false)}  
        >
          Uniderma
        </Link>

        {/* Menu para Desktop */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link
              to="/"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-accent transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/#services"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-accent transition"
            >
              Serviços
            </Link>
          </li>
          <li>
            <Link
              to="/#team"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-accent transition"
            >
              Equipe
            </Link>
          </li>
          <li>
            <Link
              to="/#contact"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-accent transition"
            >
              Contato
            </Link>
          </li>
        </ul>

        {/* Menu Mobile */}
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

      {/* Menu Mobile - Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-16 left-0 w-full bg-gray-800 text-[#a0c4ff] shadow-lg"
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link
                to="/"
                smooth={true}
                duration={500}
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}  // Fechar o menu mobile
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/#services"
                smooth={true}
                duration={500}
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}  // Fechar o menu mobile
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                to="/#team"
                smooth={true}
                duration={500}
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}  // Fechar o menu mobile
              >
                Equipe
              </Link>
            </li>
            <li>
              <Link
                to="/#contact"
                smooth={true}
                duration={500}
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}  // Fechar o menu mobile
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
