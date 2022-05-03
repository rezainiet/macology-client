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
        <div className="container overflow-hidden">
            <div className="row gy-4">
                {
                    services.slice(0, 6).map(service => <Service key={service._id} service={service}></Service>)
                }

            </div>
        </div>
    );
};

export default Services;