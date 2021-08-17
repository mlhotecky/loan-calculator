import {createSlice} from "@reduxjs/toolkit";

const loan = createSlice({
    name: "loanReducer",
    initialState: {
        loanStatus: null,
        loanObject: {}
    },
    reducers: {
        getLoanStatus: (state, action) => {
            state.loanStatus = action.payload
        },
        getLoan: (state, action) => {
            state.loanObject = action.payload
        }
    }
})

export const {getLoanStatus, getLoan} = loan.actions;
export default loan.reducer;