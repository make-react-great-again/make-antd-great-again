import React, { Component } from 'react';
import { enhancer } from './helper/Util';
import { Input, Icon, Button, Divider } from 'antd';
import { Form } from 'antd';
import Demo2 from './components/demo2/demo.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Demo2 />
      </div>
    );
  }
}

export default App;
