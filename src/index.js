import React from "react";
import styled from "styled-components";

export const Title = styled.h1`
  color: red;
  font-size: 3em;
`;

const Header = props => {
  return (
    <header>
      <Title>Hello World</Title>
    </header>
  );
};

export default Header;
