import { useSelector } from "react-redux";
import ErrorModal from "../Presentational/ErrorModal";
import Loading from "../Presentational/Loading";
import BookArticle from "./BookArticle";

const SearchResults = () => {
  const searchResults = useSelector((state) => state.search.searchResults);
  const isError = useSelector((state) => state.search.error);
  const isLoading = useSelector((state) => state.search.loading);
  return (
    <main className="main-content">
      <div className="books-container">
        {isLoading ? (
          <Loading />
        ) : isError ? (
          <ErrorModal errorMessage={`No results for your query 😔`} />
        ) : (
          searchResults.map((results) => {
            return <BookArticle books={results} key={results.id} />;
          })
        )}
      </div>
    </main>
  );
};

export default SearchResults;
