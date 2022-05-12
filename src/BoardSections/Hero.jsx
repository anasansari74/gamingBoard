import React, { useState } from "react";

import styled from "styled-components";

// UD === UP and DOWN arrows
const UD = ["⬆", "⬇"];

const LR = ["⬅", "➡"];

const INITIAL_BOARD = [
  ["X", LR, "X", LR, "X", LR, "X"],
  [UD, "", UD, "", UD, "", UD],
  ["X", LR, "X", LR, "X", LR, "X"],
  [UD, "", UD, "", UD, "", UD],
  ["X", LR, "X", LR, "X", LR, "X"],
  [UD, "", UD, "", UD, "", UD],
  ["X", LR, "X", LR, "X", LR, "X"],
];

const HeroDiv = styled.div`
  grid-area: hero;

  display: grid;
  grid-template-columns: repeat(7, 3rem);
  grid-template-rows: repeat(7, 3rem);
`;

const CellDiv = styled.div`
  display: grid;
  place-items: center;

  font-size: 2.2rem;
  font-weight: bold;

  .visible {
    color: black;
  }

  .invisible {
    color: white;
  }
`;

export default function Hero({ moves }) {
  const [board, setBoard] = useState(INITIAL_BOARD);
  const [direction, setDirection] = useState("N");

  const [path, setPath] = useState(["610"]);

  const getOneMoveUp = (moves, direction, rowIndex, coloumnIndex) => {};

  return (
    <HeroDiv>
      {board.map((row, rowIndex) =>
        row.map((cell, coloumnIndex) => {
          return (
            <CellDiv>
              {cell === "X" || cell === "" ? (
                <div key={`cell x:${coloumnIndex} y:${rowIndex}`}>{cell}</div>
              ) : (
                <>
                  <div
                    className={
                      path.find(
                        target =>
                          target.split("")[0] == rowIndex &&
                          target.split("")[1] == coloumnIndex
                      ) !== undefined
                        ? "visible"
                        : "invisible"
                    }
                    key={`cell x:${coloumnIndex} y:${rowIndex}`}
                  >
                    {path.find(
                      target =>
                        target.split("")[0] == rowIndex &&
                        target.split("")[1] == coloumnIndex
                    ) !== undefined
                      ? [
                          cell[
                            Number(
                              path
                                .find(
                                  target =>
                                    target.split("")[0] == rowIndex &&
                                    target.split("")[1] == coloumnIndex
                                )
                                .split("")[2]
                            )
                          ],
                        ]
                      : cell}
                  </div>
                </>
              )}
            </CellDiv>
          );
        })
      )}
    </HeroDiv>
  );
}
