import React from "react";


const Portfolio = () => {
  const projects = [
    {
      title: "Operation CRUD",
      desc: "Projet complet en React et Node.js avec PostgreSQL.",
      image: "https://via.placeholder.com/400x200",
      github: "https://github.com/since33337/cathy",
      demo: "https://cathy-y1j5-ddz4tflbq-cathys-projects-d856d899.vercel.app/",
    },
    {
      title: "Blog",
      desc: "Application de blog avec gestion des articles.",
      image: "https://via.placeholder.com/400x200",
      github: "https://github.com/ton-github/blog",
      demo: "https://blog-demo.vercel.app",
    },
    {
      title: "Ecommerce",
      desc: "Site de vente avec panier et interface client.",
      image: "https://via.placeholder.com/400x200",
      github: "https://github.com/ton-github/ecommerce",
      demo: "https://ecommerce-demo.vercel.app",
    },
    {
      title: "Application web de tontine en ligne",
      desc: "Application permettant de gérer des tontines en ligne.",
      image: "https://via.placeholder.com/400x200",
      github: "https://github.com/ton-github/admin-dashboard",
      demo: "https://admin-dashboard.vercel.app",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-12">Mes Projets</h2>

      <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4">
        {projects.map((project, index) => (
          <div
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
            key={index}
          >
            <img
              src={project.image}
              alt={`Projet ${project.title}`}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 flex-grow">{project.desc}</p>
              <div className="mt-4 flex space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-gray-800 text-white py-2 rounded hover:bg-gray-900 transition"
                >
                  Code GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                  Voir Démo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
