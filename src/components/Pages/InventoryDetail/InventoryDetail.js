import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';


const InventoryDetail = () => {
    const [product, setProduct] = useState({});
    const qtyRef = useRef('');
    const [quantity, setQuantity] = useState('');
    const { inventoryId } = useParams();
    const { _id, qty, name, description, img, price, supp } = product;


    useEffect(() => {
        const url = `http://localhost:4000/products/${inventoryId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [quantity]);



    //  handle form submit and update product quantity
    const handleUpdateQuanity = () => {
        const newQty = parseInt(qtyRef.current.value) + parseInt(qty);
        // console.log(typeof (parseInt(qty)));
        setQuantity(newQty);
        const newProduct = {
            newQty, name, description, img, price, supp
        }


        const url = `http://localhost:4000/products/${inventoryId}`
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
        qtyRef.current.value = '';
    };

    // handle product decrease when clicking on delivered button
    const handleDelivered = () => {
        if (qty <= 0) {
            return alert('You have to update your product before delivered')
        }
        const newQty = parseInt(qty) - 1;
        setQuantity(newQty);
        const newProduct = {
            newQty, name, description, img, price, supp
        }
        const url = `http://localhost:4000/products/${inventoryId}`
        fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
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
                                    <h6 className="card-subtitle my-2">Supplier: <span className="text-muted">{supp}</span></h6>
                                    <p className="card-text">{`${description?.slice(0, 100)}...`}</p>
                                    <h5 className="card-text">Price: {price}</h5>
                                    <h5 className="card-text">Available: {qty} <button className='btn btn-danger' onClick={handleDelivered}>Delivered</button></h5>
                                    <div className="btn-group my-2">
                                        <input type="text" ref={qtyRef} className='form-control' required placeholder='Enter Quantity' />
                                        <button type='submit' onClick={handleUpdateQuanity} className='btn btn-success px-2 btn-sm'>Update Quantity</button>
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