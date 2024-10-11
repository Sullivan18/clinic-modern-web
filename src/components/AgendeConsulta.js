import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2'; // Importa SweetAlert2
import Header from './Header'; // Importa o Header para a página de agendamento

const AgendeConsulta = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Envia os dados do agendamento para o back-end
      const response = await fetch('http://localhost:5000/api/agendar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        // Exibe uma confirmação moderna usando SweetAlert2
        Swal.fire({
          title: 'Agendamento Confirmado!',
          text: 'Seu agendamento foi realizado com sucesso.',
          icon: 'success',
          confirmButtonText: 'OK',
          customClass: {
            confirmButton: 'bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg', // Botão customizado
          },
        });

        reset();
      } else {
        Swal.fire({
          title: 'Erro!',
          text: 'Ocorreu um erro ao salvar seu agendamento.',
          icon: 'error',
          confirmButtonText: 'Tentar novamente',
          customClass: {
            confirmButton: 'bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg',
          },
        });
      }
    } catch (e) {
      console.error('Erro ao enviar o agendamento:', e);
      Swal.fire({
        title: 'Erro!',
        text: 'Ocorreu um erro ao salvar seu agendamento.',
        icon: 'error',
        confirmButtonText: 'Tentar novamente',
        customClass: {
          confirmButton: 'bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg',
        },
      });
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header /> {/* Header incluído para navegação */}
      <div className="max-w-7xl mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center" style={{ marginTop: '3rem' }}>
          Agende sua Consulta
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center">
          Preencha o formulário abaixo para agendar sua consulta com nossos especialistas.
        </p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 p-10 rounded-lg shadow-xl w-full max-w-xl mx-auto"
        >
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left">
            {/* Campo Nome Completo */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Nome Completo
              </label>
              <input
                id="fullName"
                {...register('fullName', { required: 'Nome completo é obrigatório' })}
                className={`mt-1 block w-full p-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white ${
                  errors.fullName ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Digite seu nome completo"
              />
              {errors.fullName && <span className="text-red-500 text-sm">{errors.fullName.message}</span>}
            </div>

            {/* Campo Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
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
                className={`mt-1 block w-full p-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Digite seu email"
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
            </div>

            {/* Campo Telefone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Telefone
              </label>
              <input
                id="phone"
                type="tel"
                {...register('phone', { required: 'Telefone é obrigatório' })}
                className={`mt-1 block w-full p-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white ${
                  errors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Digite seu telefone"
              />
              {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
            </div>

            {/* Campo Data de Consulta */}
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Data da Consulta
              </label>
              <input
                id="date"
                type="date"
                {...register('date', { required: 'Data é obrigatória' })}
                className={`mt-1 block w-full p-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white ${
                  errors.date ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.date && <span className="text-red-500 text-sm">{errors.date.message}</span>}
            </div>

            {/* Campo de Seleção de Especialidade */}
            <div>
              <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Especialidade
              </label>
              <select
                id="specialty"
                {...register('specialty', { required: 'Selecione uma especialidade' })}
                className={`mt-1 block w-full p-3 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white ${
                  errors.specialty ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Selecione uma especialidade</option>
                <option value="dermatologia">Dermatologia</option>
                <option value="estética">Estética Facial</option>
                <option value="terapia">Terapia Corporal</option>
              </select>
              {errors.specialty && <span className="text-red-500 text-sm">{errors.specialty.message}</span>}
            </div>

            {/* Botão de Enviar */}
            <motion.button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-md shadow-md hover:bg-blue-600 focus:ring-4 focus:ring-blue-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Agendar'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default AgendeConsulta;
