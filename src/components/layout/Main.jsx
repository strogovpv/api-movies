
// import { Preloader } from "./Preloader";
// function Main({movies}) {
//   return (
//     <main className="container content movies">
//       {movies.length ? (<Movies movies={movies}/>) : (<Preloader/>)}
//     </main>
//   );
// }
import { Movies } from "../content/Movies";
import { Component } from 'react';
import { Preloader } from './Preloader';
import { Search } from '../content/Search';

// export { Main };

// state = {
//   movies: [],
// };
// componentDidMount() {
//   fetch('http://www.omdbapi.com/?i=tt3896198&apikey=84b94210&s=matrix')
//     .then((responce) => responce.json())
//     .then((data) => this.setState({ movies: data.Search }));
// }

// передать состояние movies={this.state.movies}

class Main extends Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=84b94210&s=matrix')
      .then((responce) => responce.json())
      .then((data) => this.setState({ movies: data.Search }));
  }
  render() {
    const { movies } = this.state;
    return (
      <main className='container content'>
        <Search />
        {movies.length ? <Movies movies={this.state.movies}/> : <Preloader />}
      </main>
    );
  }
}

export { Main };
