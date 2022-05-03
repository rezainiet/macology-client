import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const InventoryDetail = () => {
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(0);
    const { inventoryId } = useParams();
    const { _id, name, description, img, price, supp } = product;


    useEffect(() => {
        const url = `http://localhost:4000/products/${inventoryId}`
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [inventoryId]);

    const handleQuantity = event => {
        const newQuanity = event.target.value;
        setQuantity(newQuanity);
        console.log(quantity);
    }

    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-xl-center justify-content-xxl-center">
                    <div className="card my-5" style={{ maxWidth: '1020px' }}>
                        <div className="row g-0">
                            <div className="col-md-4 d-flex justify-content-center">
                                <img src={img} className="img-fluid rounded-start w-100" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h2 className="card-title">{name}</h2>
                                    <p className="card-text">{`${description.slice(0, 100)}...`}</p>
                                    <h5 className="card-text">Price: {price}</h5>
                                    <h5 className="card-text">Available: 10 PCS.</h5>
                                    <div className="btn-group my-2">
                                        <input type="text" className='form-control' required placeholder='Enter Quantity' />
                                        <button type='submit' className='btn btn-success px-2'>Update Quantity</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InventoryDetail;