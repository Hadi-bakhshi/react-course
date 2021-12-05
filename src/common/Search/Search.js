import { useState } from "react";
import styles from "./search.module.css";
import { FcSearch } from "react-icons/fc";
import { useProductsAction } from "../../Components/Providers/ProductsProvider";

const Search = () => {
  const dispatch = useProductsAction();
  const [value, setValue] = useState("");

  const changeHandle = (e) => {
    dispatch({ type: "search", event: e });
    setValue(e.target.value);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search for ..."
        onChange={changeHandle}
        value={value}
      />
      <FcSearch className={styles.searchIcon} />
    </div>
  );
};

export default Search;
