import React, { Component } from 'react';
import { Form } from 'antd';

export function hoc(params = {}) {
  const { form, preload, connect } = params;
  return (WrappedComponent) => {
    if (form) {
      WrappedComponent = Form.create({ name: 'wrapped_form_component' })(WrappedComponent);
    }
    return class Enhanced extends React.Component {
      constructor(props) {
        super(props);
        this.state = {};
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
  };
}
