import React, { Component } from "react";
import enhancer from "./helper/Util";

@enhancer
class App extends Component {
  render() {
    console.log(this.props.form);
    return <div>Hello World</div>;
  }
}

export default App;
