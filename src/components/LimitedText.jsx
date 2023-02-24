import React from 'react';

export const LimitedText = ({ children, limit }) => {

  return(
    <span>
      {children.length > limit ? children.slice(0, limit) + '...' : children}
    </span>
  )
}