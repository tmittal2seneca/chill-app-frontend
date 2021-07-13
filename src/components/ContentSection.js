import React from 'react';
import "../css/App.css";
import img1 from '../images/bss1.jpg';
import img2 from '../images/bss2.jpg';
import img3 from '../images/bss3.jpg';
import img4 from '../images/bss4.jpg';
import img5 from '../images/bss5.jpg';
import img6 from '../images/bss6.jpg';

const ContentSection = () => {
    return (
        <>
            <div className="content-section bg-dark">
                <div className="content-section-border h-100">
                    <label className="ml-5 mt-4">BIG SUMMER<br></br>SALE</label>
                        <div className="column pt-1 pr-1 float-right">                           
                            <img className="box-image" src={img1} alt="Snow"/>
                        </div>
                        <div className="column pt-1 pr-1 float-right">
                            <img className="box-image" src={img2} alt="Forest"/>
                        </div>
                        <div className="column pt-1 pr-1 float-right">
                            <img className="box-image" src={img3} alt="Mountains"/>
                        </div>
                        <div className="column pt-1 pr-1 float-right">
                            <img className="box-image" src={img4} alt="Mountains"/>
                        </div>
                        <div className="column pt-1 pr-1 float-right">
                            <img className="box-image" src={img5} alt="Mountains"/>
                        </div>
                        <div className="column pt-1 pr-1 float-right">
                            <img className="box-image" src={img6} alt="Mountains"/>
                        </div>
                </div>
            </div>
            <div className="space bg-dark"></div>
        </>
    )
}

export default ContentSection