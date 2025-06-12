import React from 'react';
import Sidebar from '../components/sidebar'; // ใช้ตัวใหญ่
import '../components/style3.css';

const Home = () => {
  return (
    
    <div className="home-container">
      <Sidebar />
      <div className="main-content">
        <div className="header-wrapper">
          <div className="header-title">
            <span>MASSAGE</span>
            <h2>Home</h2>
          </div>
          <div className="user-info">
            <div className="search-box">
              <i className="fa-solid fa-search"></i>
              <input type="text" placeholder="Search" />
            </div>
          </div>
          <img src="pro.jfif" alt="profile" />
        </div>

        <section className="about-us">
          <img src="22.png" alt="about us" />
          <div className="about">
            <div className="text">
              <h1>Welcome our Employee'!!</h1>
              <h5>Be kind & <span>Service Mind</span></h5>
              <p>"When you encounter fatigue and discomfort, we have the power to alleviate these symptoms and enhance your well-being. Elevate your happiness through our massage services."</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
