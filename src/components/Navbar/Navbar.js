import React, { useState } from 'react';
import './Navbar.css';
import bag from '../../media/icons/bag.svg';
import Products from '../Products/Products';

const Navbar = () => {
  const [count, setCouont] = useState(0);
  // const add = () => {
  //   setCouont(count + 1)
  // }
  return (
    <div>
      <div className="container my-5">
      <nav style={{backgroundColor: "aqua", padding: "15px", borderRadius: "10px"}}>
      <div className="nav-center d-flex justify-content-between align-items-center">
        <h3 style={{cursor: "pointer"}}>hotDeals</h3>
        <div className="nav-container d-block position-relative">
          <img src={bag} alt="bag" />
          <div className="amount-container">
            <p className="total-amount text-info fw-bold fs-5"> {count} </p>
          </div>
        </div>
      </div>
      </nav>
      </div>
      <Products></Products>
      <div className="container">
      <button className='m-3' onClick={() => setCouont(count+1)}>Add</button>
      <button onClick={() => count <= 0 ? 0 :  setCouont(count-1)}>Delete</button>
      </div>
    </div>
  );
};

export default Navbar;