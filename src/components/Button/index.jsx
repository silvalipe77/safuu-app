import React from 'react'
import { ButtonDefault, ButtonSecondary } from './styles'

const Buttons = ({children, name, type = 'default', href}) => {
  return (
    <>
      {type == 'default' && (
        <ButtonDefault><a href={href}>{name}</a></ButtonDefault>
      )}
      {type == 'secondary' && (
        <ButtonSecondary><a href={href}>{name}</a></ButtonSecondary>
      )}
    </>
  )
}

export default Buttons