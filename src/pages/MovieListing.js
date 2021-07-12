import { React, useContext, useEffect } from 'react';
import "../css/App.css";
import { Link} from "react-router-dom";
import chillContext from '../context/chillContext';


const MovieListing = () => {
    const { movieListings, setMovieListing } = useContext(chillContext);
    useEffect(() => {
        fetch("http://localhost:5000/movielistings")
            .then(res => {
                return res.json();
            })
            .then(json => {
                setMovieListing(json);
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
                            movieListings.map((MovieListing) => (
                                <figure className={MovieListing.className}>
                                    <Link to={{
                                        pathname: "/moviedetails",
                                        state: {
                                            selectedID: MovieListing.id
                                        }
                                    }}>
                                        <img src={MovieListing.path} className="gallery-img h-100 w-100 mt-2" />
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
