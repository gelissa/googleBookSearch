import React, { Component } from "react";
import Nav from "../components/navbar";
import Jumbotron from "../components/jumbotron";
import Search from "../components/search";
import Results from "../components/results";
import API from "../utils/API";

class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchField: ""
        }
    }

    handleSearch = (event) => {
      console.log(event.target.value)
        this.setState({
            searchField: event.target.value
        })
    }

    searchBooks = query => {
      API.search(query)
        .then(res => this.setState({ result: res.data}))
        .catch(err => console.log(err));
    }

    handleFormSubmit = event => {
      event.preventDefault();
      this.searchBooks(this.state.searchField)
    }

    render() {
      return (
        <div>
          <Nav />
          <Jumbotron />
          <Search 
          value={this.state.search}
          handleSearch={this.handleSearch}
          handleFormSubmit={this.handleFormSubmit}
          searchBooks={this.searchBooks}
          />
          <Results />
        </div>
      );
    }
  }
  
  export default Books;