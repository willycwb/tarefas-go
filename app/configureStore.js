import { createStore, combineReducers } from 'redux';
// import oauth from './store/reducers/oauthReducer';
// import loading from './store/reducers/loadingReducer';
// import message from './store/reducers/';
import config from './storage/reducers/ConfigReducer';
import loading from './storage/reducers/LoadingReducer';
import usuario from './storage/reducers/UsuarioReducer';
// import teste from './store/reducers/testeReducer';

const rootReducer = combineReducers({ config, loading, usuario });
const configureStore = () => {
  return createStore(rootReducer);
};
export default configureStore;