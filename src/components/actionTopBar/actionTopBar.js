import React, { Component } from 'react';
import './actionTopBar.css'
import ActionButton from '../atomicComponents/actionButton/actionButton'
import CurrentBalance from '../atomicComponents/currentBalance/currentBalance'

class ActionTopBar extends Component {
    render() {
        return (
            <div className="actionBarContainer">
                <div className="leftActionsContainer">
                    Arcade
                </div>
                <div className="rightActionsContainer">
                    <CurrentBalance></CurrentBalance>
                    <ActionButton></ActionButton>
                </div>
            </div>
        );
    }
}

export default ActionTopBar;