import { React, useContext } from 'react';
import "../css/App.css";
import { Card, CardGroup } from 'react-bootstrap';
import chillContext from '../context/chillContext';

const NewReleases = () => {
    const { FeaturedTVShows } = useContext(chillContext);

    return (
        <>
            <div className="new-releases bg-dark">
                <label className="pt-3 ml-4">Featured TV Shows</label><br></br><br></br>
                <CardGroup>
                    {FeaturedTVShows.map(tvShowsImage => {
                        return !FeaturedTVShows.featured &&
                            (<Card key={tvShowsImage.id} className="bg-dark">
                                <Card.Img className="h-75" variant="top" src={tvShowsImage.smallPosterImgPath} />
                                <Card.Footer className="bg-danger text-center">
                                    <small className="text-light">Featured TV Show</small>
                                </Card.Footer>
                            </Card>)
                    })}
                </CardGroup>
            </div>
        </>
    );
}

export default NewReleases
