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

      <section className="section-white-elestudio bg-white  flex items-center justify-center">
  <div className="container max-w-6xl grid grid-cols-1  ">
    {/* Columna izquierda */}
    

    {/* Columna derecha */}
    <div className="text-center ">
  <p className="section-white-elestudio-p mb-6">
    Recogiendo <strong>investigaciones</strong> de las <strong>asociaciones civiles</strong> de defensa del <strong>consumidor</strong> sumado a las consultas y quejas de las personas que acuden a ellas y luego derivan a este <strong>estudio jurídico</strong>, pudieron llevarse adelante <strong>acciones judiciales</strong> no solo en temas <strong>financieros clásicos</strong>, como el reproche de <strong>intereses usurarios</strong>, cobro de <strong>gastos inexistentes</strong>, falta de <strong>información</strong>, <strong>abuso de posición dominante</strong>, etcétera, sino también en un área muy específica y con poco desarrollo que requiere de <strong>conocimientos especiales</strong>, tal como lo es el <strong>mercado de capitales</strong>.
  </p>
  <p className="section-white-elestudio-p mb-6">
    Recogiendo <strong>investigaciones</strong> de las <strong>asociaciones civiles</strong> de defensa del <strong>consumidor</strong> sumado a las consultas y quejas de las personas que acuden a ellas y luego derivan a este <strong>estudio jurídico</strong>, pudieron llevarse adelante <strong>acciones judiciales</strong> no solo en temas <strong>financieros clásicos</strong>, como el reproche de <strong>intereses usurarios</strong>, cobro de <strong>gastos inexistentes</strong>, falta de <strong>información</strong>, <strong>abuso de posición dominante</strong>, etcétera, sino también en un área muy específica y con poco desarrollo que requiere de <strong>conocimientos especiales</strong>, tal como lo es el <strong>mercado de capitales</strong>.
  </p>
  <p className="section-white-elestudio-p mb-6">
    Dada la natural <strong>confidencialidad</strong> que requieren las personas respecto a sus <strong>inversiones</strong>, las <strong>acciones de clase</strong> son un mecanismo ideal para <strong>resguardar los derechos</strong> de los <strong>consumidores</strong>, preservando siempre sus <strong>identidades</strong>.
  </p>
  <p className="section-white-elestudio-p">
    El sistema de <strong>acciones de clase</strong> posee una larga historia en países como <strong>Alemania</strong>, <strong>Bélgica</strong>, <strong>Brasil</strong>, <strong>Chile</strong>, <strong>España</strong>, <strong>Francia</strong>, <strong>Grecia</strong>, <strong>Holanda</strong>, <strong>Italia</strong>, entre otros, encontrándose en <strong>Argentina</strong> en un <strong>continuo desarrollo</strong>, del cual formamos parte hace más de <strong>20 años</strong>.
  </p>
</div>

  </div>
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
