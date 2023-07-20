import React from 'react';
import Nav from './Nav';
import Home from './pages/Home';
import Footer from './Footer';
import './css/portfoliocontainer.css';


export default function PortfolioContainer() {
    return (
        <div className='entirePage'>
            {<Nav />}
            {<Home />}
            {<Footer />}
        </div>
    );
}