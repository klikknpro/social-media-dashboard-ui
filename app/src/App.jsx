import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import PlatformCard from "./components/PlatformCard";
import EventCard from "./components/EventCard";
import data from "./database/sample-data";

function App() {
  const platforms = data.platforms;
  const events = data.events;

  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="platforms-container">
        {platforms.map((platform, i) => (
          <PlatformCard platform={platform} key={i} />
        ))}
      </div>
      <div className="overview">
        <h2>Overview - Today</h2>
        <div className="overview-container">
          {events.map((event, i) => (
            <EventCard event={event} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
