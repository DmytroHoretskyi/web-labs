    import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {

    const navStyle = {
        color: 'white',
        fontFamily: "monospace",
        borderStyle: "double",
        textDecoration: 'none',
        borderColor: "white",
    };

    return (
        <nav>
            <Link style={ navStyle } to="/">
                <h1 className="navTitle">Dark Shop</h1>
            </Link>
            
            <ul className="nav-links">
                <Link style={ navStyle } to="/">
                    <li>Home</li>
                </Link>
                <Link style={ navStyle } to="/catalog">
                    <li>Catalog</li>
                </Link>
                <Link style={ navStyle } to="/cart">
                    <li>Cart</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;