const router = require('express').Router();
const { Redirect } = require('react-router-dom');
const Holiday = require('../models/holidayModel');

//hompage to display holiday events
router.route('/').get((req, res) => {
  Holiday.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json('Error at holiday route: ' + err));
});

//add a new holiday
router.route('/add').post((req, res) => {
  const eventName = req.body.eventName;
  const date = Date.parse(req.body.date);

  const newEvent = new Holiday({
    eventName,
    date,
  });

  newEvent
    .save()
    .then(() => res.json('New holiday added!'))
    .catch(() => res.status(400).json('Error at holiday add route: ' + err));
});

//delete a holiday
router.route('/:id').delete((req, res) => {
  Holiday.findByIdAndDelete(req.params.id).then(() => {
    res
      .json('Holiday deleted!')
      .catch((err) =>
        res.status(400).json('Error at holiday delete route ' + err)
      );
  });
});

module.exports = router;
