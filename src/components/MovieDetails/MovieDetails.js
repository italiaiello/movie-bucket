import React from 'react'

const MovieDetails = ({ movieDetails }) => {

    return (
        <section id="movieDetailsContainer">
            {
                !movieDetails ?
                <h1>No movie details found</h1>
                :
                <article id="movieDetails">
                    <h1>{movieDetails.Title}</h1>
                    <article id="movieDetailsPoster">
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
                    <article id="plot">
                        <p>{movieDetails.Plot}</p>
                    </article>
                    <article id="smallDetails">
                        <p>{`Released: ${movieDetails.Released}`}</p>
                        <p>{`Runtime: ${movieDetails.Runtime}`}</p>
                        <p>{`Genre: ${movieDetails.Genre}`}</p>
                        <p>{`Director: ${movieDetails.Director}`}</p>

                    </article>
                </article>
            }
        </section>
    )
}

export default MovieDetails
