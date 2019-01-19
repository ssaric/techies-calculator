import React from 'react';
import PropTypes from 'prop-types';
import './result.css';

const Result = props => (
    <div className="result">
        <h1>YOU NEED</h1>
        <div className="result__wrapper">
            <div className="result__mines">
                <h3 className="result__nr-mines">{props.numberOfRemoteMines}</h3>
                <h3>Remote Mines</h3>
            </div>
            <div className="result__mines">
                <h3 className="result__nr-mines">{props.numberOfLandMines}</h3>
                <h3>Land Mines</h3>
            </div>
        </div>
    </div>
);

Result.propTypes = {
    numberOfRemoteMines: PropTypes.number.isRequired,
    numberOfLandMines: PropTypes.number.isRequired,
};
Result.defaultProps = {};

export default Result;
