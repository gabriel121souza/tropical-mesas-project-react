export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "Alugamos para um casamento e tudo foi perfeito! As cadeiras estavam impecáveis.",
      author: "Ana Silva, São Paulo",
    },
    {
      id: 2,
      text: "Atendimento rápido e preço justo. Recomendo para qualquer evento!",
      author: "Carlos Mendes, Rio de Janeiro",
    },
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          O que nossos clientes dizem
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-lg shadow-md border border-gray-100"
            >
              <p className="text-gray-600 italic mb-6">"{testimonial.text}"</p>
              <p className="font-semibold text-primary-500">
                — {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}