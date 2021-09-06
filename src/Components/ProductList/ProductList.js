import React, { Component } from "react";
import Product from "../Products/Product";
import styles from "./ProductList.module.css";

class ProductList extends Component {
  



  renderProduct = () => {
    if (this.props.products.length === 0)
      return <div> There is no product in your cart </div>;

    return this.props.products.map((product) => {
      return (
        <Product
          // name={product.title}
          // price={product.price}
          product={product}
          key={product.id}
          onDelete={() => this.props.onDelete(product.id)}
          onInc={() => this.props.onInc(product.id)}
          onDec={() => this.props.onDec(product.id)}
          onChange={(e) => this.props.onChange(e, product.id)}
        />
      );
    });
  };

  render() {
    return <div className={styles.productlist}>
      {!this.props.products.length && <div> Go shopping</div> }
      {this.renderProduct()}
      </div>;
  }
}

export default ProductList;
