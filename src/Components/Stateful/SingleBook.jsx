import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Loading from "../Presentational/Loading";
import { fetchSingleBook } from "../../Redux/SingleBook/singleBookActions";

const SingleBook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const apiString = `https://gutendex.com/books/?ids=${id}`;

  useEffect(() => {
    dispatch(fetchSingleBook(apiString));
    //eslint-disable-next-line
  }, []);
  const singleBookInfo =
    useSelector((state) =>
      state.singleBook.singleBookInfo.find((info) => info.id === Number(id))
    ) || [];
  console.log(singleBookInfo);

  const { title, languages, download_count, subjects, authors, formats } =
    singleBookInfo;

  const AuthorInfo = () => {
    return authors ? (
      <div className="book-info__author-info">
        {authors.map((info) => {
          const { name, birth_year, death_year } = info;
          return (
            <h3 key={name}>
              Author: {name}{" "}
              <span>{`${birth_year} - ${death_year} (age ${
                death_year - birth_year
              })`}</span>
            </h3>
          );
        })}
      </div>
    ) : (
      <Loading />
    );
  };

  const LanguagesInfo = () => {
    return languages ? (
      <div className="book-info__languages">
        {languages.map((lang) => {
          return <p key={lang}>Languages: {lang}</p>;
        })}
      </div>
    ) : (
      <Loading />
    );
  };

  const SubjectsInfo = () => {
    return subjects ? (
      <div className="book-info__subjects">
        <span className="book-info__subjects--title">Subjects:</span>
        {subjects.map((subj) => {
          return <span key={subj}>{subj}</span>;
        })}
      </div>
    ) : (
      <Loading />
    );
  };

  return (
    <main>
      <article className="book-info">
        <div className="book-info__wrapper">
          {formats ? (
            <img
              className="book-info__image"
              src={formats["image/jpeg"]}
              alt=""
            />
          ) : (
            <Loading />
          )}

          <aside>
            <div className="book-info__title">
              <h2>{title && title}</h2>
            </div>
            <LanguagesInfo />
            <AuthorInfo />
            <SubjectsInfo />
            <div className="book-info__download-count">
              <p>Downloads: {download_count && download_count}</p>
            </div>
            <div className="book-info__read-online">
              {formats && <a href={formats["text/html"]}>Read online</a>}
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
};

export default SingleBook;
