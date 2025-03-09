import React from "react";

const Navbar: React.FC = () => {
  return (
    <div>
      

      <ul className="flex space-x-6 flex-grow justify-center mt-6">
        <li>
          {/* <div className="flex-shrink-0 ">
            <img
              src="/cat.png"
              alt="Logo"
              className="h-14 w-14"
            />
          </div> */}
        </li>
        <li className="text-gray-900 text-2xl font-medium transition-transform transform hover:-translate-y-0.5">
          <a href="#klinikos">Klinikos</a>
        </li>
        <li className="text-gray-900 text-2xl font-medium transition-transform transform hover:-translate-y-0.5">
          <a href="#paslaugos">Paslaugos</a>
        </li>
        <li className="text-gray-900 text-2xl font-medium transition-transform transform hover:-translate-y-0.5">
          <a href="#kainorastis">Kainoraštis</a>
        </li>
        <li className="text-gray-900 text-2xl font-medium transition-transform transform hover:-translate-y-0.5">
          <a href="#atsiliepimai">Atsiliepimai</a>
        </li>
        <li className="text-gray-900 text-2xl font-medium transition-transform transform hover:-translate-y-0.5">
          <a href="#kontaktai">Kontaktai</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
