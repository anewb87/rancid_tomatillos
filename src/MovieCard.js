import React, { Component } from 'react';
// import './MovieCard.css'

const MovieCard = ({id, title, rating, poster}) => {
    return (
        <section id={id}>
            <img src={poster} alt={title} />
            <p>{title}</p>
            <p>{rating}</p>
        </section>
    )
}

export default MovieCard;