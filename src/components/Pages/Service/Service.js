import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, price, description, img, supp } = service;
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
                    <h2 className="name text-center my-2 fs-1">{name}</h2>
                    <p className='text-center fs-3 my-5'><small>{description}</small></p>
                    <p className='fs-4'>Price: <span className='fst-italic fw-bold'>{price}</span></p>
                    <p className='fs-4'>Supplier: <span className='fw-bold'>{supp}</span></p>
                    <div className="updateQuantity d-flex justify-content-between h-100%">
                        <button disabled className='btn btn-primary fs-3'>Quanity: 12</button>
                        <button className='btn btn-info px-3 text-uppercase fw-bold text-white fs-3' onClick={() => handleManageStock(_id)}>Manage Stock</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;