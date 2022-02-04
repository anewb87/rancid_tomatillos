import React from 'react';
import MovieCard from '../MovieCard/MovieCard';
import './AllMovies.scss';

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
        <div className='all-movies'>
            {allMoviesList}
        </div>
    )
    
}


export default AllMovies;