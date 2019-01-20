/* eslint-disable no-restricted-globals */
import React, {
    Component,
} from 'react';
import PropTypes from 'prop-types';
import NumericInput from 'react-numeric-input';

import './number-input.css';

const NumberInput = props => (
    <div className="number-input">
        <span className="number-input__text">{props.name}</span>
        <div>
            <NumericInput
                className="number-input__input"
                min={props.min}
                max={props.max}
                value={props.value}
                onChange={props.onChange}
            />
            {props.suffix && <span>{props.suffix}</span>}
        </div>
    </div>
);

NumberInput.propTypes = {
    max: PropTypes.number,
    min: PropTypes.number,
    suffix: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.number,

};
NumberInput.defaultProps = {
    value: undefined,
    suffix: undefined,
    min: undefined,
    max: undefined,
};

export default NumberInput;
