import {GET_LOAN} from "../../constants";

const initialState = {
    loanData: {}
}

export const loanReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_LOAN:
            return {
                ...state,
                loanData: payload
            }
    }
}