import { create } from "zustand";
import { Space } from "../interfaces/space";
import { generateBoard } from "./functions/generateBoard";

interface State {
  spaces: (Space | null)[][]
}

interface Action {
  fillBoard: (centerDesert?: boolean) => void
}

export const useBoard = create<State & Action>(set => ({
  spaces: [],
  fillBoard: (centerDesert) => {
    const newBoard = generateBoard(centerDesert);
    set(state => ({
      ...state,
      spaces: newBoard
    }))
  }
}));