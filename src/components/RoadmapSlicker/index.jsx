import React from 'react'
import { Container } from './styles'

const RoadmapSlicker = (phases) => {
  return (
    <Container>
      {console.log(phases)}
      <div className="roadmap-line">
        {phases.phases.map((phase, index) => {
          return <div className="roadmap-line__step">
            <div className={`roadmap-card rm-card${index}`}>
              <h4>{phase.title}</h4>
              <p>{phase.text}</p>
            </div>
          </div>
        })}
      </div>
    </Container>
  )
}

export default RoadmapSlicker