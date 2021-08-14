import { React, useContext} from 'react';
import "../css/App.css";
import { Link } from "react-router-dom";
import chillContext from '../context/chillContext';


const MovieListing = () => {
    const { Movies, setMovies } = useContext(chillContext);


    const submitSearch = (e) => {
        let value = e.target.value.toLowerCase();
        let result = [];

          fetch("https://chill-app-backend.herokuapp.com/movieandtvshows/fmovies?titlename=" + value)
      .then(res=>res.json())
      .then(data=>{ 
         result = data.body;
         setMovies(result);
      })
      .catch(err=>console.log(`Error ${err}`))
      return result.name;
    }

    return (
        <>
            <div className="bg-dark">
                <div className="container">
                    <form action="/" className="search-box">
                        <label for="search">Search:</label>
                        <input type="text" placeholder="Enter movie title"
                            id="search" name="search" className="ml-4 mt-4" onChange={(event) => submitSearch(event)} />
                    </form>
                    <div className="gallery">
                        {
                            Movies.map((MovieListing, i) => (
                                <figure className={"gallery__item gallery__item--" + (i + 1)}>
                                    <Link to={{
                                        pathname: "/moviedetails",
                                        state: {
                                            selectedID: MovieListing.id
                                        }
                                    }}>
                                        <img src={MovieListing.smallPosterImgPath} className="gallery-img h-100 w-100 mt-2" />
                                    </Link>
                                </figure>))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieListing
