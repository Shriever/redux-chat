import { Action } from './reducer';

export const addNote = (note: string): Action => {
  return { type: "ADD_NOTE", payload: note }
}
