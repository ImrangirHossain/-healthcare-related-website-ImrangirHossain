import React from 'react';
import { NavLink } from 'react-router-dom';

const Service = (props) => {
    const {title,discription,img, price,key } = props.service;
    return (
        <div>
             <div className="col text-start">
                    <div className="card  h-100">
                    <img height="225" src={img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                     <p><small> {discription}</small></p>   
                     <h2>Price: {price}</h2>    
                     <NavLink to={`/details/${key}`}>
                          <button className="btn btn-primary">Details</button>
                    </NavLink>
                        
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default Service;