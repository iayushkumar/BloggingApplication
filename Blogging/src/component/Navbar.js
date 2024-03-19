import React from 'react';
import { Link, useNavigate } from "react-router-dom"; // Import Link separately
import '../App.css';


export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/Login')
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-dark">
        <div className="container-fluid">

        {localStorage.getItem('token') ? (
  <>
    <Link className="navbar-brand text-light" to="/">
      Blog Application
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>


    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-light" aria-current="page" to="/">
            All Blog
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active text-light" to="/personal">
            Personal Blog
          </Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link active text-light" to="/post">
            Post Blog
          </Link>
        </li>








      </ul>
    </div>
  </>
) : (


///If the user is not login




  <>
    <Link className="navbar-brand text-light" to="/">
      Blog Application
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-light" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-light" to="/about">
            About
          </Link>
        </li>
      </ul>
    </div>
  </>
)}

         
        </div>

      

        {!localStorage.getItem('token') ? (
          <form className="d-flex">
            <Link className="btn btn-primary mx-1" to="/Login" role="button">
              Login
            </Link>
            <Link className="btn btn-primary mx-1" to="/Signup" role="button">
              Signup
            </Link>
          </form>
        ) : (
          // If the user has a token, render a logout button if they are on the login page,
          // otherwise hide the logout button

            <button onClick={handleLogout} className="btn btn-primary">Logout</button> 
            
       ) }




      </nav>
    </div>
  );
}
