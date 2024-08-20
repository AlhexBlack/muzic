import React from 'react'
import CardSmall from '../components/CardSmall.js'
import CardLarge from '../components/CardLarge.js'
import './Home.css'
import AyraStarr from '../images/ayra.JPG'
import OmahLay from '../images/omah_lay.JPG'
import Tiwa from '../images/tiwa.JPG'
import Kizz from '../images/kizz_daniel.JPG'
import Previous from '../components/Previous.js'
import Next from '../components/Next.js'

const Home = () => {
  return (
    <div id='carddiv'>
    <Previous/>
    <CardSmall
      imgSrc={AyraStarr}
      imgAlt="wizkid"
      title1="Bloody"
      title2="SAMARITAN"
      artist="Ayra Starr"/>
    <CardSmall
    imgSrc={OmahLay}
    imgAlt="wizkid"
    title1="Bad"
    title2="influence"
    artist="Omah Lay"/>
    <CardLarge/>
    <CardSmall
    imgSrc={Tiwa}
    imgAlt="wizkid"
    title1="Pick"
    title2="up"
    artist="Tiwa Savage"/>
    <CardSmall
    imgSrc={Kizz}
    imgAlt="wizkid"
    title1="Eh"
    title2="God"
    artist="Kizz Daniel"/>
    <Next/>
    </div>
  )
}

export default Home
