import React from "react";

const ConstructionPage: React.FC = () => {
  return (
    <div style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:'2rem', textAlign: "center", padding: "50px", fontSize: "1.5rem"}}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>Sitio en construcción</h1>
      <p>Estamos trabajando en este sitio web. Vuelve pronto.</p>
      <img 
        src="https://nutrimentossuper.com/wp-content/uploads/2024/09/en_construccion.png" 
        alt="Página en construcción" 
        style={{ marginBottom: "20px", borderRadius: "8px" }}
      />
    </div>
  );
};

export default ConstructionPage;
