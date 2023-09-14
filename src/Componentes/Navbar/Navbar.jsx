import React, { useState } from "react";
import { motion } from "framer-motion";

import {
  IconLogoMobile,
  LILinks,
  NavContainer,
  NavLink,
  NavMenu,
  UlLinks,
  ArielLogoLinks,
} from "./NavbarStyles";

const StyledNavbar = styled.div`
  background-color: #090909;
`;
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";
const Navbar = () => {
  const [click, setclick] = useState(false);

  const ChangeClick = () => {
    setclick(!click);
  };

  const handleMenuToggle = () => {
    setclick(!click);
  };

  return (
    <>
      <StyledNavbar>
        <motion.div
          initial={{ y: -100 }} // Posición inicial arriba
          animate={{ y: 0 }} // Posición final
          transition={{ type: "spring", stiffness: 50 }} // Tipo y configuración de transición
        >
          <NavMenu>
            <ArielLogoLinks>
              <NavLink to={"/"}>ArielG.</NavLink>
            </ArielLogoLinks>

            <NavContainer click={click} onClick={handleMenuToggle}>
              <div>
                <UlLinks>
                  <LILinks>
                    <NavLink to={"Proyects"}>Proyects</NavLink>
                  </LILinks>
                </UlLinks>
              </div>
              <div>
                <UlLinks>
                  <LILinks>
                    <NavLink to={"Contact"}>Contact</NavLink>
                  </LILinks>
                </UlLinks>
              </div>
              <div>
                <UlLinks>
                  <LILinks>
                    <NavLink to={"About"}>About Me</NavLink>
                  </LILinks>
                </UlLinks>
              </div>
            </NavContainer>
            <IconLogoMobile onClick={ChangeClick}>
              {click ? <FaTimes /> : <FaBars />}
            </IconLogoMobile>
          </NavMenu>

          <hr
            style={{
              border: "none",
              height: "2px",
              backgroundColor: "#97FEED",
            }}
          />
        </motion.div>
      </StyledNavbar>
    </>
  );
};

export default Navbar;
