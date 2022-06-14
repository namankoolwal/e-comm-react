import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
     
<header class="flex">
    <ul class="flex" type="none">
      <li><Link to={'/'}> <i class="fas fa-home"></i><a> Home</a></Link></li>
      <li><Link to={'#'}> <i class="fas fa-user"></i><a href="#"> About Us</a></Link></li>
      <li><Link to={'/details'}><i class="fas fa-phone"></i><a href="cart.html"> Contact Us</a></Link></li>
    </ul>
    <ul class="flex" type="none">
      <li><Link to={'/cart'}><i class="fas fa-shopping-cart"></i><a>Cart</a></Link></li>
      <li> <Link to={'/sign'}><i class="fas fa-sign-in-alt"></i><a>Login</a></Link></li>

    </ul>
  </header>
    </div>
  )
}

export default Navbar