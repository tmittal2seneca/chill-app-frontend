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

function App() {

  const [homePageImages, setHomePageImagesPath] = useState([]);
  const [movieListings, setMovieListing] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/homePageImages")
      .then(res => {
        return res.json();
      })
      .then(json => {
        setHomePageImagesPath(json);
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      })
  }, [])

  return (
    <Router>
      <Switch>
        <chillContext.Provider value={{ homePageImages, setHomePageImagesPath,movieListings, setMovieListing }}>
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
        </chillContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
