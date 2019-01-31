/*
    Corey Emery (cemery@andrew.cmu.edu)
    WickEditor Website
    Wick.js

    Top-Level React Component
*/

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import WickRouterContainer from '../router/WickRouterContainer.js';
import Footer from '../footer/Footer.js';

import '../../scss_styles/Wick.scss';

const Wick = () => (
    <div className="Wick">
        <div className="Wick-background" />
        <Router>
            <WickRouterContainer />
        </Router>
        <Footer />
    </div>
);

export default Wick;