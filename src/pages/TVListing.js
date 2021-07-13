import { React, useContext, useEffect } from 'react';
import "../css/App.css";
import { Link} from "react-router-dom";
import chillContext from '../context/chillContext';


const TVListing = () => {

    const {tvListings, setTVListing} = useContext(chillContext);

    useEffect(() => {
        fetch("https://db-json-ass1.herokuapp.com/tvListings")
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
                                    <Link to={{
                                        pathname: "/tvdetails",
                                        state: {
                                            selectedID: tvListing.id
                                        }
                                    }}>
                                    <img src={tvListing.path} className="gallery-img h-100 w-100 mt-2" />
                                    </Link>
                                </figure>))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default TVListing
