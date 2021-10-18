import React, { useEffect, useState } from 'react';
import SomeService from '../SomeService/SomeService';

const Services = () => {
    const [someServices, setSomeServices] = useState([]);
    useEffect(()=>{
        fetch('./someservices.json')
        .then(res => res.json())
        .then(data=> setSomeServices(data))
    },[])
    return (
        <div>
             <h2 className="fw-bold text-start p-3">ALL SERVICES</h2>

            {/* services */}

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-0 mx-2 ">
            {
                someServices.map(service => <SomeService
                    key={service.key} service={service}></SomeService>)
            }
            </div>
        </div>
    );
};

export default Services;