import React, { Component } from "react";
import "./style.css";

class Search extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div class="card-panel teal">
                        <h3>Search Here</h3>
                        <input type="text" />
                        <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;