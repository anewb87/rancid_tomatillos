import React, { Component } from 'react';

const AllMovies = ({movies}) => {

    const allMoviesList = movies.map((movie) => {
        return (
            <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.tite}
                rating={movie.average_rating}
                releaseDate={movie.release_date}
                poster={movie.poster_path}
                backdrop={movie.backdrop_path}
        )
    })
}


export default AllMovies