import React from 'react'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container ">
    <Link className="navbar-brand" href="#"><img src={logo} alt="logo" className='w-25' /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <Link className="nav-link text-white fs-5" to="home">Home</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white fs-5" to="categories">Categories</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white fs-5" to="area">All Area</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white fs-5" to="ingredients">ingredients</Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link text-white fs-5" to="search"><i class="fa-solid fa-magnifying-glass"></i></Link>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
