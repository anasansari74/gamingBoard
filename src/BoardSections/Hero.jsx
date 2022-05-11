import React from "react";

import styled from "styled-components";

const HeroDiv = styled.div`
  grid-area: hero;
`;

export default function Hero() {
  return <HeroDiv>"this is the left hero"</HeroDiv>;
}
