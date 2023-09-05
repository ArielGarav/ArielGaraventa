import React from "react";
import Layout from "../Componentes/Layout/Layout";
import { Route, Routes as ReactDomRoutes } from "react-router";
import Test from "../Componentes/Test/Test";
import About from "../Componentes/About/About";
import ProyectsCards from "../Componentes/Proyects/ProyectsCards";

const Routes = () => {
  return (
    <>
      <Layout>
        <ReactDomRoutes>
          <Route path="/" element={<Test />} />
          <Route path="About" element={<About />} />
          <Route path="Proyects" element={<ProyectsCards />} />
        </ReactDomRoutes>
      </Layout>
    </>
  );
};

export default Routes;
