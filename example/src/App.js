import React, { Component } from 'react';
import Demo2 from './components/demo2/demo.jsx';


class App extends Component {
  render() {
    return (
      <div>
        <Demo2 normalProps={1000} />
      </div>
    );
  }
}

export default App;
