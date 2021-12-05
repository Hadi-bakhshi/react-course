import "./App.css";
import ProductList from "./Components/ProductList/ProductList";
import NavBar from "./Components/NavBar/NavBar";
import Wrapper from "./Components/hoc/Wrapper";
import ProductsProvider from "./Components/Providers/ProductsProvider";
import Filter from "./Components/Filter/Filter";
import Search from "./common/Search/Search";

const App = () => {
  return (
    <>
      <ProductsProvider>
        <NavBar />
        <Search/>
        <Filter/>
        <ProductList />
      </ProductsProvider>
    </>
  );
};

export default Wrapper(App, "container");
