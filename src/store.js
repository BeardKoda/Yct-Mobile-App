// store.js
import { createStore, combineReducers } from 'redux';
import loginReducer from './services/reducers';

const rootReducer = combineReducers({
  auth: loginReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;