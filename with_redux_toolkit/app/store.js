import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';

// the Redux store
export const store = configureStore({
    reducer: rootReducer,
});
