/* eslint-disable no-restricted-globals */
import React, {
    Component,
} from 'react';
import PropTypes from 'prop-types';
import './number-input.css';

const ALLOWED_CHARACTERS_REGEX = /^(-?\d+\.\d+)$|^(-?\d+)$/;

class NumberInput extends Component {
    onChange = e => {
        const { value } = e.target;
        if (value !== '' && !ALLOWED_CHARACTERS_REGEX.test(value)) {
            return;
        }
        const nextValue = parseInt(value, 10);
        if (isNaN(nextValue)) {
            this.props.onChange(value);
        } else {
            this.props.onChange(`${this.getNextNumber(nextValue)}`);
        }
    }

    getNextNumber(number) {
        let nextNumber = number;
        if (this.props.max !== undefined) {
            nextNumber = nextNumber > this.props.max ? this.props.max : nextNumber;
        }
        if (this.props.min !== undefined) {
            nextNumber = nextNumber < this.props.min ? this.props.min : nextNumber;
        }
        return nextNumber;
    }

    render() {
        return (
            <div className="number-input">
                <span className="number-input__text">{this.props.name}</span>
                <div>
                    <input
                        ref={number => { this.number = number; }}
                        type="number"
                        className="number-input__input"
                        value={this.props.value}
                        onChange={this.onChange}
                    />
                    {this.props.suffix && <span>{this.props.suffix}</span>}
                </div>
            </div>
        );
    }
}

NumberInput.propTypes = {
    max: PropTypes.number,
    min: PropTypes.number,
    suffix: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,

};
NumberInput.defaultProps = {
    value: undefined,
    suffix: undefined,
    min: undefined,
    max: undefined,
};

export default NumberInput;
