import React from 'react';

const Service = (props) => {
    const {title,discription,img } = props.service;
    return (
        <div>
             <div className="col text-start">
                    <div className="card  h-100">
                    <img height="225" src={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                     <p><small> {discription}</small></p>          
                     <button className="btn btn-primary">Read More</button>
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default Service;