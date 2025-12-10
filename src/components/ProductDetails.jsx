
import React, { useEffect, useState } from 'react'
import Products from '../hooks/Products';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../store/cartSlice';
import { toast } from 'react-toastify';

const ProductDetails = () => {
    const dispatch = useDispatch()
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setLoading(false);
            })
            .catch(() => {
                setError('An Error Occured');
                setLoading(false);
            })
    }, [id]);
    if (loading) {
        return <h2>Loading ProductDetails....</h2>
    }
    if (error) {
        return <h2>{error}</h2>
    }

    function handleCartBtn() {
        dispatch(addItemToCart(product));
        toast.success("Added to Cart", {
            icon: "✔",
        });
    }


    return (
        <div className="productDetailsContainer">
            <div className="imgOfProduct">
                <img src={product.thumbnail} alt="" loading='lazy' />
            </div>

            <div className="infoOfProduct">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <h2>MRP:₹{product.price}</h2>
                <p>Brand: {product.brand}</p>
                <p>Category: {product.category}</p>
                <p>Rating: ⭐ {product.rating}</p>

                <button className='btnADD' onClick={handleCartBtn}>Add Cart</button>
            </div>
        </div>
    )
}

export default ProductDetails

