import React from 'react'
import '../Navbar/Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faLocationDot,
    faMagnifyingGlass,
    faGlobe,
    faChevronDown,
    faCartShopping,
    faBars
} from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
   <header>
         <nav className='navbar'>
            <div className='nav-logo'>
                <div className='logo'></div>
            </div>
            <div className="nav-address">
                <p className="address-first">Deliver to</p>
                <div className="add-icon">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <p className="address-second">India</p>
                </div>
            </div>
        <div className='nav-search'>
            <select className='search-options'>
                <option selected="selected">All</option>
                        <option>Arts &amp; Crafts</option>
                        <option>Automotive</option>
                        <option>Baby</option>
                        <option>Beauty &amp; Personal Care</option>
                        <option>Books</option>
                        <option>Boys' Fashion</option>
                        <option>Computers</option>
                        <option>Deals</option>
                        <option>Digital Music</option>
                        <option>Electronics</option>
                        <option>Girls' Fashion</option>
                        <option>Health &amp; Household</option>
                        <option>Home &amp; Kitchen</option>
                        <option>Industrial &amp; Scientific</option>
                        <option>Kindle Store</option>
                        <option>Luggage</option>
                        <option>Men's Fashion</option>
                        <option>Movies &amp; TV</option>
                        <option>Music, CDs &amp; Vinyl</option>
                        <option>Pet Supplies</option>
                        <option>Prime Video</option>
                        <option>Software</option>
                        <option>Sports &amp; Outdoors</option>
                        <option>Tools &amp; Home Improvement</option>
                        <option>Toys &amp; Games</option>
                        <option>Video Games</option>
                        <option>Women's Fashion</option>
            </select>
            <input className="search-input" type="text" placeholder="Search...."></input>
           <div className="search-icon">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
        </div>
        <div className='language'>
            <FontAwesomeIcon icon={faGlobe} /> EN
            <span><FontAwesomeIcon icon={faChevronDown}/></span>
        </div>
        <div className='user'>
            <p><span>Hello, sign in</span></p>
            <p className='user-second'>
                <b>Accounts & Lists</b>
                <span><FontAwesomeIcon icon={faChevronDown}/></span> 
            </p>
        </div>
        <div className='returns'>
            <p>Returns</p>
            <p>
                <b>& orders</b>
            </p>
        </div>
        <div className='cart'>
            <FontAwesomeIcon icon={faCartShopping}  className='cart-icon'/>
            Basket
        </div>
    </nav>
    <div className='bottom-panel'>
        <div className='panel-all'>
            <FontAwesomeIcon icon={faBars} />
            All
        </div>
        <div className='panel-options'>
            <p>Prime Day Deals</p>
            <p>Best Sellers</p>
            <p>Buy More & Save</p>
            <p>Prime <FontAwesomeIcon icon={faChevronDown}/> </p>
            <p>New Releases</p>
            <p>Music</p>
            <p>Books</p>
            <p>Electronics</p>
            <p>Fashion</p>
            <p>Home</p>
            <p>Everday Essentials</p>
            <p>Toys & Games</p>
            <p>Home Improvement</p>
            <p>Gift Cards <FontAwesomeIcon icon={faChevronDown}/> </p>
        </div>

       </div>
   </header>
  )
}

export default Navbar