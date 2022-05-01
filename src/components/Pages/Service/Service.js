import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, price, description, img, supp } = service;
    const navigate = useNavigate();

    const handleManageStock = (id) => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div className="col col-12 col-lg-4 align-items-stretch">
            <div className="singleService overflow-hidden rounded bg-dark text-white p-2">
                <div className="rounded-top overflow-hidden">
                    <div className="serviceImg">
                        <img className='w-100' src={img} alt="" />
                    </div>
                </div>
                <div className="serviceInfo p-3">
                    <h2 className="name text-center my-2">{name}</h2>
                    <p className='text-center'><small>{description}</small></p>
                    <p>Price: <span className='fst-italic fw-bold'>{price}</span></p>
                    <p>Supplier: <span className='fw-bold'>{supp}</span></p>
                    <div className="updateQuantity d-flex justify-content-between h-100%">
                        <button disabled className='btn btn-primary'>Quanity: 12</button>
                        <button className='btn btn-info px-3 text-uppercase fw-bold text-white' onClick={() => handleManageStock(id)}>Manage Stock</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;