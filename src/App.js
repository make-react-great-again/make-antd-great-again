import React, { Component } from "react";
import enhancer from "./helper/Util";
import { Input, Icon, Button } from "antd";
import { Form } from "antd";

@enhancer
class App extends Component {
  submit = () => {
    const { form } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form.Item>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
          <Button onClick={this.submit}>提交</Button>
        </Form.Item>
      </div>
    );
  }
}

export default App;
