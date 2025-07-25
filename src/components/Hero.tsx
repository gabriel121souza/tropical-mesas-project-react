import { FaWhatsapp, FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative h-96 bg-[url('https://via.placeholder.com/1920x600')] bg-cover bg-center flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Aluguel de Mesas e Cadeiras
        </h1>
        <p className="text-xl mb-8">
          Entregamos no seu evento
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => {
              const el = document.getElementById("products");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-primary-500 hover:bg-primary-600 px-6 py-3 rounded-lg font-medium flex items-center gap-2"
          >
            Ver Catálogo <FaArrowRight />
          </button>
          <button className="bg-white text-primary-500 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium flex items-center gap-2">
            WhatsApp <FaWhatsapp />
          </button>
        </div>
      </div>
    </section>
  );
}