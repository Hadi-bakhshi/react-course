// import "./Product.css"
import styles from "./Product.module.css"
//  When we use module in css, we make sure that there won't be any bug

const Product = (props) => {
    // console.log(props);
  return (
    <div className={styles.product} onClick={props.click }>
      <p> Product Name : {props.product.name} Course</p>
      <p>Product Price : {props.product.price}</p>
      <span className={styles.value}>{props.product.quantity}</span>
      <input type="text" onChange={props.onChange} />
      <button onClick={props.onInc} className={`${styles.button} ${styles.inc}`}> + </button>
      <button onClick={props.onDec} className={`${styles.button} ${styles.dec}`}> - </button>
      <button onClick={props.onDelete} className={styles.button}>Delete</button>
    {props.children}
    </div>
  );
};

export default Product;


// When you don't need 'div' tag, you can use fragment instead of 'div' 
// import react, {fragment} from 'react'