import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Banner from './components/Banner';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Location from './components/Location';
import LeadForm from './components/LeadForm';
import WhatsAppButton from './components/WhatsAppButton';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
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
        <Banner />
        <Services />
        <Team />
        <Testimonials />
        <Location />
        <LeadForm />
      </div>
      <WhatsAppButton />
    </div>
  );
};

export default App;
