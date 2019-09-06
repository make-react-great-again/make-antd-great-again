import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      value: e.currentTarget.value,
    });
  }
  render() {
    return <input type="text" value={this.state.value} onChange={this.handleChange} />;
  }
}
