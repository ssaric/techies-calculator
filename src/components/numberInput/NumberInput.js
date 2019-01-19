import React, {
    Component,
} from 'react';
import PropTypes from 'prop-types';
import './number-input.css';

class NumberInput extends Component {
    onChange = e => {
        this.props.onChange(e.target.value);
    }

    render() {
        return (
            <div className="number-input">
                <span className="number-input__text">{this.props.name}</span>
                <div>
                    <input min={this.props.min} type="number" className="number-input__input" value={this.props.value} onChange={this.onChange} />
                    {this.props.suffix && <span>{this.props.suffix}</span>}
                </div>
            </div>
        );
    }
}

NumberInput.propTypes = {
    min: PropTypes.string,
    suffix: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,

};
NumberInput.defaultProps = {
    value: '',
    suffix: undefined,
    min: '0',
};

export default NumberInput;
