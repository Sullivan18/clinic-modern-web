import { motion } from 'framer-motion';
import dermat from '../assets/dermat.jpeg';
import estet from '../assets/estet.jpeg';
import dermat2 from '../assets/dermat2.jpeg';

const Team = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="team" className="py-16 bg-white">
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
          Nossa Equipe
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Profissional 1 */}
          <motion.div
            className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.8 }}
            variants={fadeInUp}
          >
            <img
              src={dermat}
              alt="Dr. João - Dermatologista"
              className="rounded-full w-40 h-40 mx-auto mb-6 border-4 border-blue-500 shadow-md"
              loading="lazy"  // Melhorando a performance com carregamento lazy
            />
            <h3 className="text-xl font-semibold text-gray-900">Dr. João</h3>
            <p className="text-gray-600">Dermatologista</p>
          </motion.div>

          {/* Profissional 2 */}
          <motion.div
            className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={fadeInUp}
          >
            <img
              src={estet}
              alt="Dra. Maria - Esteticista"
              className="rounded-full w-40 h-40 mx-auto mb-6 border-4 border-green-500 shadow-md"
              loading="lazy"  // Melhorando a performance com carregamento lazy
            />
            <h3 className="text-xl font-semibold text-gray-900">Dra. Maria</h3>
            <p className="text-gray-600">Esteticista</p>
          </motion.div>

          {/* Profissional 3 */}
          <motion.div
            className="bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            variants={fadeInUp}
          >
            <img
              src={dermat2}
              alt="Dr. Carlos - Dermatologista"
              className="rounded-full w-40 h-40 mx-auto mb-6 border-4 border-purple-500 shadow-md"
              loading="lazy"  // Melhorando a performance com carregamento lazy
            />
            <h3 className="text-xl font-semibold text-gray-900">Dr. Carlos</h3>
            <p className="text-gray-600">Dermatologista</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;
