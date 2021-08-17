import React  from "react";
import SliderItem from "./SliderItem";
import Box from "@material-ui/core/Box";

export default function Calculator(props) {

    const {
        amountInterval,
        termInterval,
        changeAmount,
        changeTerm,
    } = props;

    return (
        <Box className="">
            <SliderItem id="amount" calculateLoan={changeAmount} {...amountInterval} />
            <SliderItem id="term" calculateLoan={changeTerm} {...termInterval} />
        </Box>
    )

}