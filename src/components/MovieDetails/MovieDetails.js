import React from 'react'
import { ACTIONS } from '../../App'

const MovieDetails = ({ movieDetails, dispatch }) => {

    // When data becomes available, split actor string into an array, 
    const actors = !movieDetails ? [] : movieDetails.Actors.split(', ')

    return (
        <section>
            {
                !movieDetails ?
                <h1>No movie details found</h1>
                :
                <article id="movieDetailsContainer">
                    <article id="movieDetails">
                        <article id="movieDetailsPoster">
                            <h1>{movieDetails.Title}</h1>
                            <figure>
                                <img src={movieDetails.Poster} alt={movieDetails.Title}/>
                            </figure>
                            <article id="ratingsContainer">
                                {
                                    movieDetails.Ratings.map((rating, i) => {
                                        return (
                                            <div key={i} className="rating">
                                                <p>{rating.Source}</p>
                                                <p>{rating.Value}</p>
                                            </div>
                                        )
                                    })
                                }
                            </article>
                        </article>
                        <article id="plotAndOtherDetailsContainer">
                            <div id="arrowContainer" onClick={() => dispatch({ type: ACTIONS.CHANGE_ROUTE, payload: { route: 'home' } })}>
                                <div id="arrow"></div>
                                <p>Back</p>
                            </div>
                            <article id="plotAndOtherDetails">
                                <article id="actorsContainer">
                                    <h2>Actors</h2>
                                    <article id="actors" className="divided">
                                        {
                                            actors.map((actor, i) => {
                                                return <p key={i}>{actor}</p>
                                            }) 
                                        }
                                    </article>
                                </article>
                                <article id="plot">
                                    <h2>Summary</h2>
                                    <p>{movieDetails.Plot}</p>
                                </article>
                                <article id="smallDetailsContainer">
                                    <h2>Other Details</h2>
                                    <article id="smallDetails" className="divided">
                                        <p>{`Released: ${movieDetails.Released}`}</p>
                                        <p>{`Runtime: ${movieDetails.Runtime}`}</p>
                                        <p>{`Genre: ${movieDetails.Genre}`}</p>
                                        <p>{`Director: ${movieDetails.Director}`}</p>
                                    </article>
                                </article>
                            </article>
                        </article>
                    </article>
                </article>
            }
        </section>
    )
}

export default MovieDetails
