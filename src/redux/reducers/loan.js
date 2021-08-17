import {createSlice} from "@reduxjs/toolkit";

const loan = createSlice({
    name: "loanReducer",
    initialState: {
        loanStatus: {
            status: null,
            type: null,
            message: ""
        },
        loanObject: {
            totalPrincipal:0,
            term:0,
            totalCostOfCredit:0,
            totalRepayableAmount:0,
            monthlyPayment:0
        }
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