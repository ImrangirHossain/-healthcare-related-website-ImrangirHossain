import React from 'react';

const Form = () => {
    return (
        <div className="my-5">
            <h3>Appointment Details</h3>

            <div className="form text-start">
                <div className="row row-cols-lg-3 g-4 mx-3 my-2">
                    <div className="col">
                        <input type="text" className="form-control"  placeholder="Full-Name" />
                    </div>
                    <div className="col">
                        <input type="email" className="form-control"  placeholder="Your Email Address" />
                    </div>
                    <div className="col">
                        <input type="text" className="form-control"  placeholder="Your Phone Number" />
                    </div>
                </div>
                <div className="form-floating mx-4">
                    <textarea className="form-control" placeholder="Massage" id="floatingTextarea2" style={{height: '150px'}}></textarea>
                    <label htmlFor="floatingTextarea2"><small className="text-muted">Disease Details</small> </label>
                </div>
                <button className="text-start btn btn-primary mx-4 my-3">SEND YOUR APPOINTMENT</button>
            </div>
        </div>
    );
};

export default Form;