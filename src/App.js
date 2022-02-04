// import logo from './logo.svg';
import React, {Component} from 'react';
import AllMovies from './AllMovies';
// import MovieCard from './MovieCard';
import movieData from './movieData';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      // movies: [],
      movies: movieData.movies,
      singleMovieView: false,
    }
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
