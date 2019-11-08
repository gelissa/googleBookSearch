import React, { Component } from "react";
import Nav from "../components/navbar";
import Jumbotron from "../components/jumbotron";
import Search from "../components/search";
import Results from "../components/results";
import API from "../utils/API";

class Books extends Component {
  state = {
      result: [],
      search: ""
    };

  
  // componentDidMount(){
  //   this.searchBooks("Crazy Rich Asians");
  // }


  handleInputChange = event => {
    this.setState({search: event.target.value})
  };

  // searchBooks = search => {
  //   API.search(this.state.search)
  //     .then(res => this.setState({ result: res.data.items, search: "" }))
  //     .catch(err => console.log(err));
  // };

  handleFormSubmit = event => {
    event.preventDefault();
    // this.searchBooks(this.state.search);
    // console.log(this.state.search);
    API.search(this.state.search)
      .then(res => this.setState({ result: res.data.items, search: "" }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Search
          value={this.state.search}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit}
        />
        <Results
          // title={this.state.books.items.volumeInfo.title}
          // author={this.state.books.items.volumeInfo.authors}
          // description={this.state.books.items.description}
          // image={this.state.books.items.imageLinks.smallThumbnail}
          // link={this.state.books.items.selfLink}
          title={this.state.result.title}
          author={this.state.result.authors}
        // description={this.state.books.description}
        // image={this.state.books.smallThumbnail}
        />
      </div>
    );
  }
}

export default Books;