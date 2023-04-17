// // Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// // like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// // of the page.

// import React, {useEffect} from 'react'
// import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types'


// const global = {
//   apiKey: '81d8e294631eb763043051e297c1fb2d',
//   apiUrl: 'https://api.themoviedb.org/3/',
// }

//   const displayPopularMovies = async () => {
//     const { results } = await fetchApiData('movie/popular')
//     console.log(results)
//   }

//   const fetchApiData = async (url) =>  {
//     const response = await fetch(`${global.apiUrl}${url}&api_key=${global.apiKey}$language=en-US`)
//     const data = await response.json()
//     return data
//   }

//   useEffect(() => {
//     displayPopularMovies()
//   }, [])

// const Hello = props => (
//   <div>Hello {props.name}!</div>
// )

// Hello.defaultProps = {
//   name: 'David'
// }

// Hello.propTypes = {
//   name: PropTypes.string
// }


// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     <Hello name="React" />,
//     document.body.appendChild(document.createElement('div')),
//   )
// })
