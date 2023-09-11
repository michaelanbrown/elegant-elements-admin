import React from "react";
// import NavBar from "./NavBar";

function Header({ productCount, setProductCount, custAddresses }) {

  return (
    <div className="Header">
      <header>
        <div>
            <h1 className="elegant-header">Elegant Elements</h1>
            <h1>Admin</h1>
            <br/>
            <p className="active"><em className="welcome">✨Adding a touch of inspiration and elegance to your every day life✨</em></p>
            <img className="eleganceimg" src={"https://i.imgur.com/upX3ZLK.png"} alt="Elegant Elements" width="20%" height="20%"/>
        </div>  
      </header>
    </div>
  );
}

export default Header;