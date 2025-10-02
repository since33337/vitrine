import React from "react";

const testimonials = [
  { name: "Alice", text: "Excellent service et communication." },
  { name: "Bob", text: "Très satisfait du résultat final." },
  { name: "Charlie", text: "Professionnels et réactifs." },
];

const Testimonials = () => {
  return (
    <section className="py-20 text-center">
      <h2 className="text-3xl font-bold mb-10">Témoignages</h2>
      <div className="flex justify-center gap-8 flex-wrap">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-gray-100 p-6 rounded shadow w-64">
            <p className="text-gray-700 mb-4">"{t.text}"</p>
            <h4 className="font-semibold">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
