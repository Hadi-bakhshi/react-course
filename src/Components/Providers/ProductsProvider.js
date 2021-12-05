import React, { useContext, useReducer } from "react";
import { productsData } from "../../Components/db/product";
import _ from "lodash";
// 1- Creat context
const ProductsContext = React.createContext();
const ProductsContextDispatcher = React.createContext();

// reducer function and state

// const initialState = [
//   { title: "React.js", price: "$99", id: 1, quantity: 1 },
//   { title: "Node.js", price: "$89", id: 2, quantity: 2 },
//   { title: "JavaScript", price: "$79", id: 3, quantity: 3 },
// ];

const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      product.quantity++;
      const updatedProducts = [...state];
      updatedProducts[index] = product;
      return updatedProducts;
    }
    case "decrement": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      if (product.quantity === 1) {
        const filteredProducts = state.filter((p) => p.id !== action.id);
        return filteredProducts;
      } else {
        const updatedProducts = [...state];
        product.quantity--;
        updatedProducts[index] = product;
        return updatedProducts;
      }
    }
    case "edit": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      product.title = action.event.target.value;
      const updatedProducts = [...state];
      updatedProducts[index] = product;
      return updatedProducts;
    }
    case "remove":
      const filteredProducts = state.filter((p) => p.id !== action.id);
      return filteredProducts;
    case "filter": {
      const value = action.selectedOption.value;
      if (value === " ") {
        return productsData;
      } else {
        const updatedProducts = productsData.filter(
          (p) => p.availableSizes.indexOf(value) >= 0
        );
        return updatedProducts;
      }
    }
    case "sort": {
      const value = action.selectedOption.value;
      const products = [...state];
      if (value === "lowest") {
        return _.orderBy(products, ["price"], ["asc"]);
      } else {
        return _.orderBy(products, ["price"], ["desc"]);
      }
    }
    case "search": {
      const value = action.event.target.value;
      if (value === " ") {
        return productsData;
      } else {
        const SearchedItems = productsData.filter((p) =>
          p.title.toLowerCase().includes(value.toLowerCase())
        );
        return SearchedItems;
      }
    }

    default:
      return state;
  }
};

const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, productsData);

  return (
    // 3-Provide
    <ProductsContext.Provider value={products}>
      <ProductsContextDispatcher.Provider value={dispatch}>
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
  return useContext(ProductsContextDispatcher);
  // const products = useContext(ProductsContext);

  // const removeHandler = (id) => {
  //   const filteredProducts = products.filter((p) => p.id !== id);
  //   setProducts(filteredProducts);
  // };

  // const incrementHandler = (id) => {
  //   const index = products.findIndex((item) => item.id === id);
  //   const product = { ...products[index] };
  //   product.quantity++;
  //   const updatedProducts = [...products];
  //   updatedProducts[index] = product;
  //   setProducts(updatedProducts);
  // };

  // const decrementHandler = (id) => {
  //   const index = products.findIndex((item) => item.id === id);
  //   const product = { ...products[index] };
  //   if (product.quantity === 1) {
  //     const filteredProducts = products.filter((p) => p.id !== id);
  //     setProducts(filteredProducts);
  //   } else {
  //     const updatedProducts = [...products];
  //     product.quantity--;
  //     updatedProducts[index] = product;
  //     setProducts(updatedProducts);
  //   }
  // };

  // const changeHandler = (event, id) => {
  //   const index = products.findIndex((item) => item.id === id);
  //   const product = { ...products[index] };
  //   product.title = event.target.value;
  //   const updatedProducts = [...products];
  //   updatedProducts[index] = product;
  //   setProducts(updatedProducts);
  // };
  // return { removeHandler, incrementHandler, decrementHandler, changeHandler };
};
