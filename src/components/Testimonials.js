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
          className="text-4xl md:text-5xl font-bold mb-12 text-gray-800"
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
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
          initial="hidden"
          whileInView="visible"
          exit="hidden"
          viewport={{ once: false, amount: 0.8 }}
          transition={{ staggerChildren: 0.3 }}
        >
          {/* Depoimento 1 */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={slideIn}
          >
            <blockquote className="italic text-lg text-gray-600">
              "Excelente atendimento! A Dra. Maria é muito atenciosa."
            </blockquote>
            <p className="mt-4 text-gray-900 font-semibold">- Paciente A</p>
          </motion.div>

          {/* Depoimento 2 */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={slideIn}
          >
            <blockquote className="italic text-lg text-gray-600">
              "Fiquei muito satisfeito com o tratamento."
            </blockquote>
            <p className="mt-4 text-gray-900 font-semibold">- Paciente B</p>
          </motion.div>

          {/* Depoimento 3 */}
          <motion.div
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            variants={slideIn}
          >
            <blockquote className="italic text-lg text-gray-600">
              "Equipe muito profissional e qualificada."
            </blockquote>
            <p className="mt-4 text-gray-900 font-semibold">- Paciente C</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
