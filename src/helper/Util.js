import React, { Component } from 'react';
import { Form } from 'antd';
export function enhancer(propsComponent) {
  console.log(propsComponent);
  const WrappedFormComponent = Form.create({ name: 'wrapped_form_component' })(propsComponent);
  return class HOC extends Component {
    render() {
      return (
        <div>
          <WrappedFormComponent {...this.props} />
        </div>
      );
    }
  };
}

