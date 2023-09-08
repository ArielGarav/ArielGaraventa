import React from "react";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import Proyects from "../Proyects/Proyects";
import projectData from "../../Componentes/Proyects/ProyectData";

const Test = () => {
  return (
    <>
      <Hero />
      <Proyects data={projectData} />
      <Footer />
    </>
  );
};

export default Test;
