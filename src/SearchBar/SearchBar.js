import React, { useState } from 'react'
import { ACTIONS } from '../App'

const SearchBar = ({ dispatch }) => {

    const [search, setSearch] = useState('')

    const onSearchChange = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: ACTIONS.CHANGE_SEARCH_FIELD, payload: { input: search } })
        setSearch('')
      }

    return (
        <article>
            <form onSubmit={handleSubmit}>
                <input id="searchBar" type="text" placeholder="Search..." onChange={onSearchChange}/>
                <button type="submit">Search</button>
            </form>
        </article>
    )
}

export default SearchBar
