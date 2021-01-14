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
      <div class="cards">
        <h1 class="cards-eventName">{this.props.eventName}</h1>
        <h1 class="cards-date">{this.props.date}</h1>
        <h1 class="cards-days">{this.getDaysToEvent()} days til</h1>
      </div>
    );
  }
}

export default EventCard;
