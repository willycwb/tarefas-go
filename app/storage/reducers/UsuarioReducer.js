import { ADD_NOME, REMOVE_NOME } from "../actions/usuarioAction";

const initialState = {
  nome: null,
};

const usuarioReducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case ADD_NOME:
      return {
        ...state,
        nome: payload.nome,
      };
    case REMOVE_NOME:
      return {
        ...state,
        nome: null,
      };
    default:
      return state;
  }
};

export default usuarioReducer;
