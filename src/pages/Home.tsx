import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const members = [
    {
      name: 'Enrique Manuel Falcón',
      image: '/assets/img/enrique-falcon.png',
    },
    {
      name: 'Osvaldo A. Prato',
      image: '/assets/img/osvaldo-pratto.png',
    },
    {
      name: 'Eduardo A. Merola',
      image: '/assets/img/eduardo-merola.png',
    },
    {
      name: 'Osvaldo A. Prato',
      image: '/assets/img/juan-perez.png',
    },
    {
      name: 'Enrique Manuel Falcón',
      image: '/assets/img/carlos-lopez.png',
    },
    {
      name: 'Eduardo A. Merola',
      image: '/assets/img/luis-rodriguez.png',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= members.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? members.length - 1 : prevIndex - 1
    );
  };


  return (
    <div style={{ backgroundImage: "url('/assets/img/banner-home.png')" }}>
      <div className="banner-home relative z-10 text-left bg-cover bg-center h-[883px] flex flex-col items-start justify-center px-4 md:px-8 lg:px-40">
        {/* Rectángulo blanco (opcional) */}
        {/* <span className="span-white-1 absolute left-0 h-[95px] bg-white  z-0"></span>
  <span className="span-white-2 absolute right-0 h-[95px] bg-white  z-0"></span> */}

        <div className="flex flex-col items-start relative z-20 ">
          {/* Titulo */}
          <h2 className="text-lg md:text-xl font-medium text-white mb-4 md:mb-6">Nuestros expertos</h2>

          {/* Contenedor de imágenes */}
          <div className="img-container-home relative w-[150px] h-[80px] md:w-[200px] md:h-[100px]">
            <img
              src="/assets/img/carlos-lopez.png"
              alt="Experto 1"
              className="absolute w-[64px] h-[64px] md:w-[96px] md:h-[96px] rounded-full object-cover z-40"
            />
            <img
              src="/assets/img/luis-rodriguez.png"
              alt="Experto 2"
              className="absolute w-[64px] h-[64px] md:w-[96px] md:h-[96px] rounded-full object-cover z-30"
              style={{ left: '25%' }}
            />
            <img
              src="/assets/img/carlos-lopez.png"
              alt="Experto 3"
              className="absolute w-[64px] h-[64px] md:w-[96px] md:h-[96px] rounded-full object-cover z-20"
              style={{ left: '50%' }}
            />
            <img
              src="/assets/img/carlos-lopez.png"
              alt="Experto 4"
              className="absolute w-[64px] h-[64px] md:w-[96px] md:h-[96px] rounded-full object-cover z-10"
              style={{ left: '75%' }}
            />
          </div>
        </div>

        {/* Título principal */}
        <h1 className="custom-title-home w-[100%] sm:w-[60%] text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 relative z-0">
          <span className="text-customBlue bg-white">Más</span> de 20 años defendiendo tus derechos con compromiso y excelencia{' '}
          <span className="text-customBlue bg-white">legal.</span>
        </h1>

        {/* Subtítulo */}
        <h2 className="custom-subtitle-home w-[100%] sm:w-[619px] text-sm md:text-base lg:text-lg text-gray-300 mb-4 md:mb-6 relative z-20">
          Soluciones jurídicas de confianza en derecho del consumidor, mercado de capitales y más.
        </h2>

        {/* Botón consulta */}
        <a
          href="#contact-form"
          className="custom-button-home w-[100%] sm:w-[250px] text-center flex items-center justify-center bg-customBlue text-white px-6 py-2 md:px-8 md:py-3 hover:text-customBlue hover:bg-white text-sm md:text-lg font-medium shadow-md transition relative z-20"
        >
          Hacer una consulta
        </a>
      </div>


      <div className="flex flex-col  items-center bg-white pt-16  relative w-full">
        {/* Sección superior con imagen y texto */}
        <div className="container-img-section2 flex flex-col md:flex-row items-center md:items-end gap-8 w-full px-6 md:px-[155px]">
          {/* Imagen */}
          <div className=" w-full md:w-1/2">
            <img
              src="/assets/img/abogado-work.png"
              alt="Abogado trabajando"
              className="img-section2 md:w-[808px] md:h-[559px] md:absolute   z-20 shadow-lg "
            />
          </div>
          {/* Texto */}
          <div className="w-full md:w-1/2 text-center md:text-right flex flex-col md:items-end mb-8">
            <h2 className="title-containerimg-section2  font-bold text-gray-800 mb-4 text-3xl md:text-5xl">La Firma</h2>
            <p className="p-containerimg-section2  leading-10 mb-6 max-w-[650px] text-sm md:text-2xl">
              <strong className="text-gray-800">APM Abogados</strong>, fundado en el{' '}
              <strong className="text-gray-800">año 2002</strong>, es un estudio jurídico especializado en
              <strong className="text-gray-800"> derecho del consumido, comercial y Mercado de capitales</strong>,
              incluyendo Acciones de Clase, tipo de proceso este último que hemos sustanciado en numerosas ocasiones
              ante la <strong className="text-gray-800">Justicia Nacional</strong>, especialmente.
            </p>
            <Link
              to="/contacto"
              className="px-10 py-3 bg-customBlue text-white  shadow hover:text-customBlue  hover:bg-white border border-customBlue transition">
              Escribinos
            </Link>
          </div>
        </div>

        {/* Sección con estadísticas */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-16 w-full max-w-screen-lg">
          {/* Elemento 1 */}
          <div className="group-circle relative text-center group flex items-center justify-center">
            <div className="circle-estadistics-home absolute flex items-center justify-center rounded-full border-2 border-transparent  group-hover:scale-110 transition-all duration-300">
              {/* Este div ya es el círculo */}
            </div>
            <div className="relative text-black group-hover:text-customGrey z-10">
              <div className="text-5xl font-bold">+20</div>
              <div className="text-black group-hover:text-customGrey">años de experiencia</div>
            </div>
          </div>

          {/* Elemento 2 */}
          <div className="group-circle relative text-center group flex items-center justify-center">
            <div className="circle-estadistics-home absolute flex items-center justify-center rounded-full border-2 border-transparent  group-hover:scale-110 transition-all duration-300"></div>
            <div className="relative text-black group-hover:text-customGrey">
              <div className="text-5xl font-bold">+2000</div>
              <div className="text-black group-hover:text-customGrey">causas judiciales</div>
            </div>
          </div>

          {/* Elemento 3 */}
          <div className="group-circle relative text-center group flex items-center justify-center">
            <div className="circle-estadistics-home absolute flex items-center justify-center rounded-full border-2 border-transparent  group-hover:scale-110 transition-all duration-300"></div>
            <div className="relative text-black group-hover:text-customGrey">
              <div className="text-5xl font-bold">+8</div>
              <div className="text-black group-hover:text-customGrey">áreas de práctica</div>
            </div>
          </div>
        </div>

        <div className="contain-practice px-6 md:px-16 py-12 bg-white">
          {/* Título */}
          <h2 className="title-practice   font-bold text-center text-gray-800 mb-6">Áreas de práctica</h2>
          {/* Descripción */}
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            En nuestro estudio, brindamos soluciones legales integrales, adaptadas a las necesidades comerciales,
            financieras, laborales y administrativas de nuestros clientes, siempre con un enfoque estratégico y eficaz.
          </p>

          {/* Tarjetas */}
          <div className="container-cards-home grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 justify-items-center px-4">
            {/* Tarjeta 1 */}
            <div className="cards-home group shadow-xl overflow-hidden bg-white flex flex-col items-center text-center transition-all duration-300 w-[270px] h-[490px] hover:h-[500px] sm:w-[380px] sm:h-[530px] sm:hover:h-[550px]">
              <img
                src="/assets/img/derecho-consumo.jpeg"
                alt="Derecho de consumo"
                className="object-cover w-[325px] h-[229px] mt-6"
              />
              <div className="p-4 relative">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Derecho de consumo</h3>
                <p className="text-gray-600 text-sm leading-relaxed px-2">
                  Área que protege los derechos de los consumidores y usuarios en relación con la adquisición de bienes
                  y servicios.
                </p>
                {/* Flecha que aparece en hover */}
                <button className="absolute top-40 right-1/2 transform translate-x-1/2 opacity-0 group-hover:opacity-100 text-customBlue border border-customBlue px-2 py-1 rounded-full shadow transition-all duration-300 mt-6 sm:mt-6">
                  <Link
                    to="/areas-de-practica">
                    ➔
                  </Link>
                </button>
              </div>
            </div>

            {/* Tarjeta 2 */}
            <div className="cards-home group shadow-xl overflow-hidden bg-white flex flex-col items-center text-center transition-all duration-300 w-[270px] h-[490px] hover:h-[500px] sm:w-[380px] sm:h-[530px] sm:hover:h-[550px]">
              <img
                src="/assets/img/derecho-comercial.jpeg"
                alt="Derecho comercial"
                className="flex object-cover w-[325px] h-[229px] mt-6"
              />
              <div className="p-4 relative">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Derecho comercial</h3>
                <p className="text-gray-600 text-sm leading-relaxed px-2">
                  Regula tanto las transacciones comerciales como las empresas, los contratos mercantiles, las
                  sociedades comerciales y las quiebras.
                </p>
                <button className="absolute top-40 right-1/2 transform translate-x-1/2 opacity-0 group-hover:opacity-100 text-customBlue border border-customBlue px-2 py-1 rounded-full shadow transition-all duration-300 mt-6 sm:mt-6">
                  <Link
                    to="/areas-de-practica">
                    ➔
                  </Link>
                </button>
              </div>
            </div>

            {/* Tarjeta 3 */}
            <div className="cards-home group shadow-xl overflow-hidden bg-white flex flex-col items-center text-center transition-all duration-300 w-[270px] h-[490px] hover:h-[500px] sm:w-[380px] sm:h-[530px] sm:hover:h-[550px]">
              <img
                src="/assets/img/derecho-civil.jpeg"
                alt="Derecho civil"
                className="flex  w-[325px] h-[229px] object-cover mt-6"
              />
              <div className="p-4 relative">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Derecho civil</h3>
                <p className="text-gray-600 text-sm leading-relaxed px-2">
                  Se ocupa de los aspectos más comunes de la vida diaria de las personas, como contratos, propiedad,
                  familia, sucesiones, y daños, entre otros.
                </p>
                <button className="absolute top-40 right-1/2 transform translate-x-1/2 opacity-0 group-hover:opacity-100 text-customBlue border border-customBlue px-2 py-1 rounded-full shadow transition-all duration-300 mt-6 sm:mt-6">
                  <Link
                    to="/areas-de-practica">
                    ➔
                  </Link>
                </button>
              </div>
            </div>

            {/* Tarjeta 4 */}
            <div className="cards-home group shadow-xl overflow-hidden bg-white flex flex-col items-center text-center transition-all duration-300 w-[270px] h-[490px] hover:h-[500px] sm:w-[380px] sm:h-[530px] sm:hover:h-[550px]">
              <img
                src="/assets/img/derecho-trabajo.jpeg"
                alt="Derecho de trabajo"
                className=" flex object-cover w-[325px] h-[229px] mt-6"
              />
              <div className="p-4 relative">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Derecho de trabajo</h3>
                <p className="text-gray-600 text-sm leading-relaxed px-2 ">
                  Regula las relaciones laborales entre empleadores y trabajadores, protegiendo los derechos de los
                  empleados y estableciendo las obligaciones de los empleadores.
                </p>
                <button className="absolute top-40 right-1/2 transform translate-x-1/2 opacity-0 group-hover:opacity-100 text-customBlue border border-customBlue px-2 py-1 rounded-full shadow transition-all duration-300 mt-6 sm:mt-6">
                  <Link
                    to="/areas-de-practica">
                    ➔
                  </Link>
                </button>
              </div>
            </div>
          </div>

          {/* Botón */}
          <div className="text-center mt-12">
            <Link
              to="/areas-de-practica"
              className="px-8 py-4  bg-white text-customBlue hover:text-white font-medium shadow border border-customBlue hover:bg-customBlue transition">
              Ver todas las áreas
            </Link>
          </div>
        </div>
        {/* Miembros del estudio */}
        <section className="bg-amber-50 w-full">
          <div className="team-carousel text-center bg-lightYellow py-32">
            {/* Título */}
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Miembros del estudio</h2>
            <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
              Nuestro equipo está formado por abogados expertos en diversas áreas del derecho, comprometidos con ofrecer
              soluciones legales efectivas y personalizadas para cada cliente.
            </p>

            {/* Carrusel */}
            <div className="relative flex items-center justify-center">
              {/* Botón izquierdo */}
              <button
                onClick={prevSlide}
                className="absolute left-4 bg-gray-300 hover:bg-gray-400 p-3 rounded-full shadow-md transition-all z-10"
              >
                &larr;
              </button>

              {/* Contenedor de imágenes visibles */}
              <div className="overflow-hidden w-full max-w-[320px] flex justify-center">
                <div
                  className="flex transition-transform duration-300"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                  }}
                >
                  {members.map((member, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-full flex justify-center items-center"
                    >
                      <div className="relative group w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full overflow-hidden shadow-lg">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="object-cover w-full h-full"
                        />
                        {/* Botón hover */}
                        <button className="absolute inset-0 flex items-end justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-all">
                          <div className="p-2 mb-6 rounded-full shadow-md">
                            <span className="text-white text-lg border-2 px-2 py-1 rounded-full">
                              &rarr;
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botón derecho */}
              <button
                onClick={nextSlide}
                className="absolute right-4 bg-gray-300 hover:bg-gray-400 p-3 rounded-full shadow-md transition-all z-10"
              >
                &rarr;
              </button>
            </div>
          </div>
        </section>


        {/* Contacto */}
        <div id="contact-form" className="bg-customBlue text-white w-full py-12 px-6 md:px-40">
          <h1 className="flex items-center justify-center mb-8 text-3xl md:text-5xl">Contacto</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Columna izquierda: Formulario */}
            <div>
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                ¿Estás necesitando asesoría legal?
              </h2>
              <p className="text-gray-300 mb-6 text-sm md:text-base">
                En APM Abogados, nos especializamos en ofrecer soluciones jurídicas eficaces y a medida para cada uno de
                nuestros clientes. Complete el formulario y uno de nuestros abogados se pondrá en contacto con usted lo
                antes posible.
              </p>

              {/* Formulario */}
              <form className="flex flex-col gap-4">
                <h4>Nombre</h4>
                <input
                  type="text"
                  className="p-1 bg-transparent text-white border-b border-gray-400 focus:outline-none focus:border-white transition duration-300"
                />
                <h4>Email</h4>
                <input
                  type="email"
                  className="p-1 bg-transparent text-white border-b border-gray-400 focus:outline-none focus:border-white transition duration-300"
                />
                <h4>Mensaje</h4>
                <textarea
                  className="p-3 text-white bg-customBlue border focus:outline-none"
                  rows={5}
                ></textarea>
                <button
                  type="submit"
                  className="w-full md:w-fit bg-white text-customBlue px-10 py-2 md:px-20 md:py-4  md:mt-8 shadow hover:bg-gray-300 transition"
                >
                  Enviar
                </button>
              </form>
            </div>

            {/* Columna derecha: Mapa */}
            <div className="w-full h-full flex justify-center items-center">
              <iframe
                src="https://maps.google.com/?q=General Juan D Perón 315 7° piso, CABA&output=embed"
                className="w-full md:w-[692px] h-[300px] md:h-[622px] shadow-md"
                title="Ubicación"
              ></iframe>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
