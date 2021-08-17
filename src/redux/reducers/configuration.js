import {createSlice} from "@reduxjs/toolkit";

const conf = createSlice({
    name: "configurationReducer",
    initialState: {
        configurationStatus: {
            status: null,
            type: null,
            message: ""
        },
        configurationObject: {
            amountInterval: {
                min:0,
                max:0,
                step:0,
                defaultValue:0
            },
            termInterval:{
                min:0,
                max:0,
                step:0,
                defaultValue:0
            }
        }
    },
    reducers: {
        getConfStatus: (state, action) => {
            state.configurationStatus = action.payload;
        },
        getConfiguration: (state, action) => {
            state.configurationObject = action.payload;
        }
    }
})
export const {getConfStatus, getConfiguration} = conf.actions;
export default conf.reducer;