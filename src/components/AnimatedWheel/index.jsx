import React from 'react'
import { Container } from './styles'

const AnimatedWheel = ({itens}) => {
  const circleRadius = 200
  return (
    <Container>
      <div className="container-circle">
        {itens.map((item,index) => <div className={`icon-hover step${index}`}></div>)}
      </div>
    </Container>
  )
}

export default AnimatedWheel