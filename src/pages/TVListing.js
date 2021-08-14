import { React, useContext} from 'react';
import "../css/App.css";
import { Link} from "react-router-dom";
import chillContext from '../context/chillContext';


const TVListing = () => {

    const {TVShows, setTVShows} = useContext(chillContext);

    const submitSearch = (e) => {
        let value = e.target.value.toLowerCase();
        let result = [];

          fetch("https://chill-app-backend.herokuapp.com/movieandtvshows/ftvshows?titlename=" + value)
      .then(res=>res.json())
      .then(data=>{ 
         result = data.body;
         setTVShows(result);
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
                        <input type="text" placeholder="Enter TV Show title"
                            id="search" name="search" className="ml-4 mt-4" onChange={(event) => submitSearch(event)} />
                    </form>
                    <div className="gallery">
                        {                            
                            TVShows.map((tvListing, i) => (
                                <figure className={"gallery__item gallery__item--" + (i+1)}>
                                    <Link to={{
                                        pathname: "/tvdetails",
                                        state: {
                                            selectedID: tvListing.id
                                        }
                                    }}>
                                    <img src={tvListing.smallPosterImgPath} className="gallery-img h-100 w-100 mt-2" />
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
