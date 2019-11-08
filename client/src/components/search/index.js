import React, { Component } from "react";
import "./style.css";

class Search extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         books: [],
    //         searchField: ""
    //     }
    // }

    // handleSearch = (event) => {
    //     this.setState({
    //         searchField: event.target.value
    //     })
    // }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="card-panel teal">
                        <h3>Search Here</h3>
                        <input
                            type="text"
                            onChange={this.props.handleInputChange}
                            placeholder="Search"
                            value={this.props.value}
                            name="search"
                        />
                        <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.props.handleFormSubmit}>Submit
                            <i className="material-icons right">send</i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;