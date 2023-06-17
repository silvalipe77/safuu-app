import React from 'react'
import { Container } from './styles'
import { investimentContents } from '../../../global/websiteContent'
import Button from '../../Button'
import img from '../../../assets/images/icon-pyramid.png'

const Investiment = () => {
  return (
    <Container>
      <div className="container">
        <div className="left-info">
          <h3 className="left-info__title">{investimentContents.title}</h3>
          <i className="left-info__subtitle">{investimentContents.subtitle}</i>
          <p className="left-info__text">{investimentContents.text}</p>
          <div className="left-info__buttons">
            {investimentContents.buttons.map(({name, href, type}, index) => {
              return <Button key={`introduction-buttons__${index}`} href={href} name={name} type={type}/>
            })}
          </div>
        </div>
        <div className="right-info">
          <img className="right-info__img" src={img} alt="" />
          <h2 className="right-info__data">{investimentContents.data}</h2>
          <p className="right-info__legend">{investimentContents.legend}</p>
        </div>
      </div>
    </Container>
  )
}

export default Investiment