import React, { Component } from 'react';
import ReflectionForm from './ReflectionForm';
import EntryDisplay from './EntryDisplay';
// New Class Based Component To Behave As Top Level Parent
class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            journalentries:[]
        };
    };

    addToList=(entry)=>{
        console.log("Parent says `I received the entry.`")
        this.state.journalentries.push(entry)
        console.log(this.state.journalentries)
    }


    render() {
        return (
            <div>
                {/* Test Message To Verify Component Reference In App.js File */}
                <h1>AppContainer here!</h1>
                {/* Test Message To Verify Component References Of Children */}
                <ReflectionForm addToList={this.addToList}/>
                <hr/>
                <EntryDisplay journalentries={this.state.journalentries}/>
                <hr/>
            </div>
        )
    };
};

export default AppContainer;