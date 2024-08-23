import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'

const Button = ({to, className, onClick, children, ...props}) => {
  return (
    <Link
    to={to}
    className={`custom-button ${className}`}
    onClick={onClick}
    {...props}
    >
        {children}
    </Link>
  )
}

export default Button