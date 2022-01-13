import BookArticle from "./BookArticle";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../Redux/Books/bookActions";
import { useEffect } from "react";
import Loading from "../Presentational/Loading";
import {
  nextPage,
  previousPage,
} from "../../Redux/Pagination/paginationActions";
const BookContainer = () => {
  const dispatch = useDispatch();
  const bookList = useSelector((state) => state.book.books);
  const error = useSelector((state) => state.book.error);
  const loading = useSelector((state) => state.book.loading);
  const page = useSelector((state) => state.pagination.page);

  const apiString = `https://gutendex.com/books/?page=${page}`;
  useEffect(() => {
    // setTimeout(() => {
    //   dispatch(fetchBooks(apiString));
    // }, 2000);
    dispatch(fetchBooks(apiString));
    //  eslint-disable-next-line
  }, [page]);

  if (error) {
    return <h2>{error}</h2>;
  }

  const handlePageChange = (operator) => {
    switch (operator) {
      case "next":
        dispatch(nextPage());
        break;
      case "previous":
        if (page <= 2) {
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
        ) : (
          bookList.map((books) => {
            return <BookArticle books={books} key={books.id} />;
          })
        )}
      </section>
    </main>
  );
};

export default BookContainer;
