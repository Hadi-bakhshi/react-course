import React, { Component } from "react";
import Product from "../Products/Product";
import styles from "./ProductList.module.css";

class ProductList extends Component {
  



  renderProduct = () => {
    const {onChange,onDec, onInc, onDelete, products}=this.props;
    if (products.length === 0)
      return <div> There is no product in your cart </div>;

    return products.map((product) => {
      return (
        <Product
          // name={product.title}
          // price={product.price}
          product={product}
          key={product.id}
          onDelete={() =>onDelete(product.id)}
          onInc={() =>onInc(product.id)}
          onDec={() =>onDec(product.id)}
          onChange={(e) =>onChange(e, product.id)}
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
