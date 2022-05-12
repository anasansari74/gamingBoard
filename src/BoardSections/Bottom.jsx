import React from "react";

import styled from "styled-components";

const BottomUl = styled.ul`
  grid-area: bottom;

  display: grid;
  grid-auto-flow: column;

  li {
    display: grid;
    place-items: center;

    height: 3rem;
    width: 3rem;
  }
`;

export default function Bottom() {
  return (
    <BottomUl>
      <li>1</li>
      <li></li>
      <li>2</li>
      <li></li>
      <li>3</li>
      <li></li>
      <li>4</li>
    </BottomUl>
  );
}
