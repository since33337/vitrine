import React from 'react';
import heroo from '../assets/heroo.jpg';

const Hero = () => {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay semi-transparent pour que le texte soit lisible */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contenu */}
      <div className="relative z-10 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Bienvenue sur Mon site
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white">
          Nous créons des solutions web modernes et efficaces pour votre entreprise.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
          En savoir plus
        </button>
      </div>
    </section>
  );
};

export default Hero;
