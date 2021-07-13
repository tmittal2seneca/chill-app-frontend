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
            {movieListings.map(movieListing => {
                return movieListing.id === selectedID &&
                <div className="detailsPage">
                    <img className="details-img small-poster mt-4 ml-4" src={movieListing.path} />
                    <h2 className="title-name text-light mt-4 ml-4">{movieListing.title}</h2>
                    <label className="synopsis text-light ml-4">{movieListing.synopsis}</label>
                    <figure class="large-poster">
                        <img className="details-img mt-4" src={movieListing.largeposter} />
                    </figure>
                    <button className="rent-price text-light bg-primary w-50 h-50">Rent ${movieListing.rentprice}</button>
                    <button className="purchase-price text-light bg-primary w-50 h-50">Buy ${movieListing.purchaseprice}</button>
                    </div>
            })}
            
        </div>
    );
}

export default MovieDetails
