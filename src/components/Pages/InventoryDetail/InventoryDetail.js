import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './InventoryDetail.css'


const InventoryDetail = () => {
    const { inventoryId } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const url = `http://localhost:4000/products/${inventoryId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, []);
    const { _id, name, description, img, price, supp } = product;
    return (
        <section>
            <div className="detailContainer">
                <div className="productImage">
                    <img src={img}
                        alt="" />
                </div>
                <div className="detailInfo">
                    <div className="author">
                        <span>{supp}</span>
                        <span>ID: {_id} {price}</span>
                        <span>Price: {price}</span>
                        <span>Quantity: 18</span>
                    </div>
                    <h1 className="productTitle">{name}</h1>
                    <p className="productDesc">{description}</p>
                    <div className="btnGroup">
                        <button className="deliveredBtn">Delivered</button>
                        <input type="text" name="inputQty" />
                        <button className="stockBtn">Stock</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InventoryDetail;