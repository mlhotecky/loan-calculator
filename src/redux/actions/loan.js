import {API_PREFIX, ERROR, GET_LOAN, PENDING, REJECTED, SUCCEEDED} from "../../constants";
import {getLoan, getLoanStatus} from "../reducers/loan";

const getStatus = (dispatch, type, status, message = "") => {
    dispatch(getLoanStatus({
        type,
        status,
        message
    }))
}

export const fetchLoan = (amount, term) => dispatch => {

    const options = {
        amount,
        term
    }

    getStatus(dispatch, GET_LOAN, PENDING);
    fetch(`${API_PREFIX}/application/first-loan-offer?` + new URLSearchParams(options))
        .then(async (response) => {
            const data = await response.json();

            if (!response.ok) {
                const error = (data && data.message) || response.statusText;
                getStatus(
                    dispatch,
                    GET_LOAN,
                    REJECTED,
                    `${ERROR} ${error || ""}`
                );
                return;
            }

            getStatus(dispatch, GET_LOAN, SUCCEEDED);
            dispatch(getLoan(data));
        })
        .catch(error => {
            getStatus(
                dispatch,
                GET_LOAN,
                REJECTED,
                error?.toString()
            );
        });
};