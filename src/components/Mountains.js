import React from 'react';
import Home from './pages/Home';
import Footer from './Footer';
import './css/mountains.css';


export default function Mountains() {
    return (
        <div className='entirePage'>
            {<Home />}
            {<Footer />}
        </div>
    );
}