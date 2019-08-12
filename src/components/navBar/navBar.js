import React, { Component } from 'react';
import './navBar.css';

class NavBar extends Component {
    render() {
        return (
            <div className="navBarContainer">
                <i class="fas fa-home"></i>
                <i class="fas fa-bell"></i>
                <i class="fas fa-user"></i>
            </div>
        );
    }
}

export default NavBar;