import { React, useContext } from 'react';
import "../css/App.css";
import { Card, CardGroup } from 'react-bootstrap';
import chillContext from '../context/chillContext';

const FeaturedFilms = () => {

    const { FeaturedMovies } = useContext(chillContext);
    return (
        <>
            <div className="featured-films bg-dark">
                <label className="pt-4 ml-4">Featured Films</label><br></br><br></br>
                <CardGroup>
                    {FeaturedMovies.map(featuredFilmsImage => {
                        return featuredFilmsImage.featured &&
                            (<Card key={featuredFilmsImage.id} className="bg-dark">
                                <Card.Img className="h-75" variant="top" src={featuredFilmsImage.smallPosterImgPath} />
                                <Card.Footer className="bg-danger text-center">
                                    <small className="text-light">Featured Film</small>
                                </Card.Footer>
                            </Card>)
                    })}
                </CardGroup>
            </div>
        </>
    );
}

export default FeaturedFilms
