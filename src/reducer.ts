export interface Note {
  text: string;
  ID: string;
}
export interface Action {
  type: string;
  payload: Note;
}

export interface State {
  notes: Note[];
}

const initialState = { notes: [] };

const rootReducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_NOTE": {
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    }
    case "DELETE_NOTE": {
      console.log(
        state.notes.filter(note => {
          // console.log(note.ID === action.payload.ID);
          // console.log(action.payload);
          // console.log(note.ID);

          return note.ID.toString() !== action.payload.ID.toString();
        })
      );

      return {
        ...state,
        notes: state.notes.filter(note => note.ID !== action.payload.ID),
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
