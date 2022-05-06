import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const AddItem = () => {
    const [user] = useAuthState(auth);
    const supplier = user?.uid;

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newProduct = {
            name: event.target.name.value,
            price: event.target.price.value,
            qty: parseInt(event.target.quantity.value),
            description: event.target.desc.value,
            img: event.target.img.value,
            supp: supplier
        }

        fetch('https://fathomless-bastion-59824.herokuapp.com/products', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },

            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => console.log(data));

        event.target.name.value = '';
        event.target.price.value = 0;
        event.target.quantity.value = 1;
        event.target.desc.value = '';
        event.target.img.value = '';
    }
    return (
        <div className="container">
            <div className=" text-center mt-5 ">
                <div className="text-center border-bottom mb-5">
                    <h1>Add an Item</h1>
                </div>
            </div>
            <div className="row ">
                <div className="col-lg-7 mx-auto">
                    <div className="card mt-2 mx-auto p-4 bg-light">
                        <div className="card-body bg-light">
                            <div className="container">
                                <form onSubmit={handleFormSubmit}>
                                    <div className="controls">
                                        <div className="row my-3">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="form_name">Product Name</label>
                                                    <input type="text" name="name" className="form-control" placeholder="Product Name" required="required" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="form_lastname">Price</label>
                                                    <input type="number" min="0" name="price" className="form-control" placeholder="Enter the product price" required="required" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="form_email">Quantity</label>
                                                    <input id="form_email" type="number" min="1" name="quantity" className="form-control" placeholder="Enter Quantity" required="required" />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label htmlFor="form_email">Image Link</label>
                                                    <input id="form_email" type="text" name="img" className="form-control" placeholder="Please give the img Link" required="required" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row my-3">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label htmlFor="form_message">Decsription</label>
                                                    <textarea name="desc" className="form-control" placeholder="Write a short description here." rows="4" required="required"></textarea
                                                    >
                                                </div>
                                            </div>
                                            <div className="col-md-12 mt-3">
                                                <input type="submit" className="btn btn-success btn-send  pt-2 btn-block
                            " value="Add An Item" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddItem;