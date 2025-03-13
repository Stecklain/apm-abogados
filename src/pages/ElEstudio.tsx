import React from "react";

const ElEstudio: React.FC = () => {
  return (
    <div>
      <section className="areasdepractica-banner">
        <div className="flex flex-col-reverse gap-10  2xl:flex-row items-center justify-between pb-10 2xl:pb-0">
          {/* Columna de Información */}
          <div className='2xl:w-[45%] px-[5%] 2xl:ps-[5%]'>
            <h2 className="font-bold text-4xl 2xl:text-5xl mb-5">El estudio</h2>

            <p className="text-md md:text-2xl">Nuestra sede se encuentra en un prestigioso edificio ubicado en microcentro declarado patrimonio histórico de la Ciudad de Buenos Aires.</p>
          </div>


          {/* Columna de Imagen */}
          <div className='h-[40%] 2xl:w-[50%]'>
            <img
              src="/assets/img/EL_ESTUDIO.jpeg"
              alt="Áreas de práctica"
            />
          </div>
        </div>
      </section>

      <section className="section-white-elestudio bg-white   flex items-start justify-start p-[5%]">
        {/* Columna izquierda */}




        {/* Columna derecha */}
        <p className="text-md md:text-lg whitespace-pre-wrap text-justify">Recibimos las investigaciones de asociaciones civiles en materia ambiental
          según la ley general del ambiente 25.675 y leyes conexas, para dictaminar
          eventuales reclamos a los responsables y, por otro lado, asesoramos también
          a entidades análogas sobre cuestiones enmarcadas en las leyes de defensa
          del consumidor y mercado de capitales (títulos bursátiles de inversores no
          calificados). Ellas reciben cientos de consultas vía web o personalmente, que
          entienden se violaron sus derechos (usura, gastos inexistentes, comisiones
          abusivas, falta de información, abuso de posición dominante, etc.) y según la
          complejidad de la situación las derivan a nuestro estudio. Ello así para que,

          en su caso, se involucre institucionalmente la ONG requirente en acciones
          colectivas con el apoyo profesional de este estudio, para obtener un
          resarcimiento, sea por sentencia o acuerdos transaccionales.
          Dicho mecanismo de reclamo (acciones de clase o colectivas) es la
          especialidad de nuestro estudio, tratándose de un sistema judicial que ya
          tiene una larga historia en EE.UU., Alemania, Bélgica, Brasil, Chile, España, Francia, Grecia, Holanda, Italia y
          otros países.
        </p>
      </section>

      <section className="relative h-[400px] bg-cover bg-center " style={{ backgroundImage: "url('/assets/img/maps-img.png')" }}>
        {/* Fondo con opacidad */}
        <div className="absolute inset-0 bg-customBlue/50"></div>
        <div className="elestudio-maps-contain absolute inset-0 flex flex-col justify-center items-center md:items-start md:ps-10 text-center text-white   bg-customBlue/30">
          <div className="flex flex-col justify-center items-start text-center">
            <h3 className="text-2xl font-bold mb-4">Podés encontrarnos en:</h3>
            <p className="text-4xl w-[381px] text-start  font-medium mb-6">Tte. General Juan D. Perón 315, 2° piso, CABA</p>
            <a
              href="https://www.google.com/maps/place/Tte.+General+Juan+D.+Perón+315,+CABA"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-3 bg-customBlue text-white font-semibold border border-customBlue hover:bg-white hover:text-primary shadow-md transition"
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
