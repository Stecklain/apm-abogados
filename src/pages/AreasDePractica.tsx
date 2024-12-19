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
    <CardsGrid/>

  </>;
};

export default AreasDePractica;
