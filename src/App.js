import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EventCard from './components/EventCard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { eventName: '', date: '', storedEvents: [] };

    this.handleEventNameChange = this.handleEventNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEventDateChange = this.handleEventDateChange.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3000/personal')
      .then((res) => res.json())
      .then(
        (result) => {
          let events = [];

          result.map(({ eventName, date }) => {
            events.push(<EventCard eventName={eventName} date={date} />);
          });

          this.setState({ storedEvents: events });
        },
        (error) => {
          alert('Error Loading Events:' + error);
        }
      );
  }

  handleEventNameChange(event) {
    this.setState({ eventName: event.target.value });
  }

  handleSubmit(event) {
    fetch('http://localhost:3000/personal/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventName: this.state.eventName,
        date: this.state.date,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert('A new event was added: ' + this.state.eventName);

          const newEvent = (
            <EventCard
              eventName={this.state.eventName}
              date={this.state.date}
            />
          );

          const tempVar = this.state.storedEvents;
          tempVar.push(newEvent);

          this.setState({ storedEvents: tempVar });
        },
        (error) => {
          alert('Error Loading Events:' + error);
        }
      );
    event.preventDefault();
  }

  handleEventDateChange(event) {
    this.setState({
      date: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <h1 id="title">Count-Me-Down</h1>
        <form class="input-form" onSubmit={this.handleSubmit}>
          <label>
            Event Name:
            <input
              type="text"
              value={this.state.eventName}
              onChange={this.handleEventNameChange}
            />
          </label>
          <div>
          <label>
            Event Date: 
            <input
              type="date"
              value={this.state.date}
              onChange={this.handleEventDateChange}
            />
            </label>
          </div>
          <br></br>
          <input type="submit" value="Add New Event" />
        </form>
        <div class="card-container">
          <div>{this.state.storedEvents}</div>
        </div>
      </div>
    );
  }
}

export default App;
