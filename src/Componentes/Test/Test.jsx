import React from "react";
import ProyectsCards from "../Proyects/ProyectsCards";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import Proyects from "../Proyects/Proyects";
import projectData from "../../Componentes/Proyects/ProyectData"; // Asegúrate de que la ruta sea correcta

const Test = () => {
  return (
    <>
      <Hero />
      {/* <ProyectsCards /> */}
      <Proyects data={projectData} />
      <Footer />
    </>
  );
};

export default Test;
