import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
    return (
        <div>
            <p className={props.buttonStyle}>{props.text}</p>
        </div>
    );
}

export default CalculatorDisplay;
