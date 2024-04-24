import { useState, useEffect } from 'react';
import axiosInastance from './../../axioseConfig/instance';
import { useParams } from 'react-router-dom';
  
import './style.css';

  function MovieDetails(){
   const {id} = useParams()
    //  console.log(params)

     const [Movie,setMovie]  = useState({})

    const getMovie = ()=>{
      axiosInastance.get(`/${id}`).then((res)=>{

      //   console.log(res.data)

            setMovie(res.data);
         
      }).catch((err)=>{console.log(err.message)})
   
    }


    useEffect(()=>{
      getMovie();

    },[])

    

     return (
      <>
         <div className="movie-details-container">
      <div className="movie-details">
        <div className="movie-poster">
          <img src={`https://image.tmdb.org/t/p/w500${Movie.poster_path}`} alt={Movie.title} />
        </div>
        <div className="movie-info">
          <h2 className="movie-title">{Movie.title}</h2>
          <p className="movie-overview">{Movie.overview}</p>
          <p className="movie-info-item"><strong>Release Date:</strong> {Movie.release_date}</p>
          <p className="movie-info-item"><strong>Runtime:</strong> {Movie.runtime} minutes</p>
          <p className="movie-info-item"><strong>Genres:</strong> {Movie.genres && Movie.genres.map(genre => genre.name).join(', ')}</p>
          <p className="movie-info-item"><strong>Vote Average:</strong> {Movie.vote_average}</p>
        </div>
      </div>
    </div>


      </>
     ) 
  }
  export default MovieDetails;