import { useState,useEffect } from "react";
import React from 'react'


const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading]= useState(true);
    const [error, setError]= useState(null);
    useEffect(()=>{
        fetch('https://dummyjson.com/products')
            .then(res=>res.json())
            .then(data=>{        
                // console.log(data);
                        
                setProducts(data.products);
                setLoading(false);
            })
            .catch(err => {
                setError('Failed to Load Products');
                setLoading(false)
            })
            
    },[]);
    return {products,loading,error};
}

export default Products
