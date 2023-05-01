import React from "react";
import "./hompage.scss";
export const Homepage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Men</h1>
            <span className="subtitle">Explore</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Jackets</h1>
            <span className="subtitle">Explore</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Hats</h1>
            <span className="subtitle">Explore</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Tshirts</h1>
            <span className="subtitle">Explore</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Trousers</h1>
            <span className="subtitle">Explore</span>
          </div>
        </div>
      </div>
    </div>
  );
};
