import React from 'react'
import { Container } from './styles'
import Button from '../Button'

const BecomeCard = ({title, subtitle, text, price, time, button}) => {
  return (
    <Container>
      <div className="become-container">
        <h4 className="title">{title}</h4>
        <p className="subtitle">{subtitle}</p>
        {text.map(t => <p className="text">{t}</p>)}
        <span className="price">{price}</span>
        <p className="time">{time}</p>
        <Button className="btn" href={button.href} name={button.name} type={button.type}/>
      </div>
    </Container>
  )
}

export default BecomeCard