import React from 'react'
import { introductionContents } from '../../../global/websiteContent'
import Button from '../../Button'
import { Container } from './styles'
import AnimatedWheel from '../../AnimatedWheel'

const Introduction = () => {
  return (
    <Container>
      <div className="container">
        <div>
          <AnimatedWheel itens={introductionContents.aiInfos} />
        </div>
        <div className="right-info">
          <h3 className='right-info__title'>{introductionContents.title}</h3>
          <i className='right-info__sub-title'>{introductionContents.subtitle}</i>
          <p className='right-info__text'>{introductionContents.text}</p>
          <p className='right-info__btn-head'>{introductionContents.buttonsHeaderLabel}</p>
          <div className="right-info__buttons">
            {introductionContents.buttons.map(({name, href, type}, index) => {
              return <Button key={`introduction-buttons__${index}`} href={href} name={name} type={type}/>
            })}
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Introduction