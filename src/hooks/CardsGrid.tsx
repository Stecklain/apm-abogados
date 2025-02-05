import { Link } from "react-router-dom";
import { truncateText } from '../utils/string-utils';

// Info
const cardsData = [
  {
    img: "/assets/img/AREA_ACCION_CLASE.jpg",
    alt: "Acciones de clase",
    title: "Acciones de clase",
    description:
      "Las acciones de clase son un mecanismo procesal que permite a un grupo de personas con intereses comunes demandar colectivamente en defensa de sus derechos. Este instrumento, en el cual somos pioneros en el derecho argentino, tiene como objetivo garantizar el acceso a la justicia y la eficiencia en la resolución de conflictos que afectan a múltiples individuos de manera similar.",
  },
  {
    img: "/assets/img/AREA_DERECHO_CONSUMO.jpg",
    alt: "Derecho de consumo",
    title: "Derecho de consumo",
    description:
      "Se encarga de regular las relaciones entre los usuarios y consumidores con los proveedores. Su principal objetivo es proteger los derechos de los consumidores, garantizar la transparencia en las transacciones comerciales y promover el equilibrio en las relaciones de consumo.",
  },
  {
    img: "/assets/img/AREA_MERCADO_CAPITALES.jpg",
    alt: "Mercado de Capitales",
    title: "Mercado de Capitales",
    description:
      "En Argentina está creciendo la obtención de capitales productivos que necesitan las empresas, no recurriendo éstas a los “clásicos” créditos bancarios. Para ello se instrumentan diversas figuras jurídicas (Fondos Comunes de Inversión -FCI-, fideicomisos, Obligaciones Negociables, pagarés bursátiles, etc.). Tales instrumentos a través de agentes de bolsa, captan ahorros de personas comunes que no son inversores calificados (Resolución General n° 761/2018 de la Comisión Nacional de Valores) los cuales cobran una renta periódica a través del tiempo, que varía según el grado de éxito del producto que han elegido. Quienes vigilan el comportamiento de ese mercado son asociaciones civiles de defensa del consumidor especializadas en esa materia y cuando advierten (posibles) ilegalidades, recurren a nuestro estudio para que las represente y desenvuelva las negociaciones resarcitorias del caso, o inicie el correspondiente reclamo judicial a través de una acción de clase.",
  },
  {
    img: "/assets/img/AREA_DERECHO_COMERCIAL.jpg",
    alt: "Derecho comercial",
    title: "Derecho comercial",
    description:
      "Patrocinamos a reclamantes que tengan conflictos en materia societaria, fideicomisos, cooperativismo, infracapitalización de sociedades comerciales, seguros, bancos, retails, etc.",
  },
  {
    img: "/assets/img/AREA_DERECHO_BANCARIO.jpg",
    alt: "Derecho bancario",
    title: "Derecho bancario",
    description:
      "Es la rama del derecho que regula las actividades y relaciones derivadas de la prestación de servicios bancarios y financieros. Comprende las normas que rigen a las entidades financieras, como bancos y otras instituciones de crédito, así como los contratos, operaciones y transacciones que involucran a estas entidades.",
  },
  {
    img: "/assets/img/AREA_DERECHO_ARBITRAL.jpg",
    alt: "Arbitraje",
    title: "Arbitraje",
    description:
      "Intervenimos y asesoramos en litigios comerciales llevados adelante ante diversos Tribunales de Arbitraje.",
  },
  {
    img: "/assets/img/AREA_DERECHO_CIVIL.jpg",
    alt: "Derecho civil",
    title: "Derecho civil",
    description:
      "Sustanciamos conflictos de familia, sucesiones, conjuntos inmobiliarios, propiedad horizontal, condominios, derechos reales, gestión de negocios, etc.",
  },
  {
    img: "/assets/img/AREA_DERECHO_LABORAL.jpg",
    alt: "Derecho laboral",
    title: "Derecho laboral",
    description:
      "Tomamos reclamos derivados de una relación de trabajo, como actores o defensores de quien sea objeto de un juicio laboral, en cualquiera de sus variantes (accidentes de trabajo, incapacidades sobrevinientes, etc.)",
  },
  {
    img: "/assets/img/AREA_DERECHO_ADMINISTRATIVO.jpeg",
    alt: "Derecho administrativo",
    title: "Derecho administrativo",
    description:
      "Es la rama del derecho público que regula la actividad del Estado en su función administrativa, las relaciones entre la Administración Pública y los particulares, y los mecanismos de control sobre los actos del poder público. Su propósito principal es garantizar que las actuaciones de los órganos administrativos sean genuinas, transparentes y respeten los derechos de los ciudadanos"
  },
];

const CardsGrid = () => {
  return (
    <div className="min-h-screen mt-20 flex items-center justify-center bg-gray-100">
      <div className="container-cards-home flex flex-wrap justify-center gap-6 p-6">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="cards-home group shadow-xl overflow-hidden bg-customBlue flex flex-col items-center text-center transition-all duration-300 w-[90%] min-h-[700px] h-[100%] md:w-[507px] md:min-h-[800px] md:h-[800px] md:hover:h-[830px]"
          >
            {/* Imagen */}
            <img
              src={card.img}
              alt={card.alt}
              className="object-cover w-full h-[35%] md:h-[368px]"
            />
            {/* Contenido */}
            <div className="p-4 relative w-full flex flex-col justify-between flex-grow">
              <div>
                <h3 className="title-cards-areasdepractica font-bold text-start text-white mb-2 px-4">
                  {card.title}
                </h3>
                <div className="p-cards-areasdepractica text-start text-white leading-relaxed px-4 h-64 overflow-y-auto">
                  {card.description}
                </div>
              </div>

              {/* Botón "Quiero asesorarme" */}
              <div
                className={`${window.innerWidth < 768
                    ? "opacity-100 mb-5"
                    : "opacity-0 group-hover:opacity-100"
                  } transition-opacity duration-500 mt-4`}
              >
                <Link
                  to="/contacto"
                  className="text-white border text-xl border-white hover:bg-white hover:text-primary px-4 py-2 shadow"
                >
                  Quiero asesorarme
                </Link>
              </div>

              {/* Flecha */}
              <div className="hidden lg:flex lg:flex-col lg:items-center">
                <span className="text-xl font-bold text-white border-[3px] border-white rounded-full px-4 p-2 transition-transform duration-300 transform group-hover:rotate-180">
                  ↓
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardsGrid;
