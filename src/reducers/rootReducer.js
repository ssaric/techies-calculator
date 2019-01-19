import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import main from './mainReducer';

const rootReducer = combineReducers({
    router: routerReducer,
    main,
});

export default rootReducer;
