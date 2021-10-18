import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [details, setDetails] = useState({});
        useEffect(()=>{
            fetch("./services.json")
            .then(res => res.json())
            .then(data=> setDetails(data))
        },[])
    console.log(details)
    return (
        <div>
             <div className="col text-start">
                    <div className="card  h-100">
                    <img height="225" src={details.img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{details.title}</h5>
                     <p><small> {details.discription}</small></p>   
                     <h2>Price: {details.price}</h2>                
                    <button className="btn btn-primary">Book Now</button>
                        
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default ServiceDetails;
