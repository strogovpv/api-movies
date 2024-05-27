import { Movies } from '../content/Movies';
import { Component } from 'react';
import { Preloader } from './Preloader';
import { Search } from '../content/Search';

class Main extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=84b94210&s=matrix`)
      .then((responce) => responce.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  searchMovies = (str) => {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=84b94210&s=${str}`)
      .then((responce) => responce.json())
      .then((data) => this.setState({ movies: data.Search }));
  };

  render() {
    const { movies } = this.state;
    return (
      <main className='container content'>
        <Search searchMovies={this.searchMovies} />
        {movies.length ? <Movies movies={this.state.movies} /> : <Preloader />}
      </main>
    );
  }
}

export { Main };
