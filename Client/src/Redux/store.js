import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducer.js';
import thunkMiddlewere from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
 const store = createStore(
 reducer, 
 composeEnhancer(applyMiddleware(thunkMiddlewere))
 );




 export default store;