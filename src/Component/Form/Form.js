import React from 'react';

const Form = () => {
    return (
        <div className="my-5">
            <h1>Leave a Message</h1>

            <div className="form text-start">
                <div className="row row-cols-lg-3 g-4 mx-3 my-2">
                    <div className="col">
                        <input type="text" className="form-control"  placeholder="Name" />
                    </div>
                    <div className="col">
                        <input type="email" className="form-control"  placeholder="Email" />
                    </div>
                    <div className="col">
                        <input type="email" className="form-control"  placeholder="Course name(Optional)" />
                    </div>
                </div>
                <div className="form-floating mx-4">
                    <textarea className="form-control" placeholder="Massage" id="floatingTextarea2" style={{height: '150px'}}></textarea>
                    <label for="floatingTextarea2"><small className="text-muted">massage</small> </label>
                </div>
                <button className="text-start btn btn-primary mx-4 my-3">SEND YOUR MASSAGE</button>
            </div>
        </div>
    );
};

export default Form;