import React, { Component } from 'react';
// New Class Based Component To Behave As Child To AppContainer
class EntryDisplay extends Component {
    render() {
        return (
            <div>
                {/* Test Message To Verify Component Reference In AppContainer.jsx File */}
                <h2>EntryDisplay here!</h2>
                <div>
                    {
                        this.props.journalentries.map((entry, index) => {
                            return (
                                <div key={index}>
                                    {entry.creationdate}
                                </div>)
                        })
                    }
                </div>
            </div>
        )
    };
};

export default EntryDisplay;