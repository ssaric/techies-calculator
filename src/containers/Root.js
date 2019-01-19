/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as mainConstants from '../constants/main';
import RemoteMines from '../components/remoteMines/RemoteMines';
import LandMines from '../components/landMines/LandMines';
import Checkbox from '../components/checkbox/Checkbox';
import NumberInput from '../components/numberInput/NumberInput';
import Result from '../components/result/Result';

import './root.css';

class RootContainer extends React.Component {
    componentDidMount() {
        this.props.init();
    }

    render() {
        return (
            <div className="root">
                <div className="background" />
                <div className="input-area">
                    <NumberInput
                        name="Magic Resistance"
                        value={this.props.magicResistance}
                        onChange={this.props.updateMagicResistance}
                        suffix="%"
                    />
                    <NumberInput
                        name="Target hero HP"
                        value={this.props.heroHp}
                        onChange={this.props.updateHeroHp}
                    />
                    <Checkbox text="Scepter?" checked={this.props.hasScepter} onChange={this.props.updateHasScepter} />
                </div>
                <div className="mines-area">
                    <RemoteMines updateLevel={this.props.updateRemoteMineLevel} level={this.props.remoteMineLevel} />
                    <LandMines updateLevel={this.props.updateLandMineLevel} level={this.props.landMineLevel} />
                </div>
                <Result numberOfLandMines={this.props.landMines} numberOfRemoteMines={this.props.remoteMines} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    magicResistance: state.main.magicResistance,
    remoteMineLevel: state.main.remoteMineLevel,
    remoteMines: state.main.remoteMines,
    landMines: state.main.landMines,
    landMineLevel: state.main.landMineLevel,
    heroHp: state.main.heroHp,
    hasScepter: state.main.hasScepter,
});

const mapDispatchToProps = dispatch => ({
    init: value => dispatch({
        type: mainConstants.INIT,
        payload: value,
    }),
    updateMagicResistance: value => dispatch({
        type: mainConstants.UPDATE_MAGIC_RESISTANCE,
        payload: value,
    }),
    updateHasScepter: value => dispatch({
        type: mainConstants.UPDATE_HAS_SCEPTER,
        payload: value,
    }),
    updateHeroHp: value => dispatch({
        type: mainConstants.UPDATE_HERO_HP,
        payload: value,
    }),
    updateRemoteMineLevel: value => dispatch({
        type: mainConstants.UPDATE_REMOTE_MINE_LEVEL,
        payload: value,
    }),
    updateLandMineLevel: value => dispatch({
        type: mainConstants.UPDATE_LAND_MINE_LEVEL,
        payload: value,
    }),


});

RootContainer.propTypes = {
    init: PropTypes.func.isRequired,
    updateHasScepter: PropTypes.func.isRequired,
    updateMagicResistance: PropTypes.func.isRequired,
    updateHeroHp: PropTypes.func.isRequired,
    updateRemoteMineLevel: PropTypes.func.isRequired,
    updateLandMineLevel: PropTypes.func.isRequired,
    landMineLevel: PropTypes.number,
    remoteMines: PropTypes.number,
    landMines: PropTypes.number,
    remoteMineLevel: PropTypes.number,
    hasScepter: PropTypes.bool,
    heroHp: PropTypes.string,
    magicResistance: PropTypes.string,
};
RootContainer.defaultProps = {
    hasScepter: false,
    landMines: 0,
    remoteMines: 0,
    magicResistance: '25',
    remoteMineLevel: 1,
    landMineLevel: 1,
    heroHp: '0',
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RootContainer);
