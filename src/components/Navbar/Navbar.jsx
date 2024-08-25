import React from 'react'
import "./Navbar.css"
import { Link, useSearchParams } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {

  return (
    <>
    <nav className="navbar navbar-expand-lg navBarBackground">
        <div className="container-fluid p-3">
            <Link to={"/"} className='navbar-brand text-center'>MovieInfo</Link>
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
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                    
                    </li>      
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar