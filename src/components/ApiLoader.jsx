import React from "react";
import Loader from "react-loader-spinner";

export default function ApiLoader(props) {
    const { height, width, color } = props;
    return (
        <Loader
            type="Puff"
            color={color || "#3f51b5"}
            height={height || 100}
            width={width || 100}
        />
    );
}