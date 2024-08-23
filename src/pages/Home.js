import React from 'react'
import './Home.css'
import Button from '../components/Button.js'
import Card from '../components/Card.js'
import Wave from '../images/wave.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  const musicList = [
    {
      id: 1,
      imgSrc:'/images/ayra.JPG',
      imgAlt:"Ayra starr",
      title:"Bloody Samaritan",
      artist:"Ayra Starr",
      isLarge: false,
    },
    {
      id: 2,
      imgSrc:'/images/omah_lay.JPG',
      imgAlt:"omah lay",
      title:"Bad Influence",
      artist:"Omah Lay",
      isLarge: false,
    },
    {
      id: 3,
      imgSrc:'/images/wizkid.JPG',
      imgAlt:"wizkid",
      title:"Essence",
      className:'large',
      artist:"Wizkid",
      isLarge: true,
    },
    {
      id: 4,
      imgSrc:'/images/tiwa.JPG',
      imgAlt:"Tiwa Savage",
      title:"Pick up",
      artist:"Tiwa Savage",
      isLarge: false,
    },
    {
      id: 5,
      imgSrc:'images/kizz_daniel.JPG',
      imgAlt:"Kizz daniel",
      title:"Eh God",
      artist:"Kizz Daniel",
      isLarge: false,
    },
  ]

  return (
    <div id='page'>
    <div id='carddiv'>
      <Button className={`left`}>
        <FontAwesomeIcon icon={faArrowLeftLong} id='arrowleft'/>
      </Button>

    {
      musicList.map((music) => (
        <Card
      imgSrc={music.imgSrc}
      imgAlt={music.imgAlt}
      title={music.title}
      artist={music.artist}
      className={music.isLarge ? 'large' : ''}/>
      ))
    }

    <Button className={`right`}>
        <FontAwesomeIcon icon={faArrowRightLong} id='arrowleft'/>
    </Button>
    </div>
    <div id='wave-container'>
      <img src={Wave} alt='music wave' id='wave'></img>
    </div>
    </div>
  )
}

export default Home
