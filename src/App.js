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
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:3000/personal')
      .then((res) => res.json()) //returns a promise of a JSON object after recieving HTTP header response
      .then(
        (result) => {
          let events = [];

          result.map(({ _id, eventName, date }) => {
            events.push(
              <EventCard
                id={_id}
                key={_id}
                eventName={eventName}
                date={date}
                handleDelete={this.handleDelete}
              />
            );
          });

          this.setState({ storedEvents: events }); //setState calls render
        },
        (error) => {
          alert('Error Loading Events:' + error);
        }
      );
  }

  handleDelete(id) {
    console.log('detele stuff id, ', id);

    fetch('http://localhost:3000/personal/delete/' + id, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((result) => {
        console.log('Deleted sucessfully', result);

        const tempVar = this.state.storedEvents;
        for (let i = 0; i < tempVar.length; i += 1) {
          if (tempVar[i].props.id == id) {
            tempVar.splice(i, 1);
            break;
          }
        }

        this.setState({ storedEvents: tempVar });

        return result;
      });
  }

  handleEventNameChange(event) {
    console.log('lol', event.target);
    this.setState({ eventName: event.target.value });
  }

  handleEventDateChange(event) {
    console.log('date cahnge', event.target);
    this.setState({
      date: event.target.value,
    });
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
        (data) => {
          const { _id, eventName, date } = data;
          const newEvent = (
            <EventCard
              id={_id}
              key={_id}
              eventName={eventName}
              date={date}
              handleDelete={this.handleDelete}
            />
          );

          const tempVar = this.state.storedEvents;
          tempVar.push(newEvent);

          this.setState({ eventName: '', date: '', storedEvents: tempVar });
        },
        (error) => {
          alert('Error Loading Events:' + error);
        }
      );
    event.preventDefault();
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
          <button onClick={() => this.handleSubmit}>Add New Event</button>
        </form>
        <div>
          <div class="card-container">{this.state.storedEvents}</div>
        </div>
      </div>
    );
  }
}

export default App;
