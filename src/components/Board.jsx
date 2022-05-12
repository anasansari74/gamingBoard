import React from "react";

import styled from "styled-components";
import Bottom from "../BoardSections/Bottom";
import Hero from "../BoardSections/Hero";
import LeftSide from "../BoardSections/LeftSide";

const BoardDiv = styled.div`
  display: grid;
  grid-template:
    "left hero" auto
    "empty bottom" 1fr/
    1fr auto;

  .empty {
    grid-area: empty;
  }
`;

export default function Board({ moves }) {
  return (
    <BoardDiv>
      <LeftSide />
      <Hero moves={moves} />
      <Bottom />
      <div className="empty"></div>
    </BoardDiv>
  );
}
