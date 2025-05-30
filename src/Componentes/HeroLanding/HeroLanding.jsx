import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import Proyects from "../Proyects/Proyects";
import projectData from "../Proyects/ProyectData";

const HeroLanding = () => {
  return (
    <>
      <Hero />
      <Proyects data={projectData} />
      <Footer />
    </>
  );
};

export default HeroLanding;
