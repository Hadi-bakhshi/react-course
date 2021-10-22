import React, { PureComponent } from 'react';
class PureComp extends PureComponent {
    render() { 
        // console.log("the last child is rendering (purecomp)");
        return <div>I'm the last child of {this.props.name}</div>;
    }
}
 
export default PureComp;