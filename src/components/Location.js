import { motion } from 'framer-motion';

const Location = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="py-16 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-2xl md:text-3xl font-bold mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          variants={fadeInUp}
        >
          Local de Atendimento
        </motion.h2>
        <motion.div
          className="w-full h-0 relative"
          style={{ paddingBottom: '56.25%' }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.0 }}
          variants={fadeInUp}
        >
          <iframe 
            title="Mapa de Localização da Clínica"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58536.41391260188!2d-47.54862365395425!3d-23.513581310935976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5f4b75d205d69%3A0x74ec651ac18fe230!2sPrefeitura%20Municipal%20de%20Sorocaba!5e0!3m2!1spt-BR!2sbr!4v1728669914033!5m2!1spt-BR!2sbr"
            className="absolute top-0 left-0 w-full h-full"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Location;
