import { BsWhatsapp } from 'react-icons/bs';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919810422279?text=Hi, I'm interested in your modular kitchen and wardrobe solutions. Can you help me?"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[90] w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-luxury cursor-pointer transition-colors duration-300 animate-pulse-gold"
      aria-label="Chat on WhatsApp"
    >
      <BsWhatsapp className="w-7 h-7" />
    </a>
  );
}

