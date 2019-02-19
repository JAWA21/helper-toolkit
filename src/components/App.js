import React, { Component } from 'react';
import './App.scss';
import Header from './Header';
import PxRem from './PxRem';
import ColorConverter from './ColorConverter';
import WidgetFour from './WidgetFour';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="App">
                    <Header></Header>
                    <div className="tile is-ancestor tile-container">
                        <div className="tile is-4 is-vertical is-parent">
                            <PxRem />
                            <ColorConverter />
                        </div>
                        <WidgetFour />
                    </div>
                </div>
                <footer className="footer">
                    <div className="content has-text-centered">
                        <p>
                        <strong>Helper Toolkit</strong> by <a href="https://janderson.im">Anderson</a>.
                        </p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default App;
