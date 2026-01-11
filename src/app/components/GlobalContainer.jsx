import React from 'react'

const GlobalContainer = ({children, className}) => {
  return (
    <div className={`md:px-10 px-3 ${className}`}>{children}</div>
  )
}

export default GlobalContainer