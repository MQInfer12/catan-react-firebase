import React, { useState } from 'react'
import styled from 'styled-components';
import Board from '../components/board';
import { useBoard } from '../context/board';

const Game = () => {
  const [centerDesert, setCenterDesert ] = useState(true);
  const { fillBoard } = useBoard();

  return (
    <GameContainer>
      <TestButtons>
        <button onClick={() => setCenterDesert(old => !old)}>Centrar desierto ({centerDesert ? "Sí" : "No"})</button>
        <button onClick={() => fillBoard(centerDesert)}>Generar tablero</button>
      </TestButtons>
      <Board />
    </GameContainer>
  )
}

export default Game

const GameContainer = styled.div`
  height: 100dvh;
  background-color: skyblue;
`;

const TestButtons = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1;
`;