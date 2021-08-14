import { React, useContext } from 'react';
import { useLocation } from "react-router-dom"
import "../css/App.css";
import chillContext from '../context/chillContext';


const TVDetails = () => {

    const { TVShows } = useContext(chillContext);
    const location = useLocation()
    const selectedID = location.state?.selectedID

    return (
        <div className="bg-dark">            
            {TVShows.map(tvListing => {
                return tvListing.id === selectedID &&
                <div className="detailsPage">
                    <img className="details-img small-poster mt-4 ml-4" src={tvListing.smallPosterImgPath} />
                    <h4 className="title-name text-light mt-4 ml-4">{tvListing.name}</h4>
                    <label className="synopsis text-light ml-4">{tvListing.synopsis}</label>
                    <figure class="large-poster">
                        <img className="details-img mt-4" src={tvListing.largePosterImgPath} />
                    </figure>
                    <button className="rent-price text-light bg-primary w-75 h-50">Rent ${tvListing.rentPrice}</button>
                    <button className="purchase-price text-light bg-primary w-75 h-50">Buy ${tvListing.outrightPurchasePrice}</button>
                    </div>
            })}
            
        </div>
    );
}

export default TVDetails
