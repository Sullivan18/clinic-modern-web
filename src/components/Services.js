import { motion } from 'framer-motion';

const Services = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-6"
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
          className="text-lg mb-6"
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 1.0 }}
          variants={fadeInUp}
        >
          Oferecemos serviços especializados para atender às suas necessidades.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.8 }}
            variants={fadeInUp}
          >
            <h3 className="text-lg md:text-xl font-semibold">Serviço 1</h3>
            <p>Descrição do serviço 1.</p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={fadeInUp}
          >
            <h3 className="text-lg md:text-xl font-semibold">Serviço 2</h3>
            <p>Descrição do serviço 2.</p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            variants={fadeInUp}
          >
            <h3 className="text-lg md:text-xl font-semibold">Serviço 3</h3>
            <p>Descrição do serviço 3.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
