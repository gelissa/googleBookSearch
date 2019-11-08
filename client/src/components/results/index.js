import React, { Component } from "react";
import "./style.css";

class Results extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="card-panel teal">
                        <h2 className="results">Results</h2>
                        <h3>Title: {this.props.title}</h3>
                        <hr />
                        <h3>Author(s): {this.props.author}</h3>
                        {/* <p>Description: {this.props.description}</p>
                        <img alt={this.props.title} src={this.props.src} />
                        <a href={this.props.link}>Link</a> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Results;