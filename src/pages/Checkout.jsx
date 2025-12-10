import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../store/cartSlice';
import { useNavigate } from 'react-router-dom';
import '../Styles/Checkout.css'

const Checkout = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [payment, setPayment] = useState("cod");
    const [orderPlaced, setOrderPlaced] = useState(false);

    const subTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

    const shippingFee = 0;
    const tax = subTotal * 0.02;
    const totalAmount = subTotal + shippingFee + tax;


    function handleSubmit(e) {
        e.preventDefault();

        if (!name || !address) {
            alert('Please fill the name and address');
            return;
        }
        dispatch(clearCart());
        setOrderPlaced(true);

        setTimeout(() => {
            navigate('/');
        }, 2000)

    }

    if (cartItems.length === 0 && !orderPlaced) {
        return (
            <div style={{ padding: "20px" }}>
                <h1>Checkout</h1>
                <p>Your cart is empty 🛒</p>
            </div>
        )
    }
    function handleChangeName(e) {
        setName(e.target.value)
    }
    function handleChangeEmail(e) {
        setEmail(e.target.value)
    }
    function handleChangeAddress(e) {
        setAddress(e.target.value)
    }
    function handleChangePayment(e) {
        setPayment(e.target.value)
    }



    return (
        <div className="checkoutContainer">
            <h1>CheckOut</h1>
            {orderPlaced && (
                <div className="order-message">
                    ✅ Order placed! Redirecting to home...
                </div>)}
            <div className="checkoutGrid">
                <h2>Product summary</h2>
                {cartItems.map((item) => (
                    <div className="checkoutCartItem" key={item.id}>
                        <img className='checkoutThumbnail' src={item.thumbnail} alt="" loading='lazy' />
                        <div className="checkoutCartInfo">
                            <h3>{item.title}</h3>
                            <p>{item.quantity}</p>
                            <p>
                                subTotal:{(item.price * item.quantity).toFixed(2)}
                            </p>
                        </div>
                    </div>
                ))}

                <div className="orderSummary">
                    <h2>Order Summary</h2>

                    <form action="" onSubmit={handleSubmit}>
                        <div className="formGroup">
                            <label htmlFor="">Name:</label>
                            <input type="text" value={name} onChange={(e) => handleChangeName(e)} />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="">Email</label>
                            <input type="text" value={email} onChange={(e) => handleChangeEmail(e)} />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="">Address</label>
                            <textarea name="" id="" value={address} onChange={(e) => handleChangeAddress(e)}></textarea>
                        </div>
                        <div className="formGroup">
                            <label htmlFor="">Payment Mode</label>
                            <select name="" id="" value={payment} onChange={(e) => handleChangePayment(e)}>
                                <option value="cod">Cash On Delivery</option>
                                <option value="card">Credit/Debit</option>
                            </select>
                        </div>

                        <hr />

                        <div className="summary-row">
                            <span>TotalAmount: </span>
                            <span> ₹{subTotal.toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                            <span>Shipping Fee: </span>
                            <span>
                                {shippingFee === 0 ? "Free" : `$${shippingFee.toFixed(2)}`}
                            </span>
                        </div>
                        <div className="summary-row">
                            <span>Tax(2%): </span>
                            <span>₹{tax.toFixed(2)}</span>
                        </div>
                        <div className="summary-row total">
                            <strong>Final Amount: </strong>
                            <strong>₹{totalAmount.toFixed(2)}</strong>
                        </div>

                        <button
                            type="submit"
                            className="place-order-btn"
                            disabled={orderPlaced}
                        >
                            Place Order
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Checkout
