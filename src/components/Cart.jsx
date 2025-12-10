import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decQty, incQty, removeItemFromCart } from '../store/cartSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    // console.log('cartitems',cartItems);

    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    if (cartItems.length === 0) {
        return(<h2 className='cartEmpty'>Your cart is empty!!!</h2>)
        
    }
    function handleRemoveButton(id) {
        dispatch(removeItemFromCart(id));
        toast.error("Removed from Cart", {
            icon: "🗑",
        });
    }
    return (
        <div className="cartContainer">
            <h1>Shopping Cart</h1>
            {cartItems.map((item) => (
                <div key={item.id}>
                    <div className='itemImg'>
                        <img src={item.thumbnail} alt="" loading='lazy' />
                    </div>
                    <div className="itemInfo">
                        <h3>{item.title}</h3>
                        <h4>MRP:₹{item.price}</h4>
                    </div>

                    <div className="qtyBox">
                        <button onClick={() => dispatch(decQty(item.id))}>-</button>
                        <span> {item.quantity} </span>
                        <button onClick={() => dispatch(incQty(item.id))}>+</button>
                    </div>

                    <button onClick={()=>handleRemoveButton(item.id)}>Remove</button>

                </div>
            ))}
            <h2>Total:{total.toFixed(2)}</h2>
            <button
                className="checkout-btn"
                onClick={() => navigate('/checkout')}
            >
                Go to Checkout
            </button>
        </div>
    )
}

export default Cart
