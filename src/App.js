import React, { useEffect, useState} from 'react';
import './App.css';
import Movie from './components/movie/movie'

function App() {
  const [items, setItems] = useState([]);
      
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=ec8f1fa5fa44c55bd1269601d973b3fa")
      .then(res => res.json())
      .then(
        (result) => {
          setItems(result.results);
          console.log(result.results)
        }
      )
  },[])
  return (
    <>
    <Movie 
    items={items}
    />
    </>
  );
}

export default App;
