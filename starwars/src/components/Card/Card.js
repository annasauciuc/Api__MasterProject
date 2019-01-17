import React from "react";
const Card = props => {
  const { title, director, release_date, opening_crawl, id } = props;
  return (
    <div className="col-lg-4 mb-4">
      <div className="card">
        <div className="card-body">
          <a href="https://en.wikipedia.org/wiki/Cat" target="_blank">
            {" "}
            <img
              alt="image of a beautiful cat"
              src={`https://loremflickr.com/320/240?random=${id}`}
            />
          </a>
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{director}</p>
          <p className="card-text">{release_date}</p>
          <p className="card-text">{opening_crawl}</p>
          <a
            href="https://en.wikipedia.org/wiki/The_Good_Doctor_(TV_series)"
            className="btn btn-outline-success btn-sm"
          >
            See more{" "}
          </a>
          <a href="" className="btn btn-outline-danger btn-sm">
            <i className="far fa-heart" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Card;
