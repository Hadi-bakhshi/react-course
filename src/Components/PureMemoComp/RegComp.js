import React, { Component } from 'react';
class RegComp extends Component {
    render() { 
        // console.log("First child is rendering");
        return <div>I'm the child of {this.props.name}</div>;
    }
}
 
export default RegComp;