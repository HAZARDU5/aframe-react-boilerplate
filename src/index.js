require("react-hot-loader/patch") //must come first

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { AppContainer } from 'react-hot-loader'

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    )
};

render(App);

if (module.hot) {
    module.hot.accept('./scss/main.scss', () => {
        require('./scss/main.scss');
    });
    module.hot.accept('./components/App', () => { render(App) })
}