import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Main } from './components/layout/Main';
import { Component } from 'react';

class App extends Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=84b94210&s=matrix')
      .then((responce) => responce.json())
      .then((data) => this.setState({ movies: data.Search }));
  }
  render() {

    return (
      <div className='App'>
        <Header />
        <Main movies={this.state.movies} />
        <Footer />
      </div>
    );
  }
}

export default App;
