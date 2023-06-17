import React from 'react'
import Separator from '../../Separator'
import { contactContents } from '../../../global/websiteContent'
import {Container} from './styles'

const Contact = () => {
  return (
    <Container>
      <div className="title">
        <h2>{contactContents.title}</h2>
        <Separator/>
      </div>
      <div className="container">
        {contactContents.contacts.map((contact, index) => {
          return <a href={contact.href}><img src={contact.icon} alt="" /></a>
        })}
      </div>
    </Container>
  )
}

export default Contact