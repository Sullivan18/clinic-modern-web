import { motion } from 'framer-motion';

const Banner = () => (
  <motion.div
    className="relative h-screen flex justify-center items-center"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.8 }}
    transition={{ duration: 1.5 }}
    variants={{
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 },
    }}
  >
    <img loading="lazy" src="/assets/lazy.jpg" alt="Banner Image" className="w-full h-auto" />
    <div className="absolute inset-0 bg-blue-900 bg-opacity-50 flex flex-col justify-center items-center">
      <motion.h1
        className="text-white text-4xl font-bold mb-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        Bem-vindo à Clínica
      </motion.h1>
      <p className="text-white text-lg max-w-md text-center">
        Oferecemos os melhores cuidados dermatológicos com profissionais experientes.
      </p>
      <motion.button
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        Saiba Mais
      </motion.button>
    </div>
  </motion.div>
);

export default Banner;
