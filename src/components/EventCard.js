import React, { Component } from 'react';

function EventCard(props) {
  const getDaysToEvent = () => {
    const currentDate = new Date(); // Wed Jan 13 2021 23:35:46 GMT-0500 (Eastern Standard Time)
    const eventDate = new Date(props.date); //turns MM-DD-YY to same format as above
    // Evaulates in milliseconds
    const daysToEvent = convertToDays(eventDate - currentDate);

    return daysToEvent;
  };
  const convertToDays = (timeInMS) => {
    const result = timeInMS / 1000 / 60 / 60 / 24;
    return Math.floor(result);
  };

  const formatDate = (date) => {
    let d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [month, day, year].join('-');
  };

  return (
    <div class="cards">
      <h1 class="cards-eventName">{props.eventName}</h1>
      <h1 class="cards-date">{formatDate(props.date)}</h1>
      <h1 class="cards-days">{getDaysToEvent()} days</h1>
      <button class="btn-delete" onClick={() => props.handleDelete(props.id)}>Delete</button>
      {/* <button onClick="handleEdit">Edit</button> */}
    </div>
  );
}

export default EventCard;
