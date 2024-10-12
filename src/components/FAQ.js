import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Quais são os horários de atendimento da clínica?',
      answer: 'Nosso atendimento é de segunda a sexta, das 9h às 18h, e aos sábados das 9h às 13h.',
    },
    {
      question: 'Como faço para agendar uma consulta?',
      answer: 'Você pode agendar sua consulta diretamente através do nosso site ou ligar para nossa central de atendimento.',
    },
    {
      question: 'Quais tipos de tratamento dermatológico vocês oferecem?',
      answer: 'Oferecemos tratamentos como rejuvenescimento facial, remoção de manchas, tratamento de acne, e muito mais.',
    },
    {
      question: 'Quais são as recomendações pré e pós-consulta?',
      answer: 'Recomendamos evitar exposição solar antes das consultas dermatológicas. Após os tratamentos, siga as instruções passadas pelo seu médico para garantir os melhores resultados.',
    },
  ];

  // Smoother animation for opening/closing the answer
  const faqVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 20, scale: 0.98 }, // Animation on exit
  };

  const answerVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1 },
    exit: { height: 0, opacity: 0 },
  };

  return (
    <section id="faq" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-8 text-center">
        {/* FAQ Title with smooth animation */}
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-12"
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }} // Increased duration for smoother effect
          variants={faqVariants}
        >
          Perguntas Frequentes
        </motion.h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className={`border p-6 rounded-lg bg-white shadow-md transition-all ${
                activeIndex === index ? 'border-blue-500' : 'border-gray-300'
              }`}
              onClick={() => toggleFAQ(index)}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }} // Smoother animation for the container
              variants={faqVariants}
            >
              <div className="flex justify-between items-center cursor-pointer">
                <h3 className="text-xl font-semibold text-gray-900">{faq.question}</h3>
                {activeIndex === index ? (
                  <FaChevronUp className="text-blue-500" />
                ) : (
                  <FaChevronDown className="text-gray-500" />
                )}
              </div>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    className="mt-4 overflow-hidden"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={answerVariants}
                    transition={{ duration: 0.5, ease: 'easeOut' }} // Smoother answer animation
                  >
                    <p className="text-gray-700">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
