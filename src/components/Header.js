import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Atualizado para Heroicons v2

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed w-full z-50 p-4 transition-colors duration-300 ${
        scrollPosition > 50 ? 'bg-gray-800 text-white shadow-lg' : 'bg-transparent text-white'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Clínica</h1>

        {/* Menu para Desktop */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <Link to="home" smooth={true} duration={500} className="cursor-pointer hover:text-accent transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={500} className="cursor-pointer hover:text-accent transition">
              Serviços
            </Link>
          </li>
          <li>
            <Link to="team" smooth={true} duration={500} className="cursor-pointer hover:text-accent transition">
              Equipe
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-accent transition">
              Contato
            </Link>
          </li>
        </ul>

        {/* Menu Hambúrguer para Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <XMarkIcon className="h-8 w-8" /> : <Bars3Icon className="h-8 w-8" />}
          </button>
        </div>
      </nav>

      {/* Menu Mobile */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-16 left-0 w-full bg-gray-800 text-white shadow-lg"
        >
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                to="team"
                smooth={true}
                duration={500}
                className="cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                Equipe
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
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

export default Header
