import React from 'react';
import "./Header.css";
import Ticker from "react-ticker";

function Header() {
  return (
    <div className="header">
    <Ticker mode="smooth" className="header_ticker">
    {({index})=>(
      <>
      <p>Helo ,This is tiker component</p>
      </>
    )}
    </Ticker>
    </div>
  )
}

export default Header
