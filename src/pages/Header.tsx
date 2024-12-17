import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header-background text-white flex">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-4xl font-bold">APM Abogados</h1>

        <nav className="flex space-x-14">
          <a href="#" className="hover:text-gray-300 transition">
            Inicio
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            Áreas de práctica
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            El estudio
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            Nuestro equipo
          </a>
        </nav>

        {/* Boton contacto */}
        <div>
          <a
            href="#"
            className=" custom-button-small   text-white hover:bg-white  hover:text-customBlue transition-all border border-white ">
            Contacto
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
