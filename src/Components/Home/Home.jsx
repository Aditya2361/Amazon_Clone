import React, { useState, useEffect } from 'react'
import '../Home/Home.css'
import heroOne from '../../assets/hero_one.jpg'
import heroTwo from '../../assets/hero_two.jpg'
import heroThree from '../../assets/hero_three.jpg'
import heroFour from '../../assets/hero_four.jpg'
import { productImages } from '../../assets/assets'

const Home = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  function plusSlides(n) {
    setSlideIndex(prev => {
      let newIndex = prev + n;
      if (newIndex > 4) newIndex = 1;
      if (newIndex < 1) newIndex = 4;
      return newIndex;
    });
  }
  function currentSlide(n) {
    setSlideIndex(n);
  }
  function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[n-1].style.display = "block";  
    dots[n-1].className += " active";
  }
  return (
    <div className='home'>
      <div className='hero-section'>
        <div className="slideshow-container">
          <div className="mySlides fade">           
            <img src={heroOne} alt="Hero One" style={{width: "100%"}}/>
          </div>
          <div className="mySlides fade">
            <img src={heroTwo} alt="Hero Two" style={{width: "100%"}}/>
          </div>
          <div className="mySlides fade">
            <img src={heroThree} alt="Hero Three" style={{width: "100%"}}/>
          </div>
          <div className="mySlides fade">
            <img src={heroFour} alt="Hero Four" style={{width: "100%"}}/>
          </div>

          <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
          <a className="next" onClick={() => plusSlides(1)}>❯</a>
        </div>  
        <br/>
        <div style={{textAlign: "center"}}>
          <span className="dot" onClick={() => currentSlide(1)}></span>
          <span className="dot" onClick={() => currentSlide(2)}></span>
          <span className="dot" onClick={() => currentSlide(3)}></span>
          <span className="dot" onClick={() => currentSlide(4)}></span>
        </div>
      </div>
      <div className='shop-section'>
       <div className='box0 box'>
          <div className='box-content'>
            <h2>Top Deals</h2>
            <div className="grid-container">
              <img className='boxg-img' src={productImages.product1} alt="" />
              <img className='boxg-img' src={productImages.product2} alt="" />
              <img className='boxg-img' src={productImages.product3} alt="" />
              <img className='boxg-img' src={productImages.product4} alt="" />
            </div>
            <p>See all deals</p>
          </div>
</div>
          <div className=' box1 box'>
          <div className='box-content'>
            <h2>Items under $25</h2>
            <img className='box-img' src={productImages.product5} alt="" />
            <p>Sell all items</p>
          </div>
        </div>
         <div className='box2 box'>
          <div className='box-content'>
            <h2>Essentials</h2>
            <img className='box-img' src={productImages.product6} alt="" />
            <p>Sell all items</p>
          </div>
        </div>
        <div className='box3 box'>
          <div className='box-content'>
            <h2>Essentials</h2>
            <img className='box-img' src={productImages.product7} alt="" />
            <p>Sell all items</p>
          </div>
        </div>
        <div className='box4 box'>
          <div className='box-content'>
            <h2>Essentials</h2>
            <img className='box-img' src={productImages.product8} alt="" />
            <p>Sell all items</p>
          </div>
        </div>
         <div className='box5 box'>
          <div className='box-content'>
            <h2>Essentials</h2>
            <img className='box-img' src={productImages.product9} alt="" />
            <p>Sell all items</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home