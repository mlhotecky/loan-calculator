import React from "react";
import {ERROR, ERROR_FETCHING, PENDING, REJECTED} from "../constants";
import ApiLoader from "./ApiLoader";

export default function ContentWrapper(props) {
    const { initFetching, deps } = props;

    // function for dynamic content according to api call phases

    if (initFetching && deps?.length > 0) {
        if (deps.filter(i => i.status === PENDING).length > 0) {
            return <ApiLoader />
        } else {
            return <div>
                {props.children}
                {/*{*/}
                {/*    deps.map((d, index) => {*/}
                {/*        const {status, type, message} = d || {};*/}
                {/*        if (status === REJECTED) {*/}
                {/*            const error = message ? `${type} ${ERROR} ${message}` : `${type} ${ERROR_FETCHING}`;*/}
                {/*            return <p key={index}>{error}</p>*/}
                {/*        }*/}
                {/*    })*/}
                {/*}*/}
            </div>;
        }
    } else return props.children;
}