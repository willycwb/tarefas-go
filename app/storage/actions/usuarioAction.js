export const ADD_NOME = 'ADD_NOME';
export const REMOVE_NOME = 'REMOVE_NOME';

export function addNome(payload) {
  return { type: ADD_NOME, payload };
}

export function removeNome() {
  return { type: REMOVE_NOME };
}