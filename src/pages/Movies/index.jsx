import { useState, useEffect } from 'react';
import axiosInastance from './../../axioseConfig/instance';
import { Link } from 'react-router-dom';
import './styles.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Movie() {
  const [Movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getMovies = (page) => {
    axiosInastance.get(`/popular?&page=${page}`)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMovies(currentPage);
  }, [currentPage]);

  const handlePreviousClick = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <div className="container my-5">
        <div className="row">
          {Movies.map((movie) => (
            <div key={movie.id} className="col-md-4 mb-4">
              <Card className="h-100">
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} style={{ height: '350px' }} />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text className='cardText'>{movie.overview}</Card.Text>
                  <Link to={`/details/${movie.id}`}>
                    <Button className='btn3' variant="primary">View Details</Button>
                  </Link>
                </Card.Body>
              </Card>
            </div>
          ))}
          <div className=' my-5'>
            <Button className='btn1 mx-5' onClick={handlePreviousClick}>Previous</Button>
            <Button className='btn2'  onClick={handleNextClick}>Next</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Movie;
