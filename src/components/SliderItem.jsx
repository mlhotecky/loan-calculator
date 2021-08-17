import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 300,
    },
    margin: {
        height: theme.spacing(3),
    },
}));

function SliderItem(props) {
    const classes = useStyles();

    const {id, defaultValue, max, min, step, calculateLoan} = props;

    const [value, setValue] = useState(null);
    let selectValues = [];

    if (min && max && step) {
        for (let i = min; i <= max; i += step) {
            selectValues.push(i)
        }
    }

    const selectChange = ({target: {value}}) => {
       setValue(value);
       calculateLoan(value);
    }

    const sliderChange = (event, val) => {
        calculateLoan(val);
    }

    return (
        <div className={classes.root}>
            <select style={{width: "100px"}} value={value || defaultValue} onChange={selectChange}>
                {selectValues.map(i => {
                    return <option>{i}</option>
                })}
            </select>
            <Slider
                key={id}
                value={value || defaultValue}
                aria-labelledby="discrete-slider-custom"
                step={step}
                valueLabelDisplay="auto"
                min={min}
                max={max}
                onChange={(e, value) => setValue(value)}
                onChangeCommitted={sliderChange}
            />
        </div>
    )
}

export default React.memo(SliderItem);