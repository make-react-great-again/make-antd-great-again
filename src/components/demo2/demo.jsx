import { hoc } from './hoc.jsx';
import React, { Component } from 'react';

const getNumber = (props) => {
  const { normalProps } = props;
  return normalProps + 1000;
};

@hoc({
  form: true,
  style: require('./style.scss'),
  preload: (props) => ({
    resultData: getNumber(props),
  }),
  connect: {},
})
class Demo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { resultData } = this.props;
    return (
      <div>
        <input type="text" className="text" />
        <div>{resultData}</div>
      </div>
    );
  }
}
export default Demo;
