import React from 'react';
import './MovieCard.scss'

const MovieCard = ({id, title, rating, poster}) => {
    return (
        <section id={id} className='card'>
            <img className='card-image' src={poster} alt={title} />
            <p>{title}</p>
            <p>{rating.toFixed(1)}</p>
        </section>
    )
}

export default MovieCard;