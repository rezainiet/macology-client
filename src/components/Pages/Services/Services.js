import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/products')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(services)
    return (
        <div className='servicesContainer py-3 my-3'>
            <h1 className='text-center my-4 text-white my'>Here is our some Products</h1>
            <div className="text-center">
                <h3 className='text-center shadow rounded-bottom px-3 py-2 mb-5 mt-2 bg-secondary text-white d-inline-block'>Check one of them</h3>
            </div>
            <div className="container">
                <div className="row g-4">
                    {
                        services.slice(0, 6).map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;