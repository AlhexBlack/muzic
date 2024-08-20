import React from 'react'
import './Next.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

const next = () => {
  return (
    <div><button id='nextbutton'><FontAwesomeIcon icon={faArrowRightLong} id='arrowright'/></button></div>
  )
}

export default next