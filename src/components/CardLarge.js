import React from 'react'
import './CardLarge.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const CardLarge = () => {
  return (
    <div id='card'>
      <button id='buttonlarge'><FontAwesomeIcon icon={faPlay} id='play'/></button>
      <h3 id='h3large'>ESSENCE</h3>
    </div>
  )
}

export default CardLarge
