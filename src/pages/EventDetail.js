import React from 'react'
import { useParams } from 'react-router-dom'


const EventDetail = () => {
  
  const params = useParams()
  return (
    <div>
      <h1>EventDetail</h1>
      <p>Event Id{params.eventId}</p>
    </div>
  )
}

export default EventDetail