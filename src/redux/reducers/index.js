import {combineReducers} from "@reduxjs/toolkit";
import configurationReducer from "./configuration";
import loanReducer from "./loan";

const rootReducer = combineReducers({
    configuration: configurationReducer,
    loan: loanReducer
})

export default rootReducer;