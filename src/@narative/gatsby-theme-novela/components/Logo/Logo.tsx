import styled from "@emotion/styled";
import mediaqueries from "@narative/gatsby-theme-novela/src/styles/media";
import {Icon} from "@narative/gatsby-theme-novela/src/types";
import React from "react";
import logo from "../../../../assets/logo.png";

const Logo: Icon = ({fill = "white"}) => {
  return (
    <LogoContainer>
      <img src={logo} height={100} alt="Greener Grass" />
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  .Logo__Mobile {
    display: none;
  }

  ${mediaqueries.tablet`
    .Logo__Desktop {
      display: none;
    }
    
    .Logo__Mobile{
      display: block;
    }
  `}
`;
