import React from 'react';
import './header.css';

export const Header = (props) => {
  return(
    <header className="header">
        <div className="headerInner"> 
          { props.children}
        </div>
    </header>
  )
}