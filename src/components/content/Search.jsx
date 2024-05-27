import React, { Component } from 'react';

class Search extends Component {
  state = {
    search: 'matrix',
    typeMovies: '',
  };
  onChange = (evt) => {
    this.setState({ search: evt.target.value });
  };

  onChangeTypeMovies = (evt) => {
    this.setState({ typeMovies: evt.target.value });
  };

  handleKey = (evt) => {
    if (evt.key === 'Enter') {
      this.props.searchMovies(this.state.search, this.state.typeMovies);
    }
  };
  render() {
    return (
      <>
        <div className='row'>
          <div className='input-field col s12'>
            <input
              id='search'
              type='search'
              className='validate'
              placeholder='Search'
              value={this.state.search}
              onChange={this.onChange}
              onKeyDown={(evt) => this.handleKey(evt)}
            />
            <button onClick={() => this.props.searchMovies(this.state.search)}>
              Search
            </button>
          </div>
        </div>
        <p className='searchType'>
          <label>
            <input
              onChange={this.onChangeTypeMovies}
              className='with-gap'
              name='movieType'
              type='radio'
              value=''
            />
            <span>All</span>
          </label>

          <label>
            <input
              onChange={this.onChangeTypeMovies}
              className='with-gap'
              name='movieType'
              type='radio'
              value='movie'
            />
            <span>Movies only</span>
          </label>

          <label>
            <input
              onChange={this.onChangeTypeMovies}
              className='with-gap'
              name='movieType'
              type='radio'
              value='series'
            />
            <span>Sereies only</span>
          </label>
        </p>
      </>
    );
  }
}

export { Search };
