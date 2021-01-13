const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const holidaySchema = new Schema(
  {
    eventName: { type: String, required: true },
    date: { type: Date, required: true },
  },
  {
    timestamps: true,
  }
);

const Holiday = mongoose.model('Holiday', holidaySchema);

module.exports = Holiday;
