import React from 'react'
import './Previous.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'

const previous = () => {
  return (
    <div><button id='previousbutton'><FontAwesomeIcon icon={faArrowLeftLong} id='arrowleft'/></button></div>
  )
}

export default previous