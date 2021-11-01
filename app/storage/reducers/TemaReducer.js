import { SET_DARK_MODE, SET_LIGTH_MODE } from "../actions/temaAction";

const initialState = {
  darkMode: false,
};

const temaReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case SET_DARK_MODE:
      return {
        ...state,
        darkMode: true,
      };
    case SET_LIGTH_MODE:
      return {
        ...state,
        darkMode: false,
      };
    default:
      return state;
  }
};

export default temaReducer;
