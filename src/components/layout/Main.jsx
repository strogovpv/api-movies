import { Movies } from '../content/Movies';
import { Component } from 'react';
import { Preloader } from './Preloader';
import { Search } from '../content/Search';

class Main extends Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=84b94210&s=matrix`)
      .then((responce) => responce.json())
      .then((data) => this.setState({ movies: data.Search, loading: false, }));
  }

  searchMovies = (str, typeMovies) => {
    this.setState({ loading: true });
    fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=84b94210&s=${str}&type=${typeMovies}`
    )
      .then((responce) => responce.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  };

  render() {
    const { movies, loading } = this.state;
    return (
      <main className='container content'>
        <Search searchMovies={this.searchMovies} />
        {loading ? <Preloader /> : <Movies movies={movies} />}
      </main>
    );
  }
}

export { Main };
