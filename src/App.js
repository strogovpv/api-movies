import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Main } from './components/layout/Main';
import { Component } from 'react';

class App extends Component {
 
  render() {

    return (
      <div className='App'>
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
