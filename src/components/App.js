import React, { Component } from 'react';
import './App.scss';
import Header from './Header';
import PxRem from './PxRem';

class App extends Component {
    render() {
        return (
        <React.Fragment>
            <Header></Header>
            <PxRem />
        </React.Fragment>
        );
    }
}

export default App;
