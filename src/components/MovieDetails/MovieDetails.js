import React from 'react'

const MovieDetails = ({ movieDetails }) => {

    console.log(movieDetails)

    return (
        <article id="movieDetails">
            {
                !movieDetails ?
                <h1>No movie details found</h1>
                :
                <h1>{movieDetails.Title}</h1>
            }
        </article>
    )
}

export default MovieDetails
