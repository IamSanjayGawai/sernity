
import { FaWhatsapp } from "react-icons/fa"; // install react-icons
// npm install react-icons

const WhatsAppButton = () => {
  const phoneNumber = "919881667979"; // your WhatsApp number
  const message = "Hello 👋, I am interested in Serenity Residences. Can you provide more details?";

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110 z-50"
    >
      <FaWhatsapp size={32} />
    </button>
  );
};

export default WhatsAppButton;
