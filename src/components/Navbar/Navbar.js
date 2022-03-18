import React from 'react';
import './Navbar.css';
import bag from '../../media/icons/bag.svg';

const Navbar = () => {
  return (
    <div>
      <div className="container my-5">
      <nav style={{backgroundColor: "aqua", padding: "15px", borderRadius: "10px"}}>
      <div className="nav-center d-flex justify-content-between align-items-center">
        <h3 style={{cursor: "pointer"}}>hotDeals</h3>
        <div className="nav-container d-flex">
          <img src={bag} alt="bag" />
          <div className="amount-container">
            <p className="total-amount p-2 fs-4"> <sup>5</sup></p>
          </div>
        </div>
      </div>
      </nav>
      </div>
    </div>
  );
};

export default Navbar;