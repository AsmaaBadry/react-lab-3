import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useNavigate } from 'react-router-dom';
import BestMovie from './pages/favourats/index';
import Movie from './pages/Movies';
import MovieDetails from './pages/Details';
import LogInForm from './pages/Login';
import NOtFoundComponant from './pages/NotFound';
import NavigationBar from './componant/NavBar/index';
import Footer from './componant/footer/index';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {

    setLoggedIn(true);
    
    navigate('/BestMovie');
  };

  return (
    <>
      <NavigationBar />

      <Routes>
        <Route path='/' element={<Movie />} />
        <Route path='/Login' element={<LogInForm onLogin={handleLogin} />} />
    
        <Route path='/BestMovie' element={loggedIn ? <BestMovie /> : <LogInForm   onLogin={handleLogin  } />}/>
        <Route path='/Details/:id' element={<MovieDetails />} />
        <Route path='*' element={<NOtFoundComponant />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
