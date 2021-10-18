import React from 'react';
import img from '../../image/laboratory.jpg'

const Laboratory = () => {
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-2 g-4 my-5 mx-5 d-flex align-items-center">
                <div className="col">
                    <img className="img-fluid" src={img} />
                </div>
                <div className="col">
                    <h3 className="text-info">Laboratory Place <br /> In Dental Practice</h3>
                    <p>Dental Laboratory Technology is both a science and an art. Since each dental patient's needs are different, the duties of a dental laboratory technician are comprehensive and varied. Although dental technicians seldom work directly with patients, except under the direction of a licensed dentist, they are valuable members of the dental care team. They work directly with dentists by following detailed written instructions and using impressions (molds) of the patient's teeth </p>
                </div>
            </div>
        </div>
    );
};

export default Laboratory;