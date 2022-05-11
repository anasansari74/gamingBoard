import React from "react";

import styled from "styled-components";

const LeftDiv = styled.div`
  grid-area: left;
`;

export default function LeftSide() {
  return <LeftDiv>"this is th LeftSide"</LeftDiv>;
}
