import { ADD_CONFIG } from "../actions/configAction";

const initialState = {
  inicializado: false,
};

const configReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_CONFIG:
      return {
        ...state,
        inicializado: payload.inicializado,
      };
    default:
      return state;
  }
};

export default configReducer;
