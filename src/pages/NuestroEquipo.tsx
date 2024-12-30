import React, { useState } from "react";
import { Link } from "react-router-dom";

const NuestroEquipo: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<any | null>(null);

  const teamMembers = [
    {
      img: "/assets/img/juan-perez.png",
      name: "Enrique Manuel Falcón",
      role: "Abogado",
      cvLink: "/assets/cv/enrique-manuel-falcon.pdf",
      details: {
        formación: "Facultad de derecho de la Universidad de Buenos Aires (1966). ",
        miembro:
          "Academia Nacional de Derecho y Ciencias Sociales de Buenos Aires, Asociación Argentina de Derecho Procesal, Instituto Iberoamericano de Derecho Procesal, Consejo Académico del Consejo de Redacción de la Revista de Derecho Procesal Ed. Rubinzal-Culzoni Editores, Co-fundador y titular de la Asociación Argentina de Derecho Procesal, Tribunal de Arbitraje General y Mediación (UBA - UBATEC S.A. y Colegio de Escribanos de Capital Federal), Comisión Consultora del SAIJ, Derecho Procesal (1989), Instituto de Derechos del Consumidor de la Universidad Notarial Argentina, Miembro consultor Internacional de 'Principios y Reglas de Procedimiento Civil Trasnacional' (The American Law Institute-Unidroit), Director del Instituto de Derecho Procesal de la Academia Nacional de Derecho y Ciencias Sociales de Buenos Aires, Director General de Rubinzal online.",
        premios:
          "Tesis Premio Facultad y Medalla de Oro (2002). , Universidad de Buenos Aires (UBA), Obtuvo el primer Premio Academia Nacional de Derecho y Ciencias Sociales de Buenos Aires por el 'Tratado de la Prueba' (2004), KONEX Humanidades (2016), como una de las cinco personas más destacadas de la última década en 'Derecho Procesal, Internacional y de la Integración.'",

        profesor: "Auxiliar de Segund Elementos del Derecho Procesal Civil y Comercial (Facultad de Derecho de la UBA).",
        especialidades: "Derecho Comercial, Derecho Penal.",
        idiomas: "Español, Inglés",
        email: "enrique.falcon@apmabogados.com.ar",
      },
    },
    {
      img: "/assets/img/juan-perez.png",
      name: "Osvaldo A. Prato",
      role: "Abogado",
      cvLink: "/assets/cv/osvaldo-a-prato.pdf",
      details: {
        formación: "Doctorado en Derecho, Universidad Torcuato Di Tella.",
        miembro: "Colegio Publico de Abogados de la Capital Federal.",
        profesor: "Auxiliar de Segund Elementos del Derecho Procesal Civil y Comercial (Facultad de Derecho de la UBA).",
        especialidades: "Derecho Penal, Derecho Procesal.",
        idiomas: "Español, Portugués",
        email: "osvaldo.prato@apmabogados.com.ar",
      },
    },
    {
      img: "/assets/img/juan-perez.png",
      name: "Eduardo A. Merola",
      role: "Abogado",
      cvLink: "/assets/cv/eduardo-a-merola.pdf",
      details: {
        formación: "Especialización en Derecho Tributario, UBA.",
        miembro: "Colegio Publico de Abogados de la Capital Federal.",
        profesor: "Auxiliar de Segund Elementos del Derecho Procesal Civil y Comercial (Facultad de Derecho de la UBA).",
        especialidades: "Derecho Tributario, Derecho Empresarial.",
        idiomas: "Español",
        email: "eduardo.merola@apmabogados.com.ar",
      },
    },
    {
      img: "/assets/img/juan-perez.png",
      name: "Enrique Manuel Falcón",
      role: "Abogado",
      cvLink: "/assets/cv/enrique-manuel-falcon.pdf",
      details: {
        formación: "Facultad de Derecho, Universidad de Buenos Aires (2005).",
        miembro: "Colegio Publico de Abogados de la Capital Federal.",
        profesor: "Auxiliar de Segund Elementos del Derecho Procesal Civil y Comercial (Facultad de Derecho de la UBA).",
        especialidades: "Derecho Comercial, Derecho Penal.",
        idiomas: "Español, Inglés",
        email: "enrique.falcon@apmabogados.com.ar",
      },
    },
    {
      img: "/assets/img/juan-perez.png",
      name: "Osvaldo A. Prato",
      role: "Abogado",
      cvLink: "/assets/cv/osvaldo-a-prato.pdf",
      details: {
        formación: "Doctorado en Derecho, Universidad Torcuato Di Tella.",
        miembro: "Colegio Publico de Abogados de la Capital Federal.",
        profesor: "Auxiliar de Segund Elementos del Derecho Procesal Civil y Comercial (Facultad de Derecho de la UBA).",
        especialidades: "Derecho Penal, Derecho Procesal.",
        idiomas: "Español, Portugués",
        email: "osvaldo.prato@apmabogados.com.ar",
      },
    },
    {
      img: "/assets/img/juan-perez.png",
      name: "Eduardo A. Merola",
      role: "Abogado",
      cvLink: "/assets/cv/eduardo-a-merola.pdf",
      details: {
        formación: "Especialización en Derecho Tributario, UBA.",
        miembro: "Colegio Publico de Abogados de la Capital Federal.",
        profesor: "Auxiliar de Segund Elementos del Derecho Procesal Civil y Comercial (Facultad de Derecho de la UBA).",
        especialidades: "Derecho Tributario, Derecho Empresarial.",
        idiomas: "Español",
        email: "eduardo.merola@apmabogados.com.ar",
      },
    },
    {
      img: "/assets/img/juan-perez.png",
      name: "Enrique Manuel Falcón",
      role: "Abogado",
      cvLink: "/assets/cv/enrique-manuel-falcon.pdf",
      details: {
        formación: "Facultad de Derecho, Universidad de Buenos Aires (2005).",
        miembro: "Colegio Publico de Abogados de la Capital Federal.",
        profesor: "Auxiliar de Segund Elementos del Derecho Procesal Civil y Comercial (Facultad de Derecho de la UBA).",
        especialidades: "Derecho Comercial, Derecho Penal.",
        idiomas: "Español, Inglés",
        email: "enrique.falcon@apmabogados.com.ar",
      },
    },
    {
      img: "/assets/img/juan-perez.png",
      name: "Osvaldo A. Prato",
      role: "Abogado",
      cvLink: "/assets/cv/osvaldo-a-prato.pdf",
      details: {
        formación: "Doctorado en Derecho, Universidad Torcuato Di Tella.",
        miembro: "Colegio Publico de Abogados de la Capital Federal.",
        profesor: "Auxiliar de Segund Elementos del Derecho Procesal Civil y Comercial (Facultad de Derecho de la UBA).",
        especialidades: "Derecho Penal, Derecho Procesal.",
        idiomas: "Español, Portugués",
        email: "osvaldo.prato@apmabogados.com.ar",
      },
    },

  ];

  const closePopup = () => setSelectedMember(null);

  return (
    <div>
      <section className="areasdepractica-banner flex flex-row items-center mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center">
          <div className="contain-info-areasdepractica text-gray-800 mx-auto max-w-3xl text-start">
            <h1 className="title-areasdepractica-banner font-bold mb-5">
              Nuestro equipo
            </h1>
            <p className="p-banner-areasdepractica">
              Contamos con un grupo de abogados con una{" "}
              <strong>solida formacion</strong> y{" "}
              <strong>vasta experiencia</strong> en distintas areas del derecho.
              Cada uno de nuestros profesionales aporta una{" "}
              <strong>perspectiva unica</strong>, combinando conocimiento{" "}
              <strong>tecnico</strong> con enfoque <strong>practico</strong> y
              orientado a <strong>resultados</strong>.
            </p>
          </div>

          <div className="flex justify-center">
            <img
              src="/assets/img/el-estudio.jpeg"
              alt="Áreas de práctica"
              className="img-banner-elestudio shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-[320px] h-[320px] object-cover rounded-full mb-10 transition-transform group-hover:scale-110"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <a

                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-customBlue underline text-sm hover:text-blue-950"
                >
                  Ver Curriculum Vitae
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-400 py-12">
        <div className="desafiolegal-areasdepractica-contain mx-auto text-end flex flex-col items-end">
          <h2 className="title-desafiolegal-areasdepractica font-bold text-white mb-4">
            ¿Tienes un desafío legal?
          </h2>
          <p className="p-desafiolegal-areasdepractica text-customBlue mb-6 leading-relaxed max-w-4xl">
            Nuestro equipo de abogados está listo para ofrecerte el
            asesoramiento y la representación que necesitas. Contáctanos hoy y
            descubre cómo podemos ayudarte a alcanzar los mejores resultados.
          </p>
          <Link
            to="/contacto" className="bg-customBlue text-white font-semibold py-3 px-8 border border-customBlue shadow-md hover:bg-white hover:text-customBlue transition duration-300">
            Hacer una consulta
          </Link>
        </div>
      </section>

      {selectedMember && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-[1043px] h-[868px] p-6 shadow-lg relative flex flex-col items-center overflow-y-auto max-h-[90vh] rounded-md">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              ✕
            </button>
            <div className="flex flex-col w-[800px]">
              <div className="flex flex-row items-center">
                {/* Imagen */}
                <img
                  src={selectedMember.img}
                  alt={selectedMember.name}
                  className="w-[230px] h-[230px] object-cover rounded-full"
                />
                {/* Nombre */}
                <div className="group-member-info flex flex-col items-start px-6">
                  <h3 className="name-member font-bold">{selectedMember.name}</h3>
                  <p className="job-member text-start">{selectedMember.role}</p>
                </div>
              </div>

              {/* Información Detallada */}
              <div className="text-left text-lg text-gray-800 mt-4">
                <p className="mt-4">
                  <strong>Formación:</strong>
                  <p>{selectedMember.details.formación}</p>
                </p>
                <p className="mt-4">
                  <strong>Miembro:<br /></strong>-
                  <span
                    dangerouslySetInnerHTML={{
                      __html: selectedMember.details.miembro.replace(
                        /, /g,
                        "<br />-"
                      ),
                    }}
                  ></span>
                </p>
                {selectedMember.details.premios && ( // Aquí aplicamos el ternario
                  <p className="mt-4">
                    <strong>Premios:<br /></strong>-
                    <span
                      dangerouslySetInnerHTML={{
                        __html: selectedMember.details.premios.replace(
                          /, /g,
                          "<br />-"
                        ),
                      }}
                    ></span>
                  </p>
                )}
                <p className="mt-4">
                  <strong>Profesor:</strong>
                  <p>{selectedMember.details.profesor}</p>
                </p>
                <p className="mt-4">
                  <strong>Especialidades:</strong>
                  <p>{selectedMember.details.especialidades}</p>
                </p>
                <p className="mt-4">
                  <strong>Idiomas:</strong>
                  <p>{selectedMember.details.idiomas}</p>
                </p>
                <p className="mt-4">
                  <strong>Email:</strong>
                  <p>
                    <a
                      href={`mailto:${selectedMember.details.email}`}
                      className="text-blue-600 underline"
                    >
                      {selectedMember.details.email}
                    </a>
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default NuestroEquipo;
