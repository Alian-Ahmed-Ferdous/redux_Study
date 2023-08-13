import { createSlice } from '@reduxjs/toolkit';

// Redux cake slice
const cakeSlice = createSlice({
    name: 'cake',
    initialState: { cakes: 0 },
    reducers: {
        sellCake: (state, action) => {
            state.cakes -= action.payload;
        },
        restockCake: (state, action) => {
            state.cakes += action.payload;
        },
    },
});

export const { sellCake, restockCake } = cakeSlice.actions;
export default cakeSlice.reducer;
