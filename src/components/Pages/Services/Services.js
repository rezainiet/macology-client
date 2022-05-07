import useProducts from '../../../hooks/useProducts';
import Loading from '../../Loading/Loading';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, spinner] = useProducts();

    return (
        <div className="container overflow-hidden">
            <div className="row">
                <div className="col-12 my-5">
                    <h3 className="card-subtitile text-center">Products!!</h3>
                    <p className="card-text text-center">Don’t find customers for your products, find products for your customers.</p>
                </div>
            </div>
            <div className="row gy-4">
                {
                    services.slice(0, 6).map(service => <Service key={service._id} service={service}></Service>)
                }

            </div>
        </div>
    );
};

export default Services;