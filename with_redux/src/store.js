import { createStore, combineReducers } from "redux";
import { moneyReducer, cakeReducer, iceCreamReducer } from "./reducer.js";

// Combine the reducers
const rootReducer = combineReducers({
    money: moneyReducer,
    cake: cakeReducer,
    iceCream: iceCreamReducer,
});

// Redux store
const store = createStore(rootReducer);

export default store;
