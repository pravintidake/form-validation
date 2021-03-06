import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <Link className="navbar-brand text-primary" to="/">Book Store</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button type="button" className="nav-link text-primary border-0" data-bs-toggle="modal" data-bs-target="#cartModal"><i className="fa-solid fa-cart-shopping"></i> Cart</button>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-primary" to="/admin">Admin</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-primary" to="/login">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-primary" to="/register">Register</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default NavBar