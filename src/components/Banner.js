/* eslint-disable jsx-a11y/img-redundant-alt */
import { motion } from 'framer-motion';
import image from '../assets/7957_Easy-Resize.com_.jpg'; // Importando a imagem corretamente
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  const navigate = useNavigate(); // Use navigate dentro do componente

  return (
    <motion.div
      className="relative h-screen flex justify-center items-center px-8 md:px-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 1.5 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {/* Imagem de fundo cobrindo a tela */}
      <img src={image} alt="Banner Image" className="absolute inset-0 w-full h-full object-cover" />

      {/* Gradiente suave na parte inferior */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-transparent"></div>

      {/* Conteúdo centralizado com grande impacto visual */}
      <div className="relative z-10 text-center max-w-2xl space-y-6">
        <motion.h1
          className="text-white text-5xl md:text-7xl font-extrabold tracking-tight leading-tight"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          Cuidados Modernos para a Sua Pele
        </motion.h1>
        <p className="text-white text-lg md:text-xl leading-relaxed max-w-lg mx-auto">
          Tecnologia avançada e tratamentos personalizados para uma pele saudável e renovada.
        </p>
        <motion.button
          className="mt-8 px-10 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold text-lg rounded-full shadow-lg hover:from-green-500 hover:to-blue-600 hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          onClick={() => navigate('/agende-consulta')}  // Navegação programática com useNavigate
        >
          Agende sua Consulta
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Banner;
