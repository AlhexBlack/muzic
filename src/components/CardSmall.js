import React from 'react'
import './CardSmall.css'

const CardSmall = ({
  imgSrc,
  imgAlt,
  title1,
  title2,
  artist}
) => {
  return (
    <div id='smallcard'>
      <img src={imgSrc} alt={imgAlt} id='artist-image'></img>
      <h3 id='songtitle'>{title1}<br/><span style={{color:'goldenrod', textTransform: 'uppercase'}}>{title2}</span></h3>
      <h4 id='artist'>{artist}</h4>
    </div>
  )
}

export default CardSmall
