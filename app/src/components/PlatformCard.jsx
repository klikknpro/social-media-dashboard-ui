import React from 'react';
import icons from '../database/icons';

const PlatformCard = ({platform}) => {
  const difference = Object.values(platform).map(info => info.difference);
  const icon = (Object.keys(platform)[0]);

  return (
    <div className={`platform-card ${icon}-border`}>
      <div className={icon === "instagram" && "gradient-line"}></div>
      <p>
        <span className={icon}>{icons[icon]}</span>
        @{Object.values(platform).map(info => info.name)}
      </p>
      <h1>{Object.values(platform).map(info => info.followers)}</h1>
      <p>followers</p>
      <p className={difference <= 0 ? "red" : "green"}>
        <span className={difference <= 0 ? "material-icons" : "material-icons reverse-icon"}>arrow_drop_down</span>
        {difference} today</p>
    </div>
  )
}

export default PlatformCard
