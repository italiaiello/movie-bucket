import React, { useReducer } from 'react';
import { useDataFetch } from './hooks/useDataFetch';
import SearchBar from './SearchBar/SearchBar'
import DisplayMovies from './DisplayMovies/DisplayMovies'

import './App.css';

export const ACTIONS = {
  CHANGE_SEARCH_FIELD: 'searchField',
  CHANGE_ROUTE: 'changeRoute'
}

const reducer = (state, action) => {
  console.log(state, action)
  switch(action.type) {
    case ACTIONS.CHANGE_SEARCH_FIELD:
      return { searchField: action.payload.input }
    case ACTIONS.CHANGE_ROUTE:
      return { route: action.payload.route }
    default:
      return state
  }
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, { searchField: '', route: 'home' })
  const { isLoading, data, error } = useDataFetch(state.searchField)

  console.log(state)

  if (error) return <>Network error</>

  return (
    <div className="App">
      {
          isLoading ?
          <h1>Loading movies...</h1>
          :
          <article>
            <h1>Movie Bucket</h1>
            <SearchBar dispatch={dispatch} />
            <DisplayMovies data={data} searchField={state.searchField} />
          </article>
        
      }
      
    </div>
  );
}

export default App;
