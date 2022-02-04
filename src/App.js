import React, {Component} from 'react';
import AllMovies from './AllMovies';
import movieData from './movieData';
import './App.scss';
import './reset.scss'

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      singleMovieView: false,
    }
  }

  componentDidMount() {
    this.setState({movies: movieData.movies })
  }

  render() {
    return(
      <main>
        <nav>Rancid Tomatillos</nav>
        <AllMovies movies={this.state.movies} />
      </main>
    )
  }
}

export default App;
