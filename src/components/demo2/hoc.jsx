import React, { Component } from 'react';

export function hoc(params) {
  return (WrappedComponent) => {
    return class Enhanced extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          value: '',
        };
        this.handleChange = this.handleChange.bind(this);
      }
      handleChange(e) {
        console.log(e.currentTarget.value);
        this.setState({
          value: e.currentTarget.value,
        });
      }
      render() {
        let newProps = {
          value: this.state.value,
          onChange: this.handleChange,
        };
        return <WrappedComponent {...newProps} {...params}/>;
      }
    };
  };
}
