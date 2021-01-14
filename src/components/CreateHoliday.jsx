// import React, { Component } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// export default class CreateHoliday extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       eventName: '',
//       date: new Date(),
//       events: [],
//     };
//   }

//   componentDidMount() {
//     this.setState({});
//   }

//   eChangeEventName(e) {
//     this.setState({
//       eventName: e.target.value,
//     });
//   }

//   onChangeDate(date) {
//     this.setState({
//       date: date,
//     });
//   }

//   onSubmit(e) {
//     e.preventDefault();

//     const newEvent = {
//       username: this.state.eventName,
//       date: this.state.date,
//     };

// //     console.log(newEvent);

// //     window.location = '/';
// //   }

//   render() {
//     return (
//       <div>
//         <h3>Add New holiday</h3>
//         <form onSubmit={this.onSubmit}>
//           <div className="form-group">
//             <label>Holiday Name: </label>
//             <select
//               ref="userInput"
//               required
//               className="form-control"
//               value={this.state.username}
//               onChange={this.onChangeUsername}
//             >
//               {this.state.users.map(function (user) {
//                 return (
//                   <option key={user} value={user}>
//                     {user}
//                   </option>
//                 );
//               })}
//             </select>
//             <div className="form-group">
//               <label>Date: </label>
//               <div>
//                 <DatePicker
//                   selected={this.state.date}
//                   onChange={this.onChangeDate}
//                 />
//               </div>
//             </div>
//             <div className="form-group">
//               <input
//                 type="submit"
//                 value="Create Exercise Log"
//                 className="btn btn-primary"
//               />
//             </div>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }
