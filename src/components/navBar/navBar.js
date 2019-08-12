import React, { Component } from 'react';
import './navBar.css';

class NavBar extends Component {
    render() {
        return (
            <div className="navBarContainer">
                <i className="fas fa-home"></i>
                <i className="fas fa-bell"></i>
                <i className="fas fa-user"></i>
            </div>
        );
    }
}

export default NavBar;