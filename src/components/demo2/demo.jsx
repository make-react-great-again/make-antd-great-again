import { hoc } from './hoc.jsx';
import React, { Component } from 'react';

@hoc({ age: 12 })
class Demo extends Component {
  render() {
    return (
      <div>
        <input type="text" {...this.props} />
        <span>{this.props.age}</span>
      </div>
    );
  }
}
export default Demo;
