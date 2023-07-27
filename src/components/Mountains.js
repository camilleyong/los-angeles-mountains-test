import React from 'react';
import Home from './pages/Home';
import History from './pages/History';
import Footer from './Footer';
import './css/mountains.css';


export default function Mountains() {
    return (
        <div className='entirePage'>
            {<Home />}
            {<History />}
            {<Footer />}
        </div>
    );
}