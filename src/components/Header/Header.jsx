import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div
        style={{
          background: "black",
          height: "60px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "32px",
          fontWeight:'600'
        }}
      >
        <div style={{ color: "white" }}><Link to='/' style={{textDecoration:'none',color:'white'}}>Rohit Mishra</Link></div>
      </div>
    </div>
  );
};

export default Header;
