import 'babel-polyfill';
import React from 'react';
import Home from './Home';
import About from './About';
import Aframe from './Aframe';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render () {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/aframe">A-Frame</Link></li>
                    </ul>

                    <hr/>

                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/aframe" component={Aframe}/>
                </div>
            </Router>
        );
    }
}

export default App;