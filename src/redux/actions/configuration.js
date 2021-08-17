import {API_PREFIX, ERROR, GET_CONFIGURATION, PENDING, REJECTED, SUCCEEDED} from "../../constants";
import {getConfiguration, getConfStatus} from "../reducers/configuration";

export const fetchConfiguration = () => dispatch => {
    dispatch(getConfStatus(GET_CONFIGURATION, PENDING));
    fetch(`${API_PREFIX}/application/constraints`)
        .then(async (response) => {
            const data = await response.json();

            if (!response.ok) {
                const error = (data && data.message) || response.statusText;
                dispatch(getConfStatus(
                    GET_CONFIGURATION,
                    REJECTED,
                    `${ERROR} ${error || ""}`
                ));
                return;
            }

            dispatch(getConfStatus(GET_CONFIGURATION, SUCCEEDED));
            dispatch(getConfiguration(data));
        })
        .catch(error => {
            dispatch(getConfStatus(
                GET_CONFIGURATION,
                REJECTED,
                error?.toString()
            ));
        });
};