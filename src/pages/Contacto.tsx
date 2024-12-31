
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contacto: React.FC = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', // Reemplaza con tu Service ID
        'YOUR_TEMPLATE_ID', // Reemplaza con tu Template ID
        form.current,
        'YOUR_PUBLIC_KEY' // Reemplaza con tu Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Mensaje enviado con éxito.');
        },
        (error) => {
          console.log(error.text);
          alert('Hubo un error al enviar el mensaje.');
        }
      );

    e.target.reset(); // Opcional: limpia los campos del formulario
  };


  return (



    <div className="  flex flex-col  items-center mx-auto  md:py-0">
      <section className=" contacto-banner flex flex-col md:flex-row items-center mx-auto  py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center  justify-center">
        
          <div className="contain-info-areasdepractica text-gray-800 mx-auto max-w-3xl md:max-w-[619px] w-full text-center md:text-start px-4 md:px-0">
            <h1 className="title-areasdepractica-banner text-2xl md:text-4xl font-bold mb-5">Hace tu consulta</h1>
            <p className="p-banner-areasdepractica text-sm md:text-xl   ">
              Nuestro equipo de abogados está aquí <strong>para ayudarte.</strong> {" "}
              Completa el formulario o comunícate con nosotros  {" "}
              directamente para recibir una <strong> consulta personalizada.</strong>{" "}
              Estamos listos para atender tus <strong>necesidades legales</strong> de {" "}
              manera eficiente y profesional.
            </p>

          </div>


          {/* Columna de Imagen */}
          <div className="flex justify-center w-full ">
            <img
              src="/assets/img/contacto-banner-img.jpeg"
              alt="Áreas de práctica"
              className="img-banner-elestudio md:w-[1025px] md:h-[550px] shadow-lg object-cover"
            />
          </div>
        </div>
      </section>
      <div id="contact-form" className="bg-customBlue text-white w-full py-12 px-6 md:px-40">
        <h1 className="flex items-center justify-center mb-8 text-3xl md:text-5xl">Contacto</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Columna izquierda: Formulario */}
          <div>
            <h2 className="text-2xl text-center md:text-start md:text-4xl font-bold mb-4">
              ¿Estás necesitando asesoría legal?
            </h2>
            <p className="text-gray-300 mb-6 text-sm md:text-base text-center md:text-start">
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
  );
};

export default Contacto;
