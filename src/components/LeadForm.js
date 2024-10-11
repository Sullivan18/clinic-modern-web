import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

const LeadForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      alert('Lead enviado com sucesso!');
      reset();
    } catch (e) {
      console.error('Erro ao enviar o lead:', e);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.8 }}
        className="bg-neutralLight dark:bg-neutralDark p-10 rounded-lg shadow-lg w-full max-w-2xl mx-4"
      >
        <h3 className="text-3xl font-semibold mb-6 text-center text-primary dark:text-neutralLight">
          Entre em Contato
        </h3>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-primary dark:text-neutralLight">
              Nome
            </label>
            <input
              id="name"
              {...register('name', { required: 'Nome é obrigatório' })}
              className={`mt-1 block w-full p-3 border rounded-md shadow-sm focus:ring-secondary focus:border-secondary dark:bg-neutralDark dark:text-neutralLight ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Digite seu nome"
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-primary dark:text-neutralLight">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register('email', {
                required: 'Email é obrigatório',
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: 'Email inválido',
                },
              })}
              className={`mt-1 block w-full p-3 border rounded-md shadow-sm focus:ring-secondary focus:border-secondary dark:bg-neutralDark dark:text-neutralLight ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Digite seu email"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-primary dark:text-neutralLight">
              Mensagem
            </label>
            <textarea
              id="message"
              {...register('message', { required: 'Mensagem é obrigatória' })}
              rows="4"
              className={`mt-1 block w-full p-3 border rounded-md shadow-sm focus:ring-secondary focus:border-secondary dark:bg-neutralDark dark:text-neutralLight ${
                errors.message ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Digite sua mensagem"
            />
            {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
          </div>
          <motion.button
            type="submit"
            className="w-full bg-accent text-white py-3 rounded-md shadow-md hover:bg-accent focus:ring-4 focus:ring-accent dark:bg-accent dark:hover:bg-accent dark:focus:ring-accent"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default LeadForm;
