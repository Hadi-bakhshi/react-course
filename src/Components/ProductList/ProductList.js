import React, { Component } from "react";
import Product from "../Products/Product";
import styles from "./ProductList.module.css";

class ProductList extends Component {
  state = {
    products: [
        { title: "React.js", price: "$99", id:1, quantity:1 },
        { title: "Node.js", price: "$89", id:2, quantity:2 },
        { title: "JavaScript", price: "$79", id:3, quantity:3 },
      ],
  };

removeHandler = (id) =>{
  console.log("clicked", id );
  const filteredProducts = this.state.products.filter((p) => p.id !== id);
  this.setState({products: filteredProducts});
};


incrementHandler = (id) =>{
 const products = [...this.state.products];
  const foundProduct = products.find(p => p.id ===id);
  foundProduct.quantity++;
this.setState({products: products})
};


decrementHandler=(id) =>{
const productsList=[...this.state.products];
const SelectedDec = productsList.find(p => p.id ===id);
SelectedDec.quantity--;
this.setState({productsList: productsList});
}

changeHandler = (event, id) => {
// console.log(event.target.value, id );
}

  render() {
    return (
      <div className={styles.productlist}>
        {this.state.products.map((product) => {
          return (
            <Product 
            // name={product.title} 
            // price={product.price} 
            product={product}
            key={product.id} 
            onDelete={() => this.removeHandler(product.id)}
            onInc={ () => this.incrementHandler(product.id)}
            onDec={ () => this.decrementHandler(product.id)}
            onChange={ (e) => this.changeHandler(e, product.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default ProductList;
