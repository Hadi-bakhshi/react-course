import styles from "./Product.module.css";
import { BiTrash } from "react-icons/bi";
import { useEffect } from "react";

//  When we use module in css, we make sure that there won't be any bug

const Product = ({ onChange, onDec, onDelete, onInc, product }) => {


  useEffect(() => {
    
    return () => {
    };
  }, [ ]);



  return (
    <div className={styles.product}>
      <p> Product Name : {product.title} Course</p>
      <p>Product Price : {product.price}</p>
      <span className={styles.value}>{product.quantity}</span>
      <input
        className={styles.input}
        type="text"
        onChange={onChange}
        value={product.title}
      />
      <button onClick={onInc} className={`${styles.button} ${styles.inc}`}>
        {" "}
        +{" "}
      </button>
      <button
        onClick={onDec}
        className={`${styles.button} ${styles.dec} ${
          product.quantity === 1 && styles.remove
        }`}
      >
        {" "}
        {product.quantity > 1 ? "-" : <BiTrash />}{" "}
      </button>
      <button
        onClick={onDelete}
        className={`${styles.buttondel} ${
          product.quantity === 1 && styles.removedel
        }`}
      >
        Delete
      </button>
    </div>
  );
};

export default Product;

// When you don't need 'div' tag, you can use fragment instead of 'div'
// import react, {fragment} from 'react'
