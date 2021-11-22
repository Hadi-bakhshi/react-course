import ReloadBtn from "../Buttons/ReloadBtn";
import Product from "../Products/Product";
import { useProducts, useProductsAction } from "../Providers/ProductsProvider";
import styles from "./ProductList.module.css";

const ProductList = (props) => {
  const products = useProducts();
  const dispatch = useProductsAction();

  const renderProduct = () => {
    if (products.length === 0)
      return (
        <div className={styles.noproduct}>
          <ReloadBtn />
        </div>
      );

    return products.map((product) => {
      return (
        <Product
          name={product.title}
          price={product.price}
          product={product}
          key={product.id}
          onDelete={() =>dispatch({type:'remove', id:product.id})}
          onInc={() =>dispatch({type:'increment', id:product.id})}
          onDec={() =>dispatch({type:'decrement', id:product.id})}
          onChange={(e) =>dispatch({type:'edit', id:product.id, event:e})}
        ></Product>
      );
    });
  };

  return (
    <div className={styles.productlist}>
      {!products.length && (
        <div className={styles.goshopping}>
          There is no product in your cart
        </div>
      )}
      {renderProduct()}
    </div>
  );
};

export default ProductList;
