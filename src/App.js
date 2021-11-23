import "./App.css";
import ProductList from "./Components/ProductList/ProductList";
import NavBar from "./Components/NavBar/NavBar";
import Wrapper from "./Components/hoc/Wrapper";
import ProductsProvider from "./Components/Providers/ProductsProvider";
import Filter from "./Components/Filter/Filter";

const App = () => {
  return (
    <>
      <ProductsProvider>
        <NavBar />
        <Filter/>
        <ProductList />
      </ProductsProvider>
    </>
  );
};

export default Wrapper(App, "container");
