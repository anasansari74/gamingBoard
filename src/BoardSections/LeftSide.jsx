import React from "react";

import styled from "styled-components";

const LeftUl = styled.ul`
  grid-area: left;

  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    display: grid;
    place-items: center;

    height: 3rem;
    width: 3rem;
  }
`;

export default function LeftSide() {
  return (
    <LeftUl>
      <li>4</li>
      <li></li>
      <li>3</li>
      <li></li>
      <li>2</li>
      <li></li>
      <li>1</li>
    </LeftUl>
  );
}
