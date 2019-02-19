import React, { Component } from 'react';
import './Header.scss';

class Header extends Component {
    render() {
        return (
        <div className="container">
            <header className="app-header">
            <section className="hero is-info is-medium is-primary is-bold">
                <div className="hero-body">
                    <div className="container">
                    <h1 className="title">
                        Hello Helper Toolkit
                    </h1>
                    <h2 className="subtitle">
                        Let's make some magic!
                    </h2>
                    </div>
                </div>
                </section>
            </header>
        </div>
        );
    }
}

export default Header;
