import React from 'react';
import './css/nav.css';


function Nav({ currentPage, handlePageChange }) {
  return (
    <div className='navigation'>
    <div class="container">
    <div className="row justify-content-end">
    <ul className="nav nav-tabs">
      <li className="col-5 link">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // This is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="col-5 link">
        <a
          href="#team"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Team' ? 'nav-link active' : 'nav-link'}
        >
          Team
        </a>
      </li>
      <li className="col-5 link">
        <a
          href="#history"
          onClick={() => handlePageChange('Blog')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'History' ? 'nav-link active' : 'nav-link'}
        >
          History
        </a>
      </li>
    </ul>
    </div>
    </div>
    </div>
  );
}

export default Nav;