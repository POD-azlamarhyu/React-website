import React from 'react'
import {Link,withRouter} from 'react-router-dom';
import "./footer.scss";
function Footer(props) {
    return (
        <div className="footer"> 
            <footer class="footer-box">
                <div className="container">
                    <div className="footer-clum1">
                        <div>
                            <h2>poricy</h2>
                        </div>
                        <ul className="footer-items">
                            <li className="footer-item">
                                <Link to='/policy'>
                                    Policy
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link to='/contact'>
                                    Contact
                                </Link>
                            </li>
                            <li className="footer-item">
                                <Link to='/termsofuse'>
                                    terms of use
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-clum2">
                        <div>
                            <h2>menu</h2>
                        </div>
                        <ul className="footer-item">
                            <li className="footer-imtes">
                                <Link to="/item">
                                    item1
                                </Link>
                            </li>
                            <li className="footer-imtes">
                                <Link to="/imte">
                                    item2
                                </Link>
                            </li>
                            <li className="footer-imtes">
                                <Link to="/item">
                                    item3
                                </Link>
                            </li>
                            <li className="footer-imtes">
                                <Link to="/item">
                                    item4
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-clum3">
                        <div>
                            <h2>About</h2>
                        </div>
                        <ul className="footer-item">
                            <li className="footer-imtes">
                                <Link to="/item">
                                    item1
                                </Link>
                            </li>
                            <li className="footer-imtes">
                                <Link to="/item">
                                    item2
                                </Link>
                            </li>
                            <li className="footer-imtes">
                                <Link to="/item">
                                    item3
                                </Link>
                            </li>
                            <li className="footer-imtes">
                                <Link to="/item">
                                    item4
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-container">
                    C.I.Inc.| Copyright &copy : 2021
                </div>
            </footer>
        </div>
    )
}

export default Footer;
