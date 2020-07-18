import React from 'react'
import MovieDetails from '../MovieDetails/MovieDetails'

import { useMovieDetailsFetch } from '../../hooks/useMovieDetailsFetch'

const MovieDetailsContainer = ({ movieId }) => {

    console.log(movieId)

    const { isLoading, movieDetails, error } = useMovieDetailsFetch(movieId)

    if (error) return <>Network Error</>

    return (
        <section id="movieDetailsContainer">
            {
                isLoading ?
                <h1>Loading movie details...</h1>
                :
                <MovieDetails movieDetails={movieDetails} />
            }
            
        </section>
    )
}

export default MovieDetailsContainer
