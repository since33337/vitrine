import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-3 text-center text-white">
      <h3 className="text-lg font-bold">Site personnel</h3>
      <p className="max-w-xl mx-auto mt-2 text-gray-400">
        "Et quelqu’un s’enfuit, mais ce sont eux-mêmes qui sont concernés..."
      </p>
      <div className="flex justify-center space-x-4 mt-4">
        <Link to="/twitter"><i className="bi bi-twitter-x"></i></Link>
        <Link to="/facebook"><i className="bi bi-facebook"></i></Link>
        <Link to="/instagram"><i className="bi bi-instagram"></i></Link>
        <Link to="/skype"><i className="bi bi-skype"></i></Link>
        <Link to="/linkedin"><i className="bi bi-linkedin"></i></Link>
      </div>
      <div className="mt-6 text-sm text-gray-500">
        © 2025 Site personnel. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
