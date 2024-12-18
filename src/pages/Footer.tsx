import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-customBlue text-white py-6 mt-8">
      <div className="container mx-auto text-center">
        <div className="text-lg font-bold">APM Abogados</div>
        <p className="text-sm mt-2">
          📍 Gral. Juan D. Perón 315, 2° piso, CABA <br />
          ☎ Tel: 11-5766-2143 <br />
          ✉ Email:{" "}
          <a
            href="mailto:info@apmabogados.com.ar"
            className="underline hover:text-gray-300"
          >
            info@apmabogados.com.ar
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
