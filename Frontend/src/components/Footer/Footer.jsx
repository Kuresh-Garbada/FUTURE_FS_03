// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
        <img id='logo' src={assets.logo_dark} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam delectus molestiae eveniet earum, itaque dolore sint deleniti commodi, quidem alias soluta est excepturi sapiente iste dicta laborum doloremque? Numquam, deserunt!</p>
        <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
        </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
        <h2>GET IN TOUCH</h2>
        <ul>
            <li>+91 9327640950</li>
            <li>23dce018@charusat.edu.in</li>
            <li>+91 0000000000</li>
            <li>23dce015@charusat.edu.in</li>
        </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 © QuickBite.com - All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer
