import React, {useState, useEffect} from 'react';



const Movies = () => {

    const [movies, setMovies] = useState([])

    const global = {
     apiKey: '81d8e294631eb763043051e297c1fb2d',
     apiUrl: 'https://api.themoviedb.org/3/',
    }


  const displayPopularMovies = async () => {
    const { results } = await fetchApiData('movie/popular')
    console.log(results)
   const div = document.createElement('div')
    div.innerHTML = results.map((movie) => {
        return `
        <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}"/>
        <p>${movie.title}</p>`

    })
    document.getElementById("movies").appendChild(div)
    


  }

  const fetchApiData = async (url) =>  {
    const response = await fetch(`${global.apiUrl}${url}?api_key=${global.apiKey}&language=en-US`)
    const data = await response.json()
    return data
  }

  useEffect(() => {
    displayPopularMovies()
  }, []);



}

export default Movies
