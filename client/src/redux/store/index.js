import { createStore, applyMiddleware,combineReducers, compose } from "redux";
import thunk from 'redux-thunk';
import { productReducers } from '../reducers/productReducers';
import { userReducers } from '../reducers/userReducers';


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    userReducers,
    productReducers
   
  });
  

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;