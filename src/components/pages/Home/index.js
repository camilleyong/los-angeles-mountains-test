import React from 'react';
import { Parallax } from "react-parallax";
import Sky from '../../assets/sky.jpg';
import Image from '../../assets/snowy_mountain_png_by_absurdwordpreferred_d2l0r5a-414w-2x.png';
import './home.css';

export default function Home() {
    return (
    <Parallax
    
    bgImage={Sky}
    bgImageAlt="a sky with snow falling"
    strength={800}
    className="home-image"
  >

<div class="container">
    <div className="row justify-content-end">
      <ul>
        <li>
          <a href="" className="col-4 link">Team
          </a>
        </li>
        <li>
          <a href="" className="col-4 link">History
          </a>
        </li>
      </ul>
    </div>
    </div>

        <div className='container' id="home">
          <div className='title'>
            <p className='intro'> LOSANGELES</p>
            <p className='mount'>MOUNTAINS</p>
          </div>
          <div className='image'>
          <img src={Image}  className='trans' alt="mountains"/>
          </div>
        </div>
        </Parallax>
    )
}