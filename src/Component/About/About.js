import React from 'react';
import img from '../../image/about.jpg'
import Teams from '../Teams/Teams';
const About = () => {
    return (
        <div>
             <div className="row row-cols-1 row-cols-md-2 g-4 my-5 mx-5 d-flex align-items-center">
                <div className="col">
                    <img className="img-fluid" src={img} />
                </div>
                <div className="col">
                    <h3>Why Choose Us</h3>
                    <p>We believe the skillset  experience we possess not only shall bring value to you, but in turn shall also help us to acquire experience  sharpen our skills amidst you professional work. If given an opportunity we positively look forward to give our best to you.</p>
                </div>
            </div>
            <Teams></Teams>
        </div>
    );
};

export default About;