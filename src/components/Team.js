import { motion } from 'framer-motion';

const Team = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="team" className="py-16 bg-white">
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
          Nossa Equipe
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="bg-gray-100 p-6 rounded-lg shadow-lg"
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.8 }}
            variants={fadeInUp}
          >
            <img
              src="/path/to/image1.jpg"
              alt="Profissional 1"
              className="rounded-full w-32 mx-auto mb-4"
            />
            <h3 className="text-lg md:text-xl font-semibold">Dr. João</h3>
            <p>Dermatologista</p>
          </motion.div>
          <motion.div
            className="bg-gray-100 p-6 rounded-lg shadow-lg"
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={fadeInUp}
          >
            <img
              src="/path/to/image2.jpg"
              alt="Profissional 2"
              className="rounded-full w-32 mx-auto mb-4"
            />
            <h3 className="text-lg md:text-xl font-semibold">Dra. Maria</h3>
            <p>Esteticista</p>
          </motion.div>
          <motion.div
            className="bg-gray-100 p-6 rounded-lg shadow-lg"
            initial="hidden"
            whileInView="visible"
            exit="hidden"
            viewport={{ once: false, amount: 0.8 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            variants={fadeInUp}
          >
            <img
              src="/path/to/image3.jpg"
              alt="Profissional 3"
              className="rounded-full w-32 mx-auto mb-4"
            />
            <h3 className="text-lg md:text-xl font-semibold">Dr. Carlos</h3>
            <p>Dermatologista</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;
