import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [details, setDetails] = useState([]);
    useEffect(()=>(
        fetch('/services.json')
        .then(res => res.json())
        .then(data => setDetails(data))
    ),[])
        const singleDetails = details.find(singleDetail => singleDetail.key === serviceId);

    return (
        <div className="d-flex justify-content-center my-3">
              <div className="col-md-4 col-sm-12 text-start">
                    <div className="card  h-100">
                    <img height="225" src={singleDetails?.img} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{singleDetails?.title}</h5>
                     <p><small> {singleDetails?.discription}</small></p>   
                     <h2>Price: {singleDetails?.price}</h2>    
                        <button className="btn btn-primary">Buy Membership</button>
                    </div>
                    </div>
                 </div>
        </div>
    );
};

export default ServiceDetails;