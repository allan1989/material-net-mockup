import React from 'react';

export const Image = ({className, src, alt, title}) => {
  return <img className={className} src={src} alt={alt} title={title}/>
}