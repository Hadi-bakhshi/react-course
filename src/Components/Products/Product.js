// import "./Product.css"
import styles from "./Product.module.css"
import { BiTrash } from "react-icons/bi";
//  When we use module in css, we make sure that there won't be any bug

const Product = (props) => {
    // console.log(props);
  return (
    <div className={styles.product} onClick={props.click }>
      <p> Product Name : {props.product.title} Course</p>
      <p>Product Price : {props.product.price}</p>
      <span className={styles.value}>{props.product.quantity}</span>
      <input className={styles.input} type="text" onChange={props.onChange} value={props.product.title} />
      <button onClick={props.onInc} className={`${styles.button} ${styles.inc}`}> + </button>
      <button onClick={props.onDec} className={`${styles.button} ${styles.dec} ${props.product.quantity===1 && styles.remove }`}> {props.product.quantity >1 ? "-" : <BiTrash/>} </button>
      <button onClick={props.onDelete} className={`${styles.buttondel} ${props.product.quantity===1 && styles.removedel}`}>Delete</button>
    {props.children}
    </div>
  );
};

export default Product;


// When you don't need 'div' tag, you can use fragment instead of 'div' 
// import react, {fragment} from 'react'