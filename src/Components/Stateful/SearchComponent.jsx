import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { paginationReset } from "../../Redux/Pagination/paginationActions";
import { fetchSearchBooks } from "../../Redux/Search/searchActions";

const SearchComponent = () => {
  const [searchString, setSearchString] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const apiString = `https://gutendex.com/books/?search=${searchString}`;
  const apiStringTopic = `https://gutendex.com/books/?topic=${searchString}`;
  const [showSearchForm, setShowSearchForm] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="search-form-wrapper">
      <div
        className="search-trigger"
        onClick={() => {
          setShowSearchForm(!showSearchForm);
        }}
      >
        Trigger
      </div>

      <form
        className={showSearchForm ? `search-form open-form` : `search-form`}
        onSubmit={(e) => {
          e.preventDefault();
          navigate("/search");
          setShowSearchForm(!showSearchForm);
          dispatch(paginationReset());
          if (isChecked) {
            dispatch(fetchSearchBooks(apiStringTopic, searchString, true));
          } else {
            dispatch(fetchSearchBooks(apiString, searchString, false));
          }
        }}
      >
        <div className="form-group-search">
          <input
            onChange={(e) => setSearchString(e.target.value)}
            type="text"
            value={searchString}
            placeholder="Search"
          />
          <div className="checkbox-topic-container">
            <label htmlFor="topic">By topic</label>
            <input
              type="checkbox"
              name="search-topic"
              id="search-topic"
              disabled={searchString.length === 0 ? true : false}
              onClick={(e) => {
                setIsChecked(e.target.checked);
              }}
              value={isChecked}
            />
          </div>
        </div>
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchComponent;
