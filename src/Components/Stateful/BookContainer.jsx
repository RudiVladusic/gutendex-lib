import BookArticle from "./BookArticle";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../Redux/Books/bookActions";
import { useEffect } from "react";
import Loading from "../Presentational/Loading";
import React from "react";
import {
  nextPage,
  previousPage,
} from "../../Redux/Pagination/paginationActions";
import ErrorModal from "../Presentational/ErrorModal";

const BookContainer = React.memo(() => {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.book.books);
  const error = useSelector((state) => state.book.error);
  const loading = useSelector((state) => state.book.loading);
  const page = useSelector((state) => state.pagination.page);

  const apiString = `https://gutendex.com/books/?page=${page}`;
  useEffect(() => {
    dispatch(fetchBooks(apiString));
    //  eslint-disable-next-line
  }, [page]);

  const handlePageChange = (operator) => {
    switch (operator) {
      case "next":
        dispatch(nextPage());
        break;
      case "previous":
        if (page <= 1) {
          break;
        } else {
          dispatch(previousPage());
        }
        break;
      default:
        dispatch(nextPage());
    }
  };

  return (
    <main className="main-content">
      <div className="pagination">
        <div className="pagination__controls">
          <button
            onClick={() => {
              handlePageChange("previous");
            }}
          >
            Previous page
          </button>

          <button
            onClick={() => {
              handlePageChange("next");
            }}
          >
            next page
          </button>
        </div>
        <div className="pagination__info">
          <p>Displaying: page {page}</p>
        </div>
      </div>

      <section className="books-container">
        {loading ? (
          <Loading />
        ) : error ? (
          <ErrorModal errorMessage={`Not found`} />
        ) : (
          bookList.map((books) => {
            return <BookArticle books={books} key={books.id} />;
          })
        )}
      </section>
    </main>
  );
});

export default BookContainer;
