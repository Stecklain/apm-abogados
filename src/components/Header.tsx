import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header-background text-white flex relative z-20">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="logo flex items-center">
          {/* Logo Desktop */}
          <Link to="/" className="hidden lg:block w-[431px] h-[52px]">
            <img
              src="/assets/img/APM-abogados-logo.svg"
              alt="APM Abogados Logo"
              className="w-full h-full object-contain"
            />
          </Link>
          {/* Logo Mobile */}
          <Link to="/" className="lg:hidden w-[219px] h-[71px]">
            <img
              src="/assets/img/APM-abogados-logo-mobile.svg"
              alt="APM Abogados Logo Mobile"
              className="w-full h-full object-contain"
            />
          </Link>
        </div>


        {/* Navigation */}
        <nav
          className={`absolute top-[70px] left-0 w-full bg-[#23314B] text-white flex flex-col items-center space-y-4 transition-all duration-300 ${
            isMenuOpen ? 'h-auto opacity-100' : 'h-0 opacity-0 overflow-hidden'
          } lg:static lg:h-auto lg:opacity-100 lg:overflow-visible lg:flex lg:flex-row lg:space-x-14 lg:justify-center lg:items-center lg:space-y-0`}
        >
          <Link to="/" className="hover:text-gray-300 transition">
            Inicio
          </Link>
          <Link to="/areas-de-practica" className="hover:text-gray-300 transition">
            Áreas de práctica
          </Link>
          <Link to="/el-estudio" className="hover:text-gray-300 transition">
            El estudio
          </Link>
          <Link to="/nuestro-equipo" className="hover:text-gray-300 transition">
            Nuestro equipo
          </Link>
        </nav>

        {/* Botón contacto */}
        <div className="hidden lg:block">
          <Link
            to="/contacto"
            className="custom-button-small text-white hover:bg-white hover:text-customBlue transition-all border border-white"
          >
            Contacto
          </Link>
        </div>

        {/* Icono menú hamburguesa para mobile */}
        <div className="lg:hidden">
          <button
            className="text-white"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;