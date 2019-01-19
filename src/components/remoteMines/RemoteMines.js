import React, {
    Component,
} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../button/Button';

import './remote-mines.css';

class RemoteMines extends Component {
    onLevelOneClicked = () => {
        this.props.updateLevel(1);
    }

    onLevelTwoClicked = () => {
        this.props.updateLevel(2);
    }

    onLevelThreeClicked = () => {
        this.props.updateLevel(3);
    }

    render() {
        return (
            <div className="mines">
                <h3>Remote mines</h3>
                <div className="mines__levels">
                    <Button onClick={this.onLevelOneClicked} className={classNames({ 'button--selected': this.props.level >= 1 })} text="1" />
                    <Button onClick={this.onLevelTwoClicked} className={classNames({ 'button--selected': this.props.level >= 2 })} text="2" />
                    <Button onClick={this.onLevelThreeClicked} className={classNames({ 'button--selected': this.props.level >= 3 })} text="3" />
                </div>
            </div>
        );
    }
}

RemoteMines.propTypes = {
    level: PropTypes.number.isRequired,
    updateLevel: PropTypes.func.isRequired,
};
RemoteMines.defaultProps = {};

export default RemoteMines;
