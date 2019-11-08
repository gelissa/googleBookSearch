import React, { Component } from "react";
import "./style.css";


class Jumbotron extends Component {
    render() {
        return (
            <div>
                <div className="container">
                <div className="card-panel teal">
                    {/* <span class="white-text">I am a very simple card. I am good at containing small bits of information.
                    I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.
        </span> */}
                <h1>React Google Book Search</h1>
                <h2>Search for and save books of interest</h2>
                </div>
                </div>
            </div>
        );
    }
}

export default Jumbotron;
