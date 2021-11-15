import "./App.css";
import ProductList from "./Components/ProductList/ProductList";
import NavBar from "./Components/NavBar/NavBar";
import Wrapper from "./Components/hoc/Wrapper";
import ProductsProvider from "./Components/Providers/ProductsProvider";

const App = () => {
  return (
    <>
      <ProductsProvider>
        <NavBar />
        <ProductList />
      </ProductsProvider>
    </>
  );
};

export default Wrapper(App, "container");
