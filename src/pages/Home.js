import React from 'react'
import './Home.css'
import Wizkid from '../images/wizkid.JPG'
import AyraStarr from '../images/ayra.JPG'
import OmahLay from '../images/omah_lay.JPG'
import Tiwa from '../images/tiwa.JPG'
import Kizz from '../images/kizz_daniel.JPG'
import Button from '../components/Button.js'
import Card from '../components/Card.js'
import Wave from '../images/wave.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

const Home = () => {
  return (
    <div id='page'>
    <div id='carddiv'>
      <Button className={`left`}>
        <FontAwesomeIcon icon={faArrowLeftLong} id='arrowleft'/>
      </Button>

    <Card
      imgSrc={AyraStarr}
      imgAlt="Ayra starr"
      title="Bloody Samaritan"
      artist="Ayra Starr"/>

    <Card
    imgSrc={OmahLay}
    imgAlt="omah lay"
    title="Bad Influence"
    artist="Omah Lay"/>

    <Card
    imgSrc={Wizkid}
    imgAlt="wizkid"
    title="Essence"
    className={'large'}
    artist="Wizkid"/>

    <Card
    imgSrc={Tiwa}
    imgAlt="Tiwa Savage"
    title="Pick up"
    artist="Tiwa Savage"/>

    <Card
    imgSrc={Kizz}
    imgAlt="Kizz daniel"
    title="Eh God"
    artist="Kizz Daniel"/>

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
