import React, { Component } from "react";
import "./App.css";
import ProductList from "./Components/ProductList/ProductList";
import NavBar from "./Components/NavBar/NavBar";
import Wrapper from "./Components/hoc/Wrapper";
import CounterProvider from "./Components/Context/CounterProvider";
import CounterComp from "./Components/Reducer/CountReducer";
import CounterTwoComp from "./Components/Reducer/CountReducerTwo";
import CounterOne from "./Components/Context/CounterOne";



class App extends Component {
  state = {
    products: [
      { title: "React.js", price: "$99", id: 1, quantity: 1 },
      { title: "Node.js", price: "$89", id: 2, quantity: 2 },
      { title: "JavaScript", price: "$79", id: 3, quantity: 3 },
    ],
  };

  // Handler

  removeHandler = (id) => {
    // console.log("clicked", id );
    const filteredProducts = this.state.products.filter((p) => p.id !== id);
    this.setState({ products: filteredProducts });
  };

  incrementHandler = (id) => {
    const index = this.state.products.findIndex((item) => item.id === id);
    const product = { ...this.state.products[index] };
    product.quantity++;
    const products = [...this.state.products];
    products[index] = product;
    this.setState({ products });
  };

  decrementHandler = (id) => {
    const index = this.state.products.findIndex((item) => item.id === id);
    const product = { ...this.state.products[index] };
    if (product.quantity === 1) {
      const filteredProducts = this.state.products.filter((p) => p.id !== id);
      this.setState({ products: filteredProducts });
    } else {
      const products = [...this.state.products];
      product.quantity--;
      products[index] = product;
      this.setState({ products });
    }
  };

  changeHandler = (event, id) => {
    const index = this.state.products.findIndex((item) => item.id === id);
    const product = { ...this.state.products[index] };
    product.title = event.target.value;
    const products = [...this.state.products];
    products[index] = product;
    this.setState({ products });
  };

  render() {
    return (
      <>

        {/* <NavBar
          totalItems={this.state.products.filter((p) => p.quantity > 0).length}
        />
        <ProductList
          products={this.state.products}
          onDelete={this.removeHandler}
          onInc={this.incrementHandler}
          onDec={this.decrementHandler}
          onChange={this.changeHandler}
        /> */}
      <CounterProvider>
       <h2>Welcome to Context</h2>
      <CounterOne/>
      </CounterProvider>
        
      </>
    );
  }
}
export default Wrapper(App, "container");
