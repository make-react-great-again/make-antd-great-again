import { hoc } from './hoc.jsx';
import React, { Component } from 'react';
import { types } from '../../redux/index.js';

const getNumber = (props) => {
  const { normalProps } = props;
  return normalProps + 1000;
};

@hoc({
  title: '1',
  form: true,
  style: require('./style.scss'),
  preload: (props) => ({
    resultData: getNumber(props),
  }),
  connect: [
    state => ({
      counter: state.counter
    }),
    dispatch => ({
      increment(){
        dispatch({
          type: types.INCREMENT
        })
      }
    })
  ]
})
class Demo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { resultData, counter, increment } = this.props;
    return (
      <div>
        <input type="text" className="text" />
        <div>{resultData}</div>
        <div>{counter}</div>
        <button onClick={increment}>+</button>
      </div>
    );
  }
}
export default Demo;
