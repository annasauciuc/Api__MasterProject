import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import Header from "./components/Header/Header";
import CardList from "./components/CardList/CardList";
//import Scroll from '../components/Scroll';
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    fetch("https://swapi.co/api/films")
      .then(response => response.json())
      .then(films => {
        console.log("films", films);
        this.setState({ movies: films.results });
      });
  }

  render() {
    const { movies } = this.state;
    return !movies.length ? (
      <h1>Loading</h1>
    ) : (
      <div>
        <Header />
        <CardList movies={movies} />
      </div>
    );
  }
}

export default App;
