import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../../Redux/Books/bookActions";

const SearchComponent = () => {
  const [searchString, setSearchString] = useState("");
  const apiString = `https://gutendex.com/books/?search=${searchString}`;
  const dispatch = useDispatch();
  return (
    <div className="search-form-wrapper">
      <form
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(fetchBooks(apiString));
        }}
      >
        <input onChange={(e) => setSearchString(e.target.value)} type="text" />
      </form>
    </div>
  );
};

export default SearchComponent;
