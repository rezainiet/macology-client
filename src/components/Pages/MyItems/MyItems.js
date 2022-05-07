import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


const MyItems = () => {
    const [user, loading] = useAuthState(auth);
    const userUid = user?.uid;
    const [items, setItems] = useState([]);
    const [item, setItem] = useState({});
    const MySwal = withReactContent(swal)

    useEffect(() => {
        const url = `https://fathomless-bastion-59824.herokuapp.com/allproducts/${userUid}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setItems(data)
                console.log(data)
            });
    }, [])

    const handleDeleteItem = (id) => {


        confirmAlert({
            title: 'Are you sure?',
            message: "Once you click yes you can't undone",
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        const url = `https://fathomless-bastion-59824.herokuapp.com/products/${id}`
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
                },
                {
                    label: 'No',
                    onClick: () => {
                        // console
                    }
                }
            ]
        });

        // new swal({
        //     title: "Are you sure?",
        //     text: "Once deleted, you will not be able to recover this imaginary file!",
        //     icon: "warning",
        //     showCancelButton: true,
        //     buttons: true,
        // })
        //     .then((willDelete) => {
        //         if (willDelete) {
        //             new swal("Poof! Your imaginary file has been deleted!", {
        //             });
        //         } else {
        //             new swal("Your imaginary file is safe!");
        //         }
        //     });

        // Swal.fire({
        //     title: 'Are you sure?',
        //     text: 'User will have Admin Privileges',
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes!'
        // })
        //     .then(willDelete => {
        //         if (!willDelete) {
        //             console.log('deleted')
        //             const url = `https://fathomless-bastion-59824.herokuapp.com/products/${id}`
        //             console.log(url);
        //             fetch(url, {
        //                 method: "DELETE",
        //             })
        //                 .then(res => res.json())
        //                 .then(data => {
        //                     console.log(data)
        //                     const remaining = items.filter(product => product._id !== id);
        //                     setItems(remaining);
        //                 })
        //         }
        //         if (willDelete) {
        //             console.log('maah')
        //         }
        //     });

        // MySwal.fire({
        //     title: <p>Hello World</p>,
        //     didOpen: () => {
        //         // `MySwal` is a subclass of `Swal` with all the same instance & static methods
        //         MySwal.showLoading()
        //     },
        // }).then(() => {
        //     return MySwal.fire(<p>Shorthand works too</p>)
        // })


        // if (window.confirm("Are you sure that you want to delete this item?") === true) {
        //     const url = `https://fathomless-bastion-59824.herokuapp.com/products/${id}`
        //     console.log(url);
        //     fetch(url, {
        //         method: "DELETE",
        //     })
        //         .then(res => res.json())
        //         .then(data => {
        //             console.log(data)
        //             const remaining = items.filter(product => product._id !== id);
        //             setItems(remaining);
        //         })
        // }

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