import React from 'react'
import { Container } from './styles'
import { becomeContents } from '../../../global/websiteContent'
import BecomeCard from '../../BecomeCard'
import Separator from '../../Separator'

const Become = () => {
  return (
    <Container>
      <div className="title">
        <h2>{becomeContents.title}</h2>
        <Separator/>
      </div>
      <div className="container">
        {becomeContents.cards.map((card, index) => {
          return <BecomeCard key={`become-card__${index}`} {...card}/>
        })}
      </div>
    </Container>
  )
}

export default Become