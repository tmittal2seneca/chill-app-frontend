import { React, useContext } from 'react';
import "../css/App.css";
import { Card, CardGroup } from 'react-bootstrap';
import chillContext from '../context/chillContext';

const NewReleases = () => {
    const { homePageImages } = useContext(chillContext);

    return (
        <>
            <div className="new-releases bg-dark">
                <label className="pt-3 ml-4">Free: New Releases</label><br></br><br></br>
                <CardGroup>
                    {homePageImages.map(newReleasesImage => {
                        return newReleasesImage.newReleases &&
                            (<Card key={newReleasesImage.id} className="bg-dark">
                                <Card.Img className="h-75" variant="top" src={newReleasesImage.path} />
                                <Card.Footer className="bg-danger text-center">
                                    <small className="text-light">{newReleasesImage.footerText}</small>
                                </Card.Footer>
                            </Card>)
                    })}
                </CardGroup>
            </div>
        </>
    );
}

export default NewReleases
