import React, { useState } from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  height: 100%;
  transition: 0.5;
`;

const ProfileImage = () => {
  return (
    <>
      <Image
        src="https://res.cloudinary.com/debcgjfr8/image/upload/v1694025689/PortFolio/Portfolio%20Image%20Profile/bu5sl7d3rlu3homudbpn.png"
        alt=""
      />
    </>
  );
};

export default ProfileImage;
