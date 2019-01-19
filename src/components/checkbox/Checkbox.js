import React, {
    Component,
} from 'react';
import PropTypes from 'prop-types';
import './checkbox.css';

class Checkbox extends Component {
    onChange = e => {
        this.props.onChange(e.target.checked);
    }

    render() {
        return (
            <div className="checkbox">
                {this.props.text && <span>{this.props.text}</span>}
                <input checked={this.props.checked} type="checkbox" className="checkbox__input" onChange={this.onChange} />
            </div>
        );
    }
}

Checkbox.propTypes = {
    text: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    checked: PropTypes.bool,

};
Checkbox.defaultProps = {
    checked: false,
    text: undefined,
};

export default Checkbox;
