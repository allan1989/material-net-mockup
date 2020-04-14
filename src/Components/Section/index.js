import React from 'react';
import './section.css';

export const Section = (props) => {
  return(
    <section className="section">
      { props.children}
    </section>
  )
}