import BookArticle from "./BookArticle";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../../Redux/Books/bookActions";
import { useEffect } from "react";
import BookPageInput from "./BookPageInput";
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

  if (loading) {
    return <Loading />;
  }

  const handlePageChange = (operator) => {
    switch (operator) {
      case "next":
        dispatch(nextPage());
        break;
      case "previous":
        // if (page <= 2) {
        //   setPage(1);
        // } else {
        dispatch(previousPage());
        // }
        break;
      default:
        dispatch(nextPage());
    }
  };

  return (
    <>
      <BookPageInput />
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
      {/* <h2>Page {page}</h2> */}
      <section className="books-container">
        {bookList &&
          bookList.map((books) => {
            return <BookArticle books={books} key={books.id} />;
          })}
      </section>
    </>
  );
};

export default BookContainer;
