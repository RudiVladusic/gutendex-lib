import React from "react";
import { useState, useEffect } from "react";
import Loading from "../Presentational/Loading";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFromFavorites } from "../../Redux/User/userActions";

const BookArticle = ({ books, removeButton }) => {
  const { title, authors, formats, id } = books;
  const authorName = authors.map((name) => name.name);
  const dispatch = useDispatch();
  const [imageLoading, setImageLoading] = useState(true);
  useEffect(() => {
    const imageLoader = setTimeout(() => setImageLoading(false), 5000);
    return () => clearTimeout(imageLoader);
  }, []);

  return (
    <article className="books-container__article">
      <h3>{title.length > 25 ? `${title.slice(0, 25)}...` : title}</h3>
      <h4>{authorName}</h4>
      {imageLoading ? (
        <Loading />
      ) : (
        <img src={formats["image/jpeg"]} alt="book cover" />
      )}
      <div className="books-container__article--details">
        <Link to={`/books/${id}`} className="btn-default">
          Details
        </Link>
        <a
          className="btn-default"
          href={formats["text/html"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read online
        </a>
      </div>
      {removeButton && (
        <div
          className="books-container__article--remove-from-favs"
          onClick={() => {
            return dispatch(removeFromFavorites(books));
          }}
        >
          Remove from favs
        </div>
      )}
    </article>
  );
};

export default BookArticle;
