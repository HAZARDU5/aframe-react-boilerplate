require("react-hot-loader/patch"); //must come first

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
    console.log('*** Hot reloading active ***');
    module.hot.accept('./scss/main.scss', () => {
        console.log('*** Hot reloading CSS now ***');
        require('./scss/main.scss');
    });
    module.hot.accept('./components/App', () => {
        console.log('*** Hot reloading app now ***');
        render(App)
    })
}