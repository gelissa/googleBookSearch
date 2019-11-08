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
                        <input type="text" onChange={this.props.handleSearch}/>
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