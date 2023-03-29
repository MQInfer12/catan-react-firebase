import React from 'react'
import styled from 'styled-components'
import { useBoard } from '../context/board'
import Hexagon from './hexagon'

const Board = () => {
  const { spaces } = useBoard();

  return (
    <BoardContainer>
      {
        spaces.map((row, i) => (
          <div key={i}>
            {
              row.map((space, j) => (
                space && <Hexagon key={j} space={space} />
              ))
            }
          </div>
        ))
      }
    </BoardContainer>
  )
}

export default Board

const BoardContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  filter: drop-shadow(0px 0px 100px rgba(255, 255, 255, 0.8));

  & > div {
    display: flex;
    gap: 0.2rem;
    margin-top: -2.35rem;
  }
`;