import React from 'react';
import CardsGrid from '../hooks/CardsGrid';
import { Link } from "react-router-dom";

const AreasDePractica: React.FC = () => {
  return <>

    <section className="areasdepractica-banner">
      <div className="flex flex-col-reverse gap-10  lg:flex-row items-center justify-between pb-10 lg:pb-0">
        {/* Columna de Información */}
        <div className='lg:w-[45%] px-[5%] lg:ps-[5%]'>
          <h2 className="font-bold text-4xl lg:text-5xl mb-5">Áreas de práctica</h2>
          <p className="text-md md:text-2xl">
            En nuestro estudio, brindamos asesoramiento integral en diversas áreas del
            derecho para en su caso, deducir las correspondientes acciones judiciales.
          </p>

        </div>


        {/* Columna de Imagen */}
        <div className='h-[40%] lg:w-[50%]'>
          <img
            src="/assets/img/AREAS_PRACTICA.jpeg"
            alt="Áreas de práctica"
          />
        </div>
      </div>
    </section>

    {/* Cards */}
    <CardsGrid />

    {/* Desafio legal */}

    <section className="bg-gray-400 p-12">
      <div className="mx-auto  text-end flex flex-col items-end">
        <h2 className="font-bold text-3xl text-white mb-4">¿Quiere hacer una
        consulta?</h2>
        
        <Link
          to="/contacto" className="bg-customBlue text-white font-semibold py-3 px-8 shadow-md hover:bg-white hover:text-primary transition duration-500">
          Hacer una consulta
        </Link>
      </div>
    </section>


  </>;
};

export default AreasDePractica;
