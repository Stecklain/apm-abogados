import React, { useState } from "react";
import { Link } from "react-router-dom";
import { teamMembers } from "../utils/membersInfo"
import { Box, Modal, Button } from "@mui/material";

const NuestroEquipo: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<any | null>(null);
  const [openShareOfferModal, setOpenShareOfferModal] = React.useState(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "90%", md: "65%" },
    overflow: 'scroll',
    height: "80vh",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const handleOpenShareOfferModal = () => setOpenShareOfferModal(true);
  const handleCloseShareOfferModal = () => setOpenShareOfferModal(false);
  const handleSelectMember = (member: any) => {
    if (!member.showCurriculum) {
      setSelectedMember(member);
      handleOpenShareOfferModal();
    }
  };

  return (
    <div>
      <section className="areasdepractica-banner">
        <div className="flex flex-col-reverse gap-10  lg:flex-row items-center justify-between pb-10 lg:pb-0">
          {/* Columna de Información */}
          <div className='lg:w-[45%] px-[5%] lg:ps-[5%]'>
            <h2 className="font-bold text-4xl lg:text-5xl mb-5">Nuestro equipo</h2>
            <p className="text-md md:text-lg">
              Contamos con un grupo de abogados que poseen una {" "}
              <strong>sólida formación</strong> y{" "}
              <strong>experiencia</strong> en distintas áreas del derecho.
              Además forman parte del cuerpo docente de una reconocida {" "}
              fundación de estudios superiores de derecho (FUNDESI){" "}
              en la Ciudad de Buenos Aires.
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

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto">
          <div className="flex flex-wrap-reverse justify-center gap-16">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group flex flex-col items-center text-center transition-transform transform hover:scale-101 cursor-pointer"
                onClick={() => handleSelectMember(member)}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-[320px] h-[320px] object-cover rounded-full  mb-10 transition-transform group-hover:scale-110"
                />
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {member.name}
                </h3>
                {member.role && (<p className="text-md text-gray-600">{member.role}</p>)}
                {!member.showCurriculum && (<a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline text-sm hover:text-blue-950"
                >
                  Ver Curriculum Vitae
                </a>)}
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {selectedMember && (
        <Modal
          open={openShareOfferModal}
          onClose={handleCloseShareOfferModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="flex flex-col max-w-[800px]">
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
                </div>
              </div>

              {/* Información Detallada */}
              {
                selectedMember.details &&
                <div className="text-left text-lg text-gray-800 mt-4">
                  {selectedMember.details.formacion && <p className="mt-4">
                    <strong>Formación:</strong>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: selectedMember.details.formacion.replace(
                          /\n/g,
                          "<br />"
                        ),
                      }}
                    ></span>
                  </p>}
                  {selectedMember.details.miembro &&
                    <p className="mt-4">
                      <strong>Miembro:<br /></strong>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: selectedMember.details.miembro.replace(
                            /\n/g,
                            "<br />"
                          ),
                        }}
                      ></span>
                    </p>}
                  {selectedMember.details.premios &&
                    <p className="mt-4">
                      <strong>Premios:<br /></strong>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: selectedMember.details.premios.replace(
                            /\n/g,
                            "<br />"
                          ),
                        }}
                      ></span>
                    </p>}
                  {selectedMember.details.profesor &&
                    <p className="mt-4">
                      <strong>Profesor:</strong>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: selectedMember.details.profesor.replace(
                            /\n/g,
                            "<br />"
                          ),
                        }}
                      ></span>
                    </p>
                  }
                  {selectedMember.details.especialidades &&
                    <p className="mt-4">
                      <strong>Especialidades:</strong>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: selectedMember.details.especialidades.replace(
                            /\n/g,
                            "<br />"
                          ),
                        }}
                      ></span>
                    </p>}
                  {selectedMember.details.idiomas &&
                    <p className="mt-4">
                      <strong>Idiomas:</strong>
                      <p>{selectedMember.details.idiomas}</p>
                    </p>}
                  {selectedMember.details.email &&
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
                    </p>}
                  {selectedMember.details.notas &&
                    <p className="mt-4">
                      <strong>Información importante:</strong>
                      <p>{selectedMember.details.notas}</p>
                    </p>}
                </div>
              }
            </div>
            <Button
              variant="contained"
              onClick={handleCloseShareOfferModal}
              className="roboto-regular mt-4 text-white hover:bg-white hover:text-primary transition-all duration-500 ease-in-out border border-white"
            >
              Cerrar
            </Button>
          </Box>
        </Modal>
      )}
    </div>
  );
};

export default NuestroEquipo;
