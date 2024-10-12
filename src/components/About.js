import { motion } from 'framer-motion';
import { FaStethoscope } from 'react-icons/fa'; // Ícone de dermatologista
import { GiLipstick, GiHealing } from 'react-icons/gi'; // Ícone de esteticista e estética facial

const About = () => {
  // Animações avançadas para título, parágrafos e lista
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-gray-50 to-gray-200">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-blue-100 to-green-100 opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-8 text-center">
        {/* Título com animação e design moderno */}
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold mb-10 text-gray-900"
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.0 }}
          variants={fadeInUp}
        >
          Conheça Nossos Profissionais
        </motion.h2>

        {/* Descrição sobre os profissionais */}
        <motion.p
          className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-700 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 1.0, delay: 0.2 }}
          variants={fadeInUp}
        >
          Nossa equipe é composta por especialistas altamente capacitados, dedicados a proporcionar o melhor cuidado para sua saúde e estética. Conheça mais sobre nossos profissionais:
        </motion.p>

        {/* Grid para disposição horizontal */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          exit="hidden"
          viewport={{ once: true, amount: 0.8 }}
          variants={staggerContainer}
        >
          {/* Dr. João - Dermatologista */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            variants={fadeInUp}
          >
            <FaStethoscope className="text-blue-500 w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900">Dr. João</h3>
            <p className="text-gray-600 mt-4">
              Especialista em dermatologia com mais de 10 anos de experiência. Membro da Sociedade Brasileira de Dermatologia, Dr. João é referência em tratamentos de pele e cuidados com a saúde dermatológica.
            </p>
          </motion.div>

          {/* Dra. Maria - Esteticista */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            variants={fadeInUp}
          >
            <GiLipstick className="text-green-500 w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900">Dra. Maria</h3>
            <p className="text-gray-600 mt-4">
              Esteticista especializada em terapias faciais e corporais. Dra. Maria utiliza técnicas modernas para rejuvenescimento e tratamentos estéticos, garantindo resultados naturais e eficazes.
            </p>
          </motion.div>

          {/* Dr. Carlos - Estética Facial Avançada */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            variants={fadeInUp}
          >
            <GiHealing className="text-yellow-500 w-12 h-12 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-gray-900">Dr. Carlos</h3>
            <p className="text-gray-600 mt-4">
              Dermatologista focado em estética facial avançada. Com vasto conhecimento em procedimentos minimamente invasivos, Dr. Carlos é reconhecido por seus resultados excepcionais e técnicas inovadoras.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
