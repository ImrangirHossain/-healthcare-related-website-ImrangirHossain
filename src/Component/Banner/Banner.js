import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../image/banner.png'
const Banner = () => {
    return (
        <div className="bg-primary d-md-flex mp-5">
            <div className="col-md-6 col-sm-12 p-5">
            <img src={image} className="d-block w-75 pe-5  ms-auto " alt="..."/>
            </div>
            <div className="col-md-6 col-sm-12 ps-5 py-5">
            <div className="text-start mb-auto text-white">
                        <p className="fs-2">Introducing <br />
                            <strong>Our Dental Surgeons</strong>
                        </p>
                        <p><i className="fas fa-arrow-circle-right me-2"></i>Promoting oral health and disease prevention. </p>
                        <p><i className="fas fa-arrow-circle-right me-2"></i>Diagnosing oral diseases. </p>
                        <p><i className="fas fa-arrow-circle-right me-2"></i>Interpreting x-rays and diagnostic tests. </p>
                        <p><i className="fas fa-arrow-circle-right me-2"></i>Ensuring the safe administration of anesthetics.</p>
                        <Link to="/services">
                        <button className="btn btn-outline-light fw-bold">Purchase <i className="fas fa-chevron-right"></i></button>
                        </Link>
                    </div>
            </div>
            
        </div>
    );
};

export default Banner;