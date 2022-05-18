import React, {useState,  useEffect } from 'react';
import Api from '../Api';

const FilmList = () =>{
    const [films, setFilms] = useState([]);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() =>{
        !isMounted &&
       Api.getFilm().then((json)=>{
            setFilms(json);
            setIsMounted(true);
        });
    },[isMounted]);

    return(        
        <ul>
            {films && films.map((film,index)=>{
                return(
                    <li key={index}>
                        {film.titre}
                    </li>
                );
            })}
        </ul>
    );
}
export default FilmList;