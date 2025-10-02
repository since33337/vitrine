/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { ChevronDown, Sparkles, Zap, Target, ArrowRight, Play } from 'lucide-react';

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentText, setCurrentText] = useState(0);

  const dynamicTexts = [
    "des solutions web modernes",
    "des expériences utilisateur exceptionnelles", 
    "des applications performantes",
    "votre présence digitale"
  ];

  useEffect(() => {
    setIsLoaded(true);
    
    const textInterval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % dynamicTexts.length);
    }, 3000);

    return () => clearInterval(textInterval);
  }, []);

  const features = [
    { icon: Sparkles, text: "Design Créatif" },
    { icon: Zap, text: "Performance Optimale" },
    { icon: Target, text: "Solutions Sur Mesure" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110 transition-transform duration-[10s]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')`,
        }}
      />
      
      {/* Multiple Overlay Layers for Depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-ping opacity-75"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-white rounded-full animate-ping opacity-50"></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-blue-300 rounded-full animate-pulse opacity-40"></div>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 text-center px-4 max-w-6xl mx-auto transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Pre-title with Animation */}
        <div className="mb-6">
          <span className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-blue-300 text-sm font-medium border border-white/20">
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            Portfolio Professionnel
          </span>
        </div>

        {/* Main Title with Gradient */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white block mb-2">Créateur de</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-300% animate-gradient">
            Solutions Digitales
          </span>
        </h1>

        {/* Dynamic Subtitle */}
        <div className="h-16 flex items-center justify-center mb-8">
          <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
            Je conçois{' '}
            <span className="inline-block min-w-0 text-blue-300 font-semibold">
              <span 
                key={currentText}
                className="animate-fade-in-up"
              >
                {dynamicTexts[currentText]}
              </span>
            </span>
            <br className="hidden sm:block" />
            pour propulser votre entreprise vers le succès.
          </p>
        </div>

        {/* Features Cards */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className={`flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 text-white transition-all duration-500 hover:bg-white/20 hover:scale-105 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <IconComponent className="w-5 h-5 mr-2 text-blue-300" />
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            );
          })}
        </div>

        {/* CTA Buttons */}
        <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button 
            onClick={() => window.location.href = '/services'}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl flex items-center"
          >
            Découvrir mes services
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          
          <button className="group flex items-center text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
            Voir mon travail
          </button>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-300 mb-1">5+</div>
            <div className="text-gray-300 text-sm">Projets Réalisés</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-300 mb-1">2+</div>
            <div className="text-gray-300 text-sm">Années d'Expérience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-300 mb-1">90%</div>
            <div className="text-gray-300 text-sm">Clients Satisfaits</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/70">
        <span className="text-sm mb-2 font-medium">Découvrir</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  )
}

export default Home