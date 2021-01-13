const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workSchema = new Schema(
  {
    eventName: { type: 'String', required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Work = mongoose.model('Work', workSchema);

module.exports = Work;
