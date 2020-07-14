import React from 'react'

const DisplayMovies = ({ data, searchField }) => {

    console.log(data)

    return (
        <section id="displayMoviesContainer">
            <p>{data ? `Showing ${data.length} result(s) for '${searchField}'` : ""}</p>
            <article id="displayMovies">
                
                {   
                    data ?
                    data.map(datum => {
                        return (
                            <article key={datum.imdbID} className="posterContainer">
                                {
                                    datum.Poster === 'N/A' ?
                                    <p>No Poster Available</p>
                                    :
                                    <figure className="poster">
                                        <img src={datum.Poster} alt={datum.Title} />
                                    </figure>
                                }
                                
                                <p>{datum.Title}</p>
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
