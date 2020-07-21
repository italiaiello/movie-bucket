import React, { useReducer } from 'react';
import { useDataFetch } from './hooks/useDataFetch';
import SearchBar from './components/SearchBar/SearchBar'
import DisplayMovies from './components/DisplayMovies/DisplayMovies'
import MovieDetailsContainer from './components/MovieDetailsContainer/MovieDetailsContainer'

import './App.css';

export const ACTIONS = {
  CHANGE_SEARCH_FIELD: 'searchField',
  CHANGE_ROUTE: 'changeRoute',
  SET_MOVIE_ID: 'setMovieId'
}

const reducer = (state, action) => {
  console.log(state, action)
  switch(action.type) {
    case ACTIONS.CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload.input }
    case ACTIONS.CHANGE_ROUTE:
      return { ...state, route: action.payload.route }
    case ACTIONS.SET_MOVIE_ID:
      return { ...state, movieId: action.payload.id }
    default:
      return state
  }
}

const App = () => {

  const [state, dispatch] = useReducer(reducer, { searchField: '', route: 'home', movieId: '' })
  const { isLoading, data, error } = useDataFetch(state.searchField)

  if (error) return <>Network error</>

  return (
    <div className="App">
      {
          isLoading ?
          <h1>Loading movies...</h1>
          :
          (
            state.route === 'home' ?
            <article>
              <h1>Movie Bucket</h1>
              <SearchBar dispatch={dispatch} />
              <DisplayMovies data={data} searchField={state.searchField} dispatch={dispatch}/>
            </article>
            :
            (
              state.route === 'details' &&
              <MovieDetailsContainer movieId={state.movieId} dispatch={dispatch}/>
            )

          )
          
        
      }
      
    </div>
  );
}

export default App;
