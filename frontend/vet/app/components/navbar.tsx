import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full bg-light-white z-50 transition-transform duration-300">
      <div className="container mx-auto px-8 py-4 flex items-center justify-between">
        <div className="flex-shrink-0">
          <img src="/cat.png" alt="Logo" className="h-12 w-12" />
        </div>

        <ul className="hidden xl:flex space-x-6 w-3/4 px-14">
          <li className="text-gray-900 text-xl font-medium transition-transform transform hover:-translate-y-0.5">
            <a href="#klinikos">Klinikos</a>
          </li>
          <li className="text-gray-900 text-xl font-medium transition-transform transform hover:-translate-y-0.5">
            <a href="#paslaugos">Paslaugos</a>
          </li>
          <li className="text-gray-900 text-xl font-medium transition-transform transform hover:-translate-y-0.5">
            <a href="#kainorastis">Kainoraštis</a>
          </li>
          <li className="text-gray-900 text-xl font-medium transition-transform transform hover:-translate-y-0.5">
            <a href="#atsiliepimai">Atsiliepimai</a>
          </li>
          <li className="text-gray-900 text-xl font-medium transition-transform transform hover:-translate-y-0.5">
            <a href="#kontaktai">Kontaktai</a>
          </li>
        </ul>

        <ul className="hidden xl:flex space-x-6 w-1/4 justify-end flex-nowrap text-white font-medium text-xl">
          <li className="bg-gray-900 p-2 px-6 rounded-lg transition-transform transform hover:opacity-70 whitespace-nowrap">
            <a href="">Registracija vizitui</a>
          </li>
          <li className="bg-gray-900 p-2 px-6 rounded-lg transition-transform transform hover:opacity-70 whitespace-nowrap">
            <a href="">Iškvietimas į namus</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
