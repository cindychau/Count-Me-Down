import React, { Component } from 'react';

function EventCard(props) {
  const getDaysToEvent = () => {
    let currentDate = new Date(); // Wed Jan 13 2021 23:35:46 GMT-0500 (Eastern Standard Time)
    let eventDate = new Date(props.date); //turns MM-DD-YY to same format as above

    // fix offset
    eventDate.setDate(eventDate.getDate()+1);
    eventDate.setHours(0,0,0,0);
    currentDate.setHours(0,0,0,0);

    // Evaulates in milliseconds

    const daysToEvent = convertToDays(eventDate - currentDate);

    return daysToEvent;
  };
  const convertToDays = (timeInMS) => {
    if (timeInMS < 86399999) {
      return 0;
    }

    const result = timeInMS / 1000 / 60 / 60 / 24;
    return Math.ceil(result);
  };

  const formatDate = (date) => {
    let d = new Date(date);
    d.setDate(d.getDate()+1);
      let month = '' + (d.getMonth() + 1);
      let day = '' + d.getDate();
      let year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [month, day, year].join('-');
  };

  return (
    <div class="cards">
      <h1 class="cards-eventName">{props.eventName}</h1>
      <h1 class="cards-date">{formatDate(props.date)}</h1>
      <h1 class="cards-days">{getDaysToEvent()} days</h1>
      <button class="btn-delete" onClick={() => props.handleDelete(props.id)}>
        Delete
      </button>
      {/* <button onClick="handleEdit">Edit</button> */}
    </div>
  );
}

export default EventCard;
