import React from 'react'
import { Container } from './styles'
import { roadmapContents } from '../../../global/websiteContent'
import RoadmapSlicker from '../../RoadmapSlicker'
import Separator from '../../Separator'

const Roadmap = () => {
  return (
    <Container>
      <div className="title">
        <h2>{roadmapContents.title}</h2>
        <Separator/>
      </div>
      <div className="container">
        <RoadmapSlicker phases={roadmapContents.phases}/>
      </div>
    </Container>
  )
}

export default Roadmap