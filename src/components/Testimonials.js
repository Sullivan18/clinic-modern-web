import { motion } from 'framer-motion';

const Testimonials = () => {
  const slideIn = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-6"
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false, amount: 0.8 }}
          transition={{ duration: 0.8 }}
          variants={slideIn}
        >
          Depoimentos
        </motion.h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false, amount: 0.8 }}
          transition={{ staggerChildren: 0.3 }}
        >
          <motion.div className="bg-white p-6 rounded-lg shadow-lg" variants={slideIn}>
            <blockquote className="italic">"Excelente atendimento! A Dra. Maria é muito atenciosa."</blockquote>
            <p className="mt-4">- Paciente A</p>
          </motion.div>
          <motion.div className="bg-white p-6 rounded-lg shadow-lg" variants={slideIn}>
            <blockquote className="italic">"Fiquei muito satisfeito com o tratamento."</blockquote>
            <p className="mt-4">- Paciente B</p>
          </motion.div>
          <motion.div className="bg-white p-6 rounded-lg shadow-lg" variants={slideIn}>
            <blockquote className="italic">"Equipe muito profissional e qualificada."</blockquote>
            <p className="mt-4">- Paciente C</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
