import React from "react";

import styled from "styled-components";

const BottomDiv = styled.div`
  grid-area: bottom;
`;

export default function Bottom() {
  return <BottomDiv>"this is the bottom"</BottomDiv>;
}
