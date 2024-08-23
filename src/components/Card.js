import React from 'react'
import './Card.css'
import Button from './Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const Card = ({
    imgSrc,
    imgAlt,
    title,
    artist,
    className,
    ...props
}) => {
    const isLarge = className?.includes('large');

  return (
    <div className={`card ${className}`} {...props}>
        <img src={imgSrc} alt={imgAlt} ></img>
        <h3>{title}</h3>
        {isLarge ? (<Button><FontAwesomeIcon icon={faPlay} id='play'/></Button>) : (<h4>{artist}</h4>)}
    </div>
  )
}

export default Card