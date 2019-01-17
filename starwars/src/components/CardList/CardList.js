import React from 'react';
import Card from './../Card/Card';

const CardList = ({ movies }) => {
    return (
        <div className="container">
         <div className="row" > {
             
        movies.map((user, i) => {
            return ( <
                Card key = { i }
                id = { movies[i].id }
               
                title = { movies[i].title }
                release_date = { movies[i].release_date }
                director = { movies[i].director }
                opening_crawl = { movies[i].opening_crawl }
                />
            );
            
        })
        
    } </div></div>);
}
export default CardList;
