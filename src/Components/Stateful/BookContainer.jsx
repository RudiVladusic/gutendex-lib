import BookArticle from "./BookArticle";
import { useSelector } from "react-redux";
import Loading from "../Presentational/Loading";
import React from "react";
import Pagination from "./Pagination";

const BookContainer = React.memo(() => {
  const bookList = useSelector((state) => state.book.books);
  const loading = useSelector((state) => state.book.loading);

  return (
    <main className="main-content">
      <Pagination homePage={true} />
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
});

export default BookContainer;
