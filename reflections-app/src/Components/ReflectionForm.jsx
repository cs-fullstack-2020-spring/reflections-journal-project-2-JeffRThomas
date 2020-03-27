import React, { Component } from 'react';
// New Class Based Component To Behave As Child To AppContainer
class ReflectionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            creationdate: "",
            journalentry: "",
            confidencelevel: ""
        };
    };

    // Wiring Setup For Input Fields in HTML Form
    manageInputFields = (event) => {
        if (event.target.name === "date") {
            this.setState({ creationdate: event.target.value })
        } else if (event.target.name === "entry") {
            this.setState({ journalentry: event.target.value })
        } else if (event.target.name === "confidence") {
            this.setState({ confidencelevel: event.target.value })
        }
        // console.log(this.state) Check Registry Of Changes To Input Fields
    };

    newEntryMade = (userentry) => {
        userentry.preventDefault();
        console.log("New Entry Made!")
        console.log(this.state)//Check Information To Send Up To AppContainer.jsx File
    }

    render() {
        return (
            <div>
                {/* Test Message To Verify Component Reference In AppContainer.jsx File */}
                <h2>ReflectionForm here!</h2>
                <form>
                    <fieldset>
                        <legend>Make A New Entry</legend>

                        <div>
                            <label htmlFor="date">Creation Date:</label>
                            <input type="date" name="date" onChange={this.manageInputFields}></input>
                        </div>

                        <div>
                            <label htmlFor="entry">Journal Entry:</label>
                            <input type="text" name="entry" placeholder="Enter Your Thoughts" onChange={this.manageInputFields}></input>
                        </div>

                        <div>
                            <label htmlFor="confidence">Confidence Level:</label>
                            <select name="confidence" onChange={this.manageInputFields}>
                                <option>Feeling?</option>
                                <option>High</option>
                                <option>Medium</option>
                                <option>Low</option>
                            </select>
                        </div>

                        <button onClick={this.newEntryMade}>Post Entry</button>

                    </fieldset>
                </form>
            </div>
        )
    };
};

export default ReflectionForm;