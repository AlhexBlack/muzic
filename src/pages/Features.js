import React from 'react'
import Card from '../components/Card'
import Ayra from '../images/ayra.JPG'

const Features = () => {
  return (
    <Card
    imgSrc={Ayra}
    imgAlt={'Ayra starr picture'}
    title={'Bloody Samaritan'}
    artist={'Ayra Starr'}
    Btnicon={'>'}
    className={`large`}>
    </Card>
  )
}

export default Features
