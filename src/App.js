import React, { Component } from "react";
import "./App.css";
import ProductList from "./Components/ProductList/ProductList";
import NavBar from "./Components/NavBar/NavBar";

class App extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div className="container" id="title">
        <NavBar/>
        <ProductList />
      </div>
    );
  }
}
export default App;

// import HookArray from './Components/HookArray';
// import HookCounter from './Components/HookCounter';
// import ClassCounter from './Components/ClassCounter';
// import HookObject from './Components/HookObject';

// how to pass argument to event: 1-using arrow function () => -- giving id to the function

// constructor(props){
//   super(props)
//   this.countHandler = this.countHandler.bind(this);
// }

// clickHandler = (newTitle) => {
//   this.setState({
//     products: [
//       { title: "React.js", price: "$89" },
//       { title: newTitle, price: "$79" },
//       { title: "JavaScript", price: "$69" },
//     ],
//   });
// }

// countHandler =(id) =>{
//   // console.log(" count clicked", id);
//   this.setState({count: this.state.count+1});
// }

/* <button className="change-btn" onClick={ () => this.countHandler(2)}>
          Counter : {this.state.count} */

// function  App (){
//   return(
//     <div className="App">
//       {/* < Product/> */}
//       {/* <HookCounter/> */}
//       {/* <ClassCounter/> */}
//       {/* <HookObject /> */}
//       {/* <HookArray /> */}
//     </div>
//   );
// }

//

// Using classes

// class App extends Component{
//   state = {
//     products:[
//       {title: "React.js", price: "$99"},
//       {title: "Node.js", price: "$89"},
//       {title: "JavaScript", price: "$79"},
//     ],
//   userDate:"Hadi",
//   };

// clickHandler = () => {

//   this.setState({
//     Products:[
//       {title:"React.js", price:"$89"},
//       {title:"Node.js", price:"$65"},
//       {title:"JavaScript", price:"$59"},
//     ],
//   });
// };

//   render() {
//     return (
//       <div class="container" id="title">
//         <h1>Shopping App</h1>
//         {this.state.Products.map((product) =>{
//           return <Product name={product.title} price={product.price}/>;
//         })}
//         <button onClick={this.clickHandler}>Change price</button>
//       </div>
//     );
//   }
// }
// export default App;

// Using Functions
// const App =() =>{
//    return(
//        <div class="container" id="title">
//            <h1>Shopping App</h1>
//            <Product name="React.js" price="$99" />
//            <Product name="Node.js" price="$75" />
//            <Product name="JavaScript" price="$69" >
//                <p>15% off</p>
//            </Product >

//        </div>
//    );
// };

// <Product name="React.js" price="$99" />
// <Product name="Node.js" price="$75" />
// <Product name="JavaScript" price="$69">
// <p>15% off</p>
// </Product>

// Functional component

//  In react v16.8 which was released in 2018 they added hooks
// React hooks=> in order to use > state + lifecycle in > Functional components
//  We use (useState) in FC

// At first we use (sfc) to create this const App
// const App = () => {
// // if you have another state you should use this method => i.e  const [user, userData]  to add it exactly like {clickHandler}

//  const [Products,setProducts ] = useState([
//     { title: "React.js", price: "$99" },
//     { title: "Node.js", price: "$75" },
//     { title: "JavaScript", price: "$69" },
//   ]);

//   // this state is for changing the price button
//   const clickHandler =()=>{
//     setProducts([
//       { title: "React.js", price: "$89" },
//       { title: "Node.js", price: "$65" },
//       { title: "JavaScript", price: "$59" },
//     ]);
//   };
//   return (
//     <div class="container" id="title">
//       <h1>Shopping App</h1>
//       {Products.map((product) => {
//         return <Product name={product.title} price={product.price} />;
//       })}
//       <button onClick={clickHandler}>Change price</button>
//     </div>
//   );
// };

// export default App;

// export default App;

// by using <product/> there is no need to write html code every time, you just write it once then you can use it everywhere in your project
