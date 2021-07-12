import { React, useState, useEffect } from 'react';
import "../css/App.css";

const TVListing = () => {

    const [tvListings, setTVListing] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/tvListings")
            .then(res => {
                return res.json();
            })
            .then(json => {
                setTVListing(json);
            })
            .catch((err) => {
                console.log(`Error ${err}`);
            })
    }, [])

    return (
        <>
            <div className="bg-dark">
                <div className="container">
                    <div className="gallery">
                        {
                            tvListings.map((tvListing) => (
                                <figure className={tvListing.className}>
                                    <img src={tvListing.path} className="gallery-img h-100 w-100 mt-2" />
                                </figure>))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default TVListing
