// src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-customBlue text-white py-6">
      <div className="container mx-auto flex flex-col items-center text-center gap-4">
        {/* Logo */}
        <div className="text-lg font-bold">APM Abogados</div>

        {/* Información de contacto */}
        <div className="text-sm">
          <p>
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
      </div>
    </footer>
  );
};

export default Footer;
