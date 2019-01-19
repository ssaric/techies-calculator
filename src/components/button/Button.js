import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './button.css';


const Button = props => (
    <button onClick={props.onClick} type="button" className={classNames('button', props.className)}>
        {props.text}
    </button>
);

Button.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired,
};
Button.defaultProps = {
    className: '',
    text: '',
};

export default Button;
