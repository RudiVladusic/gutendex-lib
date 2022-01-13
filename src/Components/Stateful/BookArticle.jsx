import React from "react";
import { useState, useEffect } from "react";
import Loading from "../Presentational/Loading";

const BookArticle = ({ books }) => {
  const { title, authors, formats } = books;
  const authorName = authors.map((name) => name.name);

  const [imageLoading, setImageLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setImageLoading(false), 5000);
  }, []);

  return (
    <article className="books-container__article">
      <h3>{title.length > 25 ? `${title.slice(0, 25)}...` : title}</h3>
      <h4>{authorName}</h4>
      {imageLoading ? <Loading /> : <img src={formats["image/jpeg"]} alt="" />}
    </article>
  );
};

export default BookArticle;
