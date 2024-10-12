import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import LeadForm from './components/LeadForm';
import WhatsAppButton from './components/WhatsAppButton';
import AgendeConsulta from './components/AgendeConsulta';
import About from './components/About';
import FAQ from './components/FAQ';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      // Adiciona a classe 'scroll-visible' ao body quando a tela é rolada
      document.body.classList.add('scroll-visible');

      // Limpa o timeout anterior se o usuário continuar rolando
      clearTimeout(timeoutId);

      // Remove a classe 'scroll-visible' após 2 segundos sem rolar
      timeoutId = setTimeout(() => {
        document.body.classList.remove('scroll-visible');
      }, 2000);
    };

    // Adiciona o listener de rolagem
    window.addEventListener('scroll', handleScroll);

    // Remove o listener e o timeout ao desmontar o componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <Router>
      <div className={darkMode ? "dark" : ""}>
        <Helmet>
          <title>Clínica Uniderma - Cuidados Dermatológicos</title>
          <meta name="description" content="Oferecemos os melhores cuidados dermatológicos com profissionais experientes." />
          <meta property="og:title" content="Clínica Uniderma" />
          <meta property="og:description" content="Oferecemos os melhores cuidados dermatológicos." />
          <meta property="og:image" content="/path/to/image.jpg" />
        </Helmet>

        <div className="bg-white dark:bg-gray-900 dark:text-white min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <Banner />
                <Services />
                <Team />
                <About />
                <Testimonials />
                <Location />
                <FAQ />
                <LeadForm />
              </>
            }/>
            <Route path="/agende-consulta" element={<AgendeConsulta />} /> {/* Nova rota de agendamento */}
          </Routes>
        </div>
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;
