import { useSelector } from "react-redux";
import ErrorModal from "../Presentational/ErrorModal";
import BookArticle from "./BookArticle";

const Favorites = () => {
  const userFavorites = useSelector((state) => state.user.favorites);

  return (
    <main className="main-content">
      <section className="books-container favorites-container">
        {userFavorites.length === 0 && (
          <ErrorModal errorMessage={`You have no favorites yet!`} />
        )}
        {userFavorites &&
          userFavorites.map((books) => {
            return (
              <BookArticle key={books.id} books={books} removeButton={true} />
            );
          })}
      </section>
    </main>
  );
};

export default Favorites;
