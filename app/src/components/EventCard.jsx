import React from 'react'
import icons from '../database/icons';

const EventCard = ({event}) => {
  const modifier = event.modifier;

  return (
    <div className="event-card">
      <p>
        {event.type}
        <span className={event.platform}>{icons[event.platform]}</span>
      </p>
      <p className="event-card-amount">{event.amount}</p>
      <p className={modifier <= 0 ? "red" : "green"}>
        <span className={modifier <= 0 ? "material-icons" : "material-icons reverse-icon"}>arrow_drop_down</span>
        {modifier}%</p>
    </div>
  )
}

export default EventCard
