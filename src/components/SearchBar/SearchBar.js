import React, { useState } from 'react'
import { ACTIONS } from '../../App'

const SearchBar = ({ dispatch }) => {

    const [search, setSearch] = useState('')

    const onSearchChange = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!search.length) return
        dispatch({ type: ACTIONS.CHANGE_SEARCH_FIELD, payload: { input: search } })
        setSearch('')
      }

    return (
        <article id="searchBarContainer">
            <form onSubmit={handleSubmit}>
                <input id="searchBar" type="text" placeholder="Search..." onChange={onSearchChange}/>
                <button id="submitButton" type="submit">Search</button>
            </form>
        </article>
    )
}

export default SearchBar
