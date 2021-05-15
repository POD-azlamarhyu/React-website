import React from 'react';
import {Link,withRouter} from "react-router-dom";
import './navbar.scss';
function Navbar(props){
    return(
        <div className="navbar">
            <nav className="navbar-nav">
                <div className="container">
                    <div>
                        <ul className="navbar-items">
                            <li className="nav-item">
                                <Link className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link">
                                    Products
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link">
                                    Policy
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link">
                                    Why administor
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;