/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    Footer.js

    Footer information for website
*/

import React, {Fragment} from 'react';

import '../../scss_styles/Footer.scss';

const Footer = () => (
    <Fragment>
        <div id="Footer-container">
            <div id="Footer-content">
                <span className="Footer-item">Product</span>
                <span className="Footer-item">Company</span>
                <span className="Footer-item">Learn & Support</span>
                <span className="Footer-item">Contact</span>
            </div>
            <div id="Footer-copyright">© 2019, Wicklets, LLC.</div>
        </div>
    </Fragment>
);

export default Footer;