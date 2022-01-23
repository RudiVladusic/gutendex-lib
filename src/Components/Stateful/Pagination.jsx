import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { fetchBooks } from "../../Redux/Books/bookActions";
import { fetchSearchBooks } from "../../Redux/Search/searchActions";
import {
  homeNextPage,
  homePreviousPage,
  searchNextPage,
  searchPreviousPage,
} from "../../Redux/Pagination/paginationActions";
import { BASE_BOOKS_ENDPOINT } from "../../Endpoints/baseBooksEndpoint";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";

const Pagination = ({ homePage, searchPage }) => {
  const dispatch = useDispatch();
  const searchString = useSelector((state) => state.search.searchTerm);
  const homePageCount = useSelector(
    (state) => state.pagination.homeComponentPage
  );
  const searchPageCount = useSelector(
    (state) => state.pagination.searchComponentPage
  );

  const isWithTopic = useSelector((state) => state.search.withTopic);
  const homeComponentApiString = `${BASE_BOOKS_ENDPOINT}?page=${homePageCount}`;
  const searchComponentApiString = `${BASE_BOOKS_ENDPOINT}?search=${searchString}&page=${searchPageCount}`;
  const searchComponentWithTopicString = `${BASE_BOOKS_ENDPOINT}?topic=${searchString}&page=${searchPageCount}`;

  const didMount = useRef(false);

  useEffect(() => {
    if (homePage) {
      dispatch(fetchBooks(homeComponentApiString));
    }
    //  eslint-disable-next-line
  }, [homePageCount]);

  useEffect(() => {
    if (searchPage && isWithTopic && didMount.current) {
      dispatch(
        fetchSearchBooks(searchComponentWithTopicString, searchString, true)
      );
    } else if (searchPage && !isWithTopic && didMount.current) {
      dispatch(fetchSearchBooks(searchComponentApiString, searchString, false));
    } else {
      didMount.current = true;
    }

    // eslint-disable-next-line
  }, [searchPageCount]);

  const handlePageChange = (operator) => {
    switch (operator) {
      case "homePageNext":
        dispatch(homeNextPage());
        break;
      case "homePagePrevious":
        if (homePageCount <= 1) {
          break;
        } else {
          dispatch(homePreviousPage());
        }
        break;
      case "searchPageNext":
        dispatch(searchNextPage());
        break;

      case "searchPagePrevious":
        if (searchPageCount <= 1) {
          break;
        } else {
          dispatch(searchPreviousPage());
        }
        break;
      default:
        dispatch(homeNextPage());
    }
  };

  return (
    <div className="pagination">
      <div className="pagination__controls">
        <button
          onClick={() => {
            homePage && handlePageChange("homePagePrevious");
            searchPage && handlePageChange("searchPagePrevious");
          }}
        >
          <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Previous page
        </button>

        <button
          onClick={() => {
            homePage && handlePageChange("homePageNext");
            searchPage && handlePageChange("searchPageNext");
          }}
        >
          next page <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </button>
      </div>
      <div className="pagination__info">
        {homePage && <p>Displaying: page {homePageCount}</p>}
        {searchPage && <p>Displaying: page {searchPageCount}</p>}
      </div>
    </div>
  );
};

export default Pagination;
