import React from 'react'
import { Container } from './styles'

const HomeCard = ({img, title, text}) => {
  return (
    <Container>
      <div className="card-img">
        <img src={img} alt="" />
      </div>
      <h4>{title}</h4>
      <p>{text}</p>
    </Container>
  )
}

export default HomeCard