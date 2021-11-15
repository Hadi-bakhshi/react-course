import React, { useContext, useState } from "react";

// 1- Creat context  2- Export context
const ProductsContext = React.createContext();
const ProductsContextDispatcher = React.createContext();

// reducer function and state

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { title: "React.js", price: "$99", id: 1, quantity: 1 },
    { title: "Node.js", price: "$89", id: 2, quantity: 2 },
    { title: "JavaScript", price: "$79", id: 3, quantity: 3 },
  ]);

  return (
    // 3-Provide
    <ProductsContext.Provider value={products}>
      <ProductsContextDispatcher.Provider value={setProducts}>
        {children}
      </ProductsContextDispatcher.Provider>
    </ProductsContext.Provider>
  );
};

// Export
export default ProductsProvider;
export const useProducts = () => useContext(ProductsContext);

// Actions

export const useProductsAction = () => {
  const setProducts = useContext(ProductsContextDispatcher);
  const products = useContext(ProductsContext);

  const removeHandler = (id) => {
    const filteredProducts = products.filter((p) => p.id !== id);
    setProducts(filteredProducts);
  };

  const incrementHandler = (id) => {
    const index = products.findIndex((item) => item.id === id);
    const product = { ...products[index] };
    product.quantity++;
    const updatedProducts = [...products];
    updatedProducts[index] = product;
    setProducts(updatedProducts);
  };

  const decrementHandler = (id) => {
    const index = products.findIndex((item) => item.id === id);
    const product = { ...products[index] };
    if (product.quantity === 1) {
      const filteredProducts = products.filter((p) => p.id !== id);
      setProducts(filteredProducts);
    } else {
      const updatedProducts = [...products];
      product.quantity--;
      updatedProducts[index] = product;
      setProducts(updatedProducts);
    }
  };

  const changeHandler = (event, id) => {
    const index = products.findIndex((item) => item.id === id);
    const product = { ...products[index] };
    product.title = event.target.value;
    const updatedProducts = [...products];
    updatedProducts[index] = product;
    setProducts(updatedProducts);
  };
  return { removeHandler, incrementHandler, decrementHandler, changeHandler };
};
