export default function HowItWorks() {
  const steps = [
    { step: "1", title: "Escolha os Itens", text: "Selecione no catálogo." },
    { step: "2", title: "Defina Data e Local", text: "Informe quando e onde." },
    { step: "3", title: "Aproveite Seu Evento", text: "Nós cuidamos de tudo!" },
  ];

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
        Como Funciona?
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((item, index) => (
          <div key={index} className="border-2 border-primary-100 bg-white rounded-lg p-6 text-center">
            <div className="bg-primary-500 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              {item.step}
            </div>
            <h3 className="font-bold text-xl mb-2 text-gray-800">{item.title}</h3>
            <p className="text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}