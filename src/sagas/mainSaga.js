import {
    all, takeEvery, put, select,
} from 'redux-saga/effects';
import * as mainConstants from '../constants/main';
import * as selectors from './sagaSelectors';

const REMOTE_MINE_DAMAGE = {
    1: 300,
    2: 450,
    3: 600,
};

const LAND_MINE_DAMAGE = {
    1: 200,
    2: 400,
    3: 600,
    4: 800,
};


function* calculateMines() {
    try {
        const magicResistance = yield select(selectors.magicResistance);
        const heroHp = yield select(selectors.heroHp);
        const remoteMineLevel = yield select(selectors.remoteMineLevel);
        const landMineLevel = yield select(selectors.landMineLevel);
        const hasScepter = yield select(selectors.hasScepter);
        const currentRemoteMineDamage = hasScepter ? REMOTE_MINE_DAMAGE[remoteMineLevel] + 150 : REMOTE_MINE_DAMAGE[remoteMineLevel];
        const remoteMines = Math.ceil(heroHp / (currentRemoteMineDamage * (1 - parseInt(magicResistance, 10) / 100)));
        const landMines = Math.ceil(heroHp / (LAND_MINE_DAMAGE[landMineLevel] * (1 - parseInt(magicResistance, 10) / 100)));

        yield put({ type: mainConstants.UPDATE_RESULT, payload: { remoteMines, landMines } });
    } catch (e) {
        console.log(e);
    }
}

function* watchInit() {
    yield takeEvery(
        mainConstants.INIT,
        calculateMines
    );
}


function* watchUpdateLandMineLevel() {
    yield takeEvery(
        mainConstants.UPDATE_LAND_MINE_LEVEL,
        calculateMines
    );
}

function* watchUpdateRemoteMineLevel() {
    yield takeEvery(
        mainConstants.UPDATE_REMOTE_MINE_LEVEL,
        calculateMines
    );
}

function* watchUpdateMagicResitance() {
    yield takeEvery(
        mainConstants.UPDATE_MAGIC_RESISTANCE,
        calculateMines
    );
}

function* watchUpdateHasScepter() {
    yield takeEvery(
        mainConstants.UPDATE_HAS_SCEPTER,
        calculateMines
    );
}

function* watchUpdateHeroHp() {
    yield takeEvery(
        mainConstants.UPDATE_HERO_HP,
        calculateMines
    );
}

export default function* mainSagas() {
    yield all([
        watchUpdateHasScepter(),
        watchUpdateLandMineLevel(),
        watchUpdateRemoteMineLevel(),
        watchUpdateMagicResitance(),
        watchUpdateHeroHp(),
        watchInit(),
    ]);
}
