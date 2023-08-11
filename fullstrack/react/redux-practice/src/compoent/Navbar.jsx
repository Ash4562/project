import React from 'react'
import { } from "react-router-dom"

const Navbar = () => {
    return <>
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container-fluid">
                <Link to="/">SKILLHUB</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link to="/">Register</Link>
                        <Link to="/login">Login</Link>
                    </div>
                </div>
            </div>
        </nav>
    </>
}

export default Navbar
