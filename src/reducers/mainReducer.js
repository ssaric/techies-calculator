import * as mainConstants from '../constants/main';

const INITIAL_STATE = {
    magicResistance: 25,
    heroHp: 1000,
    hasScepter: false,
    remoteMineLevel: 1,
    landMineLevel: 1,
    remoteMines: 0,
    landMines: 0,
};

export default function main(state = INITIAL_STATE, action) {
    switch (action.type) {
    case mainConstants.UPDATE_MAGIC_RESISTANCE:
        return {
            ...state,
            magicResistance: action.payload,
        };
    case mainConstants.UPDATE_HERO_HP:
        return {
            ...state,
            heroHp: action.payload,
        };
    case mainConstants.UPDATE_HAS_SCEPTER:
        return {
            ...state,
            hasScepter: action.payload,
        };
    case mainConstants.UPDATE_REMOTE_MINE_LEVEL:
        return {
            ...state,
            remoteMineLevel: action.payload,
        };
    case mainConstants.UPDATE_LAND_MINE_LEVEL:
        return {
            ...state,
            landMineLevel: action.payload,
        };
    case mainConstants.UPDATE_RESULT:
        return {
            ...state,
            remoteMines: action.payload.remoteMines,
            landMines: action.payload.landMines,
        };
    default:
        return state;
    }
}
