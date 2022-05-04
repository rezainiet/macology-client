const { useState, useEffect } = require("react")

const useProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return [products, setProducts];
}

export default useProducts;