module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // ou 'media'
  theme: {
    extend: {
      colors: {
        primary: '#0077b6',       // Azul para elementos principais
        secondary: '#80ed99',     // Verde claro para destaques
        accent: '#ff6f61',        // Laranja para CTAs
        neutralLight: '#f5f5f5',  // Cinza claro para fundos neutros
        neutralDark: '#2c2c2c',   // Cinza escuro para textos
        detail: '#9d4edd',        // Roxo para detalhes e ícones
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
