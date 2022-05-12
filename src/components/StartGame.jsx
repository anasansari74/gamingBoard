import React from "react";
import styled from "styled-components";

const StartGameForm = styled.form`
  display: grid;
  grid-gap: 1rem;

  .form-input,
  .form-btn {
    display: grid;
    place-items: center;

    height: 2rem;
    padding: 0.5rem;
  }

  .form-input {
    align-self: flex-end;
  }
`;

export default function StartGame({ moves, setMoves }) {
  return (
    <StartGameForm>
      <input
        className="form-input"
        value={moves}
        placeholder="Write down your moves"
        onChange={e => setMoves(e.target.value)}
        type="text"
        name="moves"
      />
      <button
        type="submit"
        className="form-btn"
        onClick={e => e.preventDefault()}
      >
        Play
      </button>
    </StartGameForm>
  );
}
