// import React, {useState,  useEffect } from 'react';
// import Api from '../Api';

// const FilmList = () =>{
//     const [films, setFilms] = useState([]);
//     const [isMounted, setIsMounted] = useState(false);

//     useEffect(() =>{
//         !isMounted &&
//        Api.getFilm().then((json)=>{
//             setFilms(json);
//             setIsMounted(true);
//         });
//     },[isMounted]);

//     return(        
//         <ul>
//             {films && films.map((film,index)=>{
//                 return(
//                     <li key={index}>
//                         {film.titre}
//                     </li>
//                 );
//             })}
//         </ul>
//     );
// }
//export default FilmList;

import React from 'react';

import axios from 'axios';

export default class FilmList extends React.Component {
  state = {
    films: []
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/Films`)
      .then(res => {
        const films = res.data;
        this.setState({ films });
      })
  }

  render() {
    return (
      <ul>
        { this.state.films.map(film => <li>{film.titre}</li>)}
      </ul>
    )
  }
}