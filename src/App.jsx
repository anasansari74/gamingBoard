import React, { useState } from "react";

import Board from "./components/board";
import StartGame from "./components/startGame";

import styled from "styled-components";

const GameAreaDiv = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  grid-gap: 5rem;
`;

function App() {
  const [moves, setMoves] = useState("");

  return (
    <div className="App">
      <GameAreaDiv>
        <Board moves={moves} />
        <StartGame moves={moves} setMoves={setMoves} />
      </GameAreaDiv>
    </div>
  );
}

export default App;
