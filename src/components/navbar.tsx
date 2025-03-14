import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-gray-50 z-50 transition-transform duration-300">
      <div className="container mx-auto px-8 py-4 flex items-center justify-between">
        <div className="flex-shrink-0">
          <img
            src={`${import.meta.env.BASE_URL}cat.png`}
            alt="Logo"
            className="h-12 w-12"
          />
        </div>

        <ul className="hidden xl:flex space-x-6 w-3/4 px-14">
          <li className="text-gray-900 text-lg font-medium transition-transform transform hover:-translate-y-0.5">
            <a href="#paslaugos">Paslaugos</a>
          </li>
          <li className="text-gray-900 text-lg font-medium transition-transform transform hover:-translate-y-0.5">
            <a href="#kainorastis">Kainoraštis</a>
          </li>
          <li className="text-gray-900 text-lg font-medium transition-transform transform hover:-translate-y-0.5">
            <a href="#atsiliepimai">Atsiliepimai</a>
          </li>
          <li className="text-gray-900 text-lg font-medium transition-transform transform hover:-translate-y-0.5">
            <a href="#kontaktai">Kontaktai</a>
          </li>
        </ul>

        <ul className="hidden xl:flex space-x-6 w-1/4 justify-end flex-nowrap text-white font-medium text-lg">
          <li className="bg-teal-950 p-2 px-6 rounded-lg transition-colors duration-300 hover:bg-teal-800 whitespace-nowrap">
            <a href="">Registracija vizitui</a>
          </li>
          <li className="bg-teal-950 p-2 px-6 rounded-lg transition-colors duration-300 hover:bg-teal-800 whitespace-nowrap">
            <a href="">Iškvietimas į namus</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
