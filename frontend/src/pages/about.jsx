import React from "react";
import { Calendar, Globe, Phone, MapPin, User, GraduationCap, Mail, Briefcase, Code, Palette, Smartphone, Award } from "lucide-react";

const About = () => {
  const personalInfo = [
    {
      icon: Calendar,
      label: "Date de naissance",
      value: "17 janvier 2002",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Globe,
      label: "Site web",
      value: "www.armelsince.dev",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Phone,
      label: "Téléphone",
      value: "+237 123 456 789",
      color: "from-green-500 to-green-600"
    },
    {
      icon: MapPin,
      label: "Ville",
      value: "Yaoundé, Cameroun",
      color: "from-red-500 to-red-600"
    },
    {
      icon: User,
      label: "Âge",
      value: "23 ans",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: GraduationCap,
      label: "Diplôme",
      value: "BTS Informatique",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Mail,
      label: "Email",
      value: "armelsince@gmail.com",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Briefcase,
      label: "Freelance",
      value: "Disponible",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const skills = [
    { icon: Code, label: "Développement Web", progress: 90 },
    { icon: Palette, label: "UI/UX Design", progress: 85 },
    { icon: Smartphone, label: "Apps Mobile", progress: 80 },
    { icon: Award, label: "Gestion Projet", progress: 88 }
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">
              À Propos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Moi</span>
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Description */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                Designer UI/UX & Développeur Web
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6 italic">
                "Passionné par la création d'interfaces modernes et intuitives, je conçois des solutions numériques adaptées aux besoins des utilisateurs."
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Je suis motivé par la recherche de solutions créatives et efficaces. 
                J'aime relever des défis techniques et proposer des expériences 
                utilisateurs fluides et attrayantes. Mon objectif est de transformer 
                une idée en un projet numérique concret, fiable et moderne.
              </p>
            </div>

            {/* Skills Section */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h4 className="text-xl font-bold text-gray-800 mb-6">Mes Compétences</h4>
              <div className="space-y-4">
                {skills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div key={index} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <IconComponent className="w-5 h-5 text-blue-500 mr-2" />
                          <span className="text-gray-700 font-medium">{skill.label}</span>
                        </div>
                        <span className="text-sm text-gray-500 font-semibold">{skill.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Personal Info */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-bl-full"></div>
            
            <h4 className="text-2xl font-bold text-gray-800 mb-8">Informations Personnelles</h4>
            
            <div className="grid grid-cols-1 gap-4">
              {personalInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div 
                    key={index} 
                    className="group flex items-center p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 border border-transparent hover:border-gray-200 hover:shadow-md"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-800 text-sm mb-1">
                        {info.label}
                      </div>
                      <div className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                        {info.value}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Status Badge */}
            <div className="mt-8 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-3"></div>
                <span className="text-green-700 font-semibold">Actuellement disponible pour de nouveaux projets et pour accompagner les apprenants a realiser leurs reves</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Me Contacter
            </button>
             <a
    href="/cv.pdf"
    download
    className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition-colors duration-300"
  >
    Télécharger le CV
  </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;