
import React from 'react'
import { useNavigate } from 'react-router-dom'
import heroimg from '../images/banner.png'
import { lazy } from 'react'
import Home from '../pages/Home'

const HeroSection = () => {
    const navigate = useNavigate();
    function handleShopButton(){
        navigate('/allProducts');
    }
    function handleExploreButton(){
        let el = document.getElementById('categorySection');
        if(el){
            el.scrollIntoView({behavior:'smooth'});
        }
    }
  return (
    <div>
      <section className='heroSection'>
        <div className="heroContent">
            <div className='heroImgSection'>
                <img className='heroImg'src={heroimg} alt="" loading='lazy'/>
            </div>
            <div className="heroButtons">
                <button className='shopBtn' onClick={handleShopButton}>Shop Now</button>
                <button className='exploreBtn'onClick={handleExploreButton}>Explore More..</button>
            </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection
