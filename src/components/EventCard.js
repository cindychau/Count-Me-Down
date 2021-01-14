import React, { Component } from 'react';

class EventCard extends React.Component {
  getDaysToEvent() {
    const currentDate = new Date(); // Wed Jan 13 2021 23:35:46 GMT-0500 (Eastern Standard Time)
    const eventDate = new Date(this.props.date); //turns MM-DD-YY to same format as above

    // Evaulates in milliseconds
    const daysToEvent = this.convertToDays(eventDate - currentDate);

    return daysToEvent;
  }

  convertToDays(timeInMS) {
    const result = timeInMS / 1000 / 60 / 60 / 24;
    return Math.floor(result);
  }

  render() {
    return (
      <div>
        <h1>{this.props.date}</h1>
        <h2>{this.getDaysToEvent()} days til</h2>
        <h1>{this.props.eventName}</h1>
        <p>_____________________________________________</p>
      </div>
    );
  }
}

export default EventCard;
