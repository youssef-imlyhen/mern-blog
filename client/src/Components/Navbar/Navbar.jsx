import React from 'react'
import {Link} from 'react-router-dom'
import "./navbar.css"
function Navbar() {
    return (
    <div className="navbar">
        <div className="second-half">
            <ul className="second-half-links">
                <li><Link to="/" className="link1">Home</Link></li>
                <li><Link to="/Editor" className="link4">Editor</Link></li>
                <li><Link to="/signup" className="link2">Sign Up</Link></li>
                <li><Link to="#Contact" className="link3">Contact</Link></li>
            </ul>
        </div>
    </div>
    )}

export default Navbar
