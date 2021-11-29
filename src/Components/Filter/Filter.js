import { useState } from "react";
import { useProductsAction } from "../Providers/ProductsProvider";
import Select from 'react-select';
import style from "./Filter.module.css"

const options = [
  {value:" ", label:"All"},
  {value:"XS", label:"XS"},
  {value:"S", label:"S"},
  {value:"M", label:"M"},
  {value:"L", label:"L"},
  {value:"XL", label:"XL"},
  {value:"XXL", label:"XXL"},

]

const Filter = () => {
  const dispatch = useProductsAction();
  const [value, setValue] = useState(" ");

  const changeHandler = (selectedOption) => {
    dispatch({ type: "filter", selectedOption });
    setValue(selectedOption);
  };

  return (
    <div className={style.filter}>
      <p>Filter Products based on:</p>
      <div className={style.filterContainer}>
       <span> Size:</span>
        <Select
        value={value}
        onChange={changeHandler}
        options={options}
        className={style.select}
      />
      </div>
    </div>
  );
};

export default Filter;
