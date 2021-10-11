import React, { Component } from "react";
class ClassTimer extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    this.myTimer = setInterval(() => {
      console.log("Hi Hadi");
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }
  //   We need to unmount the component => clear it when we hide it in order to prevent it from having any bugs

  componentWillUnmount() {
    console.log("Component will unmount");
    clearInterval(this.myTimer);
  }

  render() {
    return <div>This is an Interval(cc)</div>;
  }
}

export default ClassTimer;
