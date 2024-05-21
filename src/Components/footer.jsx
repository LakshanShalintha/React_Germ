import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

const footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3 className="footer-heading">About Us</h3>
                    <p className="footer-text">We are a leading travel agency offering custom travel experiences around the world.</p>
                </div>
                <div className="footer-section">
                    <h3 className="footer-heading">Navigation</h3>
                    <ul className="footer-list">
                        <li><a href="/home" className="footer-link">Home</a></li>
                        <li><a href="/destinations" className="footer-link">Destinations</a></li>
                        <li><a href="/tours" className="footer-link">Tours</a></li>
                        <li><a href="/contact" className="footer-link">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3 className="footer-heading">Follow Us</h3>
                    <div className="footer-social-icons">
                        <a href="https://facebook.com" className="footer-icon-link"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="https://twitter.com" className="footer-icon-link"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="https://instagram.com" className="footer-icon-link"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://linkedin.com" className="footer-icon-link"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                </div>
                <div className="footer-section">
                    <h3 className="footer-heading">Contact Us</h3>
                    <p className="footer-text">Email: info@travelagency.com</p>
                    <p className="footer-text">Phone: +123 456 7890</p>
                </div>
            </div>
            <div className="footer-copyRight">
                <p className="footer-text">© 2024 Travel Agency. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default footer;
