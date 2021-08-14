import { React } from 'react';
import "../css/App.css";
import 'react-slideshow-image/dist/styles.css'
import img1 from '../images/TVShowBanner1.png';
import img2 from '../images/TVShowBanner2.jpg';
import img3 from '../images/TVShowBanner3.jpg';
import img4 from '../images/TVShowBanner4.jpg';
import img5 from '../images/MovieBanner1.jpg';
import { Carousel } from 'react-bootstrap';

const HeroSection = () => {

    return (
        <>
            <div className="hero-section">

                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img4}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img5}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}

export default HeroSection
