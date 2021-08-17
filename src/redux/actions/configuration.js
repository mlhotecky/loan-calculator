import {API_PREFIX, ERROR, GET_CONFIGURATION, PENDING, REJECTED, SUCCEEDED} from "../../constants";
import {getConfiguration, getConfStatus} from "../reducers/configuration";

const getStatus = (dispatch, type, status, message = "") => {
    dispatch(getConfStatus({
        type,
        status,
        message
    }))
}

export const fetchConfiguration = () => dispatch => {
    getStatus(dispatch, GET_CONFIGURATION, PENDING);
    fetch(`${API_PREFIX}/application/constraints`)
        .then(async (response) => {
            const data = await response.json();

            if (!response.ok) {
                const error = (data && data.message) || response.statusText;
                getStatus(
                    dispatch,
                    GET_CONFIGURATION,
                    REJECTED,
                    `${ERROR} ${error || ""}`
                );
                return;
            }

            getStatus(dispatch, GET_CONFIGURATION, SUCCEEDED);
            dispatch(getConfiguration(data));
        })
        .catch(error => {
            getStatus(
                dispatch,
                GET_CONFIGURATION,
                REJECTED,
                error?.toString()
            );
        });
};