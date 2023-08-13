import { createSlice } from '@reduxjs/toolkit';

// Redux Toolkit createSlice
const moneySlice = createSlice({
    name: 'money',
    initialState: { money: 50 },
    reducers: {
        addMoney: (state, action) => {
            state.money += action.payload;
        },
        subtractMoney: (state, action) => {
            state.money -= action.payload;
        },
    },
});

export const { addMoney, subtractMoney } = moneySlice.actions;
export default moneySlice.reducer;
