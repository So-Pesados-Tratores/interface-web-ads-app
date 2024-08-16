import { useState } from "react";
import "./searchbar.css";

const SearchBar = ({ products, setFilterList }) => {
  const [searchWord, setSearchWord] = useState("");

  const handelChange = (input) => {
    const value = input.target.value;
    setSearchWord(value);
    setFilterList(
      products.filter((item) =>
        item.name?.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={searchWord}
        onChange={handelChange}
      />
      <ion-icon name="search-outline" className="search-icon"></ion-icon>
    </div>
  );
};

export default SearchBar;
