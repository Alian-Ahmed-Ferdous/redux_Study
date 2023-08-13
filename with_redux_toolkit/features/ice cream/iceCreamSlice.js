import { createSlice } from '@reduxjs/toolkit';

// Redux iceCream slice
const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState: { iceCreams: 0 },
    reducers: {
        sellIceCream: (state, action) => {
            state.iceCreams -= action.payload;
        },
        restockIceCream: (state, action) => {
            state.iceCreams += action.payload;
        },
    },
});

export const { sellIceCream, restockIceCream } = iceCreamSlice.actions;
export default iceCreamSlice.reducer;
