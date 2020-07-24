import React from 'react'
import MovieDetails from '../MovieDetails/MovieDetails'

import { useMovieDetailsFetch } from '../../hooks/useMovieDetailsFetch'

const MovieDetailsContainer = ({ movieId, dispatch }) => {

    const { isLoading, movieDetails, error } = useMovieDetailsFetch(movieId)

    if (error) return <>Network Error</>

    return (
        <section id="movieDetailsContainer">
            {
                isLoading ?
                <h1 className="loadingMessage">Loading movie details...</h1>
                :
                <MovieDetails movieDetails={movieDetails} dispatch={dispatch} />
            }
            
        </section>
    )
}

export default MovieDetailsContainer
