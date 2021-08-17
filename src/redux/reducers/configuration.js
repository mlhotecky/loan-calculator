import {GET_CONFIGURATION} from "../../constants";

const initialState = {
    configurationObject: {}
}

export const configurationReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_CONFIGURATION:
            return {
                ...state,
                configurationObject: payload
            }
    }
}