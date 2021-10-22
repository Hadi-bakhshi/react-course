import React, { Component } from "react";
import MemoComp from "./MemoComp";
import PureComp from "./PureComp";
import RegComp from "./RegComp";
class ParentComp extends Component {
  state = {
    name: "hadi",
  };

//   componentDidMount() {
//     setInterval(() => {
//       this.setState({ name: "hadi" });
//     }, 3000);
//   }

  render() {
    //   console.log("Parent is rendering");
    return(
        <div>
            This is {this.state.name}
            <RegComp name={this.state.name}/>
            <PureComp name={this.state.name}/>
            <MemoComp name={this.state.name}/>
            </div>
    );
  }
}

export default ParentComp;
