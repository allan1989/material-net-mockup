import React from 'react';
import './aside.css';

export const Aside = (props) => {
  return (
    <aside className="aside">
      { props.children }
    </aside>
  )
}