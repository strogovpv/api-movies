import React, { Component } from 'react';

class Search extends Component {
  state = {
    search: '',
  };
  onChange = (evt)=>{
    this.setState({search: evt.target.value})
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
          />
        </div>
      </div>
    );
  }
}

export { Search };
