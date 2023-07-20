import React from 'react';
import { Parallax } from "react-parallax";
import Sky from '../../assets/sky.jpg';
import Image from '../../assets/transparent.png';
import './home.css';

export default function Home() {
    return (
    <Parallax
    
    bgImage={Sky}
    bgImageAlt="a sky with snow falling"
    strength={800}
    className="home-image"
  >
        <div className='container' id="home">
          <div className='title'>
            <p className='intro'> LOSANGELES</p>
            <p className='mount'>MOUNTAINS</p>
          </div>
          <div className='image'>
          <img src={Image} alt="mountains" />
          </div>
        </div>
        </Parallax>
    )
}