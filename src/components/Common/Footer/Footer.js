import React from 'react'
import Row from 'react-bootstrap/Row';

const Footer = () => {
    return (
        <Row className="container" style={{marginTop: "15px"}}>
        <div className="col-md-6">
            <h2 className="footer_list-title">Customer Service</h2>
            <ul className="footer_list">
                <li className="footer_list-item">
                    <a href="#">FAQ</a>
                </li>
                <li className="footer_list-item">
                    <a href="#">Contact Us</a>
                </li>
            </ul>
        </div>
        <div className="col-md-6">
            <h2 className="footer_list-title">About Us</h2>
            <ul className="footer_list">
                <li className="footer_list-item">
                    <a href="#">About Us</a>
                </li>
            </ul>
        </div>
        </Row>
    );
}

export default Footer;