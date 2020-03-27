import React, { Component } from 'react';
// New Class Based Component To Behave As Child To AppContainer
class EntryDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <div>
                {/* Test Message To Verify Component Reference In AppContainer.jsx File */}
                <h2>EntryDisplay here!</h2>
            </div>
        )
    };
};

export default EntryDisplay;