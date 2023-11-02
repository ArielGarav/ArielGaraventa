import React from "react";
import Layout from "../Componentes/Layout/Layout";
import { Route, Routes as ReactDomRoutes } from "react-router";

const Routes = () => {
  return (
    <>
      <Layout>
        <ReactDomRoutes>
          <Route path="/" element={<HeroLanding />} />
        </ReactDomRoutes>
      </Layout>
    </>
  );
};

export default Routes;
