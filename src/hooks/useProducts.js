const { useState, useEffect } = require("react")

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://fathomless-bastion-59824.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return [products, setProducts];
}

export default useProducts;