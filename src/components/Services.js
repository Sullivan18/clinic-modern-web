import { motion } from 'framer-motion';
import { FaStethoscope, FaSpa, FaHeartbeat } from 'react-icons/fa'; // Ícones importados

const Services = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-gray-800"
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
        >
          Nossos Serviços
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 1.0 }}
          variants={fadeInUp}
        >
          Descubra uma nova forma de cuidado, com serviços pensados especialmente para você. Nosso objetivo é oferecer excelência e inovação no cuidado com a sua saúde e bem-estar.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Serviço 1 */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.8 }}
            variants={fadeInUp}
          >
            <FaStethoscope className="text-primary text-5xl mb-4" /> {/* Ícone adicionado */}
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800">Consultoria Dermatológica</h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Aprimore a saúde da sua pele com consultorias personalizadas e diagnósticos precisos oferecidos por nossos especialistas.
            </p>
          </motion.div>

          {/* Serviço 2 */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={fadeInUp}
          >
            <FaSpa className="text-primary text-5xl mb-4" /> {/* Ícone adicionado */}
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800">Tratamento Estético Facial</h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Tecnologias avançadas para renovar, hidratar e rejuvenescer sua pele, realçando sua beleza natural.
            </p>
          </motion.div>

          {/* Serviço 3 */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col items-center"
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            variants={fadeInUp}
          >
            <FaHeartbeat className="text-primary text-5xl mb-4" /> {/* Ícone adicionado */}
            <h3 className="text-xl md:text-2xl font-semibold text-gray-800">Terapias Corporais</h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Terapias exclusivas para relaxamento profundo, detox e revitalização do corpo e da mente.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
