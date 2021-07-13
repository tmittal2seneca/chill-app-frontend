import { React, useContext } from 'react';
import { useLocation } from "react-router-dom"
import "../css/App.css";
import chillContext from '../context/chillContext';


const TVDetails = () => {

    const { tvListings } = useContext(chillContext);
    const location = useLocation()
    const selectedID = location.state?.selectedID

    return (
        <div className="bg-dark">            
            {tvListings.map(tvListing => {
                return tvListing.id === selectedID &&
                <div className="detailsPage">
                    <img className="details-img small-poster mt-4 ml-4" src={tvListing.path} />
                    <h4 className="title-name text-light mt-4 ml-4">{tvListing.title}</h4>
                    <label className="synopsis text-light ml-4">{tvListing.synopsis}</label>
                    <figure class="large-poster">
                        <img className="details-img mt-4" src={tvListing.largeposter} />
                    </figure>
                    <button className="rent-price text-light bg-primary w-75 h-50">Rent ${tvListing.rentprice}</button>
                    <button className="purchase-price text-light bg-primary w-75 h-50">Buy ${tvListing.purchaseprice}</button>
                    </div>
            })}
            
        </div>
    );
}

export default TVDetails
