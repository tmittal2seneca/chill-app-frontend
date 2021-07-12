import React from 'react';
import "../css/App.css";
import DownloadonAppStore from '../images/DownloadonAppStore.png';
import GetItOnGooglePlay from '../images/GetItOnGooglePlay.png';
import GetItFromMicrosoft from '../images/GetItFromMicrosoft.png';

const Footer = () => {
    return (
        <footer className="page-footer font-small blue pt-4">

            <div className="container-fluid text-center text-md-left">

                <div className="row">

                    <div className="col-md-3 mt-md-0 mt-3">

                        {/* <h5 className="text-uppercase text-light">Footer Content</h5>
                        <p className="text-light">Here you can use rows and columns to organize your footer content.</p> */}

                        <ul className="list-unstyled">
                            <li>
                                <a href="#!"><img src={DownloadonAppStore} alt="Download on the App Store" /></a>
                            </li>
                            <li>
                                <a href="#!"><img src={GetItOnGooglePlay} alt="Get it on Google Play" /></a>
                            </li>
                            <li>
                                <a href="#!"><img src={GetItFromMicrosoft} alt="Get it from Microsoft" /></a>
                            </li>
                        </ul>

                    </div>

                    <hr className="clearfix w-100 d-md-none pb-3" />

                    <div className="col-md-2 mb-md-0 mb-3">

                        <h5 className="text-uppercase text-light">Watch</h5>

                        <ul className="list-unstyled pt-2">
                            <li className="pb-2">
                                <a href="#!" className="text-light">Spotlight</a>
                            </li>
                            <li className="pb-2">
                                <a href="#!" className="text-light">Movies</a>
                            </li>
                            <li className="pb-2">
                                <a href="#!" className="text-light">TV</a>
                            </li>
                            <li>
                                <a href="#!" className="text-light">Free</a>
                            </li>
                        </ul>

                    </div>
                    <div className="col-md-2 mb-md-0 mb-3">

                        <h5 className="text-uppercase text-light">My Account</h5>

                        <ul className="list-unstyled pt-2">
                            <li className="pb-2">
                                <a href="#!" className="text-light">My Chill</a>
                            </li>
                            <li className="pb-2">
                                <a href="#!" className="text-light">Account</a>
                            </li>
                            <li className="pb-2">
                                <a href="#!" className="text-light">Settings</a>
                            </li>
                            <li>
                                <a href="#!" className="text-light">Manage Devices</a>
                            </li>
                        </ul>

                    </div>
                    <div className="col-md-2 mb-md-0 mb-3">

                        <h5 className="text-uppercase text-light">Features</h5>

                        <ul className="list-unstyled pt-2">
                            <li className="pb-2">
                                <a href="#!" className="text-light">Lists</a>
                            </li>
                            <li className="pb-2">
                                <a href="#!" className="text-light">Family</a>
                            </li>
                            <li className="pb-2">
                                <a href="#!" className="text-light">Disc to Digital</a>
                            </li>
                            <li className="pb-2">
                                <a href="#!" className="text-light">InstaWatch</a>
                            </li>
                            <li>
                                <a href="#!" className="text-light">Movies Anywhere</a>
                            </li>
                        </ul>

                    </div>

                    <div className="col-md-2 mb-md-0 mb-3">

                        <h5 className="text-uppercase text-light">Help</h5>

                        <ul className="list-unstyled pt-2">
                            <li className="pb-2">
                                <a href="#!" className="text-light">About us</a>
                            </li>
                            <li className="pb-2">
                                <a href="#!" className="text-light">Devices</a>
                            </li>
                            <li className="pb-2">
                                <a href="#!" className="text-light">Support</a>
                            </li>
                            <li className="pb-2">
                                <a href="#!" className="text-light">Forums</a>
                            </li>
                            <li className="pb-2">
                                <a href="#!" className="text-light">Contact us</a>
                            </li>
                            <li>
                                <a href="#!" className="text-light">Jobs</a>
                            </li>
                        </ul>

                    </div>
                </div>

            </div>

            <div className="footer-copyright text-center py-3 text-light">© 2021 Copyright:
                <a href="#" className="text-light"> Tanya Mittal - 126281203</a>
            </div>

        </footer>
    )
}

export default Footer