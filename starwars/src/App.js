import React, { Component } from "react";

import "./App.css";


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
        console.log('films', films)
        this.setState({ movies: films.results });
      });
  }

  render() {
    const { movies } = this.state;
    return !movies.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1 green">RoboFriends</h1>

        <CardList movies={movies} />
      </div>
    );
  }
}

export default App;
