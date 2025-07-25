import { FaCheck, FaCalendarAlt, FaShoppingCart, FaMapMarkerAlt } from "react-icons/fa";

export default function Benefits() {
  const benefits = [
    { icon: <FaCheck className="text-2xl" />, title: "Qualidade Garantida", text: "Materiais duráveis." },
    { icon: <FaCalendarAlt className="text-2xl" />, title: "Agendamento Flexível", text: "Escolha sua data." },
    { icon: <FaShoppingCart className="text-2xl" />, title: "Preço Justo", text: "Sem taxas escondidas." },
    { icon: <FaMapMarkerAlt className="text-2xl" />, title: "Entregamos", text: "Em toda a região." },
  ];

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Por que alugar conosco?
      </h2>
      <div className="grid md:grid-cols-4 gap-8">
        {benefits.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center border border-gray-100">
            <div className="text-primary-500 mb-4 flex justify-center">{item.icon}</div>
            <h3 className="font-bold text-xl mb-2 text-gray-800">{item.title}</h3>
            <p className="text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}