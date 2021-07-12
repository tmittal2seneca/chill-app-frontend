import { React, useContext } from 'react';
import { useLocation } from "react-router-dom"
import "../css/App.css";
import chillContext from '../context/chillContext';


const MovieDetails = () => {

    const { movieListings } = useContext(chillContext);
    const location = useLocation()
    const selectedID = location.state?.selectedID

    return (
        <div className="bg-dark">
            <label className="pt-4 ml-4 text-light">Details</label><br></br><br></br>
            {movieListings.map(movieListing => {
                return movieListing.id === selectedID &&
                <figure className="gallery__item gallery__item--1">
                    <img className="gallery-img h-100 w-100 mt-2 ml-2" src={movieListing.path} />
                </figure>
            })}
        </div>
    );
}

export default MovieDetails
