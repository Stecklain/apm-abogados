import React from 'react';
import CardsGrid from '../hooks/CardsGrid';

const AreasDePractica: React.FC = () => {
  return <>

    <section className=" areasdepractica-banner flex flex-row items-center mx-auto  py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center  justify-center">
        {/* Columna de Información */}
        <div className="contain-info-areasdepractica text-gray-800 mx-auto max-w-3xl text-start">
          <h1 className="title-areasdepractica-banner  font-bold mb-5">Áreas de práctica</h1>
          <p className="p-banner-areasdepractica  ">
            En nuestro estudio, brindamos asesoramiento <strong>integral</strong> en diversas áreas del derecho, con un enfoque especializado en las{" "}
            <strong>necesidades empresariales y particulares</strong>.
          </p>
          <p className="p-banner-areasdepractica ">
            Nos dedicamos a ofrecer <strong>soluciones legales</strong> en las áreas del derecho en las que el estudio se especializa.
          </p>
        </div>


        {/* Columna de Imagen */}
        <div className="flex justify-center">
          <img
            src="/assets/img/banner-areasdepractica.jpeg"
            alt="Áreas de práctica"
            className="img-banner-areasdepractica   shadow-lg object-cover"
          />
        </div>
      </div>
    </section>

    |  {/* Cards */}
    <CardsGrid />

    {/* Desafio legal */}

    <section className="bg-gray-400 py-12">
      <div className="desafiolegal-areasdepractica-contain mx-auto  text-end flex flex-col items-end">
        <h2 className="title-desafiolegal-areasdepractica  font-bold text-white mb-4">¿Tienes un desafío legal?</h2>
        <p className="p-desafiolegal-areasdepractica text-customBlue mb-6 leading-relaxed max-w-4xl">
          Nuestro equipo de abogados está listo para ofrecerte el asesoramiento y la representación que necesitas.
          Contáctanos hoy y descubre cómo podemos ayudarte a alcanzar los mejores resultados.
        </p>
        <button className="bg-customBlue text-white font-semibold py-3 px-8 border border-customBlue shadow-md hover:bg-white hover:text-customBlue transition duration-300">
          Hacer una consulta
        </button>
      </div>
    </section>


  </>;
};

export default AreasDePractica;
