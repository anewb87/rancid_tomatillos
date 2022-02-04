import React, { Component } from 'react';
import MovieCard from './MovieCard';
// import './AllMovies.css';

const AllMovies = ({movies}) => {

    const allMoviesList = movies.map((movie) => {
        return (
            <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                rating={movie.average_rating}
                releaseDate={movie.release_date}
                poster={movie.poster_path}
                backdrop={movie.backdrop_path}
            />
        )
    })
    return (
        <div>
            {allMoviesList}
        </div>
    )
    
}


export default AllMovies;