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

function App() {

  const [homePageImages, setHomePageImagesPath] = useState([]);
  const [movieListings, setMovieListing] = useState([]);
  const [tvListings, setTVListing] = useState([]);

  useEffect(() => {
    fetch("https://db-json-ass1.herokuapp.com/homePageImages")
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
        <chillContext.Provider value={{ homePageImages, setHomePageImagesPath, movieListings, setMovieListing, tvListings, setTVListing }}>
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
        </chillContext.Provider>
      </Switch>
    </Router>
  );
}

export default App;
