import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { paginationReset } from "../../Redux/Pagination/paginationActions";
import { fetchSearchBooks } from "../../Redux/Search/searchActions";
import { BASE_BOOKS_ENDPOINT } from "../../Endpoints/baseBooksEndpoint";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchComponent = () => {
  const [searchString, setSearchString] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const apiString = `${BASE_BOOKS_ENDPOINT}?search=${searchString}&page=1`;
  const apiStringTopic = `${BASE_BOOKS_ENDPOINT}?topic=${searchString}&page=1`;
  const [showSearchForm, setShowSearchForm] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearchFunction = (e) => {
    e.preventDefault();
    navigate("/search");
    setShowSearchForm(!showSearchForm);
    dispatch(paginationReset());
    if (isChecked) {
      dispatch(fetchSearchBooks(apiStringTopic, searchString, true));
    } else {
      dispatch(fetchSearchBooks(apiString, searchString, false));
    }
  };

  return (
    <div className="search-form-wrapper">
      <div
        className="search-trigger"
        onClick={() => {
          setShowSearchForm(!showSearchForm);
        }}
      >
        search <FontAwesomeIcon icon={faSearch} />
      </div>

      <form
        className={showSearchForm ? `search-form open-form` : `search-form`}
        onSubmit={(e) => {
          handleSearchFunction(e);
        }}
      >
        <div className="form-group-search">
          <input
            onChange={(e) => setSearchString(e.target.value)}
            type="text"
            value={searchString}
            placeholder="Search for books..."
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

        <button className="btn-default search-btn">Search</button>
      </form>
    </div>
  );
};

export default SearchComponent;
