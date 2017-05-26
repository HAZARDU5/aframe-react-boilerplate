import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/main.css';

const render = Component => {
    ReactDOM.render(
        <Component />,
        document.getElementById('root')
    )
};

render(App);