import {createSlice} from "@reduxjs/toolkit";

const conf = createSlice({
    name: "configurationReducer",
    initialState: {
        configurationStatus: null,
        configurationObject: {}
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