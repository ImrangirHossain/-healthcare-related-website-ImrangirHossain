import React from 'react';

const Payment = () => {
    return (
        <div className="my-5">
        <h3>Payment</h3>
        <h4 className="text-info my-3">My Balance: $0</h4>
        <div className="form text-start">
            <div className="row row-cols-md-2 row-cols-1 g-4 mx-3 my-2 w-50 mx-auto">
                <div className="col">
                <label className="form-label">Name on Card</label>
                    <input type="text" className="form-control"  placeholder="Full-Name" />
                </div>
                <div className="col">
                <label className="form-label">Card Number</label>
                    <input type="number" className="form-control" />
                </div>
                <div className="col">
                <label className="form-label">Amount</label>
                    <input type="number" className="form-control" />
                </div>
                <div className="col">
                <label className="form-label">Billing Address</label>
                    <input type="text" className="form-control"/>
                </div>
                <div className="col">
                <label className="form-label">CVC</label>
                    <input type="text" className="form-control"
                    placeholder="ex. 311"/>
                </div>
                <div className="col">
                <label className="form-label">Expiration</label>
                    <input type="text" className="form-control"
                    placeholder="MM"/>
                </div>
                <div className="col">
                <label className="form-label">Year</label>
                    <input type="text" className="form-control"
                    placeholder="YYYY"/>
                </div>
            </div>
            <div className="form-floating mx-4 w-50 mx-auto">
                <button className="text-start btn btn-primary mx-3 my-3 ">ADD TO BALANCE</button>
            </div>
          
        </div>
    </div>
    );
};

export default Payment;