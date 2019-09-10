import React, { Component } from 'react';
import { connect as reduxConnect } from 'react-redux'
import { Form } from 'antd';

export function hoc(params = {}) {
  const { form, preload = () => ({}), connect = [], title } = params;
  return (WrappedComponent) => {
    if (form) {
      WrappedComponent = Form.create({ name: 'wrapped_form_component' })(WrappedComponent);
    }
    class Enhanced extends React.Component {
      constructor(props) {
        super(props);
        this.state = {};
        title && (document.title = title);
      }
      render() {
        const data = preload(this.props);
        let newProps = {
          ...this.props,
          ...data,
        };
        return <WrappedComponent {...newProps} />;
      }
    };
    return connect.length > 0 ? reduxConnect(...connect)(Enhanced) : Enhanced
  };
}
