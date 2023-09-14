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
        src="https://res.cloudinary.com/debcgjfr8/image/upload/v1694666724/PortFolio/Portfolio%20Image%20Profile/rsrjhzlha1u9boy7nxub.webp"
        alt=""
      />
    </>
  );
};

export default ProfileImage;
