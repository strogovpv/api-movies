import React, { Component } from 'react';

class Search extends Component {
  state = {
    search: 'matrix',
  };
  onChange = (evt) => {
    this.setState({ search: evt.target.value });
  };

  handleKey = (evt) => {
    if(evt.key === 'Enter'){
      this.props.searchMovies(this.state.search)
    }
  }
  render() {
    return (
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
    );
  }
}

export { Search };
