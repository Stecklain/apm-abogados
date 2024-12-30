
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
    <div>
      <section className=" areasdepractica-banner flex flex-row items-center mx-auto  py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center  justify-center">
          {/* Columna de Información */}
          <div className="contain-info-areasdepractica text-gray-800 mx-auto max-w-3xl text-start">
            <h1 className="title-areasdepractica-banner  font-bold mb-5">Hace tu consulta</h1>
            <p className="p-banner-areasdepractica   ">
              Nuestro equipo de abogados está aquí <strong>para ayudarte.</strong> {" "}
              Completa el formulario o comunícate con nosotros  {" "}
              directamente para recibir una <strong> consulta personalizada.</strong>{" "}
              Estamos listos para atender tus <strong>necesidades legales</strong> de {" "}
              manera eficiente y profesional.
            </p>

          </div>


          {/* Columna de Imagen */}
          <div className="flex justify-center">
            <img
              src="/assets/img/contacto-banner-img.jpeg"
              alt="Áreas de práctica"
              className="img-banner-elestudio   shadow-lg object-cover"
            />
          </div>
        </div>
      </section>



      <div className="bg-customBlue text-white w-full py-12 px-40 ">
        <h1 className="flex items-center justify-center mb-14 text-5xl">Contacto</h1>
        <div className=" grid grid-cols-2 md:grid-cols-2 gap-8">
          {/* Columna izquierda: Formulario */}
          <div>
            <h2 className="text-4xl font-bold mb-20">¡Esperamos tu mensaje!</h2>
          

            {/* Formulario */}
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
      <h4>Nombre</h4>
      <input
        type="text"
        name="user_name"
        className="p-1 bg-transparent text-white border-b border-gray-400 focus:outline-none focus:border-white transition duration-300 mb-6"
        required
      />
      <h4>Email</h4>
      <input
        type="email"
        name="user_email"
        className="p-1 bg-transparent text-white border-b border-gray-400 focus:outline-none focus:border-white transition duration-300 mb-6"
        required
      />
      <h4>Mensaje</h4>
      <textarea
        name="message"
        className="p-10 text-white bg-customBlue border focus:outline-none mb-8"
        required
      ></textarea>
      <button
        type="submit"
        className="w-fit bg-white text-customBlue px-20 py-4 shadow hover:bg-gray-300 transition"
      >
        Enviar
      </button>
    </form>
          </div>

          {/* Columna derecha: Mapa */}
          <div className="w-full h-full flex justify-center items-center">
            <iframe
              src="https://maps.google.com/?q=General Juan D Perón 315 7° piso, CABA&output=embed"
              className="w-[692px] h-[622px]  shadow-md"
              title="Ubicación"></iframe>
          </div>
        </div>

      </div>
    </div>

  );
};

export default Contacto;
