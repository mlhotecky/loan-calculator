import React from "react";
import Grid from "@material-ui/core/Grid";

export default function LoanItem(props) {
    const {title, value, unit, bold} = props;

    function isInt() {
        return value % 1 === 0;
    }

    const displayValue = value ? isInt() ? value : parseFloat(value).toFixed(2) : 0;

    return (
        <Grid container justifyContent="space-between">
            <div style={bold && {fontWeight: "bold"}}>{title}</div>
            <div style={bold && {fontWeight: "bold"}}>{`${displayValue} ${unit || "$"}`}</div>
        </Grid>
    )
}