import '../css/App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import HeroSection from './HeroSection';
import FeaturedFilms from './FeaturedFilms';
import NewReleases from './NewReleases';
import ContentSection from './ContentSection';
import { useEffect, useState } from 'react';
import chillContext from '../context/chillContext';
import MovieListing from "../pages/MovieListing";
import TVListing from "../pages/TVListing";
import MovieDetails from "../pages/MovieDetails";
import TVDetails from "../pages/TVDetails";
import Dashboard from '../pages/Dashboard';

function App() {

  const[FeaturedMovies, setFeaturedMovies] = useState([]);
  const[FeaturedTVShows, setFeaturedTVShows] = useState([]);
  const[Movies, setMovies] = useState([]);
  const[TVShows, setTVShows] = useState([]);

  useEffect(() => {
    fetch("https://chill-app-backend.herokuapp.com/movieandtvshows/featured-movies?featured=true")
    .then(res=>res.json())
    .then(data=>{
      setFeaturedMovies(data.body)
    })
    .catch(err=>console.log(`Error ${err}`));
  }, [])

  useEffect(() => {
    fetch("https://chill-app-backend.herokuapp.com/movieandtvshows/featured-tvshows?featured=true")
    .then(res=>res.json())
    .then(data=>{
      setFeaturedTVShows(data.body)
    })
    .catch(err=>console.log(`Error ${err}`));
  }, [])

  useEffect(() => {
    fetch("https://chill-app-backend.herokuapp.com/movieandtvshows/movies")
    .then(res=>res.json())
    .then(data=>{
      setMovies(data.body)
    })
    .catch(err=>console.log(`Error ${err}`));
  }, [])

  useEffect(() => {
    fetch("https://chill-app-backend.herokuapp.com/movieandtvshows/tvshows")
    .then(res=>res.json())
    .then(data=>{
      setTVShows(data.body)
    })
    .catch(err=>console.log(`Error ${err}`));
  }, [])


  return (
    <Router>
      <Switch>
        <chillContext.Provider value={{ FeaturedMovies, setFeaturedMovies, FeaturedTVShows, setFeaturedTVShows, Movies, setMovies, TVShows, setTVShows }}>
          <Route exact path="/">
            <Header />
            <HeroSection />
            <FeaturedFilms />
            <NewReleases />
            <ContentSection />
            <Footer />
          </Route>
          <Route exact path="/movielisting">
            <Header />
            <MovieListing />
            <Footer />
          </Route>
          <Route exact path="/tvlisting">
            <Header />
            <TVListing />
            <Footer />
          </Route>
          <Route exact path="/moviedetails">
            <Header />
            <MovieDetails />
            <Footer />
          </Route>
          <Route exact path="/tvdetails">
            <Header />
            <TVDetails />
            <Footer />
          </Route>
          <Route exact path="/user">
            <Dashboard />
          </Route>
        </chillContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
