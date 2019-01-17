import React from "react";
import Card from "./../Card/Card";

const CardList = ({ movies }) => {
  return (
    <div className="container">
      <div className="row">
        {" "}
        {movies.map((movie, i) => {
          return (
            <Card
              key={i}
              id={i}
              title={movie.title}
              release_date={movie.release_date}
              director={movie.director}
              opening_crawl={movie.opening_crawl}
            />
          );
        })}{" "}
      </div>
    </div>
  );
};
export default CardList;
