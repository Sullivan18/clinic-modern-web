import wpp from '../assets/wpp.png'; // Mantenha a importação do SVG

const WhatsAppButton = () => (
  <a
    href="https://wa.me/SEU_NUMERO"
    className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full shadow-lg"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img src={wpp} alt="WhatsApp" className="w-6 h-6" />
  </a>
);

export default WhatsAppButton;
