import React from "react";
import Layout from "../Componentes/Layout/Layout";
import { Route, Routes as ReactDomRoutes, useLocation } from "react-router";
import HeroLanding from "../Componentes/HeroLanding/HeroLanding";
import About from "../Componentes/About/About";
import Proyects from "../Componentes/Proyects/Proyects";
import projectData from "../Componentes/Proyects/ProyectData";
import Contact from "../Componentes/Contact/Contact";

const Routes = () => {
  const location = useLocation();
  const isBaseRoute = location.pathname === "/";

  const backgroundImage = isBaseRoute
    ? "url('https://res.cloudinary.com/debcgjfr8/image/upload/v1693457262/PortFolio/BackGrounds/wssnui19tgbacluejzhd.svg')"
    : "none";

  const backgroundColor = isBaseRoute ? "transparent" : "#0b0a0bf7";

  return (
    <>
      <Layout>
        <ReactDomRoutes>
          <Route path="/" element={<HeroLanding />} />
          <Route path="About" element={<About />} />
          <Route path="Proyects" element={<Proyects data={projectData} />} />
          <Route path="Contact" element={<Contact />} />
        </ReactDomRoutes>
      </Layout>
      <style>
        {`
          body {
            background-image: ${backgroundImage};
            background-size: cover;
            background-repeat: no-repeat;
            background-color: ${backgroundColor};
          }
        `}
      </style>
    </>
  );
};

export default Routes;
