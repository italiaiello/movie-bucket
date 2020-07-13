import { useState, useEffect } from 'react'

export const useDataFetch = (movieSearched) => {

    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?page=1&r=json&s=${movieSearched}`, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
                        "x-rapidapi-key": "YOUR_API_KEY_HERE"
                    }
                })
                const json = await response.json()
                setData(json.Search)
            } catch(error) {
                setError(error)
            }
            setIsLoading(false)
        }
        fetchData()
    }, [movieSearched])

    return { isLoading, data, error }
}