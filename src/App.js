import React from 'react';
import { useDataFetch } from './hooks/useDataFetch';
import './App.css';

function App() {

  const { isLoading, data, error } = useDataFetch('')
  console.log(data)

  if (!data) return <>No data</>

  if (error) return <>Network error</>



  return (
    <div className="App">
      {
        isLoading ?
        <h1>Loading movies...</h1>
        :
        <h1>Movie Bucket</h1>
      }
      
    </div>
  );
}

export default App;
