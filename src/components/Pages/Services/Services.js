import useProducts from '../../../hooks/useProducts';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services] = useProducts();

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