import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyItems = () => {
    const [user, loading] = useAuthState(auth);
    const userUid = user?.uid;
    const [items, setItems] = useState([]);
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:4000/allproducts/${userUid}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItems(data)
                console.log(data)
            });
    }, [])

    const handleDeleteItem = (id) => {
        const url = `http://localhost:4000/products/${id}`
        console.log(url);
        fetch(url, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remaining = items.filter(product => product._id !== id);
                setItems(remaining);
            })
    }

    useEffect(() => {
        items.map(data => setItem(data));
    }, [])

    console.log(items);

    return (
        <div>
            <h2 className='text-center border-bottom pb-2 my-3'>My Items</h2>
            <div className="container">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map(product => (
                                <tr key={product._id}>
                                    <td>{product.name}</td>
                                    <td>{product.price}</td>
                                    <td>{product.qty}</td>
                                    <td className='text-end'><button className='btn btn-danger' onClick={() => handleDeleteItem(product._id)}>x</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default MyItems;