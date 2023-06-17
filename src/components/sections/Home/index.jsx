import React from 'react'
import HomeCard from '../../HomeCard'
import { homeContents } from '../../../global/websiteContent'
import { Container } from './styles'

const Home = () => {
  return (
    <Container id="home">
      <div className="container">
        <div className="title-banner">
          <h2 className='title-banner__primary'>{homeContents.maintitle}</h2>
          <h2 className='title-banner__secondary'>{homeContents.mainSubtitle}</h2>
        </div>
        <div className="cards-container">
          {homeContents.cards.map(({img, title, text},index) => <HomeCard key={`home-card__${index}`} img={img} title={title} text={text}/>)}
        </div>
      </div>
    </Container>
  )
}

export default Home