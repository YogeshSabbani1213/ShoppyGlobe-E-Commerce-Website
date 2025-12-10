import React from "react";
import { Link } from "react-router-dom"
import bag from "../images/shopping-bag.png"
import { useDispatch, useSelector } from "react-redux";
import { searchQuery } from "../store/searchSlice";
import { useState } from "react";
import '../Styles/Header.css'

function Header() {
    const cartItems = useSelector((state) => state.cart.items)
    const dispatch = useDispatch();
    const query = useSelector((state) => state.search.query);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(prev => !prev);
    };

    
    function handleSearchQuery(e) {
        dispatch(searchQuery(e.target.value))
    }
    return (
        <div>
            <div className="Header">
                <h1>ShoppyGLOBE</h1>
                                {/* 👉 Mobile icons (cart + burger) */}
                <div className="mobileIcons">
                    <Link
                        to='/cart'
                        className="mobileCart"
                        style={{ textDecoration: "none", color: "inherit" }}
                    >
                        <img className='cart-img' src={bag} alt="" />
                        <span>{cartItems.length}</span>
                    </Link>

                    <button
                        type="button"
                        className="hamburgerBtn"
                        onClick={toggleMobileMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>


                <ul className='list1'>
                    <Link to='/home' style={{ textDecoration: "none", color: "inherit" }}><li>Home</li></Link>
                    <Link to='/allProducts' style={{ textDecoration: "none", color: "inherit" }}><li>All Products</li></Link>
                    <Link to='/contact' style={{ textDecoration: "none", color: "inherit" }}><li>Contact</li></Link>
                    <div className="magnifier">
                        <img src="https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/magnifier-512.png" alt="" className="imgMag" />
                        <input
                            type="text"
                            placeholder="searchProducts"
                            value={query}
                            onChange={handleSearchQuery}
                            className="searchInput"

                        />
                    </div>
            

                    

                    <Link to='/cart' style={{ textDecoration: "none", color: "inherit" }}><img className='cart-img' src={bag} alt="" /><span >{cartItems.length}</span></Link>
                </ul>
            </div>
                        {/* 👉 Mobile dropdown menu */}
            <div className={`mobileMenu ${isMobileMenuOpen ? 'open' : ''}`}>
                <Link to='/home' style={{ textDecoration: "none", color: "inherit" }}>
                    Home
                </Link>
                <Link to='/allProducts' style={{ textDecoration: "none", color: "inherit" }}>
                    All Products
                </Link>
                <Link to='/contact' style={{ textDecoration: "none", color: "inherit" }}>
                    Contact
                </Link>
            </div>

            <hr />
        </div>
    )
}
export default Header;