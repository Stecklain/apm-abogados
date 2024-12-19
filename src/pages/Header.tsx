import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header-background text-white flex">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-4xl font-bold">APM Abogados</h1>

        <nav className="flex space-x-14">
          <a href="#" className="hover:text-gray-300 transition">
          <Link to="/">
            Inicio
            </Link>
          </a>
          <a href="#" className="hover:text-gray-300 transition">
          <Link to="/areas-de-practica">
            Áreas de práctica
            </Link>
          </a>
          <a href="#" className="hover:text-gray-300 transition">
          <Link to="/el-estudio">
            El estudio
            </Link>
          </a>
          <a href="#" className="hover:text-gray-300 transition">
          <Link to="/nuestro-equipo">
            Nuestro equipo
            </Link>
          </a>
        </nav>

        {/* Boton contacto */}
        <div>
          <a
            href="#"
            className=" custom-button-small   text-white hover:bg-white  hover:text-customBlue transition-all border border-white ">
             <Link to="/contacto">
            Contacto
            </Link>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
