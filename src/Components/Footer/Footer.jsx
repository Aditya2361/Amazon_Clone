import React from 'react'
import '../Footer/Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className='foot-panel1'>
            Back to Top
        </div>
        <div className='foot-panel2'>
            <ul>
                <li>Get to Know Us</li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Amazon Newsletter</a></li>
                <li><a href="#">About Amazon</a></li>
                <li><a href="#">Accessibility</a></li>
                <li><a href="#">Sustainability</a></li>
                <li><a href="#">Press Center</a></li>
                <li><a href="#">Investor Relations</a></li>
                <li><a href="#">Amazon Devices</a></li>
                <li><a href="#">Amazon Science</a></li>
            </ul>
            <ul>
                <li>Make Money with Us</li>
                <li><a href="#">Sell products on Amazon</a></li>
                <li><a href="#">Sell on Amazon Business</a></li>
                <li><a href="#">Sell apps on Amazon</a></li>
                <li><a href="#">Become an Affiliate</a></li>
                <li><a href="#">Advertise Your Products</a></li>
                <li><a href="#">Self-Publish with Us</a></li>
                <li><a href="#">Host an Amazon Hub</a></li>
                <li><a href="#">See More Make Money with Us</a></li>
            </ul>
            <ul>
                <li>Amazon Payment Products</li>
                <li><a href="#">Amzon Business Card</a></li>
                <li><a href="#">Shop with Points</a></li>
                <li><a href="#">Reload Your Balance</a></li>
                <li><a href="#">Amazon Currency Converter</a></li>
            </ul>
            <ul>
                <li>Let Us Help You</li>
                <li><a href="#">Amazon and COVID-19</a></li>
                <li><a href="#">Your Account</a></li>
                <li><a href="#">Your Orders</a></li>
                <li><a href="#">Shipping Rates & Policies</a></li>
                <li><a href="#">Return & Replacements</a></li>
                <li><a href="#">Manage Your Content and Devices</a></li>
                <li><a href="#">Amazon Assistant</a></li>
                <li><a href="#">Help</a></li>
            </ul>
        </div>
        <div class="foot-panel3">
            <div className="logo">

            </div>
        </div>

        <div className="foot-panel4">
            <div className="pages">
                <a href="#">Conditions of Use</a>
                <a href="#">Privacy Notice</a>
                <a href="#">Your Ads Privacy Choices</a>
            </div>
            <div className="copyright">
                © 1996-2023, Amazon.com, Inc. or its affiliates
            </div>
        </div>
    </footer>
  )
}

export default Footer
