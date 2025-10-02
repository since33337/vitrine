import React, { useState, useEffect } from "react";
import { Menu, X, User, Code, FileText, Briefcase, FolderOpen, Mail, Home } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const menuItems = [
    { name: "Accueil", href: "/", icon: Home, id: "home" },
    { name: "À propos", href: "/about", icon: User, id: "about" },
    { name: "CV", href: "/resume", icon: FileText, id: "resume" },
    { name: "Services", href: "/services", icon: Code, id: "services" },
    { name: "Portfolio", href: "/portfolio", icon: FolderOpen, id: "portfolio" },
    { name: "Contact", href: "/contact", icon: Mail, id: "contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href, id) => {
    setActiveSection(id);
    setOpen(false);
    // Simuler la navigation (remplacez par votre logique de routing)
    window.location.href = href;
  };

  return (
    <>
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex justify-between items-center h-16 lg:h-20">
            
            {/* Logo/Brand */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Code className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className={`text-xl font-bold transition-colors duration-300 ${
                  scrolled ? 'text-gray-800' : 'text-gray-800'
                }`}>
                  Armel<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">.dev</span>
                </h1>
                <p className="text-xs text-gray-500 hidden sm:block">Développeur Full Stack</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {menuItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.href, item.id)}
                    className={`group relative flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    <IconComponent className={`w-4 h-4 mr-2 transition-transform duration-300 group-hover:scale-110 ${
                      activeSection === item.id ? 'text-white' : 'text-gray-500'
                    }`} />
                    <span>{item.name}</span>
                    
                    {/* Active indicator */}
                    {activeSection === item.id && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-lg"></div>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <button 
                onClick={() => handleNavClick('/contact', 'contact')}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg flex items-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                Me contacter
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-t border-gray-200/50 shadow-lg transition-all duration-300 ${
          open ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
        }`}>
          <div className="container mx-auto px-4 py-4">
            <div className="space-y-2">
              {menuItems.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.href, item.id)}
                    className={`w-full flex items-center px-4 py-3 rounded-xl text-left font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? 'text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-md'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <IconComponent className={`w-5 h-5 mr-3 ${
                      activeSection === item.id ? 'text-white' : 'text-gray-500'
                    }`} />
                    {item.name}
                  </button>
                );
              })}
            </div>
            
            {/* Mobile CTA */}
            <div className="mt-6 pt-4 border-t border-gray-200">
              <button 
                onClick={() => handleNavClick('/contact', 'contact')}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Me contacter
              </button>
            </div>

            {/* Social Links Mobile */}
            <div className="flex justify-center space-x-4 mt-6 pt-4 border-t border-gray-200">
              <div className="flex space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center hover:bg-blue-200 transition-colors cursor-pointer">
                  <span className="text-blue-600 text-sm font-bold">Li</span>
                </div>
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                  <span className="text-gray-600 text-sm font-bold">Gh</span>
                </div>
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center hover:bg-purple-200 transition-colors cursor-pointer">
                  <span className="text-purple-600 text-sm font-bold">Tw</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Backdrop for mobile menu */}
      {open && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default Header;