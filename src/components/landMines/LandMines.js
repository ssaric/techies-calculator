import React, {
    Component,
} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Button from '../button/Button';

class LandMines extends Component {
    onLevelOneClicked = () => {
        this.props.updateLevel(1);
    }

    onLevelTwoClicked = () => {
        this.props.updateLevel(2);
    }

    onLevelThreeClicked = () => {
        this.props.updateLevel(3);
    }

    onLevelFourClicked = () => {
        this.props.updateLevel(4);
    }

    render() {
        return (
            <div className="mines">
                <h3>Land mines</h3>
                <div className="mines__levels">
                    <Button onClick={this.onLevelOneClicked} className={classNames({ 'button--selected': this.props.level >= 1 })} text="1" />
                    <Button onClick={this.onLevelTwoClicked} className={classNames({ 'button--selected': this.props.level >= 2 })} text="2" />
                    <Button onClick={this.onLevelThreeClicked} className={classNames({ 'button--selected': this.props.level >= 3 })} text="3" />
                    <Button onClick={this.onLevelFourClicked} className={classNames({ 'button--selected': this.props.level >= 4 })} text="4" />
                </div>
            </div>
        );
    }
}

LandMines.propTypes = {
    level: PropTypes.number.isRequired,
    updateLevel: PropTypes.func.isRequired,
};
LandMines.defaultProps = {};

export default LandMines;
