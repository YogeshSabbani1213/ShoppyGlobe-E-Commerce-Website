import React from 'react'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addItemToCart } from '../store/cartSlice';
const ProductItem = ({ product }) => {
    // console.log(product);
    const dispatch = useDispatch();
    function handleClick() {
        dispatch(addItemToCart(product));
        toast.success("Added to Cart", {
            icon: "✔",
        });
    }
    return (
        <div className='ProductsCard'>
            
            <Link to={`/products/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                <img src={product.thumbnail} alt="" className='thumbnail' loading='lazy' />
                <div className="title">
                <h4 className='productTitle' >{product.title}</h4>
                </div>
            </Link>
            <div className="para">
                <p className='productPrice'>MRP:₹{product.price}</p>
            </div>
            <div className='actinProduct'>
                <Link to={`/products/${product.id}`}>
                    <button className='btnDetails'>View Details</button>
                </Link>
                <button className='btnCart' onClick={handleClick}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductItem
