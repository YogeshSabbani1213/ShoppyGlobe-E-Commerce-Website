import React from 'react'
import Header from '../components/Header'
import Products from '../hooks/Products';
import { Suspense } from 'react';
import ProductItem from '../components/ProductItem';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
const Home = () => {
  const { products, loading, error } = Products();
  // const categories = [...new Set(products.map(p => p.category))]
  // console.log(categories);
  
  const bestSellers = products.slice(0, 5);
  return (
    <div className='homeContainer'>
      <HeroSection/>
      {/* BestSeller Section */}
      <section className="bestSellersSection">
        <h2>Best Sellers</h2>

        <Suspense fallback={<p>Loading products...</p>}>
          <div className="productsRow">
            {bestSellers.map((item) => (
              <ProductItem key={item.id} product={item} />
            ))}
          </div>
        </Suspense>
      </section>
    </div>
  )
}

export default Home
