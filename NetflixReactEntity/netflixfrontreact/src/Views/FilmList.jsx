import {Component} from 'react';

import axios from 'axios';
import FilmCard from './FilmCard';


export default class FilmList extends Component {
  state = {
    Film:[]
  }

  componentDidMount() {
     axios.get(`http://localhost:5000/api/Films`)
      .then(res => {
        const film = res.data;
        this.setState({ film });
      })
  }

  render() {
    return (
      //  <ul>
      //   {/* { this.state.films.map(film => <div><li>{film.titre}</li><li>{film.anneeFilm}</li><li>{film.commentaireFilm}</li></div>)} */}
      // <FilmCard Film={this.state.films} />
      // </ul>

  <div>
      <h1 className="center">Mes films</h1>
      <div className="container"> 
            <div className="row"> 
            <FilmCard Film={this.state.Film} />
            </div>
      </div>
    </div>  
     
    )
  }
}