export interface Action {
  type: string;
  payload: string;
}

export interface state {
  notes: string[];
}

const initialState = { notes: [] };

const rootReducer = (state: state = initialState, action: Action) => {
  switch (action.type) {
    case "ADD_NOTE": {
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    }

    default:
      return state;
  }
};

export default rootReducer;
