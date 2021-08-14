import { React, useContext } from 'react';
import { useLocation } from "react-router-dom"
import "../css/App.css";
import chillContext from '../context/chillContext';


const MovieDetails = () => {

    const { Movies } = useContext(chillContext);
    const location = useLocation()
    const selectedID = location.state?.selectedID

    return (
        <div className="bg-dark">
            {Movies.map(movieListing => {
                return movieListing.id === selectedID &&
                <div className="detailsPage">
                    <img className="details-img small-poster mt-4 ml-4" src={movieListing.smallPosterImgPath} />
                    <h4 className="title-name text-light mt-4 ml-4">{movieListing.name}</h4>
                    <label className="synopsis text-light ml-4">{movieListing.synopsis}</label>
                    <figure class="large-poster">
                        <img className="details-img mt-4" src={movieListing.largePosterImgPath} />
                    </figure>
                    <button className="rent-price text-light bg-primary w-75 h-50">Rent ${movieListing.rentPrice}</button>
                    <button className="purchase-price text-light bg-primary w-75 h-50">Buy ${movieListing.outrightPurchasePrice}</button>
                    </div>
            })}
            
        </div>
    );
}

export default MovieDetails
