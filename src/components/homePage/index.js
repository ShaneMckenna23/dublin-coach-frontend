import React, { Component } from 'react';
import BasicAutoComplete from '../basicAutoComplete';

class HomePage extends Component {
  render() {
    return (
      <div>
        <h1>Dublin Coach Test</h1>
        <BasicAutoComplete
          placeholder="From"
          items={['apple', 'orange', 'carrot']}
          onChange={selectedItem => console.log(selectedItem)} />
        <BasicAutoComplete
          placeholder="To"
          items={['apple', 'orange', 'carrot']}
          onChange={selectedItem => console.log(selectedItem)} />
        <img src="./logo.png" />
      </div>
    );
  }
}

export default HomePage;
