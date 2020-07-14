import React from 'react'

export default function DisplayMovies({ data }) {
    return (
        <div>
            {
                data.map(datum => {
                    return (
                        <article key={datum.imdbID} className="posterContainer">
                            <figure className="poster">
                                <img src={datum.Poster} alt={datum.Title} />
                            </figure>
                            <p>{datum.Title}</p>
                        </article>
                    )
                })
            }
        </div>
    )
}
