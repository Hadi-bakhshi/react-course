import React, { Component } from "react";
class CounterClass extends Component {
  state = {
    count: 0,
  };
//   addOneHandler = () => {
//       this.setState({count : this.state.count+1});
//   }

// callback function

addOneHandler = () =>{
    this.setState((prevState)=>{
        return {count: prevState.count+1}
    })
}

  render() {
    return (
      <div>
        <h2> count - {this.state.count}</h2>
        <button onClick={this.addOneHandler}>Add one</button>
      </div>
    );
  }
}

export default CounterClass;
