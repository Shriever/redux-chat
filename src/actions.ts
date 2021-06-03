import { v4 as uuidv4 } from "uuid";
import { Action, Note } from "./reducer";

export const addNote = (noteText: string): Action => {
  const newNote: Note = { text: noteText, ID: uuidv4() };
  return { type: "ADD_NOTE", payload: newNote };
};

export const deleteNote = (ID: string) => {
  return { type: "DELETE_NOTE", payload: ID };
};
