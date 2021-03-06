import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, price, description, img, qty } = service;
    const navigate = useNavigate();

    const handleManageStock = (id) => {
        navigate(`/inventory/${id}`)
    }
    return (
        <>
            <div className="col-12 col-md-6 col-xl-4">
                <div className="card" style={{ width: '22rem' }}>
                    <img src={img} className='card-img-top' alt="" />
                    <div className="card-body">
                        <h3 className="card-title">{name}</h3>
                        <p className="card-subtitle">Price: {price}</p>
                        <p className="card-text text-muted">{description.slice(0, 120)}....</p>
                        <div className="btn-group">
                            <button className="btn btn-secondary" disabled>Stock: {qty}</button>
                            <button className="btn btn-warning text-muted" onClick={() => handleManageStock(_id)}>Update QTY</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;