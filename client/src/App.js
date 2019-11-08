import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Nav from "./components/navbar";
// import Jumbotron from "./components/jumbotron";
// import Search from "./components/search";
// import Results from "./components/results";
import Books from "./pages/books";

class App extends Component {
  render() {
    return (
      <div>
        <Books />
      </div>
    );
  }
}

export default App;
