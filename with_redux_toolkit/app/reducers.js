import { combineReducers } from '@reduxjs/toolkit';
import moneyReducer from '../features/money/moneySlice';
import cakeReducer from '../features/cake/cakeSlice';
import iceCreamReducer from '../features/ice cream/iceCreamSlice';

// Combining the reducers
export const rootReducer = combineReducers({
    money: moneyReducer,
    cake: cakeReducer,
    iceCream: iceCreamReducer,
});
