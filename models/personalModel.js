const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personalSchema = new Schema(
  {
    eventName: { type: 'String', required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Personal = mongoose.model('Personal', personalSchema);

module.exports = Personal;
