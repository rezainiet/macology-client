import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../../hooks/useProducts';




const ManageInventories = () => {
    const [products, setProducts] = useProducts();
    const navigate = useNavigate('');


    const handleDeleteItem = (id) => {
        const url = `http://localhost:4000/products/${id}`
        console.log(url);
        fetch(url, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
            })
    }

    const handleAddItemBtn = () => {
        navigate('/add-inventory-item')
    }

    return (
        <div>
            <h2 className='text-center border-bottom pb-2 my-3'>Manage Inventories</h2>
            <div className="container">
                <div className="text-end btn-lg">
                    <button className='btn btn-success' onClick={handleAddItemBtn}>Add New Item</button>
                </div>
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
                            products.map(product => (
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

export default ManageInventories;