/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import RootContainer from './containers/Root';

import './App.css';

class App extends Component {
    render() {
        const { store, history } = this.props;
        return (
            <Provider store={store}>
                <RootContainer history={history} />
            </Provider>
        );
    }
}

App.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
};
App.defaultProps = {
};

export default App;
