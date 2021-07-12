import { React, useContext } from 'react';
import "../css/App.css";
import { Card, CardGroup } from 'react-bootstrap';
import chillContext from '../context/chillContext';

const FeaturedFilms = () => {

    const { homePageImages } = useContext(chillContext);
    return (
        <>
            <div className="featured-films bg-dark">
                <label className="pt-4 ml-4">Featured Films</label><br></br><br></br>
                <CardGroup>
                    {homePageImages.map(featuredFilmsImage => {
                        return featuredFilmsImage.featuredFilm &&
                            (<Card key={featuredFilmsImage.id} className="bg-dark">
                                <Card.Img className="h-75" variant="top" src={featuredFilmsImage.path} />
                                <Card.Footer className="bg-danger text-center">
                                    <small className="text-light">{featuredFilmsImage.footerText}</small>
                                </Card.Footer>
                            </Card>)
                    })}
                </CardGroup>
            </div>
        </>
    );
}

export default FeaturedFilms
