import React from 'react'
import { ACTIONS } from '../../App'

const DisplayMovies = ({ data, searchField, dispatch }) => {

    const onMovieClick = (currentId) => {
        dispatch({ type: ACTIONS.SET_MOVIE_ID, payload: { id: data[currentId].imdbID } })
        dispatch({ type: ACTIONS.CHANGE_ROUTE, payload: { route: 'details' } })
    }

    return (
        <section id="displayMoviesContainer">
            <p>{data ? `Showing ${data.length} result(s) for '${searchField}'` : ""}</p>
            <article id="displayMovies">
                
                {   
                    data ?
                    data.map((datum, i) => {
                        return (
                            <article    key={datum.imdbID} 
                                        className={datum.Poster === 'N/A' ? 'posterContainer noPoster contentHover' : 'posterContainer contentHover'}
                                        onClick={() => onMovieClick(i)}
                            >
                                {
                                    datum.Poster === 'N/A' ?
                                    <p data-id={i} className="noPosterText">No Poster Available</p>
                                    :
                                    <figure data-id={i} className="poster">
                                        <img src={datum.Poster} alt={datum.Title} />
                                    </figure>
                                }
                                <div className="movieTitleContainer">
                                    <p className="movieTitle">{datum.Title}</p>
                                </div>
                            </article>
                        )
                    })
                    :
                    <p>{searchField.length && !data ? `No results for '${searchField}'` : 'Search using a word(s)'}</p>
                }
            </article>
        </section>
    )
}

export default DisplayMovies
