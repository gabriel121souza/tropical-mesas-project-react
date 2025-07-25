import { FaWhatsapp, FaPhone, FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Sobre */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-primary-500">Tropical Mesas</h3>
          <p className="text-gray-300">
            Solução completa para aluguel de Mesas e Cadeiras no Valparíso de Goiás.
          </p>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-primary-500">Contato</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <FaWhatsapp className="text-primary-500" /> (61) 99116-3414
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-primary-500" /> (61) 99116-3414
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-primary-500" /> mesastropical@gmail.com
            </li>
          </ul>
        </div>

        {/* Redes Sociais */}
        <div>
          <h3 className="text-xl font-bold mb-4 text-primary-500">Redes Sociais</h3>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/tropicalmesas/"
              className="bg-gray-700 hover:bg-gray-600 w-10 h-10 rounded-full flex items-center justify-center text-primary-500"
              aria-label="Instagram"
            >
              <FaInstagram className="text-xl" />
            </a>
            <a
              href="#"
              className="bg-gray-700 hover:bg-gray-600 w-10 h-10 rounded-full flex items-center justify-center text-primary-500"
              aria-label="Facebook"
            >
              <FaFacebook className="text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Tropical mesas. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}