import React from "react";
import "./menu-item.scss";

export const MenuItem = (props) => (
  <div className={`${props.size} menu-item`}>
    <div
      style={{
        backgroundImage: `url(${props.imageurl})`,
      }}
      className="background-image"
    />
    <div className="content">
      <h1 className="title">{props.title}</h1>
      <span className="subtitle">Explore</span>
    </div>
  </div>
);
