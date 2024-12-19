import React from "react";

const ElEstudio: React.FC = () => {
  return (
    <div>
      <section className=" areasdepractica-banner flex flex-row items-center mx-auto  py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center  justify-center">
          {/* Columna de Información */}
          <div className="contain-info-areasdepractica text-gray-800 mx-auto max-w-3xl text-start">
            <h1 className="title-areasdepractica-banner  font-bold mb-5">El estudio</h1>
            <p className="p-banner-areasdepractica  ">
              Somos un equipo de abogados  <strong>especializados</strong> en diversas áreas del derecho, enfocados en ofrecer soluciones legales{" "}
              <strong>eficaces</strong> y <strong>adaptadas</strong> a las <strong>necesidades</strong> de nuestros clientes.{" "}
              Con un compromiso firme con la <strong>etica</strong> y la <strong>excelencia,</strong> {" "}
              trabajamos para <strong>proteger</strong> y <strong>optimizar</strong> los intereses de quienes {" "}
              nos eligen, con técnicas y métodos de trabajo orientados a la {" "}
              <strong>resolución de conflictos.</strong>
            </p>

          </div>


          {/* Columna de Imagen */}
          <div className="flex justify-center">
            <img
              src="/assets/img/el-estudio.jpeg"
              alt="Áreas de práctica"
              className="img-banner-elestudio   shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-white-elestudio bg-white">

      </section>

      <section className="relative h-[400px] bg-cover bg-center " style={{ backgroundImage: "url('/assets/img/maps-img.png')" }}>
        {/* Fondo con opacidad */}

        <div className="absolute inset-0 bg-customBlue/50"></div>
        <div className="elestudio-maps-contain absolute inset-0 flex flex-col justify-center items-center text-center text-white   bg-customBlue/30 w-[604px]">
          <div className="flex flex-col justify-center items-start text-center">
            <h3 className="text-2xl font-bold mb-4">Podés encontrarnos en:</h3>
            <p className="text-4xl w-[381px] text-start  font-medium mb-6">Tte. General Juan D. Perón 315, 2° piso, CABA</p>
            <a
              href="https://www.google.com/maps/place/Tte.+General+Juan+D.+Perón+315,+CABA"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-3 bg-customBlue text-white font-semibold border border-customBlue hover:bg-white hover:text-customBlue shadow-md transition"
            >
              Ver en Maps
            </a>
          </div>
        </div>


        {/* Contenido centrado */}

      </section>



    </div>

  );
};

export default ElEstudio;
