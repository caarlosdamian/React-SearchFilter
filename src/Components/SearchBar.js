import React, { useRef, useState } from "react";
import "../Styles/SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function SearchBar({ placeholder, data }) {
  const [filterData, setFilterData] = useState([]);
  const inputRef = useRef("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newfilter = data.filter((value) => {
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setFilterData([]);
    } else {
      setFilterData(newfilter);
    }
  };
  const clearInput = () => {
    setFilterData([]);
    inputRef.current.value = "";
  };
  return (
    <div className="search">
      <h1 className="searchHeader">The Book Store</h1>
      <div className="searchInputs">
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          onChange={handleFilter}
        ></input>
        <div className="searchIcon">
          {filterData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filterData.length !== 0 && (
        <div className="dataResult">
          {filterData.slice(0, 15).map((value, key) => {
            return (
              <a
                className="dataItem"
                href={value.link}
                target="_blank"
                rel="noopener noreferrer"
                key={key}
              >
                <p>{value.title}</p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
