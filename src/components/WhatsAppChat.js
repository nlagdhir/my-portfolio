import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const WhatsAppChat = () => {
  const [open, setOpen] = useState(false);
  const phoneNumber = "+919510110198";
  const message = encodeURIComponent("Hello, I have an inquiry!");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="whatsapp-container">
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
        <FaWhatsapp className="whatsapp-icon" />
      </a>
    </div>
  );
};

export default WhatsAppChat;
