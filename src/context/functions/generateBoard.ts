import { Space, SpaceType } from "../../interfaces/space";

interface countSpace {
  value: SpaceType,
  counter: number,
  max: number
}

export const generateBoard = (centerDesert?: boolean): (Space | null)[][] => {
  const counter: countSpace[] = [
    { value: "Desert", counter: 0, max: 1 },
    { value: "Wheat", counter: 0, max: 4 },
    { value: "Wood", counter: 0, max: 4 },
    { value: "Sheep", counter: 0, max: 4 },
    { value: "Brick", counter: 0, max: 3 },
    { value: "Rock", counter: 0, max: 3 }
  ]

  let newBoard: (Space | null)[][] = new Array(5).fill(new Array(5).fill(null));
  
  newBoard = newBoard.map((row, i) => {
    return row.map((space, j) => {
      if(checkNullSpaces(i, j)) return null;

      let type: SpaceType = "Wheat";
      let flag = true;

      while(flag) {
        const rnd = getRandomIntInclusive(0, 5);
        const countSpace: countSpace = counter[rnd];
        if(countSpace.counter != countSpace.max) {
          type = countSpace.value;
          countSpace.counter++;
          flag = false;
        }
      }

      return { type };
    });
  });

  if(centerDesert) {
    newBoard = centerTheDesert(newBoard);
  };

  return newBoard; 
}

function checkNullSpaces(i: number, j: number) {
  return (i === 0 && (j === 3 || j === 4)) || ((i === 1 || j === 1) && (i === 4 || j === 4)) || ((i === 3 || i === 4) && j === 0);
}

function centerTheDesert(board: (Space | null)[][]) {
  let desertCoords: number[] = [0, 0];
  board.forEach((row, i) => {
    row.forEach((space, j) => {
      if (space?.type === "Desert") {
        desertCoords = [i, j];
      }
    });
  });
  const aux = board[2][2];
  board[2][2] = board[desertCoords[0]][desertCoords[1]];
  board[desertCoords[0]][desertCoords[1]] = aux;
  return board;
}

function getRandomIntInclusive(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}