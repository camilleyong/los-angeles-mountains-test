import React from 'react';
import Home from './pages/Home';
import Nav from './Footer';
import History from './pages/History';
import Footer from './Footer';
import './css/mountains.css';


export default function Mountains() {
    return (
        <div className='entirePage'>
            {<Nav />}
            {<Home />}
            {<History />}
            {<Footer />}
        </div>
    );
}