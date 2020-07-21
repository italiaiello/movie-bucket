import { useState, useEffect } from 'react'

export const useMovieDetailsFetch = (movieId) => {

    const [isLoading, setIsLoading] = useState(false)
    const [movieDetails, setMovieDetails] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!movieId) return
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?i=${movieId}&r=json`, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
                        "x-rapidapi-key": "YOUR_API_KEY_HERE"
                    }
                })
                const json = await response.json()
                setMovieDetails(json)
            } catch(error) {
                setError(error)
            }
            setIsLoading(false)
        }
        fetchData()
    }, [movieId])

    return { isLoading, movieDetails, error }
}

